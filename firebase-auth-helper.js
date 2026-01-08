// Firebase Authentication Helper
import { auth, db } from './firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import {
    doc,
    setDoc,
    getDoc,
    updateDoc
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Current authenticated user
export let currentUser = null;

// Sign up a new user with Firebase
export async function firebaseSignUp(name, email, password) {
    try {
        // Create user in Firebase Auth
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
            hearts: 5,
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

        return { success: true, user };
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

        return { success: false, error: message };
    }
}

// Sign in existing user with Firebase
export async function firebaseSignIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
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

        return { success: false, error: message };
    }
}

// Sign out user
export async function firebaseSignOut() {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        console.error('Sign out error:', error);
        return { success: false, error: 'Failed to sign out.' };
    }
}

// Send password reset email
export async function firebaseSendPasswordReset(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        return { success: true };
    } catch (error) {
        console.error('Password reset error:', error);
        return { success: false, error: 'Failed to send password reset email.' };
    }
}

// Load user data from Firestore
export async function loadUserDataFromFirestore(userId) {
    try {
        const userDocRef = doc(db, 'users', userId);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            return { success: true, data: docSnap.data() };
        } else {
            return { success: false, error: 'User document not found.' };
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        return { success: false, error: 'Failed to load user data.' };
    }
}

// Save user data to Firestore
export async function saveUserDataToFirestore(userId, data) {
    try {
        const userDocRef = doc(db, 'users', userId);
        await updateDoc(userDocRef, data);
        return { success: true };
    } catch (error) {
        console.error('Error saving user data:', error);
        return { success: false, error: 'Failed to save user data.' };
    }
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    currentUser = user;

    if (user) {
        console.log('User authenticated:', user.email);

        // Dispatch custom event for app to handle
        window.dispatchEvent(new CustomEvent('firebase-auth-state-changed', {
            detail: { user, signedIn: true }
        }));
    } else {
        console.log('User signed out');

        window.dispatchEvent(new CustomEvent('firebase-auth-state-changed', {
            detail: { user: null, signedIn: false }
        }));
    }
});

// Make currentUser accessible
export function getCurrentUser() {
    return currentUser;
}
