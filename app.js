// Firebase-enabled app.js
console.log('Loading app.js...');

import { auth, db } from './firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

console.log('Firebase modules imported successfully');

// Global current user reference
let currentUser = null;

// User data management with Firebase
class UserData {
    constructor() {
        this.hearts = 3;
        this.streak = 0;
        this.lastLogin = null;
        this.lastCompletionDate = null;
        this.completedToday = false;
        this.briefingsCompleted = [];
        this.maxStreak = 0;
        this.totalDaysPlayed = 0;
        this.distribution = { 1: 0, 3: 0, 5: 0 };
        this.difficultyLevel = null;
        this.displayName = '';
        this.unsubscribe = null;
    }

    // Load data from Firestore with real-time updates
    async loadFromFirebase(userId) {
        try {
            const userDocRef = doc(db, 'users', userId);

            // Set up real-time listener
            this.unsubscribe = onSnapshot(userDocRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    this.hearts = data.hearts || 3;
                    this.streak = data.streak || 0;
                    this.lastLogin = data.lastLogin || null;
                    this.lastCompletionDate = data.lastCompletionDate || null;
                    this.completedToday = data.completedToday || false;
                    this.briefingsCompleted = data.briefingsCompleted || [];
                    this.maxStreak = data.maxStreak || 0;
                    this.totalDaysPlayed = data.totalDaysPlayed || 0;
                    this.distribution = data.distribution || { 1: 0, 3: 0, 5: 0 };
                    this.difficultyLevel = data.difficultyLevel || null;
                    this.displayName = data.displayName || '';

                    // Trivial localStorage backup
                    this.backupToLocalStorage();

                    // Update UI
                    updateUserStats();
                } else {
                    // Create new user document with defaults
                    this.createUserDocument(userId);
                }
            });

            await this.checkDailyLogin(userId);
        } catch (error) {
            console.error('Error loading user data:', error);
            // Fallback to localStorage
            this.loadFromLocalStorage();
        }
    }

    // Create initial user document in Firestore
    async createUserDocument(userId) {
        try {
            const userDocRef = doc(db, 'users', userId);
            await setDoc(userDocRef, {
                hearts: 3,
                streak: 0,
                lastLogin: new Date().toDateString(),
                lastCompletionDate: null,
                completedToday: false,
                briefingsCompleted: [],
                maxStreak: 0,
                totalDaysPlayed: 0,
                distribution: { 1: 0, 3: 0, 5: 0 },
                difficultyLevel: null,
                displayName: currentUser?.displayName || '',
                email: currentUser?.email || '',
                createdAt: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error creating user document:', error);
        }
    }

    // Save to Firestore
    async saveToFirebase(userId) {
        if (!userId) return;

        try {
            const userDocRef = doc(db, 'users', userId);
            await updateDoc(userDocRef, {
                hearts: this.hearts,
                streak: this.streak,
                lastLogin: this.lastLogin,
                lastCompletionDate: this.lastCompletionDate,
                completedToday: this.completedToday,
                briefingsCompleted: this.briefingsCompleted,
                maxStreak: this.maxStreak,
                totalDaysPlayed: this.totalDaysPlayed,
                distribution: this.distribution,
                difficultyLevel: this.difficultyLevel,
                displayName: this.displayName
            });

            // Trivial localStorage backup
            this.backupToLocalStorage();
        } catch (error) {
            console.error('Error saving to Firestore:', error);
        }
    }

    // Fallback: Load from localStorage (for offline/guests)
    loadFromLocalStorage() {
        const data = localStorage.getItem('pastport_user');
        if (data) {
            const parsed = JSON.parse(data);
            this.hearts = parsed.hearts || 3;
            this.streak = parsed.streak || 0;
            this.lastLogin = parsed.lastLogin || null;
            this.lastCompletionDate = parsed.lastCompletionDate || null;
            this.completedToday = parsed.completedToday || false;
            this.briefingsCompleted = parsed.briefingsCompleted || [];
            this.maxStreak = parsed.maxStreak || 0;
            this.totalDaysPlayed = parsed.totalDaysPlayed || 0;
            this.distribution = parsed.distribution || { 1: 0, 3: 0, 5: 0 };
            this.difficultyLevel = parsed.difficultyLevel || null;
        }
        this.checkDailyLogin(null);
        updateUserStats();
    }

    // Trivial localStorage backup (not primary storage)
    backupToLocalStorage() {
        const data = {
            hearts: this.hearts,
            streak: this.streak,
            lastLogin: this.lastLogin,
            lastCompletionDate: this.lastCompletionDate,
            completedToday: this.completedToday,
            briefingsCompleted: this.briefingsCompleted,
            maxStreak: this.maxStreak,
            totalDaysPlayed: this.totalDaysPlayed,
            distribution: this.distribution,
            difficultyLevel: this.difficultyLevel
        };
        localStorage.setItem('pastport_user', JSON.stringify(data));
    }

    setDifficultyLevel(level) {
        this.difficultyLevel = level;
        if (currentUser) {
            this.saveToFirebase(currentUser.uid);
        } else {
            this.backupToLocalStorage();
        }
    }

    async checkDailyLogin(userId) {
        const today = new Date().toDateString();

        if (this.lastLogin !== today) {
            this.lastLogin = today;
            this.completedToday = false;
            this.hearts = Math.min(this.hearts + 1, 3);

            if (userId) {
                await this.saveToFirebase(userId);
            } else {
                this.backupToLocalStorage();
            }
        }
    }

    animateStreak() {
        const streakIcon = document.querySelector('.streak-icon');
        if (streakIcon) {
            streakIcon.classList.add('celebrating');
            this.createStreakParticles(streakIcon);
            setTimeout(() => {
                streakIcon.classList.remove('celebrating');
            }, 600);
        }
    }

    createStreakParticles(element) {
        const particles = ['✨', '🔥', '⭐', '💫'];
        const container = element.closest('.stat');

        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.className = 'streak-particle';
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];

            const angle = (Math.PI * 2 * i) / 6;
            const distance = 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);

            container.appendChild(particle);

            setTimeout(() => particle.remove(), 1000);
        }
    }

    useHeart() {
        if (this.hearts > 0) {
            this.hearts--;
            if (currentUser) {
                this.saveToFirebase(currentUser.uid);
            } else {
                this.backupToLocalStorage();
            }
            return true;
        }
        return false;
    }

    completeDay(briefingCount) {
        if (![1, 3, 5].includes(briefingCount)) {
            return;
        }

        const today = new Date().toDateString();

        if (this.completedToday) {
            return;
        }

        this.completedToday = true;
        let streakIncreased = false;

        if (this.lastCompletionDate) {
            const lastCompletionDate = new Date(this.lastCompletionDate);
            const todayDate = new Date(today);
            const diffTime = Math.abs(todayDate - lastCompletionDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                this.streak++;
                streakIncreased = true;
                if (this.streak > this.maxStreak) {
                    this.maxStreak = this.streak;
                }
            } else if (diffDays > 1) {
                this.streak = 1;
                this.maxStreak = Math.max(this.maxStreak, 1);
            }
        } else {
            this.streak = 1;
            this.maxStreak = 1;
            streakIncreased = true;
        }

        this.lastCompletionDate = today;
        this.totalDaysPlayed++;

        if (currentUser) {
            this.saveToFirebase(currentUser.uid);
        } else {
            this.backupToLocalStorage();
        }

        if (streakIncreased) {
            setTimeout(() => this.animateStreak(), 500);
        }
    }

    hasCompletedBriefing(briefingId) {
        return this.briefingsCompleted.includes(briefingId);
    }

    markBriefingComplete(briefingId) {
        if (!this.briefingsCompleted.includes(briefingId)) {
            this.briefingsCompleted.push(briefingId);
            if (currentUser) {
                this.saveToFirebase(currentUser.uid);
            } else {
                this.backupToLocalStorage();
            }
        }
    }

    stopListening() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}

// Initialize userData
const userData = new UserData();

// Make userData globally available
window.userData = userData;

console.log('UserData initialized:', userData);

// Initialize with localStorage first (synchronous)
userData.loadFromLocalStorage();

// Listen for auth state changes
onAuthStateChanged(auth, async (user) => {
    try {
        currentUser = user;
        console.log('Auth state changed. User:', user ? user.email : 'null');

        if (user) {
            // User is signed in - load from Firebase
            console.log('User signed in:', user.email);
            await userData.loadFromFirebase(user.uid);
        } else {
            // User is signed out - use localStorage
            console.log('No user signed in, using localStorage');
            userData.stopListening();
            userData.loadFromLocalStorage();
        }
    } catch (err) {
        console.error('Auth state change error:', err);
    }
});

function updateUserStats() {
    const streakElement = document.getElementById('streak');
    const heartsElement = document.getElementById('hearts');

    if (streakElement) {
        streakElement.textContent = userData.streak;
    }

    if (heartsElement) {
        heartsElement.textContent = userData.hearts;
    }
}

function getOnThisDayEvent() {
    const today = new Date();
    const monthIndex = today.getMonth(); // 0-11
    const day = today.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[monthIndex];

    // Comprehensive database of "On This Day" events for American history
    const events = {
        // January (31 events)
        "0-1": "President Abraham Lincoln signs the Emancipation Proclamation (1863)",
        "0-2": "Georgia becomes the fourth state to ratify the U.S. Constitution (1788)",
        "0-3": "General Washington's army defeats the British at the Battle of Princeton (1777)",
        "0-4": "Utah is admitted as the 45th state (1896)",
        "0-5": "Construction begins on the Golden Gate Bridge (1933)",
        "0-6": "New Mexico is admitted as the 47th state (1912)",
        "0-7": "The first U.S. presidential election is held (1789)",
        "0-8": "The Battle of New Orleans occurs, Andrew Jackson defeats the British (1815)",
        "0-9": "Connecticut becomes the fifth state to ratify the Constitution (1788)",
        "0-10": "Thomas Paine publishes 'Common Sense' (1776)",
        "0-11": "U.S. Surgeon General releases report linking smoking to cancer (1964)",
        "0-12": "Congress authorizes military force against Iraq, beginning the Gulf War (1991)",
        "0-13": "The first public radio broadcast is made in the United States (1910)",
        "0-14": "The Treaty of Paris is ratified, ending the Revolutionary War (1784)",
        "0-15": "Martin Luther King Jr. is born in Atlanta, Georgia (1929)",
        "0-16": "The 18th Amendment is ratified, beginning Prohibition (1919)",
        "0-17": "Benjamin Franklin is born in Boston (1706)",
        "0-18": "Eugene Ely lands an airplane on a ship for the first time (1911)",
        "0-19": "Robert E. Lee is born in Virginia (1807)",
        "0-20": "John F. Kennedy is inaugurated as the 35th President (1961)",
        "0-21": "The USS Nautilus, first nuclear-powered submarine, is launched (1954)",
        "0-22": "The Supreme Court rules in Roe v. Wade (1973)",
        "0-23": "Elizabeth Blackwell becomes the first woman to receive a medical degree in the U.S. (1849)",
        "0-24": "Gold is discovered at Sutter's Mill, sparking the California Gold Rush (1848)",
        "0-25": "Nellie Bly completes her journey around the world in 72 days (1890)",
        "0-26": "Michigan is admitted as the 26th state (1837)",
        "0-27": "Apollo 1 fire kills astronauts Grissom, White, and Chaffee (1967)",
        "0-28": "The Space Shuttle Challenger disaster kills all seven crew members (1986)",
        "0-29": "Kansas is admitted as the 34th state (1861)",
        "0-30": "The Tet Offensive begins during the Vietnam War (1968)",
        "0-31": "The House passes the 13th Amendment, abolishing slavery (1865)",

        // February (29 events)
        "1-1": "Four students stage a sit-in at a segregated Woolworth's in Greensboro, NC (1960)",
        "1-2": "The Treaty of Guadalupe Hidalgo ends the Mexican-American War (1848)",
        "1-3": "The 15th Amendment is ratified, granting African American men the right to vote (1870)",
        "1-4": "George Washington is unanimously elected first President (1789)",
        "1-5": "The Immigration Act of 1917 is passed (1917)",
        "1-6": "Massachusetts becomes the sixth state to ratify the Constitution (1788)",
        "1-7": "The 'Double V Campaign' gains momentum during WWII (1942)",
        "1-8": "The Boy Scouts of America is incorporated (1910)",
        "1-9": "The House elects John Quincy Adams as President (1825)",
        "1-10": "The 25th Amendment is ratified, clarifying presidential succession (1967)",
        "1-11": "Nelson Mandela is released from prison (1990)",
        "1-12": "Abraham Lincoln is born in Hodgenville, Kentucky (1809)",
        "1-13": "Bruno Hauptmann is found guilty in the Lindbergh baby kidnapping (1935)",
        "1-14": "Oregon is admitted as the 33rd state (1859)",
        "1-15": "The USS Maine explodes in Havana Harbor, leading to the Spanish-American War (1898)",
        "1-16": "The first 911 emergency system is inaugurated in Alabama (1968)",
        "1-17": "Thomas Jefferson is elected President by the House (1801)",
        "1-18": "Pluto is discovered by Clyde Tombaugh (1930)",
        "1-19": "FDR signs Executive Order 9066, leading to Japanese American internment (1942)",
        "1-20": "John Glenn becomes the first American to orbit Earth (1962)",
        "1-21": "Malcolm X is assassinated in New York City (1965)",
        "1-22": "George Washington is born in Westmoreland County, Virginia (1732)",
        "1-23": "Marines raise the flag on Mount Suribachi during the Battle of Iwo Jima (1945)",
        "1-24": "Andrew Johnson becomes the first president to be impeached (1868)",
        "1-25": "Hiram Revels becomes the first African American U.S. Senator (1870)",
        "1-26": "The World Trade Center is bombed, killing six (1993)",
        "1-27": "The 22nd Amendment limits presidents to two terms (1951)",
        "1-28": "The Republican Party is founded in Ripon, Wisconsin (1854)",
        "1-29": "French and Native American forces attack Deerfield, Massachusetts (1704)",

        // March (31 events)
        "2-1": "The Articles of Confederation are ratified (1781)",
        "2-2": "Rutherford B. Hayes wins the disputed 1876 election (1877)",
        "2-3": "'The Star-Spangled Banner' becomes the national anthem (1931)",
        "2-4": "The U.S. Constitution goes into effect (1789)",
        "2-5": "The Boston Massacre occurs (1770)",
        "2-6": "The Alamo falls to Mexican forces (1836)",
        "2-7": "'Bloody Sunday' in Selma, Alabama (1965)",
        "2-8": "The New York Stock Exchange is founded (1817)",
        "2-9": "The ironclad USS Monitor is commissioned (1862)",
        "2-10": "Alexander Graham Bell makes the first telephone call (1876)",
        "2-11": "Johnny Appleseed dies in Fort Wayne, Indiana (1845)",
        "2-12": "The Girl Scouts of the USA is founded (1912)",
        "2-13": "Eli Whitney receives a patent for the cotton gin (1794)",
        "2-14": "Eli Whitney patents the cotton gin, revolutionizing the South (1794)",
        "2-15": "Maine is admitted as the 23rd state (1820)",
        "2-16": "West Point Military Academy is established (1802)",
        "2-17": "The National Gallery of Art is established (1941)",
        "2-18": "Grover Cleveland is the first president to appear on film (1895)",
        "2-19": "William Jennings Bryan gives his 'Cross of Gold' speech (1896)",
        "2-20": "Harriet Beecher Stowe publishes 'Uncle Tom's Cabin' (1852)",
        "2-21": "Martin Luther King Jr. leads the Selma to Montgomery march (1965)",
        "2-22": "The Stamp Act is repealed by British Parliament (1765)",
        "2-23": "Patrick Henry gives his 'Give me liberty, or give me death!' speech (1775)",
        "2-24": "The Supreme Court establishes judicial review in Marbury v. Madison (1803)",
        "2-25": "The Triangle Shirtwaist Factory fire kills 146 workers (1911)",
        "2-26": "The Camp David Accords are signed (1979)",
        "2-27": "The War Powers Act is passed over President Wilson's veto (1917)",
        "2-28": "The Three Mile Island nuclear accident occurs (1979)",
        "2-29": "The Transcontinental Railroad reaches Promontory Summit (1869)",
        "2-30": "President Reagan is shot by John Hinckley Jr. (1981)",
        "2-31": "President Johnson announces he won't seek reelection (1968)",

        // April (30 events)
        "3-1": "The U.S. Mint is established (1792)",
        "3-2": "President Wilson asks Congress to declare war on Germany (1917)",
        "3-3": "The Pony Express begins mail delivery (1860)",
        "3-4": "Martin Luther King Jr. is assassinated in Memphis (1968)",
        "3-5": "Booker T. Washington is born (1856)",
        "3-6": "The U.S. declares war on Germany, entering WWI (1917)",
        "3-7": "The World Health Organization is established (1948)",
        "3-8": "Hank Aaron hits his 715th home run, breaking Babe Ruth's record (1974)",
        "3-9": "Robert E. Lee surrenders at Appomattox, ending the Civil War (1865)",
        "3-10": "The U.S. Patent Office opens (1790)",
        "3-11": "President Truman relieves General MacArthur of command in Korea (1951)",
        "3-12": "The Civil War begins at Fort Sumter (1861)",
        "3-13": "Thomas Jefferson is born (1743)",
        "3-14": "President Lincoln is shot at Ford's Theatre (1865)",
        "3-15": "President Lincoln dies (1865)",
        "3-16": "Jackie Robinson breaks baseball's color barrier (1947)",
        "3-17": "J.P. Morgan rescues the U.S. gold supply (1895)",
        "3-18": "Paul Revere begins his midnight ride (1775)",
        "3-19": "The Battles of Lexington and Concord start the Revolutionary War (1775)",
        "3-20": "Apollo 16 lands on the Moon (1972)",
        "3-21": "Sam Houston defeats Santa Anna at the Battle of San Jacinto (1836)",
        "3-22": "Oklahoma Land Run begins (1889)",
        "3-23": "The movie palace era begins with the Strand Theatre opening (1914)",
        "3-24": "The Library of Congress is established (1800)",
        "3-25": "U.S. troops enter Germany in WWII (1945)",
        "3-26": "English colonists make landfall at Cape Henry, Virginia (1607)",
        "3-27": "The first long-distance phone call is made (1884)",
        "3-28": "Maryland ratifies the Constitution (1788)",
        "3-29": "Zipper is patented by Gideon Sundback (1913)",
        "3-30": "The Louisiana Purchase doubles the size of the nation (1803)",

        // May (31 events)
        "4-1": "The Empire State Building is dedicated (1931)",
        "4-2": "The first U.S. postage stamps are issued (1847)",
        "4-3": "The first medical school in America opens (1765)",
        "4-4": "The Haymarket affair occurs in Chicago (1886)",
        "4-5": "Alan Shepard becomes the first American in space (1961)",
        "4-6": "The Hindenburg catches fire in New Jersey (1937)",
        "4-7": "The Lusitania is sunk by a German U-boat (1915)",
        "4-8": "V-E Day marks the end of WWII in Europe (1945)",
        "4-9": "The first American newspaper comic strip is published (1895)",
        "4-10": "The 'golden spike' completes the Transcontinental Railroad (1869)",
        "4-11": "Irving Berlin's 'God Bless America' is first performed (1938)",
        "4-12": "Florence Nightingale is born (1820)",
        "4-13": "Jamestown, the first permanent English settlement, is established (1607)",
        "4-14": "Lewis and Clark begin their expedition (1804)",
        "4-15": "The first McDonald's franchise opens (1955)",
        "4-16": "Seward purchases Alaska from Russia (1867)",
        "4-17": "Brown v. Board of Education rules school segregation unconstitutional (1954)",
        "4-18": "Mount St. Helens erupts (1980)",
        "4-19": "Malcolm X is born (1925)",
        "4-20": "Charles Lindbergh takes off for the first solo transatlantic flight (1927)",
        "4-21": "The American Red Cross is founded by Clara Barton (1881)",
        "4-22": "The first Earth Day is celebrated (1970)",
        "4-23": "The New York Public Library is dedicated (1911)",
        "4-24": "The Brooklyn Bridge opens (1883)",
        "4-25": "Rosa Parks is born (1913)",
        "4-26": "The Marquis de Lafayette arrives to help the American Revolution (1777)",
        "4-27": "The Golden Gate Bridge opens (1937)",
        "4-28": "The first U.S. commercial airline flight takes off (1926)",
        "4-29": "JFK is born in Brookline, Massachusetts (1917)",
        "4-30": "The Lincoln Memorial is dedicated (1922)",
        "4-31": "The Empire State Building opens to the public (1931)",

        // June (30 events)
        "5-1": "Kentucky is admitted as the 15th state (1792)",
        "5-2": "Native American citizenship is granted by Congress (1924)",
        "5-3": "Ed White becomes the first American to walk in space (1965)",
        "5-4": "The 19th Amendment is passed by Congress (1919)",
        "5-5": "Robert F. Kennedy is assassinated (1968)",
        "5-6": "D-Day: Allied forces land at Normandy (1944)",
        "5-7": "The Treaty of Versailles is signed, ending WWI (1919)",
        "5-8": "Architect Frank Lloyd Wright is born (1867)",
        "5-9": "The first U.S. Open golf tournament is held (1895)",
        "5-10": "The Voting Rights Act is extended (1982)",
        "5-11": "Congress appoints a committee to draft the Declaration of Independence (1776)",
        "5-12": "Medgar Evers is assassinated (1963)",
        "5-13": "The U.S. declares war on Mexico (1846)",
        "5-14": "Congress adopts the Stars and Stripes as the official flag (1777)",
        "5-15": "Arkansas is admitted as the 25th state (1836)",
        "5-16": "Abraham Lincoln delivers his 'House Divided' speech (1858)",
        "5-17": "The Watergate hearings begin (1973)",
        "5-18": "The War of 1812 begins (1812)",
        "5-19": "Juneteenth: The end of slavery is announced in Texas (1865)",
        "5-20": "West Virginia is admitted as the 35th state (1863)",
        "5-21": "The American Red Cross is incorporated (1881)",
        "5-22": "The Continental Congress authorizes a national currency (1775)",
        "5-23": "William Penn signs a peace treaty with the Lenape tribe (1683)",
        "5-24": "The Battle of Little Bighorn (Custer's Last Stand) occurs (1876)",
        "5-25": "Virginia ratifies the Constitution (1788)",
        "5-26": "The first U.S. troops arrive in France during WWI (1917)",
        "5-27": "The Miranda v. Arizona ruling establishes Miranda rights (1966)",
        "5-28": "The Stonewall Riots begin (1969)",
        "5-29": "The Interstate Highway System is authorized (1956)",
        "5-30": "The Lincoln Memorial is dedicated (1922)",

        // July (31 events)
        "6-1": "The Battle of Gettysburg begins (1863)",
        "6-2": "The Continental Congress votes for independence (1776)",
        "6-3": "George M. Cohan, composer of 'Yankee Doodle Dandy,' is born (1878)",
        "6-4": "The Declaration of Independence is adopted (1776)",
        "6-5": "The Army Corps of Engineers is established (1775)",
        "6-6": "The first drive-in movie theater opens (1933)",
        "6-7": "Hawaii is annexed by the United States (1898)",
        "6-8": "The ice cream sundae is invented (1881)",
        "6-9": "The 14th Amendment is ratified, granting citizenship rights (1868)",
        "6-10": "Wyoming becomes the first state to grant women voting rights (1890)",
        "6-11": "Aaron Burr mortally wounds Alexander Hamilton in a duel (1804)",
        "6-12": "Henry David Thoreau is born (1817)",
        "6-13": "President Ford announces 'no new taxes' (1976)",
        "6-14": "Gerald Ford is born (1913)",
        "6-15": "Georgia O'Keeffe is born (1887)",
        "6-16": "The Trinity nuclear test is conducted (1945)",
        "6-17": "Disneyland opens in Anaheim, California (1955)",
        "6-18": "The War of 1812 is declared by Congress (1812)",
        "6-19": "The Civil Rights Act of 1964 is passed by the Senate (1964)",
        "6-20": "Neil Armstrong and Buzz Aldrin walk on the Moon (1969)",
        "6-21": "The First Battle of Bull Run is fought (1861)",
        "6-22": "The Dred Scott decision is issued (1857)",
        "6-23": "The World Court is established (1921)",
        "6-24": "Amelia Earhart is born (1897)",
        "6-25": "The Korean War begins (1950)",
        "6-26": "New York ratifies the Constitution (1788)",
        "6-27": "The Korean War armistice is signed (1953)",
        "6-28": "The 19th Amendment is proposed to the states (1919)",
        "6-29": "NASA is created (1958)",
        "6-30": "The House of Burgesses, America's first legislature, convenes (1619)",
        "6-31": "The first U.S. patent is issued (1790)",

        // August (31 events)
        "7-1": "Colorado is admitted as the 38th state (1876)",
        "7-2": "The Declaration of Independence is signed by most delegates (1776)",
        "7-3": "Columbus sets sail from Spain (1492)",
        "7-4": "The Coast Guard is established (1790)",
        "7-5": "Neil Armstrong is born (1930)",
        "7-6": "The atomic bomb is dropped on Hiroshima (1945)",
        "7-7": "The Gulf of Tonkin Resolution is passed (1964)",
        "7-8": "President Nixon announces his resignation (1974)",
        "7-9": "The atomic bomb is dropped on Nagasaki (1945)",
        "7-10": "Missouri is admitted as the 24th state (1821)",
        "7-11": "Alex Haley, author of 'Roots,' is born (1921)",
        "7-12": "Thomas Edison is born (1847)",
        "7-13": "Construction of the Berlin Wall begins (1961)",
        "7-14": "The Social Security Act is signed into law (1935)",
        "7-15": "Japan announces its surrender, ending WWII (1945)",
        "7-16": "Babe Ruth hits his 700th home run (1934)",
        "7-17": "Davy Crockett is born (1786)",
        "7-18": "The 19th Amendment is ratified, granting women the vote (1920)",
        "7-19": "Bill Clinton is born (1946)",
        "7-20": "The first enslaved Africans arrive in Virginia (1619)",
        "7-21": "Hawaii becomes the 50th state (1959)",
        "7-22": "The Lincoln-Douglas debates begin (1858)",
        "7-23": "Gene Kelly is born (1912)",
        "7-24": "British forces burn Washington, D.C. (1814)",
        "7-25": "The first transatlantic cable is completed (1858)",
        "7-26": "The 19th Amendment is certified (1920)",
        "7-27": "The Department of State is established (1789)",
        "7-28": "Martin Luther King Jr. delivers his 'I Have a Dream' speech (1963)",
        "7-29": "Hurricane Katrina devastates New Orleans (2005)",
        "7-30": "The Social Security Act goes into effect (1935)",
        "7-31": "The first U.S. patent is issued (1790)",

        // September (30 events)
        "8-1": "Germany invades Poland, starting WWII (1939)",
        "8-2": "Japan formally surrenders aboard the USS Missouri (1945)",
        "8-3": "The Treaty of Paris ends the Revolutionary War (1783)",
        "8-4": "Los Angeles is founded by Spanish settlers (1781)",
        "8-5": "The First Continental Congress convenes (1774)",
        "8-6": "President McKinley is shot (1901)",
        "8-7": "The Boulder Dam (Hoover Dam) begins generating power (1936)",
        "8-8": "The Pledge of Allegiance is first published (1892)",
        "8-9": "California is admitted as the 31st state (1850)",
        "8-10": "The Sewing Machine is patented (1846)",
        "8-11": "Terrorists attack the World Trade Center and Pentagon (2001)",
        "8-12": "Francis Scott Key writes 'The Star-Spangled Banner' (1814)",
        "8-13": "The Compromise of 1850 is passed (1850)",
        "8-14": "The Star-Spangled Banner is written (1814)",
        "8-15": "The Pledge of Allegiance is first published (1892)",
        "8-16": "The Mayflower departs from England (1620)",
        "8-17": "The U.S. Constitution is signed (1787)",
        "8-18": "George Washington is born (1793)",
        "8-19": "President Washington's Farewell Address is published (1796)",
        "8-20": "The Billie Jean King vs Bobby Riggs tennis match occurs (1973)",
        "8-21": "Benedict Arnold begins committing treason (1780)",
        "8-22": "The preliminary Emancipation Proclamation is issued (1862)",
        "8-23": "Lewis and Clark reach the Pacific Ocean (1806)",
        "8-24": "Federal troops enforce school desegregation in Little Rock (1957)",
        "8-25": "The Bill of Rights is proposed by Congress (1789)",
        "8-26": "The first Kennedy-Nixon debate is held (1960)",
        "8-27": "The first oil well is drilled in Pennsylvania (1859)",
        "8-28": "The March on Washington takes place (1963)",
        "8-29": "The first telephone answering machine is patented (1898)",
        "8-30": "Thurgood Marshall is confirmed as the first Black Supreme Court Justice (1967)",

        // October (31 events)
        "9-1": "Yosemite National Park is established (1890)",
        "9-2": "Thurgood Marshall is sworn in as Supreme Court Justice (1967)",
        "9-3": "The first transcontinental highway opens (1913)",
        "9-4": "Sputnik launches, beginning the Space Race (1957)",
        "9-5": "Tecumseh, Shawnee leader, is born (1768)",
        "9-6": "The first talking movie, 'The Jazz Singer,' premieres (1927)",
        "9-7": "The Stamp Act Congress convenes (1765)",
        "9-8": "The Great Chicago Fire begins (1871)",
        "9-9": "John Lennon is born (1940)",
        "9-10": "The U.S. Naval Academy opens (1845)",
        "9-11": "Eleanor Roosevelt is born (1884)",
        "9-12": "Columbus first sights land in the Americas (1492)",
        "9-13": "The cornerstone of the White House is laid (1792)",
        "9-14": "Chuck Yeager breaks the sound barrier (1947)",
        "9-15": "Wall Street is born at the Buttonwood Agreement (1792)",
        "9-16": "John Brown raids Harpers Ferry (1859)",
        "9-17": "The United Nations is established (1945)",
        "9-18": "The U.S. takes possession of Alaska (1867)",
        "9-19": "Cornwallis surrenders at Yorktown (1781)",
        "9-20": "Harriet Tubman dies (1913)",
        "9-21": "The first issue of the Washington Post is published (1877)",
        "9-22": "President Kennedy addresses the Cuban Missile Crisis (1962)",
        "9-23": "The Lewis and Clark Expedition ends (1806)",
        "9-24": "The first U.S. transcontinental airmail service begins (1920)",
        "9-25": "The Bill of Rights is proposed by Congress (1789)",
        "9-26": "The first Kennedy-Nixon debate airs on TV (1960)",
        "9-27": "The first steam locomotive operates in the U.S. (1825)",
        "9-28": "The Pledge of Allegiance is first recited in schools (1892)",
        "9-29": "'Black Tuesday' triggers the Great Depression (1929)",
        "9-30": "The Munich Agreement is signed (1938)",
        "9-31": "Nevada is admitted as the 36th state (1864)",

        // November (30 events)
        "10-1": "John Adams becomes the first president to live in the White House (1800)",
        "10-2": "Warren G. Harding is elected president (1920)",
        "10-3": "Sandwich Islands (Hawaii) are discovered by Europeans (1778)",
        "10-4": "Barack Obama is elected President (2008)",
        "10-5": "FDR is elected to his first term (1932)",
        "10-6": "Abraham Lincoln is elected President (1860)",
        "10-7": "The first election in which women could vote nationally takes place (1920)",
        "10-8": "Montana is admitted as the 41st state (1889)",
        "10-9": "The Berlin Wall falls (1989)",
        "10-10": "The U.S. Marine Corps is established (1775)",
        "10-11": "Veterans Day (originally Armistice Day) is observed (1918)",
        "10-12": "Elizabeth Cady Stanton is born (1815)",
        "10-13": "The Holland Tunnel opens in New York City (1927)",
        "10-14": "Nellie Bly begins her trip around the world (1889)",
        "10-15": "The first U.S. draft lottery is held (1969)",
        "10-16": "Oklahoma is admitted as the 46th state (1907)",
        "10-17": "Congress passes the Stamp Act (1765)",
        "10-18": "Mickey Mouse makes his debut in 'Steamboat Willie' (1928)",
        "10-19": "Abraham Lincoln delivers the Gettysburg Address (1863)",
        "10-20": "Robert Kennedy is born (1925)",
        "10-21": "The Mayflower Compact is signed (1620)",
        "10-22": "President Kennedy is assassinated (1963)",
        "10-23": "The first jukebox is installed (1889)",
        "10-24": "The Origin of Species is published (1859)",
        "10-25": "The last British troops leave New York City (1783)",
        "10-26": "President Washington proclaims the first Thanksgiving (1789)",
        "10-27": "The first Macy's Thanksgiving Day Parade is held (1924)",
        "10-28": "The first skywriting advertisement appears (1922)",
        "10-29": "The first Army-Navy football game is played (1890)",
        "10-30": "Mark Twain is born (1835)",

        // December (31 events)
        "11-1": "Rosa Parks refuses to give up her seat (1955)",
        "11-2": "The Monroe Doctrine is proclaimed (1823)",
        "11-3": "Illinois is admitted as the 21st state (1818)",
        "11-4": "Washington's Farewell Address to his officers (1783)",
        "11-5": "Prohibition ends with the 21st Amendment (1933)",
        "11-6": "The 13th Amendment abolishes slavery (1865)",
        "11-7": "Pearl Harbor is attacked, bringing the U.S. into WWII (1941)",
        "11-8": "The American Federation of Labor is founded (1886)",
        "11-9": "The first Christmas Seals are sold to fight tuberculosis (1907)",
        "11-10": "Mississippi is admitted as the 20th state (1817)",
        "11-11": "Indiana is admitted as the 19th state (1816)",
        "11-12": "Pennsylvania is admitted as the second state (1787)",
        "11-13": "The Lincoln Memorial is dedicated (1922)",
        "11-14": "Alabama is admitted as the 22nd state (1819)",
        "11-15": "The Bill of Rights is ratified (1791)",
        "11-16": "The Boston Tea Party occurs (1773)",
        "11-17": "The Wright Brothers achieve powered flight (1903)",
        "11-18": "New Jersey ratifies the Constitution (1787)",
        "11-19": "'A Christmas Carol' is published by Charles Dickens (1843)",
        "11-20": "The Louisiana Purchase is completed (1803)",
        "11-21": "The Pilgrims land at Plymouth Rock (1620)",
        "11-22": "The first American YMCA opens (1851)",
        "11-23": "The Federal Reserve System is created (1913)",
        "11-24": "The first successful human-to-human heart transplant (1967)",
        "11-25": "Washington crosses the Delaware River (1776)",
        "11-26": "Washington's forces win the Battle of Trenton (1776)",
        "11-27": "Radio City Music Hall opens in New York City (1932)",
        "11-28": "Iowa is admitted as the 29th state (1846)",
        "11-29": "Texas is admitted as the 28th state (1845)",
        "11-30": "The Gadsden Purchase is completed (1853)",
        "11-31": "Ellis Island closes after processing millions of immigrants (1954)"
    };

    const key = `${monthIndex}-${day}`;
    const event = events[key] || "A significant event in American history occurred on this day.";

    return {
        month,
        day,
        event
    };
}

function initHomePage() {
    updateUserStats();

    const briefingOptions = document.querySelectorAll('.briefing-option');
    const startButton = document.getElementById('startButton');
    let selectedCount = 0;

    briefingOptions.forEach(option => {
        option.addEventListener('click', () => {
            briefingOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedCount = parseInt(option.dataset.count);
            startButton.disabled = false;
        });
    });

    startButton.addEventListener('click', () => {
        try {
            console.log('Start button clicked. Selected count:', selectedCount);
            if (selectedCount > 0) {
                const hasSeenAccountPrompt = localStorage.getItem('pastport_account_prompt_seen');
                console.log('Has seen account prompt:', hasSeenAccountPrompt);
                console.log('User difficulty level:', userData.difficultyLevel);

                if (!hasSeenAccountPrompt) {
                    showAccountPrompt(selectedCount);
                } else if (!userData.difficultyLevel) {
                    showDifficultyModal(selectedCount);
                } else {
                    startBriefing(selectedCount);
                }
            }
        } catch (error) {
            console.error('Error in start button click:', error);
            alert('An error occurred. Please refresh the page and try again.');
        }
    });

    // Set up sign-in modal close button permanently
    const signInModal = document.getElementById('signInModal');
    const closeSignInBtn = document.getElementById('closeSignIn');
    if (closeSignInBtn && signInModal) {
        closeSignInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            signInModal.classList.add('hidden');
        });

        // Close on background click
        signInModal.addEventListener('click', (e) => {
            if (e.target === signInModal) {
                signInModal.classList.add('hidden');
            }
        });
    }

    // Set up "How It Works" toggle
    const howItWorksToggle = document.getElementById('howItWorksToggle');
    const howItWorksExpanded = document.querySelector('.how-it-works-expanded');
    if (howItWorksToggle && howItWorksExpanded) {
        howItWorksToggle.addEventListener('click', () => {
            const isHidden = howItWorksExpanded.classList.contains('hidden');
            if (isHidden) {
                howItWorksExpanded.classList.remove('hidden');
                howItWorksToggle.textContent = 'Show less ↑';
            } else {
                howItWorksExpanded.classList.add('hidden');
                howItWorksToggle.textContent = 'Learn more ↓';
            }
        });
    }

    function showAccountPrompt(briefingCount) {
        const accountPromptModal = document.getElementById('accountPromptModal');
        const signUpModal = document.getElementById('signUpModal');

        accountPromptModal.classList.remove('hidden');

        document.getElementById('createAccountBtn').addEventListener('click', () => {
            accountPromptModal.classList.add('hidden');
            signUpModal.classList.remove('hidden');
        }, { once: true });

        document.getElementById('continueWithoutAccountBtn').addEventListener('click', () => {
            localStorage.setItem('pastport_account_prompt_seen', 'true');
            accountPromptModal.classList.add('hidden');
            if (!userData.difficultyLevel) {
                showDifficultyModal(briefingCount);
            } else {
                startBriefing(briefingCount);
            }
        }, { once: true });

        // Handle sign-up form
        const signUpForm = document.getElementById('signUpForm');
        const closeSignUp = document.getElementById('closeSignUp');

        if (closeSignUp) {
            closeSignUp.addEventListener('click', () => {
                signUpModal.classList.add('hidden');
                accountPromptModal.classList.remove('hidden');
            }, { once: true });
        }

        signUpForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupPasswordConfirm').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            try {
                // Create user with Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Update display name
                await updateProfile(user, {
                    displayName: name
                });

                // Create user document in Firestore
                const userDocRef = doc(db, 'users', user.uid);
                await setDoc(userDocRef, {
                    displayName: name,
                    email: email,
                    hearts: 3,
                    streak: 0,
                    lastLogin: new Date().toDateString(),
                    lastCompletionDate: null,
                    completedToday: false,
                    briefingsCompleted: [],
                    maxStreak: 0,
                    totalDaysPlayed: 0,
                    distribution: { 1: 0, 3: 0, 5: 0 },
                    difficultyLevel: null,
                    createdAt: new Date().toISOString()
                });

                localStorage.setItem('pastport_account_prompt_seen', 'true');
                signUpModal.classList.add('hidden');

                if (!userData.difficultyLevel) {
                    showDifficultyModal(briefingCount);
                } else {
                    startBriefing(briefingCount);
                }
            } catch (error) {
                console.error('Sign up error:', error);
                let message = 'Failed to create account.';

                if (error.code === 'auth/email-already-in-use') {
                    message = 'This email is already in use.';
                } else if (error.code === 'auth/weak-password') {
                    message = 'Password should be at least 6 characters.';
                } else if (error.code === 'auth/invalid-email') {
                    message = 'Invalid email address.';
                }

                alert(message);
            }
        }, { once: true });

        // Handle switching to sign-in modal from sign-up
        const switchToSignIn = document.getElementById('switchToSignIn');
        if (switchToSignIn) {
            switchToSignIn.addEventListener('click', (e) => {
                e.preventDefault();
                signUpModal.classList.add('hidden');
                showSignInModal(briefingCount);
            }, { once: true });
        }
    }

    function showSignInModal(briefingCount) {
        const signInModal = document.getElementById('signInModal');
        const signInForm = document.getElementById('signInForm');

        signInModal.classList.remove('hidden');

        signInForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;

            try {
                // Sign in with Firebase Authentication
                await signInWithEmailAndPassword(auth, email, password);

                localStorage.setItem('pastport_account_prompt_seen', 'true');
                signInModal.classList.add('hidden');

                if (!userData.difficultyLevel) {
                    showDifficultyModal(briefingCount);
                } else {
                    startBriefing(briefingCount);
                }
            } catch (error) {
                console.error('Sign in error:', error);
                let message = 'Failed to sign in.';

                if (error.code === 'auth/user-not-found') {
                    message = 'No account found with this email.';
                } else if (error.code === 'auth/wrong-password') {
                    message = 'Incorrect password.';
                } else if (error.code === 'auth/invalid-email') {
                    message = 'Invalid email address.';
                }

                alert(message);
            }
        }, { once: true });

        // Handle switching to sign-up modal from sign-in
        const switchToSignUp = document.getElementById('switchToSignUp');
        if (switchToSignUp) {
            switchToSignUp.addEventListener('click', (e) => {
                e.preventDefault();
                signInModal.classList.add('hidden');
                document.getElementById('signUpModal').classList.remove('hidden');
            }, { once: true });
        }

        // Handle forgot password
        const forgotPassword = document.getElementById('forgotPassword');
        if (forgotPassword) {
            forgotPassword.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Password reset functionality would be implemented with a backend service. For now, please contact support or create a new account.');
            }, { once: true });
        }
    }

    function showDifficultyModal(briefingCount) {
        const difficultyModal = document.getElementById('difficultyModal');
        difficultyModal.classList.remove('hidden');

        const difficultyCards = difficultyModal.querySelectorAll('.difficulty-card');
        difficultyCards.forEach(card => {
            card.addEventListener('click', () => {
                const level = card.dataset.level;
                userData.setDifficultyLevel(level);
                difficultyModal.classList.add('hidden');
                startBriefing(briefingCount);
            }, { once: true });
        });
    }

    function startBriefing(count) {
        console.log('Starting briefing with count:', count);
        userData.distribution[count]++;
        if (currentUser) {
            userData.saveToFirebase(currentUser.uid);
        } else {
            userData.backupToLocalStorage();
        }
        // Save briefing count to sessionStorage for briefing.js
        sessionStorage.setItem('briefingCount', count);
        window.location.href = `briefing.html?count=${count}`;
    }

    const statsButton = document.getElementById('statsButton');
    const statsModal = document.getElementById('statsModal');
    const closeStats = document.getElementById('closeStats');

    if (statsButton && statsModal) {
        statsButton.addEventListener('click', () => {
            statsModal.classList.remove('hidden');
            updateStatsModal();
        });

        if (closeStats) {
            closeStats.addEventListener('click', () => {
                statsModal.classList.add('hidden');
            });
        }

        statsModal.addEventListener('click', (e) => {
            if (e.target === statsModal) {
                statsModal.classList.add('hidden');
            }
        });
    }

    function updateStatsModal() {
        document.getElementById('totalPlayed').textContent = userData.totalDaysPlayed;
        document.getElementById('totalBriefings').textContent = userData.briefingsCompleted.length;
        document.getElementById('currentStreak').textContent = userData.streak;
        document.getElementById('maxStreak').textContent = userData.maxStreak;

        const total = userData.distribution[1] + userData.distribution[3] + userData.distribution[5];
        if (total > 0) {
            const pct1 = (userData.distribution[1] / total) * 100;
            const pct3 = (userData.distribution[3] / total) * 100;
            const pct5 = (userData.distribution[5] / total) * 100;

            document.getElementById('dist1').style.width = pct1 + '%';
            document.getElementById('dist3').style.width = pct3 + '%';
            document.getElementById('dist5').style.width = pct5 + '%';

            document.getElementById('dist1').querySelector('span').textContent = userData.distribution[1];
            document.getElementById('dist3').querySelector('span').textContent = userData.distribution[3];
            document.getElementById('dist5').querySelector('span').textContent = userData.distribution[5];
        }
    }

    // On This Day initialization
    const otdDateInline = document.getElementById('otdDateInline');
    const otdEventInline = document.getElementById('otdEventInline');

    if (otdDateInline && otdEventInline) {
        const onThisDay = getOnThisDayEvent();
        otdDateInline.textContent = `${onThisDay.month} ${onThisDay.day}`;
        otdEventInline.textContent = onThisDay.event;
    }

    function generateLeaderboard() {
        const leaderboardList = document.getElementById('leaderboardList');
        const leaderboardYou = document.getElementById('leaderboardYou');

        if (!leaderboardList) return;

        const mockUsers = [
            { name: 'marcus_j', streak: 47, score: 2350 },
            { name: 'sarahchen', streak: 38, score: 2140 },
            { name: 'tompkins22', streak: 32, score: 1920 },
            { name: 'bri_nguyen', streak: 28, score: 1680 },
            { name: 'davidr91', streak: 21, score: 1260 },
            { name: 'jess.taylor', streak: 19, score: 1140 },
            { name: 'kfoster', streak: 15, score: 950 },
            { name: 'mike_w', streak: 12, score: 780 },
            { name: 'alexrivera', streak: 11, score: 720 },
            { name: 'priya_k', streak: 10, score: 680 },
            { name: 'emmawilson', streak: 9, score: 630 },
            { name: 'jpark23', streak: 8, score: 580 },
            { name: 'danielm', streak: 7, score: 530 },
            { name: 'cat.murphy', streak: 7, score: 520 },
            { name: 'mayasingh', streak: 6, score: 480 },
            { name: 'chris_b', streak: 6, score: 470 },
            { name: 'rachelf', streak: 5, score: 420 },
            { name: 'andykim', streak: 5, score: 410 },
            { name: 'brandon.lee', streak: 4, score: 370 },
            { name: 'annie_h', streak: 4, score: 360 },
            { name: 'kevinjones', streak: 4, score: 350 },
            { name: 'lunawang', streak: 3, score: 310 },
            { name: 'tyler_m', streak: 3, score: 300 },
            { name: 'sophiab', streak: 3, score: 290 },
            { name: 'benmartin', streak: 2, score: 250 },
            { name: 'ethan.cole', streak: 2, score: 240 },
            { name: 'ashleyr', streak: 2, score: 230 },
            { name: 'olivia_d', streak: 2, score: 220 },
            { name: 'jsmith47', streak: 1, score: 180 },
            { name: 'jake.m', streak: 1, score: 170 },
            { name: 'meganl', streak: 1, score: 160 },
            { name: 'sofia_r', streak: 1, score: 150 },
            { name: 'ryanthomas', streak: 1, score: 140 },
            { name: 'liamk', streak: 1, score: 130 },
            { name: 'natalie.c', streak: 1, score: 120 },
            { name: 'izzy_m', streak: 1, score: 110 },
            { name: 'chrisp', streak: 1, score: 100 },
            { name: 'noah.garcia', streak: 1, score: 90 },
            { name: 'samwilliams', streak: 1, score: 80 },
            { name: 'ava_johnson', streak: 0, score: 70 },
            { name: 'mattb', streak: 0, score: 60 },
            { name: 'masonc', streak: 0, score: 50 },
            { name: 'hannahk', streak: 0, score: 40 },
            { name: 'mia.patel', streak: 0, score: 30 },
            { name: 'lucas_t', streak: 0, score: 20 },
            { name: 'lucasm', streak: 0, score: 10 },
            { name: 'ericyang', streak: 0, score: 5 },
            { name: 'harper.j', streak: 0, score: 5 },
            { name: 'nickr', streak: 0, score: 5 },
            { name: 'ella_b', streak: 0, score: 5 },
            { name: 'jordanp', streak: 0, score: 5 },
            { name: 'logand', streak: 0, score: 5 },
            { name: 'taylor_s', streak: 0, score: 5 },
            { name: 'chloekim', streak: 0, score: 5 },
            { name: 'amandaw', streak: 0, score: 5 },
            { name: 'aiden.r', streak: 0, score: 5 },
            { name: 'jennyl', streak: 0, score: 5 },
            { name: 'emily_c', streak: 0, score: 5 },
            { name: 'jasonh', streak: 0, score: 5 },
            { name: 'jacksonw', streak: 0, score: 5 },
            { name: 'kellyp', streak: 0, score: 5 },
            { name: 'zoe.chen', streak: 0, score: 5 },
            { name: 'ryang', streak: 0, score: 5 },
            { name: 'carter.m', streak: 0, score: 5 },
            { name: 'annam', streak: 0, score: 5 },
            { name: 'aria_l', streak: 0, score: 5 },
            { name: 'derekj', streak: 0, score: 5 },
            { name: 'graysonb', streak: 0, score: 5 },
            { name: 'stephk', streak: 0, score: 5 },
            { name: 'lilyzhang', streak: 0, score: 5 },
            { name: 'markh', streak: 0, score: 5 },
            { name: 'leo_s', streak: 0, score: 5 },
            { name: 'sarahm', streak: 0, score: 5 },
            { name: 'gracew', streak: 0, score: 5 },
            { name: 'willp', streak: 0, score: 5 },
            { name: 'seb.martinez', streak: 0, score: 5 },
            { name: 'kaitlynr', streak: 0, score: 5 },
            { name: 'layla.h', streak: 0, score: 5 },
            { name: 'benf', streak: 0, score: 5 },
            { name: 'owen_k', streak: 0, score: 5 }
        ];

        // Show only top 5 users in leaderboard
        leaderboardList.innerHTML = mockUsers.slice(0, 5).map((user, index) => `
            <div class="leaderboard-item">
                <div class="leaderboard-rank">#${index + 1}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${user.name}</div>
                    <div class="leaderboard-stats">${user.streak}d streak</div>
                </div>
                <div class="leaderboard-score">${user.score}</div>
            </div>
        `).join('');

        const userScore = (userData.streak * 50) + (userData.totalDaysPlayed * 10);
        const allScores = [userScore, ...mockUsers.map(u => u.score)].sort((a, b) => b - a);
        const userRank = allScores.indexOf(userScore) + 1;

        leaderboardYou.querySelector('.leaderboard-rank').textContent = '#' + userRank;
        leaderboardYou.querySelector('.leaderboard-stats').textContent = `${userData.streak}d streak`;
        leaderboardYou.querySelector('.leaderboard-score').textContent = userScore;
    }

    const otdLearnMore = document.getElementById('otdLearnMore');

    if (otdLearnMore) {
        otdLearnMore.addEventListener('click', (e) => {
            e.preventDefault();
            const event = getOnThisDayEvent();

            let searchQuery = event.event;

            const quotedMatch = searchQuery.match(/'([^']+)'/);
            const theMatch = searchQuery.match(/\b(?:the|on the)\s+([A-Z][^,.]+)/);

            if (quotedMatch) {
                searchQuery = quotedMatch[1];
            } else if (theMatch) {
                searchQuery = theMatch[1];
            }

            const britannicaUrl = `https://www.britannica.com/search?query=${encodeURIComponent(searchQuery)}`;

            window.open(britannicaUrl, '_blank', 'noopener,noreferrer');
        });
    }

    const closeReminder = document.getElementById('closeReminder');
    const dailyReminder = document.getElementById('dailyReminder');

    if (closeReminder && dailyReminder) {
        closeReminder.addEventListener('click', () => {
            dailyReminder.style.display = 'none';
            localStorage.setItem('pastport_hide_reminder', 'true');
        });

        if (localStorage.getItem('pastport_hide_reminder') === 'true') {
            dailyReminder.style.display = 'none';
        }
    }

    const profileButton = document.getElementById('profileButton');
    const profileModal = document.getElementById('profileModal');
    const closeProfile = document.getElementById('closeProfile');

    if (profileButton && profileModal) {
        profileButton.addEventListener('click', () => {
            // If not logged in, show sign in modal instead
            if (!currentUser) {
                document.getElementById('signInModal').classList.remove('hidden');
                return;
            }
            profileModal.classList.remove('hidden');
            loadProfileSettings();
        });

        if (closeProfile) {
            closeProfile.addEventListener('click', () => {
                profileModal.classList.add('hidden');
            });
        }

        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.classList.add('hidden');
            }
        });

        const profileTabs = profileModal.querySelectorAll('.profile-tab');
        const tabContents = profileModal.querySelectorAll('.profile-tab-content');

        profileTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.dataset.tab;

                profileTabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');

                if (targetTab === 'personal') {
                    document.getElementById('personalTab').classList.add('active');
                } else if (targetTab === 'game') {
                    document.getElementById('gameTab').classList.add('active');
                }
            });
        });

        const saveProfileBtn = document.getElementById('saveProfileBtn');
        if (saveProfileBtn) {
            saveProfileBtn.addEventListener('click', () => {
                saveProfileSettings();
                profileModal.classList.add('hidden');
            });
        }
    }

    function loadProfileSettings() {
        const displayName = currentUser?.displayName || '';
        const userEmail = currentUser?.email || '';

        document.getElementById('displayName').value = displayName;
        document.getElementById('userEmail').value = userEmail;

        const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
        difficultyRadios.forEach(radio => {
            if (radio.value === userData.difficultyLevel) {
                radio.checked = true;
            }
        });
    }

    async function saveProfileSettings() {
        const displayName = document.getElementById('displayName').value;

        if (currentUser && displayName !== currentUser.displayName) {
            try {
                await updateProfile(currentUser, { displayName });
                userData.displayName = displayName;
                await userData.saveToFirebase(currentUser.uid);
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        }

        const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked');
        if (selectedDifficulty) {
            userData.setDifficultyLevel(selectedDifficulty.value);
        }

        const saveBtn = document.getElementById('saveProfileBtn');
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = 'Saved! ✓';
        saveBtn.style.background = 'var(--success-green)';

        setTimeout(() => {
            saveBtn.innerHTML = originalText;
            saveBtn.style.background = '';
        }, 2000);
    }

    generateLeaderboard();
}

// Initialize the home page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, checking for startButton...');
        if (document.getElementById('startButton')) {
            console.log('StartButton found, initializing home page');
            initHomePage();
        } else {
            console.log('StartButton not found - not on home page');
        }
    });
} else {
    console.log('DOM already ready, checking for startButton...');
    if (document.getElementById('startButton')) {
        console.log('StartButton found, initializing home page');
        initHomePage();
    } else {
        console.log('StartButton not found - not on home page');
    }
}
