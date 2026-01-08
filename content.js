// Historical briefings database - 365 unique topics
const briefings = [
    {
        id: 1,
        title: "The Boston Tea Party (1773)",
        text: "On December 16, 1773, American colonists staged one of the most famous acts of protest in history. Disguised as Mohawk Indians, members of the Sons of Liberty boarded three British ships in Boston Harbor and dumped 342 chests of tea into the water. This dramatic act was a response to the Tea Act of 1773, which granted the British East India Company a monopoly on tea sales in the colonies while maintaining the hated tea tax. The colonists viewed this as 'taxation without representation'—they had no voice in Parliament yet were forced to pay British taxes. The Boston Tea Party escalated tensions between Britain and the colonies, leading directly to the Coercive Acts (called the Intolerable Acts by colonists) and pushing America closer to revolution.",
        primarySource: {
            quote: "This meeting can do nothing more to save the country.",
            attribution: "Samuel Adams, just before the raid began",
            context: "Signal to begin the Boston Tea Party",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Boston_Tea_Party_w.jpg/800px-Boston_Tea_Party_w.jpg",
            imageCaption: "The Destruction of Tea at Boston Harbor (1773)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did colonists throw into Boston Harbor during the Boston Tea Party?",
                options: ["Coffee", "Tea", "Sugar", "Rum"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the primary reason colonists opposed the tea tax?",
                options: [
                    "They thought tea was too expensive",
                    "They opposed taxation without representation in Parliament",
                    "They preferred coffee over tea",
                    "They were boycotting all British products"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What were the British punitive measures following the Tea Party called?",
                options: [
                    "The Stamp Acts",
                    "The Intolerable Acts (Coercive Acts)",
                    "The Townshend Acts",
                    "The Navigation Acts"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        title: "The Louisiana Purchase (1803)",
        text: "In 1803, President Thomas Jefferson completed one of the most significant land deals in history, purchasing approximately 828,000 square miles of territory from France for $15 million. This nearly doubled the size of the United States overnight. The Louisiana Territory stretched from the Mississippi River to the Rocky Mountains and from the Gulf of Mexico to the Canadian border. Napoleon Bonaparte agreed to sell the land because France needed money for European wars and couldn't defend the territory against British naval power. Though Jefferson worried the Constitution didn't explicitly grant him power to buy land, he moved forward, believing the opportunity was too important to miss. The purchase secured American control of the Mississippi River and New Orleans, vital for trade and western expansion.",
        primarySource: {
            quote: "This little event, of France's possession of Louisiana... is the embryo of a tornado which will burst on the countries on both sides of the Atlantic.",
            attribution: "Thomas Jefferson, in a letter to Robert Livingston",
            context: "Before the purchase, expressing concern about French control",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Louisiana_Purchase.jpg/800px-Louisiana_Purchase.jpg",
            imageCaption: "Map of the Louisiana Purchase territory (1803)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country did the United States buy the Louisiana Territory from?",
                options: ["Spain", "France", "Britain", "Mexico"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Approximately how much did the United States pay for the Louisiana Territory?",
                options: ["$5 million", "$10 million", "$15 million", "$25 million"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Why did Napoleon Bonaparte agree to sell the Louisiana Territory?",
                options: [
                    "He wanted to punish Spain",
                    "He needed money for European wars and couldn't defend it",
                    "He was forced to by the French Parliament",
                    "He wanted to help America expand"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        title: "The Gettysburg Address (1863)",
        text: "On November 19, 1863, President Abraham Lincoln delivered a speech that would become one of the most famous in American history. Speaking at the dedication of the Soldiers' National Cemetery in Gettysburg, Pennsylvania, Lincoln's address lasted only about two minutes and contained just 272 words. Yet in that brief time, he redefined the Civil War as not just a struggle to preserve the Union, but as a fight for human equality and democracy itself. Lincoln invoked the Declaration of Independence's principle that 'all men are created equal' and called for 'a new birth of freedom.' The speech came four months after the Battle of Gettysburg, the war's bloodiest battle and turning point. While the main speaker, Edward Everett, spoke for two hours, it was Lincoln's brief remarks that history remembered.",
        primarySource: {
            quote: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
            attribution: "Abraham Lincoln, Gettysburg Address",
            context: "Opening lines of the address, November 19, 1863",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Abraham_Lincoln_November_1863.jpg/800px-Abraham_Lincoln_November_1863.jpg",
            imageCaption: "Abraham Lincoln, photographed in November 1863"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who delivered the Gettysburg Address?",
                options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Ulysses S. Grant"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Approximately how long was the Gettysburg Address?",
                options: ["30 seconds", "2 minutes", "15 minutes", "1 hour"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What phrase did Lincoln use to invoke the founding of America '87 years ago'?",
                options: [
                    "Nearly a century past",
                    "Four score and seven years ago",
                    "Eighty-seven years hence",
                    "In our grandfathers' time"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "The Golden Spike (1869)",
        text: "On May 10, 1869, at Promontory Summit, Utah Territory, the final spike was driven to complete the First Transcontinental Railroad. This golden spike symbolically joined the Central Pacific and Union Pacific railroads, creating the first continuous rail line across the United States. The project had taken six years and the labor of thousands of workers, including many Chinese and Irish immigrants who faced dangerous conditions. The transcontinental railroad transformed America, reducing a hazardous six-month journey to a week-long trip. It facilitated western settlement, enabled faster mail delivery, boosted trade and commerce, and helped unify the nation after the Civil War. Telegraph wires carried news of the spike's driving across the country, and Americans celebrated this engineering marvel that seemed to conquer the vast distances of the continent.",
        primarySource: {
            quote: "DONE. The last rail is laid, the last spike is driven. The Pacific railroad is completed.",
            attribution: "Telegraph message sent nationwide",
            context: "Announcement of the transcontinental railroad's completion",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Golden_spike.jpg/800px-Golden_spike.jpg",
            imageCaption: "The Golden Spike ceremony at Promontory Summit, Utah (1869)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the Golden Spike represent?",
                options: [
                    "Discovery of gold in California",
                    "Completion of the transcontinental railroad",
                    "End of the Civil War",
                    "Opening of the Panama Canal"
                ],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which two railroad companies met at Promontory Summit?",
                options: [
                    "Northern Pacific and Southern Pacific",
                    "Central Pacific and Union Pacific",
                    "Baltimore & Ohio and Pennsylvania Railroad",
                    "Great Northern and Santa Fe"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What immigrant groups provided much of the labor for the transcontinental railroad?",
                options: [
                    "Italian and German",
                    "Chinese and Irish",
                    "Polish and Russian",
                    "Mexican and Swedish"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        title: "The Moon Landing (1969)",
        text: "On July 20, 1969, Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon while Michael Collins orbited above. Armstrong's first words upon stepping onto the lunar surface—'That's one small step for man, one giant leap for mankind'—captured the magnitude of the achievement. The mission fulfilled President Kennedy's 1961 pledge to land a man on the Moon before the decade's end. It represented the culmination of the Space Race between the United States and Soviet Union, demonstrating American technological prowess during the Cold War. An estimated 600 million people worldwide watched the Moon landing on television, making it one of the most-watched events in history. The astronauts spent about two hours exploring the surface, collecting samples, and planting an American flag before returning safely to Earth.",
        primarySource: {
            quote: "That's one small step for man, one giant leap for mankind.",
            attribution: "Neil Armstrong",
            context: "First words upon stepping onto the Moon's surface, July 20, 1969",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/800px-Aldrin_Apollo_11_original.jpg",
            imageCaption: "Buzz Aldrin on the Moon, photographed by Neil Armstrong (1969)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who was the first person to walk on the Moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the name of the Apollo 11 mission that landed on the Moon?",
                options: ["Apollo 8", "Apollo 10", "Apollo 11", "Apollo 13"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which astronaut stayed in orbit around the Moon while Armstrong and Aldrin walked on its surface?",
                options: ["John Glenn", "Michael Collins", "Jim Lovell", "Alan Bean"],
                correct: 1
            }
        ]
    },
    {
        id: 6,
        title: "The Declaration of Independence (1776)",
        text: "On July 4, 1776, the Continental Congress formally adopted the Declaration of Independence, announcing the thirteen American colonies' separation from Great Britain. Primarily authored by Thomas Jefferson, the document eloquently expressed Enlightenment ideals about natural rights and government by consent of the governed. Its most famous passage proclaims 'all men are created equal' with 'unalienable Rights' including 'Life, Liberty and the pursuit of Happiness.' The Declaration listed grievances against King George III to justify revolution and explained why independence was necessary. While the ideals weren't immediately realized for all Americans—slavery continued, women couldn't vote, and Native Americans were excluded—the Declaration established principles that would inspire future movements for equality and human rights worldwide. The Fourth of July became America's Independence Day, celebrated annually as the nation's birthday.",
        primarySource: {
            quote: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
            attribution: "Thomas Jefferson, Declaration of Independence",
            context: "The most famous passage of the Declaration",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/United_States_Declaration_of_Independence.jpg/800px-United_States_Declaration_of_Independence.jpg",
            imageCaption: "The Declaration of Independence (1776)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What date is celebrated as American Independence Day?",
                options: ["July 1", "July 4", "August 4", "September 17"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who was the primary author of the Declaration of Independence?",
                options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "George Washington"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which Enlightenment philosopher's ideas heavily influenced the Declaration's concept of natural rights?",
                options: ["Voltaire", "Rousseau", "John Locke", "Montesquieu"],
                correct: 2
            }
        ]
    },
    {
        id: 7,
        title: "The Battle of Gettysburg (1863)",
        text: "From July 1-3, 1863, the Battle of Gettysburg raged in Pennsylvania, becoming the Civil War's bloodiest battle and its turning point. Confederate General Robert E. Lee invaded the North, hoping a victory on Union soil would force peace negotiations. Union forces under General George Meade met Lee's army in and around the town of Gettysburg. The three-day battle saw fierce fighting including the failed Confederate assault known as Pickett's Charge on July 3. The Union victory ended Lee's invasion of the North and, combined with the Union capture of Vicksburg on July 4, marked the beginning of the Confederacy's decline. The battle resulted in about 51,000 casualties—making it the war's deadliest single battle. Four months later, Lincoln delivered the Gettysburg Address at the dedication of the battle's cemetery.",
        primarySource: {
            quote: "It is all my fault. I thought my men were invincible.",
            attribution: "General Robert E. Lee",
            context: "After the failure of Pickett's Charge on July 3, 1863",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Thure_de_Thulstrup_-_L._Prang_and_Co._-_Battle_of_Gettysburg_-_Restoration_by_Adam_Cuerden.jpg/800px-Thure_de_Thulstrup_-_L._Prang_and_Co._-_Battle_of_Gettysburg_-_Restoration_by_Adam_Cuerden.jpg",
            imageCaption: "Depiction of the Battle of Gettysburg (1863)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which state did the Battle of Gettysburg take place?",
                options: ["Virginia", "Maryland", "Pennsylvania", "New York"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many days did the Battle of Gettysburg last?",
                options: ["1 day", "2 days", "3 days", "5 days"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the name of the failed Confederate assault on the third day?",
                options: ["Sherman's March", "Pickett's Charge", "Burnside's Bridge", "Little Round Top"],
                correct: 1
            }
        ]
    },
    {
        id: 8,
        title: "The Constitutional Convention (1787)",
        text: "In the summer of 1787, delegates from twelve states (Rhode Island abstained) gathered in Philadelphia to address the weaknesses of the Articles of Confederation. What began as an effort to revise the Articles became the creation of an entirely new framework of government—the U.S. Constitution. Meeting in secret at Independence Hall, delegates debated fundamental questions about federalism, representation, and governmental powers. The Great Compromise resolved the conflict between large and small states by creating a bicameral legislature. The Three-Fifths Compromise and Electoral College addressed slavery and presidential selection, though these reflected troubling concessions to slave states. After four months of debate, the Constitution was signed on September 17, 1787, and sent to the states for ratification, establishing the world's oldest written national constitution still in use today.",
        primarySource: {
            quote: "I confess that there are several parts of this constitution which I do not at present approve, but I am not sure I shall never approve them... I consent, Sir, to this Constitution because I expect no better, and because I am not sure, that it is not the best.",
            attribution: "Benjamin Franklin",
            context: "Final speech at the Constitutional Convention, September 17, 1787",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg/800px-Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg",
            imageCaption: "Scene at the Signing of the Constitution (painting by Howard Chandler Christy)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Where did the Constitutional Convention take place?",
                options: ["Boston", "New York", "Philadelphia", "Washington D.C."],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What document did the Constitution replace?",
                options: [
                    "The Declaration of Independence",
                    "The Articles of Confederation",
                    "The Federalist Papers",
                    "The Bill of Rights"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What compromise created a bicameral legislature with both population-based and equal state representation?",
                options: [
                    "The Three-Fifths Compromise",
                    "The Commerce Compromise",
                    "The Great Compromise (Connecticut Compromise)",
                    "The Electoral College Compromise"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 9,
        title: "The New Deal (1933-1939)",
        text: "Facing the worst economic crisis in American history, President Franklin D. Roosevelt launched the New Deal—a series of programs and reforms to provide relief, recovery, and reform during the Great Depression. Beginning with his first 100 days in office, FDR created agencies like the Civilian Conservation Corps (CCC), Works Progress Administration (WPA), and Tennessee Valley Authority (TVA) to provide jobs and infrastructure. The Social Security Act established old-age pensions and unemployment insurance. Banking reforms and securities regulations aimed to prevent future crashes. The New Deal fundamentally expanded the federal government's role in the economy and society. While it didn't end the Depression (World War II mobilization did that), it provided crucial relief to millions and established lasting institutions. The New Deal coalition reshaped American politics for decades.",
        primarySource: {
            quote: "The only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.",
            attribution: "Franklin D. Roosevelt",
            context: "First Inaugural Address, March 4, 1933",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_in_1933.jpg/800px-FDR_in_1933.jpg",
            imageCaption: "President Franklin D. Roosevelt (1933)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president created the New Deal?",
                options: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry Truman", "Theodore Roosevelt"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What major economic crisis was the New Deal designed to address?",
                options: [
                    "The Panic of 1893",
                    "The Great Depression",
                    "The Recession of 1958",
                    "The 1970s Stagflation"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which New Deal program established old-age pensions and unemployment insurance?",
                options: [
                    "The Works Progress Administration",
                    "The Civilian Conservation Corps",
                    "The Social Security Act",
                    "The Tennessee Valley Authority"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 10,
        title: "The Attack on Pearl Harbor (1941)",
        text: "On the morning of December 7, 1941, Japanese forces launched a surprise military attack on the U.S. naval base at Pearl Harbor, Hawaii. The assault involved 353 aircraft in two waves, sinking or damaging eight battleships, destroying nearly 200 aircraft, and killing 2,403 Americans. The attack shocked the nation and immediately ended the isolationist sentiment that had kept America out of World War II. President Roosevelt called December 7 'a date which will live in infamy,' and Congress declared war on Japan the next day. Germany and Italy, Japan's Axis allies, then declared war on the United States. Pearl Harbor transformed America from a reluctant observer to a fully mobilized combatant in the global conflict. The attack unified American public opinion behind the war effort and set the stage for America's emergence as a superpower.",
        primarySource: {
            quote: "Yesterday, December 7th, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.",
            attribution: "President Franklin D. Roosevelt",
            context: "Address to Congress requesting a declaration of war, December 8, 1941",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg/800px-The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg",
            imageCaption: "USS Arizona burning after the attack on Pearl Harbor (1941)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country attacked Pearl Harbor?",
                options: ["Germany", "Italy", "Japan", "Soviet Union"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What date did the attack on Pearl Harbor occur?",
                options: ["December 5, 1941", "December 7, 1941", "December 10, 1941", "December 25, 1941"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many battleships were sunk or damaged at Pearl Harbor?",
                options: ["Four", "Six", "Eight", "Ten"],
                correct: 2
            }
        ]
    },
    {
        id: 11,
        title: "The Montgomery Bus Boycott (1955-1956)",
        text: "On December 1, 1955, Rosa Parks, a Black seamstress and NAACP secretary, refused to give up her bus seat to a white passenger in Montgomery, Alabama, leading to her arrest. In response, the Black community organized a bus boycott led by a young minister named Martin Luther King Jr. For 381 days, African Americans walked, carpooled, and found alternatives to the segregated bus system, despite harassment and violence. The boycott severely hurt the bus company financially and drew national attention to segregation. On November 13, 1956, the Supreme Court ruled that bus segregation was unconstitutional. The Montgomery Bus Boycott became a defining moment in the Civil Rights Movement, demonstrating the power of nonviolent protest and launching King to national prominence. It inspired similar boycotts and protests across the South.",
        primarySource: {
            quote: "The only tired I was, was tired of giving in.",
            attribution: "Rosa Parks",
            context: "Reflecting on her decision not to give up her bus seat",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rosaparks.jpg/800px-Rosaparks.jpg",
            imageCaption: "Rosa Parks with Martin Luther King Jr. (1955)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who refused to give up her bus seat, sparking the Montgomery Bus Boycott?",
                options: ["Coretta Scott King", "Rosa Parks", "Ella Baker", "Fannie Lou Hamer"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Approximately how long did the Montgomery Bus Boycott last?",
                options: ["90 days", "180 days", "381 days", "500 days"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which young minister emerged as a leader during the Montgomery Bus Boycott?",
                options: [
                    "Malcolm X",
                    "Martin Luther King Jr.",
                    "Ralph Abernathy",
                    "Jesse Jackson"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 12,
        title: "The Seneca Falls Convention (1848)",
        text: "On July 19-20, 1848, the first women's rights convention in American history took place in Seneca Falls, New York. Organized by Elizabeth Cady Stanton and Lucretia Mott, about 300 attendees (including 40 men) discussed women's social, civil, and religious rights. The convention produced the Declaration of Sentiments, modeled after the Declaration of Independence, which began 'We hold these truths to be self-evident: that all men and women are created equal.' The document listed grievances including women's lack of voting rights, property rights, educational opportunities, and legal standing. The convention's most controversial resolution called for women's suffrage. Frederick Douglass, the famous abolitionist, spoke in favor. Though mocked by many at the time, the Seneca Falls Convention launched the organized women's rights movement in America, setting the stage for the eventual passage of the 19th Amendment in 1920.",
        primarySource: {
            quote: "We hold these truths to be self-evident: that all men and women are created equal.",
            attribution: "Declaration of Sentiments",
            context: "Opening statement of the document produced at Seneca Falls, 1848",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Elizabeth_Cady_Stanton_and_Lucretia_Mott.jpg/800px-Elizabeth_Cady_Stanton_and_Lucretia_Mott.jpg",
            imageCaption: "Elizabeth Cady Stanton and Lucretia Mott, organizers of the convention"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was the main topic discussed at the Seneca Falls Convention?",
                options: ["Abolition of slavery", "Women's rights", "Temperance", "Labor reform"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What document was produced at the Seneca Falls Convention?",
                options: [
                    "The Emancipation Proclamation",
                    "The Declaration of Sentiments",
                    "The Gettysburg Address",
                    "The Bill of Rights"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which two women primarily organized the Seneca Falls Convention?",
                options: [
                    "Susan B. Anthony and Sojourner Truth",
                    "Elizabeth Cady Stanton and Lucretia Mott",
                    "Lucy Stone and Harriet Tubman",
                    "Angelina Grimké and Sarah Grimké"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 13,
        title: "The Erie Canal (1825)",
        text: "Completed in 1825, the Erie Canal was an engineering marvel that transformed American commerce and settlement patterns. Stretching 363 miles from Albany to Buffalo, New York, the canal connected the Hudson River to Lake Erie, creating a water route from the Atlantic Ocean to the Great Lakes. Governor DeWitt Clinton championed the project despite skepticism (critics called it 'Clinton's Ditch'). Construction took eight years and cost $7 million. The canal dramatically reduced shipping costs and time—what once took weeks by wagon now took days by canal boat. It made New York City the nation's premier port and commercial center, spurred settlement of the Midwest, and sparked a canal-building boom nationwide. Towns along its route flourished, and agricultural products from the interior could now reach eastern markets efficiently. The Erie Canal demonstrated the potential for internal improvements to drive economic growth.",
        primarySource: {
            quote: "The canal is one of the greatest works of art in the world.",
            attribution: "European visitor's observation",
            context: "Contemporary reaction to the completed Erie Canal, 1825",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Erie_Canal_Map_1853.jpg/800px-Erie_Canal_Map_1853.jpg",
            imageCaption: "Map of the Erie Canal route (1853)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What two bodies of water did the Erie Canal connect?",
                options: [
                    "Atlantic Ocean and Pacific Ocean",
                    "Hudson River and Lake Erie",
                    "Mississippi River and Gulf of Mexico",
                    "Potomac River and Chesapeake Bay"
                ],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When was the Erie Canal completed?",
                options: ["1800", "1815", "1825", "1840"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which New York governor championed the Erie Canal project?",
                options: ["Martin Van Buren", "DeWitt Clinton", "Aaron Burr", "John Jay"],
                correct: 1
            }
        ]
    },
    {
        id: 14,
        title: "The March on Washington (1963)",
        text: "On August 28, 1963, approximately 250,000 people gathered in Washington, D.C., for the March on Washington for Jobs and Freedom, one of the largest political rallies in American history. The march brought together civil rights, labor, and religious organizations to advocate for civil and economic rights for African Americans. Participants marched from the Washington Monument to the Lincoln Memorial, where Martin Luther King Jr. delivered his iconic 'I Have a Dream' speech. The peaceful demonstration pressured President Kennedy and Congress to advance civil rights legislation. Other speakers included John Lewis, A. Philip Randolph, and Josephine Baker. The march helped build momentum for the Civil Rights Act of 1964 and the Voting Rights Act of 1965. The event demonstrated the power of peaceful mass protest and became a defining moment in the Civil Rights Movement.",
        primarySource: {
            quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
            attribution: "Martin Luther King Jr.",
            context: "'I Have a Dream' speech at the March on Washington, August 28, 1963",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Martin_Luther_King_-_March_on_Washington.jpg/800px-Martin_Luther_King_-_March_on_Washington.jpg",
            imageCaption: "Martin Luther King Jr. addressing the crowd at the March on Washington (1963)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who delivered the famous 'I Have a Dream' speech?",
                options: [
                    "Malcolm X",
                    "Martin Luther King Jr.",
                    "John F. Kennedy",
                    "Rosa Parks"
                ],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Approximately how many people attended the March on Washington?",
                options: ["50,000", "100,000", "250,000", "500,000"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the full name of the 1963 march?",
                options: [
                    "The March for Voting Rights",
                    "The March on Washington for Jobs and Freedom",
                    "The Freedom March",
                    "The Civil Rights March"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 15,
        title: "The California Gold Rush (1848-1855)",
        text: "When James Marshall discovered gold at Sutter's Mill in Coloma, California, on January 24, 1848, he triggered one of the largest mass migrations in American history. News of gold spread quickly, and by 1849, approximately 300,000 people from around the world had rushed to California seeking fortune. These 'forty-niners' traveled by wagon train across the continent, by ship around South America, or across the Panama isthmus. While few struck it rich, the Gold Rush had profound effects: California's population exploded, leading to statehood in 1850; San Francisco transformed from a small settlement to a major city; and the influx devastated Native American populations through violence and disease. The Gold Rush stimulated the economy, spurred infrastructure development, and accelerated westward expansion. It also created a diverse, multicultural society in California, though Chinese immigrants and other minorities faced severe discrimination.",
        primarySource: {
            quote: "The whole country, from San Francisco to Los Angeles, and from the seashore to the base of the Sierra Nevadas, resounds with the sordid cry of 'gold! GOLD! GOLD!' while the field is left half planted, the house half built, and everything neglected but the manufacture of shovels and pickaxes.",
            attribution: "San Francisco newspaper, 1848",
            context: "Describing the mania that gripped California after gold's discovery",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/California_gold_rush_winnemucca.jpg/800px-California_gold_rush_winnemucca.jpg",
            imageCaption: "Gold miners during the California Gold Rush"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the California Gold Rush begin?",
                options: ["1840", "1848", "1855", "1860"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What were the gold seekers who arrived in 1849 called?",
                options: ["Prospectors", "Forty-niners", "Gold diggers", "Pioneers"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Where was gold first discovered, triggering the California Gold Rush?",
                options: [
                    "San Francisco Bay",
                    "Sacramento River",
                    "Sutter's Mill in Coloma",
                    "Los Angeles Creek"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 16,
        title: "The Manhattan Project (1942-1945)",
        text: "The Manhattan Project was the secret U.S. government program to develop the world's first atomic weapons during World War II. Initiated in 1942 under the direction of General Leslie Groves and scientific leadership of J. Robert Oppenheimer, the project employed over 130,000 people across multiple sites, including Los Alamos (New Mexico), Oak Ridge (Tennessee), and Hanford (Washington). Scientists raced against fears that Nazi Germany was developing similar weapons. On July 16, 1945, the first atomic bomb was successfully tested at Trinity Site in New Mexico. Less than a month later, atomic bombs were dropped on Hiroshima (August 6) and Nagasaki (August 9), Japan, leading to Japan's surrender and the end of World War II. The Manhattan Project ushered in the atomic age, fundamentally changing warfare, international relations, and raising profound ethical questions about nuclear weapons that persist today.",
        primarySource: {
            quote: "Now I am become Death, the destroyer of worlds.",
            attribution: "J. Robert Oppenheimer",
            context: "Reflecting on the Trinity test, quoting the Bhagavad Gita",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trinity_Test_-_July_16%2C_1945.jpg/800px-Trinity_Test_-_July_16%2C_1945.jpg",
            imageCaption: "The Trinity test, first atomic bomb detonation (July 16, 1945)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the Manhattan Project develop?",
                options: ["Radar technology", "Atomic bombs", "Jet engines", "Penicillin"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who was the scientific director of the Manhattan Project?",
                options: [
                    "Albert Einstein",
                    "J. Robert Oppenheimer",
                    "Enrico Fermi",
                    "Edward Teller"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the code name for the first atomic bomb test?",
                options: ["Fat Man", "Little Boy", "Trinity", "Manhattan"],
                correct: 2
            }
        ]
    },
    {
        id: 17,
        title: "The Homestead Act (1862)",
        text: "Signed by President Abraham Lincoln on May 20, 1862, the Homestead Act was one of the most significant pieces of legislation in American history. It offered 160 acres of public land to any citizen (or intended citizen) willing to settle and farm the land for five years. The act aimed to encourage westward expansion, provide opportunity for landless Americans and immigrants, and develop the frontier. Over the act's lifetime (it remained in effect until 1976 in the lower 48 states, 1986 in Alaska), approximately 1.6 million homesteads were granted, distributing 270 million acres—10% of all U.S. lands. The act helped settle the Great Plains and West, though it also accelerated the displacement of Native Americans from their ancestral lands. Women, African Americans, and immigrants all took advantage of the act, though harsh conditions, isolation, and economic challenges meant many homesteaders eventually gave up their claims.",
        primarySource: {
            quote: "I shall never forget my disconsolate feelings when I walked out and climbed the hill back of our house to view the country around. Not a tree, plant nor shrub of any kind to be seen.",
            attribution: "A Nebraska homesteader's wife",
            context: "Describing the challenging landscape homesteaders faced on the Great Plains",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Homsteaders_1866.jpg/800px-Homsteaders_1866.jpg",
            imageCaption: "Homesteaders in front of their sod house (1866)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many acres of land did the Homestead Act offer to settlers?",
                options: ["40 acres", "80 acres", "160 acres", "320 acres"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How long did settlers have to farm the land before owning it?",
                options: ["1 year", "3 years", "5 years", "10 years"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which president signed the Homestead Act into law?",
                options: [
                    "Andrew Johnson",
                    "Abraham Lincoln",
                    "Ulysses S. Grant",
                    "James Buchanan"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 18,
        title: "The Cuban Missile Crisis (1962)",
        text: "In October 1962, the United States and Soviet Union came closer to nuclear war than at any other time during the Cold War. American U-2 spy planes discovered Soviet nuclear missiles being installed in Cuba, just 90 miles from Florida. President John F. Kennedy faced a critical decision: how to remove the missiles without triggering World War III. After rejecting military advisors' recommendations for air strikes or invasion, Kennedy ordered a naval 'quarantine' (blockade) of Cuba and demanded the Soviets remove the missiles. For thirteen tense days, the world watched as the superpowers stood on the brink of nuclear catastrophe. Soviet Premier Nikita Khrushchev finally agreed to remove the missiles in exchange for a U.S. pledge not to invade Cuba and a secret agreement to remove American missiles from Turkey. The crisis led to improved U.S.-Soviet communications, including the establishment of the Moscow-Washington hotline.",
        primarySource: {
            quote: "It is insane that two men, sitting on opposite sides of the world, should be able to decide to bring an end to civilization.",
            attribution: "President John F. Kennedy",
            context: "During the Cuban Missile Crisis deliberations, October 1962",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cuban_Missile_Crisis_Map.jpg/800px-Cuban_Missile_Crisis_Map.jpg",
            imageCaption: "Map showing range of Soviet missiles in Cuba (1962)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country installed nuclear missiles in Cuba in 1962?",
                options: ["China", "Soviet Union", "North Korea", "East Germany"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How many days did the Cuban Missile Crisis last?",
                options: ["7 days", "13 days", "21 days", "30 days"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What action did President Kennedy take instead of air strikes?",
                options: [
                    "Diplomatic negotiations only",
                    "A naval quarantine (blockade) of Cuba",
                    "A full invasion of Cuba",
                    "Economic sanctions alone"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 19,
        title: "The Trail of Tears (1838-1839)",
        text: "The Trail of Tears refers to the forced relocation of approximately 60,000 Native Americans from their ancestral homelands in the Southeast to designated 'Indian Territory' west of the Mississippi River (present-day Oklahoma). Following the Indian Removal Act of 1830, signed by President Andrew Jackson, the U.S. government compelled the Cherokee, Creek, Seminole, Chickasaw, and Choctaw nations (known as the 'Five Civilized Tribes') to march westward. The Cherokee removal in 1838-1839 was particularly devastating—U.S. troops forcibly removed about 16,000 Cherokee from Georgia, North Carolina, Tennessee, and Alabama. During the journey, approximately 4,000 Cherokee died from exposure, disease, and starvation. The Trail of Tears represents one of the darkest chapters in American history, a tragic consequence of the government's policy of Indian removal and westward expansion at any cost.",
        primarySource: {
            quote: "Long time we travel on way to new land. People feel bad when they leave Old Nation. Women cry and made sad wails. Children cry and many men cry... but they say nothing and just put heads down and keep on go towards West. Many days pass and people die very much.",
            attribution: "A Cherokee survivor",
            context: "Recounting the experience of the Trail of Tears",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Trails_of_Tears.png/800px-Trails_of_Tears.png",
            imageCaption: "Map showing the routes of the Trail of Tears"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "The Trail of Tears primarily affected which group of people?",
                options: [
                    "European immigrants",
                    "Native Americans",
                    "African Americans",
                    "Mexican citizens"
                ],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which president signed the Indian Removal Act that led to the Trail of Tears?",
                options: [
                    "Thomas Jefferson",
                    "James Madison",
                    "Andrew Jackson",
                    "Martin Van Buren"
                ],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how many Cherokee died during the Trail of Tears?",
                options: ["1,000", "2,000", "4,000", "8,000"],
                correct: 2
            }
        ]
    },
    {
        id: 20,
        title: "The Watergate Scandal (1972-1974)",
        text: "The Watergate scandal began with a break-in at the Democratic National Committee headquarters at the Watergate office complex in Washington, D.C., on June 17, 1972. Initially dismissed as a 'third-rate burglary,' investigative journalism by Washington Post reporters Bob Woodward and Carl Bernstein revealed connections between the burglars and President Richard Nixon's re-election campaign. As Congressional investigations and court proceedings unfolded, evidence emerged of widespread illegal activities including political espionage, abuse of power, and obstruction of justice. Nixon's secret White House tape recordings proved he had attempted to cover up the break-in. Facing certain impeachment, Nixon became the first U.S. president to resign, stepping down on August 9, 1974. Watergate profoundly impacted American politics, eroding public trust in government and leading to reforms in campaign finance, government ethics, and executive power. The scandal demonstrated that no one, not even the president, is above the law.",
        primarySource: {
            quote: "I'm not a crook.",
            attribution: "President Richard Nixon",
            context: "Press conference, November 17, 1973, denying wrongdoing in Watergate",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Richard_Nixon.jpg/800px-Richard_Nixon.jpg",
            imageCaption: "President Richard Nixon (1969)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president was involved in the Watergate scandal?",
                options: [
                    "Lyndon B. Johnson",
                    "Richard Nixon",
                    "Gerald Ford",
                    "Jimmy Carter"
                ],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What newspaper's reporters investigated Watergate?",
                options: [
                    "The New York Times",
                    "The Washington Post",
                    "The Boston Globe",
                    "The Los Angeles Times"
                ],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was broken into that started the Watergate scandal?",
                options: [
                    "The Pentagon",
                    "The White House",
                    "The Democratic National Committee headquarters",
                    "The FBI headquarters"
                ],
                correct: 2
            }
        ]
    },
    {
        id: 21,
        title: "The Declaration of Independence (1776)",
        text: "On July 4, 1776, the Continental Congress adopted the Declaration of Independence, formally announcing the thirteen American colonies' separation from Great Britain. Drafted primarily by Thomas Jefferson, with input from John Adams, Benjamin Franklin, Roger Sherman, and Robert Livingston, the document articulated the philosophical justification for revolution. It proclaimed that all men are created equal with unalienable rights to life, liberty, and the pursuit of happiness. The Declaration listed grievances against King George III and asserted the right of people to alter or abolish governments that become destructive of these rights. While the Revolutionary War had already begun in 1775, this document transformed the conflict from a colonial rebellion into a fight for independence based on universal principles of human rights and self-governance.",
        primarySource: {
            quote: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
            attribution: "The Declaration of Independence",
            context: "Second paragraph of the Declaration, July 4, 1776",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/United_States_Declaration_of_Independence.jpg/800px-United_States_Declaration_of_Independence.jpg",
            imageCaption: "Original Declaration of Independence document"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who was the primary author of the Declaration of Independence?",
                options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "On what date was the Declaration of Independence adopted?",
                options: ["July 2, 1776", "July 4, 1776", "July 14, 1776", "August 2, 1776"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which of these was NOT one of the five members of the committee that drafted the Declaration?",
                options: ["Roger Sherman", "Robert Livingston", "James Madison", "Benjamin Franklin"],
                correct: 2
            }
        ]
    },
    {
        id: 22,
        title: "The Constitutional Convention (1787)",
        text: "From May to September 1787, delegates from twelve states (Rhode Island abstained) met in Philadelphia to address the weaknesses of the Articles of Confederation. What began as an effort to revise the Articles transformed into the creation of an entirely new Constitution. Led by figures like James Madison, Alexander Hamilton, and Benjamin Franklin, the delegates debated fundamental questions about representation, federalism, and the balance of power. The Great Compromise resolved tensions between large and small states by creating a bicameral legislature. The Three-Fifths Compromise and debates over slavery revealed deep divisions that would haunt the nation for decades. The Constitution established a federal system with separation of powers among executive, legislative, and judicial branches, along with checks and balances to prevent tyranny.",
        primarySource: {
            quote: "We the People of the United States, in Order to form a more perfect Union...",
            attribution: "Preamble to the U.S. Constitution",
            context: "Opening words of the Constitution, September 17, 1787",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg/800px-Scene_at_the_Signing_of_the_Constitution_of_the_United_States.jpg",
            imageCaption: "Scene at the Signing of the Constitution (painting by Howard Chandler Christy)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what city was the Constitutional Convention held?",
                options: ["New York", "Boston", "Philadelphia", "Washington D.C."],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What is known as the 'Father of the Constitution'?",
                options: ["George Washington", "James Madison", "Alexander Hamilton", "Benjamin Franklin"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which state did NOT send delegates to the Constitutional Convention?",
                options: ["Rhode Island", "Delaware", "Georgia", "New Hampshire"],
                correct: 0
            }
        ]
    },
    {
        id: 23,
        title: "The Bill of Rights (1791)",
        text: "The first ten amendments to the Constitution, known as the Bill of Rights, were ratified on December 15, 1791. These amendments were a response to concerns raised during the Constitution's ratification debates, particularly by Anti-Federalists who feared the new federal government would become too powerful and threaten individual liberties. James Madison drafted twelve amendments, ten of which were ratified by the states. The Bill of Rights guarantees fundamental freedoms including freedom of speech, press, religion, and assembly; the right to bear arms; protection against unreasonable searches and seizures; the right to due process and trial by jury; and protection against cruel and unusual punishment. These amendments have shaped American law and society for over two centuries.",
        primarySource: {
            quote: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press...",
            attribution: "First Amendment to the U.S. Constitution",
            context: "Ratified December 15, 1791",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/United_States_Bill_of_Rights.jpg/800px-United_States_Bill_of_Rights.jpg",
            imageCaption: "Original Bill of Rights document"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many amendments are in the Bill of Rights?",
                options: ["Five", "Ten", "Fifteen", "Twenty"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which amendment protects freedom of speech and religion?",
                options: ["First Amendment", "Second Amendment", "Fourth Amendment", "Fifth Amendment"],
                correct: 0
            },
            {
                difficulty: "advanced",
                question: "Who was the primary author of the Bill of Rights?",
                options: ["Thomas Jefferson", "George Washington", "James Madison", "Alexander Hamilton"],
                correct: 2
            }
        ]
    },
    {
        id: 24,
        title: "The Lewis and Clark Expedition (1804-1806)",
        text: "President Thomas Jefferson commissioned Meriwether Lewis and William Clark to explore the Louisiana Purchase and find a water route to the Pacific Ocean. The expedition, called the Corps of Discovery, departed from St. Louis in May 1804 with about 45 men. Over 28 months, they traveled approximately 8,000 miles, mapping territory, documenting plants and animals, and establishing relations with Native American tribes. Sacagawea, a Shoshone woman, served as interpreter and guide, proving invaluable to the expedition's success. Though they discovered no Northwest Passage, the expedition provided detailed maps, scientific discoveries, and knowledge that would facilitate westward expansion. They returned in September 1806, having lost only one man to illness, a remarkable achievement for such a dangerous journey.",
        primarySource: {
            quote: "Ocian in view! O! the joy!",
            attribution: "William Clark's journal entry",
            context: "November 7, 1805, upon first seeing the Pacific Ocean",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Lewis_and_clark-expedition.jpg/800px-Lewis_and_clark-expedition.jpg",
            imageCaption: "Map of the Lewis and Clark Expedition route"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president commissioned the Lewis and Clark Expedition?",
                options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What Native American woman served as interpreter and guide?",
                options: ["Pocahontas", "Sacagawea", "Malinche", "Squanto"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Approximately how long did the expedition last?",
                options: ["18 months", "24 months", "28 months", "36 months"],
                correct: 2
            }
        ]
    },
    {
        id: 25,
        title: "The War of 1812",
        text: "The War of 1812, often called America's 'Second War of Independence,' was fought between the United States and Great Britain from 1812 to 1815. Causes included British impressment of American sailors, trade restrictions due to Britain's war with France, and American desire to expand into British-held Canada. The war featured several notable battles, including the burning of Washington D.C. by British forces and the successful American defense of Fort McHenry, which inspired Francis Scott Key to write 'The Star-Spangled Banner.' Andrew Jackson's victory at the Battle of New Orleans, ironically fought after the peace treaty was signed, made him a national hero. The Treaty of Ghent ended the war in a stalemate, but the conflict fostered American nationalism and showed the world that the young republic could defend itself.",
        primarySource: {
            quote: "Oh, say can you see by the dawn's early light, What so proudly we hailed at the twilight's last gleaming?",
            attribution: "Francis Scott Key, 'The Star-Spangled Banner'",
            context: "Written September 14, 1814, during British bombardment of Fort McHenry",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Star_Spangled_Banner_Flag_on_display_at_the_Smithsonian%27s_National_Museum_of_History_and_Technology%2C_around_1964.jpg/800px-Star_Spangled_Banner_Flag_on_display_at_the_Smithsonian%27s_National_Museum_of_History_and_Technology%2C_around_1964.jpg",
            imageCaption: "The Star-Spangled Banner flag that flew over Fort McHenry"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country did the United States fight in the War of 1812?",
                options: ["France", "Spain", "Great Britain", "Canada"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who wrote 'The Star-Spangled Banner' during this war?",
                options: ["George Washington", "Francis Scott Key", "Andrew Jackson", "James Madison"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What treaty ended the War of 1812?",
                options: ["Treaty of Paris", "Treaty of Ghent", "Treaty of Versailles", "Treaty of Washington"],
                correct: 1
            }
        ]
    },
    {
        id: 26,
        title: "The Monroe Doctrine (1823)",
        text: "On December 2, 1823, President James Monroe outlined a foreign policy principle that would shape American diplomacy for nearly two centuries. The Monroe Doctrine declared that the Western Hemisphere was closed to further European colonization and that any European attempt to interfere in the Americas would be viewed as a hostile act. In return, the United States pledged not to interfere in European affairs or existing European colonies. Though America lacked the military power to enforce this doctrine initially, it reflected growing confidence and assertiveness. The doctrine was invoked numerous times, notably during the Roosevelt Corollary (1904) which justified American intervention in Latin America, and during the Cuban Missile Crisis (1962). It established America's sphere of influence in the Western Hemisphere.",
        primarySource: {
            quote: "The American continents... are henceforth not to be considered as subjects for future colonization by any European powers.",
            attribution: "President James Monroe",
            context: "State of the Union Address, December 2, 1823",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/James_Monroe_White_House_portrait_1819.jpg/800px-James_Monroe_White_House_portrait_1819.jpg",
            imageCaption: "President James Monroe (official portrait, 1819)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president announced the Monroe Doctrine?",
                options: ["Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What did the Monroe Doctrine primarily address?",
                options: ["Slavery", "European colonization in the Americas", "Native American rights", "Westward expansion"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "In what year was the Monroe Doctrine announced?",
                options: ["1820", "1823", "1825", "1830"],
                correct: 1
            }
        ]
    },
    {
        id: 27,
        title: "The Erie Canal (1825)",
        text: "Completed in 1825, the Erie Canal was a monumental engineering achievement that transformed American commerce and settlement patterns. The 363-mile waterway connected the Hudson River at Albany to Lake Erie at Buffalo, creating a continuous water route from the Atlantic Ocean to the Great Lakes. Championed by New York Governor DeWitt Clinton and built largely by immigrant labor, the canal reduced transportation costs by 95% and travel time from weeks to days. New York City became America's premier commercial center, and cities like Buffalo, Rochester, and Syracuse flourished along the canal route. The canal's success sparked a 'canal craze' across America and demonstrated the power of internal improvements to drive economic development. It facilitated westward migration and the movement of agricultural products to eastern markets.",
        primarySource: {
            quote: "Clinton's Ditch",
            attribution: "Critics' derisive nickname for the Erie Canal",
            context: "Used during construction, 1817-1825, before the canal proved tremendously successful",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Erie_Canal_Map_1840.jpg/800px-Erie_Canal_Map_1840.jpg",
            imageCaption: "Map of the Erie Canal, 1840"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What two bodies of water did the Erie Canal connect?",
                options: ["Mississippi River and Gulf of Mexico", "Hudson River and Lake Erie", "Potomac River and Chesapeake Bay", "Ohio River and Lake Michigan"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year was the Erie Canal completed?",
                options: ["1820", "1825", "1830", "1835"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which New York governor championed the construction of the Erie Canal?",
                options: ["Martin Van Buren", "DeWitt Clinton", "Aaron Burr", "Daniel Tompkins"],
                correct: 1
            }
        ]
    },
    {
        id: 28,
        title: "Indian Removal Act (1830)",
        text: "President Andrew Jackson signed the Indian Removal Act on May 28, 1830, authorizing the federal government to negotiate treaties that exchanged Native American tribal lands in the eastern states for territories west of the Mississippi River. Though presented as voluntary relocation, the policy resulted in forced removal of tens of thousands of Native Americans. The Cherokee, Creek, Seminole, Chickasaw, and Choctaw nations—called the 'Five Civilized Tribes'—were particularly affected. The Cherokee resisted, taking their case to the Supreme Court and winning in Worcester v. Georgia (1832), but Jackson ignored the ruling. The subsequent Trail of Tears saw thousands die during forced marches west. The act reflected American expansionism and racism, clearing millions of acres for white settlement and cotton cultivation while devastating Native American communities.",
        primarySource: {
            quote: "John Marshall has made his decision; now let him enforce it!",
            attribution: "Attributed to President Andrew Jackson",
            context: "Response to Supreme Court ruling in Worcester v. Georgia favoring Cherokee rights, 1832",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Indian_Removal_Act.jpg/800px-Indian_Removal_Act.jpg",
            imageCaption: "Document of the Indian Removal Act, 1830"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president signed the Indian Removal Act?",
                options: ["Thomas Jefferson", "James Monroe", "Andrew Jackson", "Martin Van Buren"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "In what year was the Indian Removal Act passed?",
                options: ["1825", "1830", "1835", "1840"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which Supreme Court case ruled in favor of Cherokee rights but was ignored?",
                options: ["Marbury v. Madison", "McCulloch v. Maryland", "Worcester v. Georgia", "Dred Scott v. Sandford"],
                correct: 2
            }
        ]
    },
    {
        id: 29,
        title: "The Alamo (1836)",
        text: "The Battle of the Alamo was a pivotal event in the Texas Revolution, fought from February 23 to March 6, 1836. Approximately 200 Texan defenders, including legendary figures like Davy Crockett, Jim Bowie, and William B. Travis, held the Alamo mission in San Antonio against a Mexican force of several thousand led by General Antonio López de Santa Anna. After a 13-day siege, Mexican forces overwhelmed the defenders, killing nearly everyone inside. Though a military defeat, the battle became a powerful symbol of resistance. 'Remember the Alamo!' became the rallying cry for Texan forces, who defeated Santa Anna's army at the Battle of San Jacinto six weeks later, securing Texas independence. The Alamo represents courage and sacrifice in American mythology, though its role in defending slavery complicates its legacy.",
        primarySource: {
            quote: "I shall never surrender or retreat... Victory or Death.",
            attribution: "Lt. Colonel William B. Travis",
            context: "Letter from the Alamo, February 24, 1836, appealing for reinforcements",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/The_Alamo_church.jpg/800px-The_Alamo_church.jpg",
            imageCaption: "The Alamo mission in San Antonio, Texas"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Battle of the Alamo occur?",
                options: ["1830", "1836", "1840", "1845"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which legendary frontiersman died defending the Alamo?",
                options: ["Daniel Boone", "Davy Crockett", "Kit Carson", "Buffalo Bill"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who commanded the Mexican forces at the Alamo?",
                options: ["Benito Juárez", "Antonio López de Santa Anna", "Porfirio Díaz", "Pancho Villa"],
                correct: 1
            }
        ]
    },
    {
        id: 30,
        title: "The Seneca Falls Convention (1848)",
        text: "The Seneca Falls Convention, held July 19-20, 1848, in Seneca Falls, New York, marked the beginning of the organized women's rights movement in America. Organized by Elizabeth Cady Stanton and Lucretia Mott, about 300 people attended, including 40 men. The convention produced the Declaration of Sentiments, modeled after the Declaration of Independence, which proclaimed that 'all men and women are created equal' and listed grievances against male-dominated society. The document demanded equal rights in education, employment, property ownership, and voting. Of twelve resolutions, only the call for women's suffrage failed to pass unanimously, with even some supporters considering it too radical. The convention launched a movement that would culminate in the 19th Amendment in 1920, though many pioneers like Stanton wouldn't live to see it.",
        primarySource: {
            quote: "We hold these truths to be self-evident: that all men and women are created equal.",
            attribution: "Declaration of Sentiments",
            context: "Seneca Falls Convention, July 19-20, 1848",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Elizabeth_Cady_Stanton_seated.jpg/800px-Elizabeth_Cady_Stanton_seated.jpg",
            imageCaption: "Elizabeth Cady Stanton, key organizer of the Seneca Falls Convention"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What movement did the Seneca Falls Convention launch?",
                options: ["Abolitionist movement", "Women's rights movement", "Temperance movement", "Progressive movement"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who were the two main organizers of the Seneca Falls Convention?",
                options: ["Susan B. Anthony and Harriet Tubman", "Elizabeth Cady Stanton and Lucretia Mott", "Sojourner Truth and Ida B. Wells", "Jane Addams and Alice Paul"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What document was produced at the Seneca Falls Convention?",
                options: ["Declaration of Independence", "Declaration of Sentiments", "Women's Manifesto", "Equal Rights Amendment"],
                correct: 1
            }
        ]
    },
    {
        id: 31,
        title: "The California Gold Rush (1848-1855)",
        text: "The discovery of gold at Sutter's Mill in Coloma, California, on January 24, 1848, triggered one of the largest migrations in American history. News of the discovery spread rapidly, and by 1849, approximately 300,000 people—called 'forty-niners'—had rushed to California from across America and around the world. The Gold Rush transformed California from a sparsely populated territory to a booming region that achieved statehood in 1850. While a few struck it rich, most miners found little gold, and merchants supplying miners often made more money than prospectors. The influx devastated Native American populations through disease, violence, and displacement. The Gold Rush accelerated westward expansion, spurred development of San Francisco, and contributed to America's economic growth, but its legacy includes environmental damage and cultural conflict.",
        primarySource: {
            quote: "Gold! Gold! Gold from the American River!",
            attribution: "Sam Brannan",
            context: "Announcement in San Francisco, May 1848, that triggered the Gold Rush",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/California_gold_rush_handbill.jpg/800px-California_gold_rush_handbill.jpg",
            imageCaption: "Gold Rush advertisement encouraging migration to California"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the California Gold Rush begin?",
                options: ["1845", "1848", "1850", "1855"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What were people who rushed to California in 1849 called?",
                options: ["Pioneers", "Prospectors", "Forty-niners", "Argonauts"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Where was gold first discovered that started the California Gold Rush?",
                options: ["San Francisco Bay", "Sacramento River", "Sutter's Mill", "Yosemite Valley"],
                correct: 2
            }
        ]
    },
    {
        id: 32,
        title: "The Compromise of 1850",
        text: "The Compromise of 1850 was a package of five bills designed to defuse tensions between slave and free states following the Mexican-American War and California's application for statehood. Crafted by Senator Henry Clay and pushed through Congress by Senator Stephen Douglas after Clay's health failed, the compromise admitted California as a free state, organized Utah and New Mexico territories with popular sovereignty on slavery, abolished the slave trade in Washington D.C., enacted a strict Fugitive Slave Law, and settled the Texas-New Mexico boundary dispute. The Fugitive Slave Law, requiring citizens to assist in capturing runaway slaves, particularly inflamed Northern opposition to slavery. While the compromise temporarily preserved the Union, it ultimately failed to resolve the fundamental conflict over slavery's expansion, postponing but not preventing the Civil War.",
        primarySource: {
            quote: "I have heard something said about allegiance to the South. I know no South, no North, no East, no West, to which I owe any allegiance.",
            attribution: "Senator Henry Clay",
            context: "Speech supporting the Compromise, February 1850",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Henry_Clay_1849.jpg/800px-Henry_Clay_1849.jpg",
            imageCaption: "Senator Henry Clay, architect of the Compromise of 1850"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What state was admitted as free under the Compromise of 1850?",
                options: ["Texas", "California", "Oregon", "Kansas"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which senator crafted the Compromise of 1850?",
                options: ["Daniel Webster", "John Calhoun", "Henry Clay", "Jefferson Davis"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What controversial law was part of the Compromise requiring citizens to help capture runaway slaves?",
                options: ["Slave Trade Act", "Fugitive Slave Law", "Kansas-Nebraska Act", "Personal Liberty Law"],
                correct: 1
            }
        ]
    },
    {
        id: 33,
        title: "Uncle Tom's Cabin (1852)",
        text: "Harriet Beecher Stowe's novel 'Uncle Tom's Cabin' was published in 1852 and became the best-selling novel of the 19th century. The book depicted the harsh realities of slavery through the stories of Uncle Tom, Eliza, and other enslaved people. Stowe wrote the novel in response to the Fugitive Slave Act of 1850, which required Northerners to participate in the capture of escaped slaves. The book profoundly influenced Northern public opinion, humanizing enslaved people and galvanizing antislavery sentiment. It sold 300,000 copies in its first year and was adapted for stage performances that reached millions more. While criticized for racial stereotypes and sentimentality, the book's political impact was enormous. Legend has it that when Abraham Lincoln met Stowe in 1862, he said, 'So you're the little woman who wrote the book that started this great war.'",
        primarySource: {
            quote: "So you're the little woman who wrote the book that started this great war!",
            attribution: "Attributed to President Abraham Lincoln",
            context: "Upon meeting Harriet Beecher Stowe, 1862 (possibly apocryphal)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Uncle_Tom%27s_Cabin_first_edition_cover.jpg/800px-Uncle_Tom%27s_Cabin_first_edition_cover.jpg",
            imageCaption: "First edition cover of Uncle Tom's Cabin, 1852"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who wrote 'Uncle Tom's Cabin'?",
                options: ["Harriet Tubman", "Harriet Beecher Stowe", "Frederick Douglass", "Sojourner Truth"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What year was 'Uncle Tom's Cabin' published?",
                options: ["1850", "1852", "1854", "1860"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What law prompted Harriet Beecher Stowe to write the novel?",
                options: ["Missouri Compromise", "Fugitive Slave Act", "Kansas-Nebraska Act", "Dred Scott decision"],
                correct: 1
            }
        ]
    },
    {
        id: 34,
        title: "The Kansas-Nebraska Act (1854)",
        text: "The Kansas-Nebraska Act, signed by President Franklin Pierce in May 1854, created the territories of Kansas and Nebraska and allowed settlers in those territories to decide whether to permit slavery through popular sovereignty. Introduced by Senator Stephen Douglas, the act repealed the Missouri Compromise of 1820, which had prohibited slavery north of the 36°30' line. The legislation sparked violent conflict known as 'Bleeding Kansas' as pro-slavery and antislavery settlers rushed to the territory to influence the outcome. The violence foreshadowed the Civil War and destroyed the Whig Party while giving birth to the Republican Party, founded specifically to oppose slavery's expansion. The act demonstrated that compromise on slavery was becoming impossible and accelerated the nation's march toward war.",
        primarySource: {
            quote: "The storm will soon cease and the people of the country will rally to the support of the principle of popular sovereignty.",
            attribution: "Senator Stephen Douglas",
            context: "Defending the Kansas-Nebraska Act, 1854",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Stephen_A_Douglas.jpg/800px-Stephen_A_Douglas.jpg",
            imageCaption: "Senator Stephen Douglas, author of the Kansas-Nebraska Act"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the Kansas-Nebraska Act allow settlers to decide?",
                options: ["Tax rates", "Whether to permit slavery", "Land ownership rules", "Voting rights"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What violent conflict resulted from the Kansas-Nebraska Act?",
                options: ["Border Wars", "Bleeding Kansas", "Kansas Uprising", "Prairie Wars"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which earlier compromise did the Kansas-Nebraska Act repeal?",
                options: ["Compromise of 1850", "Missouri Compromise", "Three-Fifths Compromise", "Connecticut Compromise"],
                correct: 1
            }
        ]
    },
    {
        id: 35,
        title: "Dred Scott v. Sandford (1857)",
        text: "On March 6, 1857, the Supreme Court issued one of its most infamous decisions in Dred Scott v. Sandford. Dred Scott, an enslaved man, sued for his freedom, arguing that residence in free territories made him free. Chief Justice Roger Taney's majority opinion ruled that African Americans, whether enslaved or free, were not citizens and had no standing to sue in federal court. The Court also declared that Congress had no power to prohibit slavery in federal territories, effectively invalidating the Missouri Compromise. The decision inflamed sectional tensions, energized the antislavery movement, and boosted Abraham Lincoln's political career. Northern Republicans denounced the ruling, while Southerners celebrated it. The decision is now considered one of the Court's worst, contributing directly to the Civil War and ultimately being overturned by the 13th and 14th Amendments.",
        primarySource: {
            quote: "[African Americans] had no rights which the white man was bound to respect.",
            attribution: "Chief Justice Roger Taney",
            context: "Dred Scott v. Sandford decision, March 6, 1857",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Dred_Scott_photograph_%28circa_1857%29.jpg/800px-Dred_Scott_photograph_%28circa_1857%29.jpg",
            imageCaption: "Dred Scott, circa 1857"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did Dred Scott sue for?",
                options: ["Land ownership", "His freedom", "Voting rights", "Compensation"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year was the Dred Scott decision issued?",
                options: ["1854", "1857", "1860", "1863"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who was the Chief Justice who wrote the majority opinion?",
                options: ["John Marshall", "Roger Taney", "Salmon Chase", "Morrison Waite"],
                correct: 1
            }
        ]
    },
    {
        id: 36,
        title: "John Brown's Raid on Harpers Ferry (1859)",
        text: "On October 16, 1859, abolitionist John Brown led 21 men in a raid on the federal armory at Harpers Ferry, Virginia (now West Virginia), intending to spark a slave rebellion. Brown hoped to seize weapons and arm enslaved people throughout the South. The raid failed when local militia and U.S. Marines led by Colonel Robert E. Lee trapped Brown's forces. Ten of Brown's men were killed, including two of his sons, and Brown was captured, tried for treason, and hanged on December 2, 1859. While Brown's raid failed militarily, it had enormous political impact. Southerners saw it as evidence of Northern aggression, while many Northerners came to view Brown as a martyr. His raid deepened sectional divisions and moved the nation closer to war. Ralph Waldo Emerson said Brown's execution would 'make the gallows as glorious as the cross.'",
        primarySource: {
            quote: "I, John Brown, am now quite certain that the crimes of this guilty land will never be purged away but with blood.",
            attribution: "John Brown",
            context: "Note handed to a guard on the way to his execution, December 2, 1859",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/John_Brown_portrait%2C_1859.jpg/800px-John_Brown_portrait%2C_1859.jpg",
            imageCaption: "John Brown, photographed in 1859"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did John Brown raid in 1859?",
                options: ["A plantation", "A federal armory", "A courthouse", "A bank"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Where was the armory that John Brown raided located?",
                options: ["Richmond, Virginia", "Charleston, South Carolina", "Harpers Ferry, Virginia", "Atlanta, Georgia"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which future Confederate general led the Marines who captured John Brown?",
                options: ["Stonewall Jackson", "Robert E. Lee", "J.E.B. Stuart", "James Longstreet"],
                correct: 1
            }
        ]
    },
    {
        id: 37,
        title: "The Election of 1860",
        text: "The presidential election of 1860 was one of the most consequential in American history, essentially serving as a referendum on slavery and triggering Southern secession. The Democratic Party split along sectional lines, with Northern Democrats nominating Stephen Douglas and Southern Democrats nominating John Breckinridge. The Constitutional Union Party nominated John Bell, while Republicans chose Abraham Lincoln. Lincoln won the election with only 40% of the popular vote, carrying every free state but appearing on no Southern ballots. His victory without a single Southern electoral vote convinced many Southerners that their interests could no longer be protected within the Union. South Carolina seceded in December 1860, followed by six other states before Lincoln's inauguration. The election demonstrated the collapse of national political parties and the impossibility of compromising on slavery.",
        primarySource: {
            quote: "A house divided against itself cannot stand. I believe this government cannot endure, permanently half slave and half free.",
            attribution: "Abraham Lincoln",
            context: "House Divided speech, June 16, 1858",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/800px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
            imageCaption: "Abraham Lincoln, photographed in 1860"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who won the presidential election of 1860?",
                options: ["Stephen Douglas", "Abraham Lincoln", "John Breckinridge", "John Bell"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which party did Abraham Lincoln represent?",
                options: ["Democratic", "Whig", "Republican", "Constitutional Union"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which state was the first to secede after Lincoln's election?",
                options: ["Georgia", "Virginia", "South Carolina", "Alabama"],
                correct: 2
            }
        ]
    },
    {
        id: 38,
        title: "Fort Sumter and the Start of the Civil War (1861)",
        text: "The Civil War began on April 12, 1861, when Confederate forces under General P.G.T. Beauregard fired on Fort Sumter, a federal installation in Charleston Harbor, South Carolina. The fort was commanded by Major Robert Anderson, who had limited supplies and manpower. President Lincoln had faced a dilemma: resupplying the fort risked war, but abandoning it would acknowledge Confederate independence. Lincoln chose to resupply, and Confederate President Jefferson Davis ordered the attack before supplies arrived. After 34 hours of bombardment, Anderson surrendered. Remarkably, no one was killed during the battle itself (though two Union soldiers died in an accidental explosion during the surrender ceremony). The attack on Fort Sumter united Northern public opinion and led Lincoln to call for 75,000 volunteers, which prompted four more Southern states to secede. The war that many expected to last weeks would continue for four bloody years.",
        primarySource: {
            quote: "In your hands, my dissatisfied fellow-countrymen, and not in mine, is the momentous issue of civil war.",
            attribution: "Abraham Lincoln",
            context: "First Inaugural Address, March 4, 1861",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fort_Sumter_storm_flag_1861.png/800px-Fort_Sumter_storm_flag_1861.png",
            imageCaption: "The flag that flew over Fort Sumter during the bombardment"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Civil War begin?",
                options: ["1860", "1861", "1862", "1863"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which fort was attacked to start the Civil War?",
                options: ["Fort Monroe", "Fort Sumter", "Fort McHenry", "Fort Ticonderoga"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who commanded Confederate forces at Fort Sumter?",
                options: ["Robert E. Lee", "Stonewall Jackson", "P.G.T. Beauregard", "Jefferson Davis"],
                correct: 2
            }
        ]
    },
    {
        id: 39,
        title: "The Battle of Antietam (1862)",
        text: "The Battle of Antietam, fought on September 17, 1862, near Sharpsburg, Maryland, was the bloodiest single day in American military history. Over 22,000 soldiers were killed, wounded, or missing. General Robert E. Lee's Army of Northern Virginia invaded Maryland, hoping a victory on Union soil would encourage foreign recognition and Northern peace Democrats. General George McClellan's Army of the Potomac intercepted Lee. The battle raged from dawn to dusk across Miller's Cornfield, the Sunken Road (later called Bloody Lane), and Burnside's Bridge. Though tactically inconclusive, Lee withdrew to Virginia, giving Lincoln the victory he needed to issue the Emancipation Proclamation. The battle also ended Confederate hopes for British and French recognition. Antietam transformed the war's purpose from preserving the Union to also ending slavery.",
        primarySource: {
            quote: "The air was full of the hiss of bullets and the hurtle of grape-shot. The mental strain was so great that I saw at that moment the singular effect mentioned, I think, in the life of Goethe on a similar occasion—the whole landscape for an instant turned slightly red.",
            attribution: "Union General Joseph Hooker",
            context: "Describing the battle at Antietam, September 17, 1862",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Antietam_Cornfield.jpg/800px-Antietam_Cornfield.jpg",
            imageCaption: "The Cornfield at Antietam, scene of intense fighting"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What distinction does the Battle of Antietam hold?",
                options: ["Longest battle", "Bloodiest single day", "First battle of the war", "Last battle of the war"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which Confederate general commanded forces at Antietam?",
                options: ["Stonewall Jackson", "Robert E. Lee", "P.G.T. Beauregard", "James Longstreet"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What major proclamation did Lincoln issue after Antietam?",
                options: ["Gettysburg Address", "Emancipation Proclamation", "Amnesty Proclamation", "Reconstruction Proclamation"],
                correct: 1
            }
        ]
    },
    {
        id: 40,
        title: "The Emancipation Proclamation (1863)",
        text: "President Abraham Lincoln issued the Emancipation Proclamation on January 1, 1863, declaring that all enslaved people in Confederate-held territory were free. Lincoln had waited for a Union military victory to make this announcement, which came at Antietam. The proclamation didn't free enslaved people in border states loyal to the Union or in Confederate areas already under Union control. Despite these limitations, the Emancipation Proclamation fundamentally transformed the Civil War. It made ending slavery an official war aim alongside preserving the Union, preventing European powers from supporting the Confederacy, and allowed African Americans to serve in the Union military. Nearly 200,000 Black soldiers and sailors would fight for the Union. While the proclamation was a war measure, it paved the way for the 13th Amendment, which permanently abolished slavery throughout the United States.",
        primarySource: {
            quote: "And by virtue of the power, and for the purpose aforesaid, I do order and declare that all persons held as slaves within said designated States, and parts of States, are, and henceforward shall be free.",
            attribution: "Abraham Lincoln, Emancipation Proclamation",
            context: "January 1, 1863",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Emancipation_Proclamation.jpg/800px-Emancipation_Proclamation.jpg",
            imageCaption: "The Emancipation Proclamation document"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When did the Emancipation Proclamation take effect?",
                options: ["July 4, 1862", "September 17, 1862", "January 1, 1863", "November 19, 1863"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Where did the Emancipation Proclamation free enslaved people?",
                options: ["Throughout the entire United States", "In Confederate-held territory", "Only in border states", "Only in Union states"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "After which battle did Lincoln issue the preliminary Emancipation Proclamation?",
                options: ["Gettysburg", "Antietam", "Vicksburg", "Bull Run"],
                correct: 1
            }
        ]
    },
    {
        id: 41,
        title: "The Battle of Gettysburg (1863)",
        text: "The Battle of Gettysburg, fought July 1-3, 1863, was the war's turning point and its largest battle. General Robert E. Lee's second invasion of the North met General George Meade's Army of the Potomac in the small Pennsylvania town. Three days of fierce fighting included Little Round Top, the Peach Orchard, Devil's Den, and the climactic Pickett's Charge on July 3. Lee ordered nearly 12,500 Confederate soldiers across open fields toward Union positions on Cemetery Ridge. Union artillery and rifle fire devastated the attack, repulsing the assault with massive Confederate casualties. Lee retreated to Virginia, never again able to mount a major offensive. Combined with the Union victory at Vicksburg the same week, Gettysburg marked the beginning of the end for the Confederacy. The battle caused approximately 51,000 casualties, making it one of the war's bloodiest engagements.",
        primarySource: {
            quote: "It is all my fault. I thought my men were invincible.",
            attribution: "General Robert E. Lee",
            context: "After Pickett's Charge failed, July 3, 1863",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Battle_of_Gettysburg%2C_by_Currier_and_Ives.png/800px-Battle_of_Gettysburg%2C_by_Currier_and_Ives.png",
            imageCaption: "Battle of Gettysburg, Currier and Ives print"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what state did the Battle of Gettysburg take place?",
                options: ["Virginia", "Maryland", "Pennsylvania", "New York"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many days did the Battle of Gettysburg last?",
                options: ["One day", "Two days", "Three days", "Four days"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the famous Confederate assault on the final day called?",
                options: ["Lee's Charge", "Pickett's Charge", "Longstreet's Attack", "Hood's Assault"],
                correct: 1
            }
        ]
    },
    {
        id: 42,
        title: "The Siege of Vicksburg (1863)",
        text: "The Siege of Vicksburg was a decisive Union victory that gave the North control of the Mississippi River. From May 18 to July 4, 1863, General Ulysses S. Grant besieged the Confederate fortress city of Vicksburg, Mississippi. Grant had tried multiple approaches to capture the city before settling on a siege. His forces surrounded Vicksburg, bombarding it constantly while cutting off supplies. Civilians and soldiers alike faced starvation, some living in caves to escape the shelling. On July 4, Confederate General John Pemberton surrendered, giving Grant nearly 30,000 prisoners. Combined with the fall of Port Hudson days later, the Union controlled the entire Mississippi River, splitting the Confederacy in two and denying it vital supply routes. Lincoln said, 'The Father of Waters again goes unvexed to the sea.' Grant's success at Vicksburg led to his promotion and eventual command of all Union armies.",
        primarySource: {
            quote: "The Father of Waters again goes unvexed to the sea.",
            attribution: "President Abraham Lincoln",
            context: "Upon learning of Vicksburg's fall, July 1863",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Vicksburg_Siege_1863.jpg/800px-Vicksburg_Siege_1863.jpg",
            imageCaption: "Map of the Siege of Vicksburg"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which Union general besieged Vicksburg?",
                options: ["William Sherman", "George McClellan", "Ulysses S. Grant", "George Meade"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Control of what river did the fall of Vicksburg secure for the Union?",
                options: ["Ohio River", "Potomac River", "Mississippi River", "Tennessee River"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "On what date did Vicksburg surrender?",
                options: ["July 1, 1863", "July 3, 1863", "July 4, 1863", "July 7, 1863"],
                correct: 2
            }
        ]
    },
    {
        id: 43,
        title: "Sherman's March to the Sea (1864)",
        text: "From November 15 to December 21, 1864, General William Tecumseh Sherman led 62,000 Union soldiers on a destructive march from Atlanta to Savannah, Georgia. Sherman's army cut a swath of destruction 60 miles wide and 300 miles long through the heart of the Confederacy. They burned military targets, destroyed railroads, seized crops and livestock, and freed enslaved people. Sherman pioneered 'total war' tactics, targeting not just armies but the South's economic capacity and civilian morale. His soldiers lived off the land, foraging and often destroying what they couldn't use. While controversial even then, Sherman believed breaking Southern willpower was necessary to end the war. The march demonstrated the Confederacy's inability to defend itself and hastened the war's end. Sherman presented the city of Savannah to Lincoln as a Christmas gift.",
        primarySource: {
            quote: "I can make Georgia howl!",
            attribution: "General William T. Sherman",
            context: "Message to Grant before beginning the March to the Sea, 1864",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/William-Tecumseh-Sherman.jpg/800px-William-Tecumseh-Sherman.jpg",
            imageCaption: "General William Tecumseh Sherman"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which Union general led the March to the Sea?",
                options: ["Ulysses S. Grant", "George McClellan", "William Sherman", "Philip Sheridan"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which two Georgia cities did Sherman's march connect?",
                options: ["Macon and Columbus", "Atlanta and Savannah", "Augusta and Brunswick", "Athens and Albany"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What military strategy did Sherman pioneer during this march?",
                options: ["Blitzkrieg", "Total war", "Guerrilla warfare", "Siege warfare"],
                correct: 1
            }
        ]
    },
    {
        id: 44,
        title: "Lee's Surrender at Appomattox (1865)",
        text: "On April 9, 1865, General Robert E. Lee surrendered the Army of Northern Virginia to General Ulysses S. Grant at Appomattox Court House, Virginia, effectively ending the Civil War. After the fall of Richmond and Petersburg, Lee's army retreated west, hoping to link up with other Confederate forces. Grant's army pursued and eventually surrounded Lee's starving, exhausted troops. Realizing further resistance was futile, Lee met Grant at Wilmer McLean's house to discuss terms. Grant offered generous conditions: Confederate soldiers could return home and wouldn't be prosecuted for treason; officers could keep their sidearms; and soldiers who owned horses could keep them for spring planting. Lee accepted, sparing the nation a protracted guerrilla war. Though some Confederate forces remained in the field, Lee's surrender marked the war's symbolic end after four years that cost over 600,000 American lives.",
        primarySource: {
            quote: "The war is over. The Rebels are our countrymen again.",
            attribution: "General Ulysses S. Grant",
            context: "To Union soldiers celebrating Lee's surrender, April 9, 1865",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Robert_E_Lee_surrenders_at_Appomattox_Court_House%2C_1865.jpg/800px-Robert_E_Lee_surrenders_at_Appomattox_Court_House%2C_1865.jpg",
            imageCaption: "Lee's surrender at Appomattox Court House (painting)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "To whom did Robert E. Lee surrender?",
                options: ["Abraham Lincoln", "William Sherman", "Ulysses S. Grant", "George Meade"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Where did Lee surrender to Grant?",
                options: ["Richmond", "Appomattox Court House", "Petersburg", "Gettysburg"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "On what date did Lee surrender?",
                options: ["April 5, 1865", "April 9, 1865", "April 14, 1865", "April 18, 1865"],
                correct: 1
            }
        ]
    },
    {
        id: 45,
        title: "Lincoln's Assassination (1865)",
        text: "On April 14, 1865, just five days after Lee's surrender, President Abraham Lincoln was assassinated while attending a play at Ford's Theatre in Washington, D.C. John Wilkes Booth, a Confederate sympathizer and famous actor, shot Lincoln in the back of the head during a performance of 'Our American Cousin.' Booth jumped to the stage, breaking his leg, and escaped on horseback shouting 'Sic semper tyrannis!' (Thus always to tyrants). Lincoln was carried to a boarding house across the street, where he died the next morning at 7:22 a.m. The assassination was part of a larger conspiracy to kill top Union officials; Secretary of State William Seward was also attacked but survived. Booth was tracked down and killed on April 26. Lincoln's death elevated him to martyrdom and complicated Reconstruction, as his successor Andrew Johnson lacked Lincoln's political skill and commitment to civil rights.",
        primarySource: {
            quote: "Now he belongs to the ages.",
            attribution: "Secretary of War Edwin Stanton",
            context: "Upon Lincoln's death, April 15, 1865",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ford%27s_Theatre_2012.JPG/800px-Ford%27s_Theatre_2012.JPG",
            imageCaption: "Ford's Theatre, where Lincoln was assassinated"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who assassinated President Lincoln?",
                options: ["Lee Harvey Oswald", "John Wilkes Booth", "Charles Guiteau", "Leon Czolgosz"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Where was Lincoln when he was shot?",
                options: ["The White House", "Ford's Theatre", "A train station", "A parade"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many days after Lee's surrender was Lincoln assassinated?",
                options: ["Three days", "Five days", "One week", "Two weeks"],
                correct: 1
            }
        ]
    },
    {
        id: 46,
        title: "The 13th Amendment (1865)",
        text: "The 13th Amendment to the Constitution, ratified on December 6, 1865, abolished slavery throughout the United States. It states: 'Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States.' The amendment was the first of three Reconstruction Amendments (followed by the 14th and 15th). The Senate passed it on April 8, 1864, but the House initially defeated it. After Lincoln's re-election, he made passage a priority, and the House approved it on January 31, 1865. Lincoln signed it the next day, though presidential signatures aren't required for amendments. The amendment ended the legal basis for slavery that had existed since the nation's founding, though the exception for criminal punishment has been criticized as a loophole allowing forced labor through mass incarceration.",
        primarySource: {
            quote: "Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.",
            attribution: "13th Amendment to the U.S. Constitution",
            context: "Ratified December 6, 1865",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/13th_Amendment_Pg1of1_AC.jpg/800px-13th_Amendment_Pg1of1_AC.jpg",
            imageCaption: "The 13th Amendment"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the 13th Amendment abolish?",
                options: ["Poll taxes", "Slavery", "Alcohol", "Child labor"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year was the 13th Amendment ratified?",
                options: ["1863", "1864", "1865", "1866"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What exception to the slavery ban does the 13th Amendment include?",
                options: ["Military service", "Indentured servitude", "Punishment for crime", "Agricultural work"],
                correct: 2
            }
        ]
    },
    {
        id: 47,
        title: "The Transcontinental Railroad (1869)",
        text: "On May 10, 1869, the First Transcontinental Railroad was completed at Promontory Summit, Utah, when the Central Pacific and Union Pacific railroads met. The Central Pacific built eastward from Sacramento, California, employing thousands of Chinese immigrants who faced dangerous conditions blasting through the Sierra Nevada. The Union Pacific built westward from Omaha, Nebraska, largely employing Irish immigrants and Civil War veterans. The project, authorized by the Pacific Railway Acts of 1862 and 1864, received government support through land grants and bonds. Leland Stanford drove a ceremonial golden spike to mark completion. The railroad transformed America, reducing cross-country travel from months to days, facilitating commerce, and accelerating westward settlement. However, it also devastated Native American communities by enabling mass buffalo hunting and bringing settlers to traditional tribal lands.",
        primarySource: {
            quote: "Done!",
            attribution: "Telegraph message sent nationwide",
            context: "Announcing completion of the Transcontinental Railroad, May 10, 1869",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad_-_Restoration.jpg/800px-East_and_West_Shaking_hands_at_the_laying_of_last_rail_Union_Pacific_Railroad_-_Restoration.jpg",
            imageCaption: "Ceremony at Promontory Summit marking railroad completion"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year was the Transcontinental Railroad completed?",
                options: ["1865", "1869", "1873", "1880"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which two companies built the railroad from opposite directions?",
                options: ["Northern Pacific and Southern Pacific", "Central Pacific and Union Pacific", "Great Northern and Burlington", "Atlantic Pacific and Texas Pacific"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Where did the two railroad lines meet?",
                options: ["Salt Lake City, Utah", "Promontory Summit, Utah", "Reno, Nevada", "Cheyenne, Wyoming"],
                correct: 1
            }
        ]
    },
    {
        id: 48,
        title: "The 14th Amendment (1868)",
        text: "Ratified on July 9, 1868, the 14th Amendment fundamentally altered the Constitution by defining citizenship and guaranteeing equal protection under the law. It granted citizenship to all persons born or naturalized in the United States, including formerly enslaved people, overturning the Dred Scott decision. The amendment prohibited states from denying any person life, liberty, or property without due process of law, or denying equal protection of the laws. It also barred Confederate leaders from holding office unless pardoned by Congress. The 14th Amendment has become the basis for numerous Supreme Court decisions expanding civil rights and liberties, including Brown v. Board of Education (ending school segregation), Loving v. Virginia (legalizing interracial marriage), and Obergefell v. Hodges (legalizing same-sex marriage). It remains one of the Constitution's most important and frequently litigated amendments.",
        primarySource: {
            quote: "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside.",
            attribution: "14th Amendment to the U.S. Constitution, Section 1",
            context: "Ratified July 9, 1868",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/14th_Amendment_Pg1of3_AC.jpg/800px-14th_Amendment_Pg1of3_AC.jpg",
            imageCaption: "The 14th Amendment"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the 14th Amendment grant to all persons born in the United States?",
                options: ["Voting rights", "Citizenship", "Free education", "Property"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What Supreme Court decision did the 14th Amendment overturn?",
                options: ["Marbury v. Madison", "Dred Scott v. Sandford", "Plessy v. Ferguson", "McCulloch v. Maryland"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "In what year was the 14th Amendment ratified?",
                options: ["1865", "1866", "1868", "1870"],
                correct: 2
            }
        ]
    },
    {
        id: 49,
        title: "The 15th Amendment (1870)",
        text: "The 15th Amendment, ratified on February 3, 1870, prohibited federal and state governments from denying citizens the right to vote based on 'race, color, or previous condition of servitude.' The final of the three Reconstruction Amendments, it aimed to guarantee voting rights for African American men. The amendment's passage was contentious, with some advocating for broader language prohibiting all voting restrictions (including literacy tests and property requirements), while others wanted narrower protections. Women's suffrage advocates were disappointed it didn't include gender protections. While the amendment was a significant achievement, Southern states soon implemented poll taxes, literacy tests, grandfather clauses, and intimidation to disenfranchise Black voters. Not until the Voting Rights Act of 1965 would the 15th Amendment's promise begin to be fully realized.",
        primarySource: {
            quote: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.",
            attribution: "15th Amendment to the U.S. Constitution",
            context: "Ratified February 3, 1870",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Celebration_of_the_Fifteenth_Amendment.jpg/800px-Celebration_of_the_Fifteenth_Amendment.jpg",
            imageCaption: "Celebration of the 15th Amendment (commemorative print)"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the 15th Amendment protect?",
                options: ["Freedom of speech", "Voting rights", "Property rights", "Gun ownership"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which group was NOT granted voting rights by the 15th Amendment?",
                options: ["African American men", "Former slaves", "Women", "All races"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What year was the 15th Amendment ratified?",
                options: ["1868", "1869", "1870", "1871"],
                correct: 2
            }
        ]
    },
    {
        id: 50,
        title: "The Battle of Little Bighorn (1876)",
        text: "On June 25-26, 1876, the Battle of Little Bighorn—known to Native Americans as the Battle of Greasy Grass—saw Lieutenant Colonel George Armstrong Custer and over 260 soldiers of the 7th Cavalry killed by a coalition of Lakota Sioux, Northern Cheyenne, and Arapaho warriors. Led by Sitting Bull, Crazy Horse, and other leaders, Native forces had gathered in Montana Territory to resist forced relocation to reservations. Custer divided his regiment and attacked a much larger Native encampment than expected. His immediate command was wiped out in less than an hour. While a significant Native victory, it ultimately hastened military reprisals and the end of Native resistance on the Great Plains. By 1877, most survivors had surrendered or fled to Canada. The battle became legendary in American culture, often mischaracterized as 'Custer's Last Stand.'",
        primarySource: {
            quote: "Today is a good day to die.",
            attribution: "Attributed to Crazy Horse",
            context: "Before the Battle of Little Bighorn, June 25, 1876",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/George_Armstrong_Custer.jpg/800px-George_Armstrong_Custer.jpg",
            imageCaption: "Lieutenant Colonel George Armstrong Custer"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which U.S. military commander was killed at Little Bighorn?",
                options: ["William Sherman", "George Custer", "Philip Sheridan", "Nelson Miles"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which Native American leader was prominent at Little Bighorn?",
                options: ["Geronimo", "Chief Joseph", "Sitting Bull", "Tecumseh"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "In what year did the Battle of Little Bighorn occur?",
                options: ["1874", "1876", "1878", "1880"],
                correct: 1
            }
        ]
    },
    {
        id: 51,
        title: "The Invention of the Telephone (1876)",
        text: "On March 10, 1876, Alexander Graham Bell made the first successful telephone call, speaking the famous words 'Mr. Watson, come here, I want to see you' to his assistant Thomas Watson. Bell had been working on transmitting sound electrically, competing with other inventors including Elisha Gray, who filed a patent caveat the same day Bell filed his patent. The telephone revolutionized communication, transforming business, personal relationships, and society. Bell demonstrated his invention at the 1876 Centennial Exposition in Philadelphia, where it amazed visitors including Emperor Pedro II of Brazil. The Bell Telephone Company, founded in 1877, would become AT&T, one of the world's largest corporations. While debate continues about who truly invented the telephone, Bell received the patent and credit. The telephone's impact on American life and the global economy cannot be overstated.",
        primarySource: {
            quote: "Mr. Watson, come here, I want to see you.",
            attribution: "Alexander Graham Bell",
            context: "First words transmitted by telephone, March 10, 1876",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alexander_Graham_Bell.jpg/800px-Alexander_Graham_Bell.jpg",
            imageCaption: "Alexander Graham Bell, inventor of the telephone"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who is credited with inventing the telephone?",
                options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What were the first words spoken on the telephone?",
                options: ["Hello, can you hear me?", "Mr. Watson, come here, I want to see you", "The telephone works!", "Testing, one, two, three"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "In what year was the first successful telephone call made?",
                options: ["1874", "1876", "1878", "1880"],
                correct: 1
            }
        ]
    },
    {
        id: 52,
        title: "The Great Railroad Strike of 1877",
        text: "The Great Railroad Strike of 1877 was the first major nationwide labor strike in American history. It began on July 14 in Martinsburg, West Virginia, when Baltimore & Ohio Railroad workers protested wage cuts during an economic depression. The strike spread rapidly to Maryland, Pennsylvania, Illinois, and Missouri, halting rail traffic across the country. In some cities, state militia sympathized with strikers, forcing President Rutherford B. Hayes to deploy federal troops—the first time federal forces were used to break a strike. Violence erupted in Pittsburgh, Baltimore, and Chicago, resulting in over 100 deaths. The strike ended without achieving its immediate goals, but it awakened America to the power of organized labor and the harsh conditions faced by workers, spurring future labor movements.",
        primarySource: {
            quote: "The railroad strikers, as a rule, are good men, sober, intelligent, and industrious.",
            attribution: "President Rutherford B. Hayes",
            context: "Diary entry during the strike, July 1877",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/The_Great_Railroad_Strike_of_1877.jpg/800px-The_Great_Railroad_Strike_of_1877.jpg",
            imageCaption: "Violence during the Great Railroad Strike, Pittsburgh 1877"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What industry was the focus of the 1877 strike?",
                options: ["Steel", "Railroad", "Coal mining", "Textile"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What caused the Great Railroad Strike of 1877?",
                options: ["Unsafe conditions", "Wage cuts", "Long hours", "Child labor"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which president deployed federal troops during the strike?",
                options: ["Ulysses S. Grant", "Rutherford B. Hayes", "James Garfield", "Chester Arthur"],
                correct: 1
            }
        ]
    },
    {
        id: 53,
        title: "The Invention of the Light Bulb (1879)",
        text: "On October 21, 1879, Thomas Edison successfully tested a practical incandescent light bulb that burned for 13.5 hours. While Edison didn't invent the first electric light—dozens of inventors had created earlier versions—he developed the first commercially practical system, including the bulb, electrical distribution system, and power generation. Edison tested thousands of materials for filaments before finding that carbonized bamboo worked best. In 1882, he opened the Pearl Street Station in New York City, the first commercial electric power plant, bringing electric light to customers. Edison's work transformed daily life, extending productive hours beyond daylight, changing architecture and city planning, and launching the electrical age. His laboratories at Menlo Park, New Jersey, pioneered industrial research and development.",
        primarySource: {
            quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
            attribution: "Thomas Edison",
            context: "Describing his approach to invention",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Thomas_Edison2.jpg/800px-Thomas_Edison2.jpg",
            imageCaption: "Thomas Edison with an early light bulb"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who developed the first commercially practical light bulb?",
                options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "George Westinghouse"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year did Edison successfully test his incandescent bulb?",
                options: ["1877", "1879", "1881", "1883"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What material did Edison use for his successful filament?",
                options: ["Copper wire", "Platinum", "Carbonized bamboo", "Tungsten"],
                correct: 2
            }
        ]
    },
    {
        id: 54,
        title: "The Wounded Knee Massacre (1890)",
        text: "On December 29, 1890, U.S. Army troops killed approximately 300 Lakota Sioux at Wounded Knee Creek in South Dakota, marking the tragic end of the Indian Wars. The massacre occurred as the Army attempted to disarm a band of Lakota following the Ghost Dance movement, which promised Native peoples' deliverance from white oppression. When a shot was fired during the disarmament, soldiers opened fire with rifles and Hotchkiss guns, killing men, women, and children. Many victims were shot while fleeing or trying to surrender. Twenty-five soldiers also died, mostly from friendly fire. The massacre ended decades of armed resistance to U.S. expansion. It symbolizes the tragedy of Native American genocide and cultural destruction. In 1990, Congress formally expressed 'deep regret' for the massacre.",
        primarySource: {
            quote: "I did not know then how much was ended. When I look back now from this high hill of my old age, I can still see the butchered women and children lying heaped and scattered all along the crooked gulch.",
            attribution: "Black Elk, Oglala Lakota holy man",
            context: "Recalling the Wounded Knee Massacre in Black Elk Speaks, 1932",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Wounded_Knee_Mass_Grave.jpg/800px-Wounded_Knee_Mass_Grave.jpg",
            imageCaption: "Mass burial of Lakota dead after Wounded Knee"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Wounded Knee Massacre occur?",
                options: ["1876", "1880", "1890", "1900"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which Native American tribe was massacred at Wounded Knee?",
                options: ["Cherokee", "Apache", "Lakota Sioux", "Cheyenne"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how many Lakota were killed at Wounded Knee?",
                options: ["100", "200", "300", "500"],
                correct: 2
            }
        ]
    },
    {
        id: 55,
        title: "Ellis Island Opens (1892)",
        text: "On January 1, 1892, Ellis Island in New York Harbor opened as America's first federal immigration station. For the next 62 years, over 12 million immigrants passed through its gates, seeking new lives in America. Arrivals underwent medical and legal inspections; about 2% were denied entry. The peak year was 1907, when 1.25 million immigrants were processed. Ellis Island represented both American opportunity and the anxieties of the immigration experience. Immigrants from Southern and Eastern Europe, particularly Italians, Jews, and Slavs, comprised the majority. The process could be terrifying—families feared separation, and inspectors could deport those deemed likely to become 'public charges.' Ellis Island closed in 1954 and became a museum in 1990, symbolizing America's immigrant heritage.",
        primarySource: {
            quote: "Give me your tired, your poor, Your huddled masses yearning to breathe free.",
            attribution: "Emma Lazarus, 'The New Colossus'",
            context: "Poem inscribed on the Statue of Liberty, visible to Ellis Island arrivals, 1883",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ellis_island_1902.jpg/800px-Ellis_island_1902.jpg",
            imageCaption: "Ellis Island immigration station, circa 1902"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was Ellis Island's primary function?",
                options: ["Military base", "Immigration station", "Prison", "Hospital"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When did Ellis Island open as an immigration station?",
                options: ["1886", "1892", "1900", "1910"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many immigrants passed through Ellis Island during its operation?",
                options: ["5 million", "8 million", "12 million", "20 million"],
                correct: 2
            }
        ]
    },
    {
        id: 56,
        title: "Plessy v. Ferguson (1896)",
        text: "On May 18, 1896, the Supreme Court decided Plessy v. Ferguson, establishing the 'separate but equal' doctrine that would legitimize racial segregation for nearly 60 years. Homer Plessy, a mixed-race man, deliberately violated Louisiana's Separate Car Act by sitting in a whites-only railroad car. The Court ruled 7-1 that segregation was constitutional as long as separate facilities were equal. Justice John Marshall Harlan's lone dissent argued that 'the Constitution is colorblind' and predicted the decision would prove as harmful as Dred Scott. In reality, 'separate' was never 'equal'—facilities for Black Americans were invariably inferior. The ruling enabled Jim Crow laws across the South, enforcing segregation in schools, transportation, restaurants, and public spaces until Brown v. Board of Education overturned it in 1954.",
        primarySource: {
            quote: "Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.",
            attribution: "Justice John Marshall Harlan",
            context: "Lone dissent in Plessy v. Ferguson, May 18, 1896",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Separate_but_equal.jpg/800px-Separate_but_equal.jpg",
            imageCaption: "Segregated water fountains in the Jim Crow South"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What doctrine did Plessy v. Ferguson establish?",
                options: ["Separate but equal", "One person, one vote", "Clear and present danger", "Separate spheres"],
                correct: 0
            },
            {
                difficulty: "intermediate",
                question: "How did the Supreme Court rule in Plessy v. Ferguson?",
                options: ["Segregation was unconstitutional", "Segregation was constitutional if facilities were equal", "Only voting rights could be restricted", "States had no power over segregation"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which justice wrote the lone dissent in Plessy v. Ferguson?",
                options: ["Oliver Wendell Holmes", "John Marshall Harlan", "Louis Brandeis", "Benjamin Cardozo"],
                correct: 1
            }
        ]
    },
    {
        id: 57,
        title: "The Spanish-American War (1898)",
        text: "The Spanish-American War, fought from April to August 1898, marked America's emergence as a world power. Tensions over Cuba's independence struggle and the mysterious explosion of the USS Maine in Havana Harbor led to war. 'Yellow journalism' by newspapers owned by William Randolph Hearst and Joseph Pulitzer inflamed public opinion with sensational stories about Spanish atrocities. The war lasted only 10 weeks. American forces, including Theodore Roosevelt's Rough Riders, won quick victories in Cuba. The U.S. Navy destroyed Spanish fleets in the Philippines and Cuba. The Treaty of Paris gave the U.S. control of Puerto Rico, Guam, and the Philippines (purchased for $20 million), while Cuba gained nominal independence under U.S. influence. The war marked the beginning of American imperialism and overseas expansion.",
        primarySource: {
            quote: "Remember the Maine! To hell with Spain!",
            attribution: "Popular slogan",
            context: "Rallying cry after the USS Maine explosion, 1898",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wreck_of_USS_Maine.jpg/800px-Wreck_of_USS_Maine.jpg",
            imageCaption: "The wreck of the USS Maine in Havana Harbor"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country did the United States fight in 1898?",
                options: ["Mexico", "Spain", "Britain", "France"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What event sparked the Spanish-American War?",
                options: ["Attack on Pearl Harbor", "Sinking of the Lusitania", "Explosion of the USS Maine", "Zimmermann Telegram"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which territories did the U.S. acquire from Spain?",
                options: ["Cuba and Haiti", "Puerto Rico, Guam, and the Philippines", "Mexico and Central America", "Jamaica and Trinidad"],
                correct: 1
            }
        ]
    },
    {
        id: 58,
        title: "The Progressive Era Begins (1890s-1920s)",
        text: "The Progressive Era, spanning roughly from the 1890s to the 1920s, was a period of widespread social and political reform aimed at addressing problems created by industrialization, urbanization, and political corruption. Progressive reformers sought to curb corporate power, improve working conditions, expand democracy, and address social issues. Key achievements included antitrust legislation, food and drug safety laws, conservation of natural resources, women's suffrage, and direct election of senators. Prominent Progressives included presidents Theodore Roosevelt, William Howard Taft, and Woodrow Wilson, journalists known as 'muckrakers' like Ida Tarbell and Upton Sinclair, and activists like Jane Addams. While Progressives made significant reforms, the movement had limitations, including support for Prohibition and insufficient attention to racial justice.",
        primarySource: {
            quote: "The only man who makes no mistake is the man who does nothing.",
            attribution: "President Theodore Roosevelt",
            context: "Speech on progressive reform, 1903",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Theodore_Roosevelt%2C_by_John_Singer_Sargent%2C_1903.jpg/800px-Theodore_Roosevelt%2C_by_John_Singer_Sargent%2C_1903.jpg",
            imageCaption: "Theodore Roosevelt, Progressive president"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What era of reform spanned from the 1890s to 1920s?",
                options: ["The Gilded Age", "The Progressive Era", "The New Deal Era", "The Jazz Age"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What did Progressive reformers primarily aim to address?",
                options: ["Foreign policy", "Problems from industrialization", "Religious freedom", "Westward expansion"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who were investigative journalists who exposed corruption called?",
                options: ["Yellow journalists", "Muckrakers", "Populists", "Radicals"],
                correct: 1
            }
        ]
    },
    {
        id: 59,
        title: "The Wright Brothers' First Flight (1903)",
        text: "On December 17, 1903, Orville and Wilbur Wright achieved the first powered, sustained, and controlled airplane flight at Kitty Hawk, North Carolina. Orville piloted the first flight, which lasted 12 seconds and covered 120 feet. They made four flights that day; the longest lasted 59 seconds and covered 852 feet. The Wright brothers, bicycle mechanics from Dayton, Ohio, had studied aeronautics, built wind tunnels, and tested wing designs for years. Their key innovation was three-axis control, allowing pilots to steer the aircraft effectively. Initially, their achievement received little attention, but by 1908, they were demonstrating flights in the U.S. and Europe. Their invention revolutionized transportation, warfare, and commerce, shrinking the world and making air travel commonplace.",
        primarySource: {
            quote: "Success. Four flights Thursday morning. All against twenty-one mile wind. Started from level with engine power alone. Average speed through air thirty-one miles. Longest 57 seconds. Inform press. Home Christmas.",
            attribution: "Telegram from Orville Wright to his father",
            context: "December 17, 1903, announcing the successful flights",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Wright_First_Flight_1903Dec17_%28full_restore%29.jpg/800px-Wright_First_Flight_1903Dec17_%28full_restore%29.jpg",
            imageCaption: "The Wright brothers' first flight, December 17, 1903"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who made the first powered airplane flight?",
                options: ["Charles Lindbergh", "Amelia Earhart", "The Wright brothers", "Glenn Curtiss"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Where did the first airplane flight take place?",
                options: ["Dayton, Ohio", "Kitty Hawk, North Carolina", "San Diego, California", "Long Island, New York"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How long did the Wright brothers' first flight last?",
                options: ["8 seconds", "12 seconds", "30 seconds", "1 minute"],
                correct: 1
            }
        ]
    },
    {
        id: 60,
        title: "The San Francisco Earthquake (1906)",
        text: "On April 18, 1906, a massive earthquake struck San Francisco at 5:12 a.m., with an estimated magnitude of 7.9. The earthquake lasted less than a minute but devastated the city. However, fires caused by ruptured gas lines and overturned stoves proved even more destructive, burning for three days. Broken water mains hampered firefighting efforts. Over 3,000 people died and 80% of the city was destroyed. An estimated 400,000 people were left homeless. The disaster prompted major reforms in earthquake science, building codes, and disaster preparedness. San Francisco rebuilt rapidly, hosting the Panama-Pacific International Exposition in 1915 to showcase its recovery. The earthquake remains one of the worst natural disasters in American history and demonstrated both the vulnerability of urban areas and American resilience.",
        primarySource: {
            quote: "There is no water and still less dynamite, and we can't do anything.",
            attribution: "Fire Chief Dennis Sullivan",
            context: "Attempting to fight fires after the earthquake, April 18, 1906 (Sullivan died from injuries)",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/San_Francisco_Fire_1906.jpg/800px-San_Francisco_Fire_1906.jpg",
            imageCaption: "San Francisco burning after the 1906 earthquake"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What major city was destroyed by an earthquake in 1906?",
                options: ["Los Angeles", "San Francisco", "Seattle", "Portland"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What caused more damage than the earthquake itself?",
                options: ["Tsunami", "Fires", "Landslides", "Floods"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What percentage of San Francisco was destroyed?",
                options: ["50%", "60%", "70%", "80%"],
                correct: 3
            }
        ]
    },
    {
        id: 61,
        title: "The NAACP is Founded (1909)",
        text: "The National Association for the Advancement of Colored People (NAACP) was founded on February 12, 1909, Lincoln's birthday, in response to ongoing violence against African Americans and continued racial discrimination. Founded by a multiracial group including W.E.B. Du Bois, Ida B. Wells, Mary White Ovington, and others, the NAACP became America's most influential civil rights organization. Its strategy focused on legal challenges to segregation and discrimination, public education, and lobbying. The organization's Legal Defense Fund, led by Thurgood Marshall, won landmark victories including Brown v. Board of Education. The NAACP also fought lynching through publicity campaigns and lobbying for federal anti-lynching legislation. For over a century, the NAACP has been at the forefront of the struggle for racial justice in America.",
        primarySource: {
            quote: "The problem of the twentieth century is the problem of the color line.",
            attribution: "W.E.B. Du Bois",
            context: "The Souls of Black Folk, 1903, six years before co-founding the NAACP",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/WEB_DuBois_1918.jpg/800px-WEB_DuBois_1918.jpg",
            imageCaption: "W.E.B. Du Bois, co-founder of the NAACP"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What does NAACP stand for?",
                options: ["National American Civil Protest", "National Association for the Advancement of Colored People", "National African American Community Program", "National Association Against Corporate Power"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year was the NAACP founded?",
                options: ["1905", "1909", "1915", "1920"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which prominent scholar and activist co-founded the NAACP?",
                options: ["Booker T. Washington", "Marcus Garvey", "W.E.B. Du Bois", "Frederick Douglass"],
                correct: 2
            }
        ]
    },
    {
        id: 62,
        title: "The Triangle Shirtwaist Factory Fire (1911)",
        text: "On March 25, 1911, fire broke out at the Triangle Shirtwaist Factory in New York City, killing 146 garment workers, mostly young immigrant women. The fire spread rapidly through fabric and paper in the crowded workspace. Workers found exit doors locked—management feared theft—and inadequate fire escapes collapsed. Many workers jumped to their deaths from the ninth and tenth floors. The tragedy shocked the nation and galvanized the labor movement. Witnessing the fire profoundly affected future Labor Secretary Frances Perkins. The disaster led to reforms including fire safety codes, factory inspections, and workers' rights protections. It demonstrated the human cost of unregulated capitalism and unsafe working conditions, spurring the Progressive movement's push for labor reforms and helping establish the International Ladies' Garment Workers' Union as a major force.",
        primarySource: {
            quote: "The life of men and women is so cheap and property is so sacred. There are so many of us for one job it matters little if 146 of us are burned to death.",
            attribution: "Rose Schneiderman, labor organizer",
            context: "Speech after the Triangle fire, April 1911",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Triangle_Shirtwaist_Factory_fire_on_March_25_-_1911.jpg/800px-Triangle_Shirtwaist_Factory_fire_on_March_25_-_1911.jpg",
            imageCaption: "The Triangle Shirtwaist Factory fire, March 25, 1911"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many workers died in the Triangle Shirtwaist Factory fire?",
                options: ["50", "75", "146", "200"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Why couldn't workers escape the fire?",
                options: ["Broken elevators", "Locked exit doors", "No windows", "Floors collapsed"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "In what year did the Triangle Shirtwaist Factory fire occur?",
                options: ["1909", "1911", "1913", "1915"],
                correct: 1
            }
        ]
    },
    {
        id: 63,
        title: "The Sinking of the Titanic (1912)",
        text: "On April 15, 1912, the RMS Titanic sank in the North Atlantic after striking an iceberg, killing over 1,500 people in one of history's deadliest peacetime maritime disasters. The Titanic was the largest and most luxurious ship of its time, deemed 'unsinkable' by its builders. On its maiden voyage from Southampton to New York, carrying 2,224 passengers and crew, the ship struck an iceberg at 11:40 p.m. on April 14. It sank in less than three hours. The disaster exposed fatal flaws: insufficient lifeboats, inadequate safety drills, and ignored iceberg warnings. First-class passengers had higher survival rates than third-class passengers, highlighting class inequalities. The tragedy led to international maritime safety reforms, including 24-hour radio watch, sufficient lifeboats, and the International Ice Patrol to monitor icebergs.",
        primarySource: {
            quote: "CQD CQD SOS SOS CQD. Come at once. We have struck a berg.",
            attribution: "Wireless operator Jack Phillips",
            context: "Distress call from the Titanic, April 14-15, 1912",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/800px-RMS_Titanic_3.jpg",
            imageCaption: "RMS Titanic departing Southampton on its maiden voyage"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What caused the Titanic to sink?",
                options: ["Fire", "Iceberg", "Explosion", "Storm"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year did the Titanic sink?",
                options: ["1910", "1912", "1914", "1916"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Approximately how many people died when the Titanic sank?",
                options: ["500", "1,000", "1,500", "2,000"],
                correct: 2
            }
        ]
    },
    {
        id: 64,
        title: "World War I and American Entry (1917)",
        text: "The United States entered World War I on April 6, 1917, after years of neutrality. President Woodrow Wilson had campaigned on keeping America out of the European war that began in 1914. However, several factors pushed the U.S. toward intervention: unrestricted German submarine warfare that killed Americans, including the sinking of the Lusitania in 1915; the Zimmermann Telegram, in which Germany proposed an alliance with Mexico; and economic ties to the Allies. Wilson asked Congress to declare war 'to make the world safe for democracy.' Over 4 million Americans served, with about 116,000 deaths. American entry tipped the balance toward Allied victory. The war transformed America into a major world power and led to significant domestic changes, including women's wartime roles that advanced suffrage.",
        primarySource: {
            quote: "The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty.",
            attribution: "President Woodrow Wilson",
            context: "War message to Congress, April 2, 1917",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/US_World_War_I_recruiting_poster.jpg/800px-US_World_War_I_recruiting_poster.jpg",
            imageCaption: "World War I recruiting poster featuring Uncle Sam"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When did the United States enter World War I?",
                options: ["1914", "1915", "1917", "1918"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which president led the U.S. during World War I?",
                options: ["Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G. Harding"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What German communication proposed an alliance with Mexico?",
                options: ["Berlin Note", "Zimmermann Telegram", "Munich Message", "Hamburg Dispatch"],
                correct: 1
            }
        ]
    },
    {
        id: 65,
        title: "The 19th Amendment - Women's Suffrage (1920)",
        text: "The 19th Amendment, ratified on August 18, 1920, granted women the right to vote, marking the culmination of a 72-year struggle beginning at Seneca Falls. Suffragists employed diverse tactics: Susan B. Anthony and Elizabeth Cady Stanton's National Woman Suffrage Association, lobbying and peaceful protests, and Alice Paul's more militant National Woman's Party, which picketed the White House and engaged in hunger strikes when arrested. World War I accelerated progress as women's wartime contributions demonstrated their capabilities. Tennessee became the deciding state to ratify, with 24-year-old legislator Harry Burn casting the decisive vote after receiving a note from his mother urging him to 'be a good boy' and vote for suffrage. The amendment doubled the electorate, though many women of color remained effectively disenfranchised until the Voting Rights Act of 1965.",
        primarySource: {
            quote: "Men, their rights and nothing more; women, their rights and nothing less.",
            attribution: "Susan B. Anthony and Elizabeth Cady Stanton",
            context: "Motto of their newspaper, The Revolution, 1868-1870",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Suffrage_Parade_NYC_May_6_1912.jpeg/800px-Suffrage_Parade_NYC_May_6_1912.jpeg",
            imageCaption: "Women's suffrage parade in New York City, 1912"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the 19th Amendment grant?",
                options: ["Freedom of speech", "Women's right to vote", "Prohibition", "Income tax"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year was the 19th Amendment ratified?",
                options: ["1918", "1920", "1922", "1925"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which state cast the deciding vote to ratify the 19th Amendment?",
                options: ["New York", "California", "Tennessee", "Illinois"],
                correct: 2
            }
        ]
    },
    {
        id: 66,
        title: "The Harlem Renaissance (1920s)",
        text: "The Harlem Renaissance was a cultural, social, and artistic explosion centered in Harlem, New York, during the 1920s. This 'New Negro Movement' saw African Americans produce extraordinary literature, music, art, and intellectual work. Key figures included writers Langston Hughes, Zora Neale Hurston, and Claude McKay; musicians Duke Ellington, Louis Armstrong, and Bessie Smith; and intellectuals W.E.B. Du Bois and Alain Locke. The movement challenged racist stereotypes, celebrated Black culture and identity, and influenced American culture broadly. Jazz became America's music, and Harlem became a cultural capital. The Renaissance represented Black pride, creativity, and intellectual achievement during the Jim Crow era. Though centered in Harlem, the movement influenced African American communities nationwide and laid groundwork for the Civil Rights Movement.",
        primarySource: {
            quote: "I, too, sing America. I am the darker brother.",
            attribution: "Langston Hughes",
            context: "Poem 'I, Too,' published 1926",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Langston_Hughes_by_Carl_Van_Vechten_1936.jpg/800px-Langston_Hughes_by_Carl_Van_Vechten_1936.jpg",
            imageCaption: "Langston Hughes, prominent Harlem Renaissance poet"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Where was the Harlem Renaissance centered?",
                options: ["Chicago", "New Orleans", "Harlem, New York", "Detroit"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "When did the Harlem Renaissance primarily occur?",
                options: ["1900s", "1910s", "1920s", "1930s"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which poet wrote 'I, too, sing America'?",
                options: ["Claude McKay", "Langston Hughes", "Countee Cullen", "James Weldon Johnson"],
                correct: 1
            }
        ]
    },
    {
        id: 67,
        title: "The Stock Market Crash of 1929",
        text: "On October 29, 1929—'Black Tuesday'—the stock market crashed, marking the beginning of the Great Depression. In the preceding week, panic selling had already caused severe declines, but Black Tuesday saw 16 million shares traded and billions in value wiped out. The crash resulted from overspeculation, margin buying, and underlying economic weaknesses including income inequality, agricultural distress, and international debt problems. While not the sole cause of the Depression, the crash shattered confidence and triggered bank failures and business closures. Unemployment would eventually reach 25%, and economic misery would persist throughout the 1930s. The crash led to major financial reforms including the Securities Act, the Securities Exchange Commission (SEC), and the Glass-Steagall Act separating commercial and investment banking.",
        primarySource: {
            quote: "Stock prices have reached what looks like a permanently high plateau.",
            attribution: "Economist Irving Fisher",
            context: "Statement made in October 1929, shortly before the crash",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Crowd_outside_nyse.jpg/800px-Crowd_outside_nyse.jpg",
            imageCaption: "Crowd gathers outside the New York Stock Exchange after the crash"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the stock market crash?",
                options: ["1927", "1929", "1931", "1933"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was October 29, 1929, called?",
                options: ["Black Monday", "Black Tuesday", "Black Thursday", "Black Friday"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What major economic period did the crash help trigger?",
                options: ["The Panic of 1893", "The Great Depression", "The Recession of 1937", "The Long Depression"],
                correct: 1
            }
        ]
    },
    {
        id: 68,
        title: "The New Deal (1933-1939)",
        text: "President Franklin D. Roosevelt's New Deal, launched in 1933, was a series of programs and reforms designed to combat the Great Depression. The New Deal had three goals: Relief for the unemployed and poor, Recovery of the economy, and Reform of the financial system. Major programs included the Civilian Conservation Corps (CCC), Works Progress Administration (WPA), Social Security, Federal Deposit Insurance Corporation (FDIC), and Tennessee Valley Authority (TVA). The New Deal fundamentally expanded the federal government's role in the economy and created the modern welfare state. While it didn't end the Depression—World War II did that—the New Deal provided crucial relief, reformed the financial system, and created lasting institutions. It established the principle of government responsibility for citizens' economic security, reshaping American politics and society.",
        primarySource: {
            quote: "The only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.",
            attribution: "President Franklin D. Roosevelt",
            context: "First Inaugural Address, March 4, 1933",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_in_1933.jpg/800px-FDR_in_1933.jpg",
            imageCaption: "President Franklin D. Roosevelt in 1933"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president launched the New Deal?",
                options: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry Truman", "Dwight Eisenhower"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What were the three Rs of the New Deal?",
                options: ["Rights, Reform, Reconstruction", "Relief, Recovery, Reform", "Regulate, Reduce, Rebuild", "Repair, Renew, Restore"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which New Deal program created the retirement system still in use today?",
                options: ["Works Progress Administration", "Civilian Conservation Corps", "Social Security", "Tennessee Valley Authority"],
                correct: 2
            }
        ]
    },
    {
        id: 69,
        title: "Pearl Harbor Attack (1941)",
        text: "On December 7, 1941, Japan launched a surprise attack on the U.S. naval base at Pearl Harbor, Hawaii, bringing America into World War II. Beginning at 7:55 a.m., 353 Japanese aircraft attacked in two waves, sinking or damaging eight battleships, destroying 188 aircraft, and killing 2,403 Americans. The attack aimed to cripple the U.S. Pacific Fleet and prevent American interference with Japanese expansion in Southeast Asia. However, the attack missed vital targets including aircraft carriers (which were at sea) and fuel storage facilities. President Roosevelt called December 7 'a date which will live in infamy,' and Congress declared war on Japan the next day. Germany and Italy then declared war on the U.S. Pearl Harbor unified American public opinion and mobilized the nation for total war.",
        primarySource: {
            quote: "Yesterday, December 7, 1941—a date which will live in infamy—the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.",
            attribution: "President Franklin D. Roosevelt",
            context: "Address to Congress requesting declaration of war, December 8, 1941",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg/800px-The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg",
            imageCaption: "USS Arizona burning after the Pearl Harbor attack"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When was Pearl Harbor attacked?",
                options: ["December 7, 1941", "December 7, 1942", "November 7, 1941", "January 7, 1942"],
                correct: 0
            },
            {
                difficulty: "intermediate",
                question: "Which country attacked Pearl Harbor?",
                options: ["Germany", "Italy", "Japan", "Soviet Union"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how many Americans were killed at Pearl Harbor?",
                options: ["1,200", "2,400", "3,600", "4,800"],
                correct: 1
            }
        ]
    },
    {
        id: 70,
        title: "Japanese American Internment (1942-1945)",
        text: "Following Pearl Harbor, President Roosevelt signed Executive Order 9066 on February 19, 1942, authorizing the forced relocation and incarceration of approximately 120,000 Japanese Americans, two-thirds of whom were U.S. citizens. Families were given days to sell belongings and were sent to remote internment camps in desolate areas. Conditions were harsh, with cramped barracks, inadequate facilities, and armed guards. Despite this injustice, over 33,000 Japanese Americans served in the U.S. military, including the highly decorated 442nd Regimental Combat Team. In 1988, President Reagan signed the Civil Liberties Act, officially apologizing and providing $20,000 compensation to survivors. The internment remains one of the darkest chapters in American civil liberties history, demonstrating how fear and racism can override constitutional rights.",
        primarySource: {
            quote: "A Jap's a Jap. It makes no difference whether he is an American citizen or not.",
            attribution: "General John DeWitt",
            context: "Justifying Japanese American internment, 1942",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Manzanar_Relocation_Center%2C_Manzanar%2C_California._Dust_storm_at_this_War_Relocation_Authority_center_wh_._._._-_NARA_-_538230.jpg/800px-Manzanar_Relocation_Center%2C_Manzanar%2C_California._Dust_storm_at_this_War_Relocation_Authority_center_wh_._._._-_NARA_-_538230.jpg",
            imageCaption: "Manzanar internment camp during a dust storm"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which group was forcibly relocated during World War II?",
                options: ["German Americans", "Italian Americans", "Japanese Americans", "Chinese Americans"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Approximately how many Japanese Americans were interned?",
                options: ["50,000", "75,000", "120,000", "200,000"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which executive order authorized Japanese American internment?",
                options: ["Executive Order 8802", "Executive Order 9066", "Executive Order 9981", "Executive Order 10730"],
                correct: 1
            }
        ]
    },
    {
        id: 71,
        title: "D-Day - The Normandy Invasion (1944)",
        text: "On June 6, 1944—D-Day—Allied forces launched Operation Overlord, the largest amphibious invasion in history, landing 156,000 troops on five beaches in Normandy, France. Commanded by General Dwight D. Eisenhower, the invasion involved meticulous planning, elaborate deception operations, and coordination among American, British, Canadian, and other Allied forces. Despite heavy casualties, especially at Omaha Beach, the invasion succeeded in establishing a foothold in Western Europe. The operation marked the beginning of the liberation of Nazi-occupied Europe. By late August, Paris was liberated. D-Day demonstrated Allied military superiority and cooperation, though it came at great cost—approximately 10,000 Allied casualties on the first day alone. The invasion was a turning point that led to Germany's defeat in May 1945.",
        primarySource: {
            quote: "You are about to embark upon the Great Crusade, toward which we have striven these many months. The eyes of the world are upon you.",
            attribution: "General Dwight D. Eisenhower",
            context: "Order of the Day to Allied forces, June 6, 1944",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/800px-Into_the_Jaws_of_Death_23-0455M_edit.jpg",
            imageCaption: "American troops landing at Omaha Beach on D-Day"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was the largest amphibious invasion in history?",
                options: ["Pearl Harbor", "Iwo Jima", "D-Day", "Midway"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "When did D-Day occur?",
                options: ["June 6, 1943", "June 6, 1944", "June 6, 1945", "May 8, 1945"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who commanded the D-Day invasion?",
                options: ["General George Patton", "General Omar Bradley", "General Dwight D. Eisenhower", "General Douglas MacArthur"],
                correct: 2
            }
        ]
    },
    {
        id: 72,
        title: "Atomic Bombs on Hiroshima and Nagasaki (1945)",
        text: "On August 6, 1945, the United States dropped an atomic bomb on Hiroshima, Japan, followed by a second bomb on Nagasaki on August 9. The Hiroshima bomb killed an estimated 70,000 people instantly, with total deaths reaching 140,000 by year's end from burns, radiation, and injuries. The Nagasaki bomb killed approximately 40,000 immediately and 70,000 total. President Truman authorized the bombings to force Japan's surrender and avoid a costly invasion that might have killed millions. Japan surrendered on August 15, ending World War II. The atomic bombs inaugurated the nuclear age, demonstrating humanity's capacity for unprecedented destruction. Debates continue about whether the bombings were necessary or justified. The bombs' horrific effects led to efforts to control nuclear weapons and prevent nuclear war.",
        primarySource: {
            quote: "It is an atomic bomb. It is a harnessing of the basic power of the universe.",
            attribution: "President Harry S. Truman",
            context: "Statement announcing the Hiroshima bombing, August 6, 1945",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Atomic_cloud_over_Hiroshima_%28from_Matsuyama%29.jpg/800px-Atomic_cloud_over_Hiroshima_%28from_Matsuyama%29.jpg",
            imageCaption: "Atomic bomb mushroom cloud over Hiroshima"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country dropped atomic bombs in 1945?",
                options: ["Germany", "Soviet Union", "United States", "Britain"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which two Japanese cities were bombed?",
                options: ["Tokyo and Osaka", "Kyoto and Yokohama", "Hiroshima and Nagasaki", "Kobe and Sapporo"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which president authorized the atomic bombings?",
                options: ["Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy"],
                correct: 1
            }
        ]
    },
    {
        id: 73,
        title: "The Marshall Plan (1948)",
        text: "Announced by Secretary of State George Marshall in 1947 and implemented in 1948, the Marshall Plan (officially the European Recovery Program) provided over $13 billion ($150 billion in today's dollars) to rebuild Western European economies devastated by World War II. The plan had multiple goals: humanitarian aid, preventing economic collapse that might lead to communism, creating markets for American goods, and strengthening Western Europe against Soviet expansion. Sixteen countries participated, and the aid succeeded spectacularly—Western European economies recovered and grew dramatically. The Marshall Plan was a cornerstone of American Cold War strategy, demonstrating that U.S. foreign policy could combine idealism and self-interest. It contrasted sharply with the harsh reparations imposed after World War I and helped create strong democratic allies in Europe.",
        primarySource: {
            quote: "Our policy is directed not against any country or doctrine but against hunger, poverty, desperation, and chaos.",
            attribution: "Secretary of State George Marshall",
            context: "Harvard University commencement address announcing the plan, June 5, 1947",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Marshall_Plan_poster.JPG/800px-Marshall_Plan_poster.JPG",
            imageCaption: "Marshall Plan poster promoting European recovery"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was the Marshall Plan's purpose?",
                options: ["Win World War II", "Rebuild Europe", "Explore space", "Build highways"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who was the Marshall Plan named after?",
                options: ["President Harry Truman", "General Douglas MacArthur", "Secretary of State George Marshall", "Senator Joseph McCarthy"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how much aid did the Marshall Plan provide?",
                options: ["$5 billion", "$13 billion", "$25 billion", "$50 billion"],
                correct: 1
            }
        ]
    },
    {
        id: 74,
        title: "The Korean War (1950-1953)",
        text: "The Korean War began on June 25, 1950, when North Korea, supported by the Soviet Union and China, invaded South Korea. President Truman committed U.S. forces under UN command to defend South Korea, viewing the conflict as a test of containment policy against communist expansion. General Douglas MacArthur led a successful counteroffensive, including the amphibious landing at Inchon, pushing North Korean forces back. However, Chinese intervention in November 1950 drove UN forces south again. The war settled into a stalemate near the 38th parallel. MacArthur's public disagreement with Truman over strategy led to his dismissal in April 1951. An armistice signed in July 1953 ended the fighting but not the war—no peace treaty was ever signed. The war killed approximately 36,000 Americans and millions of Koreans.",
        primarySource: {
            quote: "Old soldiers never die; they just fade away.",
            attribution: "General Douglas MacArthur",
            context: "Farewell address to Congress after Truman dismissed him, April 19, 1951",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Douglas_MacArthur_smoking_his_corncob_pipe.jpg/800px-Douglas_MacArthur_smoking_his_corncob_pipe.jpg",
            imageCaption: "General Douglas MacArthur, commander of UN forces in Korea"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When did the Korean War begin?",
                options: ["1945", "1950", "1955", "1960"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which general did Truman dismiss during the Korean War?",
                options: ["George Patton", "Dwight Eisenhower", "Douglas MacArthur", "Omar Bradley"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What parallel divided North and South Korea?",
                options: ["36th parallel", "38th parallel", "40th parallel", "42nd parallel"],
                correct: 1
            }
        ]
    },
    {
        id: 75,
        title: "Brown v. Board of Education (1954)",
        text: "On May 17, 1954, the Supreme Court unanimously ruled in Brown v. Board of Education that racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson's 'separate but equal' doctrine. The case consolidated five challenges to school segregation, with Thurgood Marshall arguing for the NAACP Legal Defense Fund. Chief Justice Earl Warren's opinion declared that separate educational facilities were 'inherently unequal' and violated the 14th Amendment's Equal Protection Clause. The decision cited social science evidence showing segregation harmed Black children. While the ruling was a landmark victory for civil rights, implementation faced massive resistance, particularly in the South. The decision energized both the Civil Rights Movement and white resistance, leading to confrontations like Little Rock Central High School in 1957. Brown laid the legal foundation for dismantling Jim Crow.",
        primarySource: {
            quote: "We conclude that in the field of public education the doctrine of 'separate but equal' has no place. Separate educational facilities are inherently unequal.",
            attribution: "Chief Justice Earl Warren",
            context: "Brown v. Board of Education decision, May 17, 1954",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Naacp_demonstration_st_louis_1950.jpg/800px-Naacp_demonstration_st_louis_1950.jpg",
            imageCaption: "NAACP demonstration against school segregation, 1950"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did Brown v. Board of Education address?",
                options: ["Voting rights", "School segregation", "Housing discrimination", "Employment discrimination"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which earlier case did Brown overturn?",
                options: ["Dred Scott v. Sandford", "Plessy v. Ferguson", "Marbury v. Madison", "McCulloch v. Maryland"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who argued the case for the NAACP?",
                options: ["William O. Douglas", "Hugo Black", "Thurgood Marshall", "Felix Frankfurter"],
                correct: 2
            }
        ]
    },
    {
        id: 76,
        title: "The Montgomery Bus Boycott (1955-1956)",
        text: "On December 1, 1955, Rosa Parks refused to give up her seat to a white passenger on a Montgomery, Alabama bus, sparking the Montgomery Bus Boycott. Parks, a seamstress and NAACP activist, was arrested for violating segregation laws. In response, the African American community, led by the Montgomery Improvement Association and its young president, Dr. Martin Luther King Jr., organized a boycott of the city's buses. For 381 days, Black residents walked, carpooled, and took taxis rather than ride segregated buses. The boycott ended when the Supreme Court ruled that bus segregation was unconstitutional. The successful boycott made King a national figure, demonstrated the power of nonviolent protest, and became a model for future civil rights actions. It marked a turning point in the Civil Rights Movement.",
        primarySource: {
            quote: "My feet is tired, but my soul is rested.",
            attribution: "Mother Pollard, elderly boycott participant",
            context: "Comment during the Montgomery Bus Boycott, 1956",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rosa_Parks_Booking.jpg/800px-Rosa_Parks_Booking.jpg",
            imageCaption: "Rosa Parks fingerprinted after her arrest"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who refused to give up her bus seat, sparking the boycott?",
                options: ["Harriet Tubman", "Rosa Parks", "Coretta Scott King", "Fannie Lou Hamer"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How long did the Montgomery Bus Boycott last?",
                options: ["90 days", "180 days", "381 days", "500 days"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Who emerged as a leader during the Montgomery Bus Boycott?",
                options: ["Malcolm X", "James Farmer", "Martin Luther King Jr.", "Ralph Abernathy"],
                correct: 2
            }
        ]
    },
    {
        id: 77,
        title: "The Interstate Highway System (1956)",
        text: "President Dwight D. Eisenhower signed the Federal Aid Highway Act on June 29, 1956, creating the Interstate Highway System. Eisenhower had been impressed by Germany's autobahn and recognized highways' military value. The act authorized construction of 41,000 miles of interstate highways, with the federal government paying 90% of costs. The system transformed America, enabling rapid cross-country travel, suburbanization, and economic growth. However, it also devastated urban neighborhoods, particularly minority communities, as highways often ran through them. The system facilitated the growth of trucking, weakened railroads, increased automobile dependence, and reshaped American geography and culture. It remains one of the largest public works projects in history and fundamentally altered how Americans live and travel.",
        primarySource: {
            quote: "Together, the united forces of our communication and transportation systems are dynamic elements in the very name we bear—United States. Without them, we would be a mere alliance of many separate parts.",
            attribution: "President Dwight D. Eisenhower",
            context: "Message to Congress on the highway program, February 22, 1955",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Interstate_Highway_plan_September_1955.jpg/800px-Interstate_Highway_plan_September_1955.jpg",
            imageCaption: "Original Interstate Highway System plan, 1955"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president created the Interstate Highway System?",
                options: ["Harry Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon Johnson"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year was the Interstate Highway Act signed?",
                options: ["1952", "1956", "1960", "1964"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What percentage of costs did the federal government pay?",
                options: ["50%", "75%", "90%", "100%"],
                correct: 2
            }
        ]
    },
    {
        id: 78,
        title: "The Space Race and Sputnik (1957)",
        text: "On October 4, 1957, the Soviet Union launched Sputnik, the first artificial satellite, shocking Americans and inaugurating the Space Race. The 184-pound satellite orbited Earth every 96 minutes, beeping radio signals. Americans feared Soviet technological superiority and potential military implications. The launch prompted major U.S. responses: creation of NASA in 1958, increased funding for science education (the National Defense Education Act), and a crash program to develop American space capabilities. The Space Race became a key front in the Cold War, with both superpowers using space achievements for propaganda. American anxiety over Sputnik drove innovations in science, technology, and education that would pay dividends for decades, ultimately leading to the Apollo moon landings.",
        primarySource: {
            quote: "The Reds have proven beyond doubt that they are ahead of us in at least some aspects of the science of missilery.",
            attribution: "Senator Lyndon B. Johnson",
            context: "Response to Sputnik, November 1957",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sputnik_asm.jpg/800px-Sputnik_asm.jpg",
            imageCaption: "Replica of Sputnik 1"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country launched the first satellite?",
                options: ["United States", "Soviet Union", "China", "Britain"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the first satellite called?",
                options: ["Explorer 1", "Sputnik", "Vostok", "Apollo"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What U.S. agency was created in response to Sputnik?",
                options: ["CIA", "NSA", "NASA", "DARPA"],
                correct: 2
            }
        ]
    },
    {
        id: 79,
        title: "The Cuban Missile Crisis (1962)",
        text: "For thirteen days in October 1962, the world came closer to nuclear war than ever before or since. American U-2 spy planes discovered Soviet nuclear missiles in Cuba, just 90 miles from Florida. President Kennedy demanded their removal and ordered a naval 'quarantine' of Cuba. Soviet leader Nikita Khrushchev initially refused, and tensions escalated. At the crisis peak, nuclear-armed Soviet submarines nearly fired on U.S. ships, and a U-2 was shot down over Cuba. Secret negotiations led to a resolution: Soviets would remove missiles from Cuba, and the U.S. would secretly remove missiles from Turkey and pledge not to invade Cuba. The crisis led to installing a direct hotline between Washington and Moscow and demonstrated the dangers of nuclear brinkmanship.",
        primarySource: {
            quote: "It is insane that two men, sitting on opposite sides of the world, should be able to decide to bring an end to civilization.",
            attribution: "President John F. Kennedy",
            context: "During the Cuban Missile Crisis, October 1962",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Cuban_Missile_Crisis_Map.svg/800px-Cuban_Missile_Crisis_Map.svg.png",
            imageCaption: "Map showing missile range from Cuba"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which country placed missiles in Cuba?",
                options: ["China", "Soviet Union", "East Germany", "North Korea"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which president faced the Cuban Missile Crisis?",
                options: ["Dwight Eisenhower", "John F. Kennedy", "Lyndon Johnson", "Richard Nixon"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many days did the Cuban Missile Crisis last?",
                options: ["7 days", "13 days", "21 days", "30 days"],
                correct: 1
            }
        ]
    },
    {
        id: 80,
        title: "Kennedy's Assassination (1963)",
        text: "On November 22, 1963, President John F. Kennedy was assassinated in Dallas, Texas. Kennedy was shot while riding in an open motorcade through Dealey Plaza. Lee Harvey Oswald was arrested and charged with the murder but was himself killed two days later by nightclub owner Jack Ruby. Vice President Lyndon B. Johnson was sworn in as president aboard Air Force One. The Warren Commission concluded Oswald acted alone, but many Americans have questioned this finding. Kennedy's death traumatized the nation and became a defining moment for the baby boom generation. His assassination elevated him to near-mythic status and has spawned countless conspiracy theories. The tragedy led to improved Secret Service procedures and ended the era of presidents riding in open cars.",
        primarySource: {
            quote: "We have suffered a loss that cannot be weighed.",
            attribution: "President Lyndon B. Johnson",
            context: "Address to Congress, November 27, 1963",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/800px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
            imageCaption: "President John F. Kennedy, 1963"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year was President Kennedy assassinated?",
                options: ["1961", "1963", "1965", "1968"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In which city was Kennedy assassinated?",
                options: ["Houston", "Dallas", "Austin", "San Antonio"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who succeeded Kennedy as president?",
                options: ["Richard Nixon", "Hubert Humphrey", "Lyndon B. Johnson", "Robert Kennedy"],
                correct: 2
            }
        ]
    },
    {
        id: 81,
        title: "The Civil Rights Act of 1964",
        text: "Signed by President Lyndon B. Johnson on July 2, 1964, the Civil Rights Act was landmark legislation outlawing discrimination based on race, color, religion, sex, or national origin. The act prohibited segregation in public accommodations, banned employment discrimination, and authorized the federal government to enforce desegregation of schools and public facilities. President Kennedy had proposed the legislation before his assassination, and Johnson made its passage a priority, using his legendary persuasive skills to overcome a 75-day Senate filibuster. The act transformed American society, though implementation faced resistance. It gave the federal government powerful tools to combat discrimination and opened opportunities for millions of Americans. The inclusion of sex discrimination, added by opponents hoping to kill the bill, unexpectedly advanced women's rights.",
        primarySource: {
            quote: "We believe that all men are created equal. Yet many are denied equal treatment... We believe that all men are entitled to the blessings of liberty. Yet millions are being deprived of those blessings.",
            attribution: "President Lyndon B. Johnson",
            context: "Speech supporting civil rights, June 11, 1963",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg/800px-Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg",
            imageCaption: "President Johnson signs the Civil Rights Act, July 2, 1964"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the Civil Rights Act of 1964 outlaw?",
                options: ["Slavery", "Discrimination", "Voting restrictions", "Poll taxes"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which president signed the Civil Rights Act of 1964?",
                options: ["John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Dwight Eisenhower"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many days did the Senate filibuster against the act last?",
                options: ["30 days", "50 days", "75 days", "100 days"],
                correct: 2
            }
        ]
    },
    {
        id: 82,
        title: "The Gulf of Tonkin Incident (1964)",
        text: "On August 2 and 4, 1964, the U.S. reported that North Vietnamese torpedo boats attacked American destroyers in the Gulf of Tonkin. The first attack occurred but caused no damage; evidence for the second attack was questionable, possibly due to misread radar and sonar in bad weather. However, President Johnson used the incident to seek Congressional authorization for military force in Vietnam. The Gulf of Tonkin Resolution passed with only two dissenting votes, giving Johnson broad war powers. It effectively authorized the Vietnam War without a formal declaration. Decades later, declassified documents revealed the administration exaggerated and distorted the incidents. The episode demonstrates how questionable intelligence and executive power can lead to major military commitments with lasting consequences.",
        primarySource: {
            quote: "For all I know, our Navy was shooting at whales out there.",
            attribution: "President Lyndon B. Johnson",
            context: "Private doubts about the second Gulf of Tonkin incident, 1964",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/USS_Maddox_%28DD-731%29_underway_at_sea%2C_circa_in_1963.jpg/800px-USS_Maddox_%28DD-731%29_underway_at_sea%2C_circa_in_1963.jpg",
            imageCaption: "USS Maddox, involved in the Gulf of Tonkin incident"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "The Gulf of Tonkin incident involved which war?",
                options: ["Korean War", "Vietnam War", "Cold War", "Gulf War"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What did the Gulf of Tonkin Resolution grant the president?",
                options: ["Power to raise taxes", "War powers", "Trade authority", "Treaty-making power"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many senators voted against the Gulf of Tonkin Resolution?",
                options: ["None", "Two", "Five", "Ten"],
                correct: 1
            }
        ]
    },
    {
        id: 83,
        title: "The Voting Rights Act of 1965",
        text: "Signed on August 6, 1965, the Voting Rights Act was landmark legislation that prohibited racial discrimination in voting. Despite the 15th Amendment, many Southern states had effectively disenfranchised Black voters through literacy tests, poll taxes, and intimidation. The act banned these practices and authorized federal oversight of voter registration in areas with histories of discrimination. It was prompted by events like 'Bloody Sunday' in Selma, Alabama, where police attacked civil rights marchers. The act had immediate and dramatic effects—Black voter registration in the South jumped from 43% to 62% within four years. It's considered one of the most effective civil rights laws, though the Supreme Court weakened key provisions in 2013. The act demonstrated federal power to enforce constitutional rights.",
        primarySource: {
            quote: "There is no Negro problem. There is no Southern problem. There is no Northern problem. There is only an American problem.",
            attribution: "President Lyndon B. Johnson",
            context: "Speech to Congress on voting rights, March 15, 1965",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lyndon_Johnson_and_Martin_Luther_King%2C_Jr._-_Voting_Rights_Act.jpg/800px-Lyndon_Johnson_and_Martin_Luther_King%2C_Jr._-_Voting_Rights_Act.jpg",
            imageCaption: "Johnson and Martin Luther King Jr. at the Voting Rights Act signing"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the Voting Rights Act of 1965 protect?",
                options: ["Property rights", "Voting rights", "Free speech", "Gun ownership"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What event in Selma helped prompt the Voting Rights Act?",
                options: ["Sit-in", "Bloody Sunday", "Freedom Ride", "March on Washington"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which president signed the Voting Rights Act?",
                options: ["John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Gerald Ford"],
                correct: 1
            }
        ]
    },
    {
        id: 84,
        title: "The Apollo 11 Moon Landing (1969)",
        text: "On July 20, 1969, American astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the moon, fulfilling President Kennedy's 1961 pledge to land a man on the moon before decade's end. Armstrong's first words—'That's one small step for man, one giant leap for mankind'—were heard by millions worldwide. The mission involved immense technological challenges, with the lunar module containing less computing power than a modern smartphone. Michael Collins orbited above while Armstrong and Aldrin spent 21 hours on the lunar surface. The achievement demonstrated American technological prowess, provided a Cold War victory over the Soviets, and represented humanity's greatest exploration feat. Six Apollo missions would land on the moon through 1972.",
        primarySource: {
            quote: "That's one small step for man, one giant leap for mankind.",
            attribution: "Neil Armstrong",
            context: "First words upon stepping onto the moon, July 20, 1969",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/800px-Aldrin_Apollo_11_original.jpg",
            imageCaption: "Buzz Aldrin on the moon, photographed by Neil Armstrong"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "John Glenn"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "In what year did humans first land on the moon?",
                options: ["1967", "1969", "1971", "1973"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the name of the moon landing mission?",
                options: ["Apollo 1", "Apollo 8", "Apollo 11", "Apollo 13"],
                correct: 2
            }
        ]
    },
    {
        id: 85,
        title: "Woodstock Music Festival (1969)",
        text: "From August 15-18, 1969, the Woodstock Music and Art Fair brought together an estimated 400,000 people on a dairy farm in Bethel, New York, for three days of peace, music, and mud. Billed as 'An Aquarian Exposition,' Woodstock featured legendary performances by Jimi Hendrix, Janis Joplin, The Who, Santana, and many others. Despite inadequate facilities, rain, food and water shortages, the festival was largely peaceful, embodying the counterculture's ideals of community and love. Woodstock became a defining moment of the 1960s, symbolizing youth culture, anti-war sentiment, and social change. The festival's success and mythology influenced music festivals for decades. It represented both the peak and, some argue, the beginning of the end of the 1960s counterculture movement.",
        primarySource: {
            quote: "What we have in mind is breakfast in bed for 400,000.",
            attribution: "Wavy Gravy, festival organizer",
            context: "Describing Woodstock's communal spirit, August 1969",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Crowd_at_Woodstock.JPG/800px-Crowd_at_Woodstock.JPG",
            imageCaption: "The massive crowd at Woodstock, 1969"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year was the Woodstock festival held?",
                options: ["1967", "1969", "1971", "1975"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Approximately how many people attended Woodstock?",
                options: ["100,000", "200,000", "400,000", "1 million"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Where was Woodstock held?",
                options: ["Woodstock, New York", "Bethel, New York", "Haight-Ashbury, California", "Laurel Canyon, California"],
                correct: 1
            }
        ]
    },
    {
        id: 86,
        title: "Kent State Shootings (1970)",
        text: "On May 4, 1970, Ohio National Guardsmen opened fire on unarmed students at Kent State University during a protest against the Vietnam War and the U.S. invasion of Cambodia. The 13-second barrage killed four students—Allison Krause, Jeffrey Miller, Sandra Scheuer, and William Schroeder—and wounded nine others. The shootings occurred during a time of intense campus unrest following President Nixon's announcement of the Cambodian invasion. Images of the violence, particularly John Filo's Pulitzer Prize-winning photograph of 14-year-old Mary Ann Vecchio kneeling over Jeffrey Miller's body, shocked the nation. The tragedy sparked strikes at over 450 colleges and universities, temporarily closing many campuses. The Kent State shootings became a defining moment of the Vietnam War era, symbolizing the deep divisions in American society and galvanizing the antiwar movement.",
        primarySource: {
            quote: "My God, they're killing their own children!",
            attribution: "Witness at Kent State",
            context: "Reaction to National Guard firing on students, May 4, 1970",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Kent_State_massacre.jpg/800px-Kent_State_massacre.jpg",
            imageCaption: "Mary Ann Vecchio kneels over Jeffrey Miller's body at Kent State, 1970"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many students were killed at Kent State in 1970?",
                options: ["Two", "Four", "Six", "Eight"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What were the students protesting when the shootings occurred?",
                options: ["Civil rights", "The Vietnam War and Cambodia invasion", "University policies", "Economic conditions"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who opened fire on the Kent State students?",
                options: ["Local police", "FBI agents", "Ohio National Guard", "Campus security"],
                correct: 2
            }
        ]
    },
    {
        id: 87,
        title: "Pentagon Papers Publication (1971)",
        text: "In June 1971, The New York Times began publishing excerpts from a classified Department of Defense study officially titled 'Report of the Office of the Secretary of Defense Vietnam Task Force.' The documents, leaked by military analyst Daniel Ellsberg, revealed that four presidential administrations had systematically lied to Congress and the public about the Vietnam War. The papers showed that the government had expanded the war while claiming otherwise, conducted secret bombing campaigns, and knew the war was likely unwinnable. The Nixon administration sought to prevent publication through court injunctions, citing national security concerns. The case reached the Supreme Court, which ruled 6-3 in New York Times Co. v. United States that the government failed to meet the burden of proof required for prior restraint, a landmark victory for press freedom. The Pentagon Papers deepened public distrust of government and contributed to growing opposition to the Vietnam War.",
        primarySource: {
            quote: "I felt that as an American citizen, as a responsible citizen, I could no longer cooperate in concealing this information from the American public.",
            attribution: "Daniel Ellsberg",
            context: "Explaining his decision to leak the Pentagon Papers, 1971",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Daniel_Ellsberg_pentagon_papers.jpg/800px-Daniel_Ellsberg_pentagon_papers.jpg",
            imageCaption: "Daniel Ellsberg with the Pentagon Papers, 1971"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who leaked the Pentagon Papers?",
                options: ["Bob Woodward", "Daniel Ellsberg", "Edward Snowden", "Mark Felt"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What did the Pentagon Papers primarily reveal?",
                options: ["Soviet espionage", "Government deception about the Vietnam War", "Watergate conspiracy", "CIA operations in Cuba"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the Supreme Court's ruling in the Pentagon Papers case?",
                options: ["The government could prevent publication", "The press had the right to publish", "Ellsberg must face trial", "The documents must be classified"],
                correct: 1
            }
        ]
    },
    {
        id: 88,
        title: "26th Amendment Ratified (1971)",
        text: "On July 1, 1971, the 26th Amendment to the U.S. Constitution was ratified, lowering the voting age from 21 to 18 in all federal, state, and local elections. The amendment was driven by the Vietnam War, as young people argued that if 18-year-olds were old enough to be drafted and die for their country, they should be old enough to vote. The slogan 'old enough to fight, old enough to vote' captured this sentiment. The amendment passed Congress unanimously and was ratified by the states in just over three months, the fastest ratification of any constitutional amendment. President Nixon signed it into law on July 5, 1971. The 26th Amendment added approximately 11 million eligible voters to the electorate and reflected the growing political consciousness and activism of young Americans during the 1960s and early 1970s.",
        primarySource: {
            quote: "The reason I believe that your generation, the 11 million new voters, will do so much for America at home is that you will infuse into this nation some idealism, some courage, some stamina, some high moral purpose.",
            attribution: "President Richard Nixon",
            context: "Remarks upon signing the 26th Amendment, July 5, 1971",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/26th_Amendment_Pg1of1_AC.jpg/800px-26th_Amendment_Pg1of1_AC.jpg",
            imageCaption: "The 26th Amendment to the U.S. Constitution, 1971"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the 26th Amendment do?",
                options: ["Ended slavery", "Gave women the vote", "Lowered voting age to 18", "Ended prohibition"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the main argument for lowering the voting age?",
                options: ["Economic fairness", "Educational advancement", "Old enough to fight, old enough to vote", "State sovereignty"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "In what year was the 26th Amendment ratified?",
                options: ["1969", "1970", "1971", "1972"],
                correct: 2
            }
        ]
    },
    {
        id: 89,
        title: "Roe v. Wade Decision (1973)",
        text: "On January 22, 1973, the U.S. Supreme Court issued its landmark 7-2 decision in Roe v. Wade, establishing a constitutional right to abortion. The case involved 'Jane Roe' (Norma McCorvey), a Texas woman who challenged her state's abortion laws. Justice Harry Blackmun wrote the majority opinion, ruling that the Constitution's right to privacy extended to a woman's decision to have an abortion. The Court established a trimester framework: during the first trimester, the decision was left to the woman and her physician; in the second trimester, states could regulate abortion to protect maternal health; in the third trimester, states could prohibit abortion except when necessary to preserve the life or health of the mother. Roe v. Wade became one of the most controversial Supreme Court decisions in American history, galvanizing both the pro-choice and pro-life movements and remaining a central issue in American politics for decades.",
        primarySource: {
            quote: "This right of privacy, whether it be founded in the Fourteenth Amendment's concept of personal liberty... or... in the Ninth Amendment's reservation of rights to the people, is broad enough to encompass a woman's decision whether or not to terminate her pregnancy.",
            attribution: "Justice Harry Blackmun",
            context: "Majority opinion in Roe v. Wade, January 22, 1973",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Roe_v._Wade_protest.jpg/800px-Roe_v._Wade_protest.jpg",
            imageCaption: "Protest following the Roe v. Wade decision, 1973"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year was Roe v. Wade decided?",
                options: ["1971", "1972", "1973", "1974"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What constitutional right did the Court cite in Roe v. Wade?",
                options: ["Freedom of speech", "Right to privacy", "Equal protection", "Freedom of religion"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who wrote the majority opinion in Roe v. Wade?",
                options: ["Warren Burger", "William Rehnquist", "Harry Blackmun", "Potter Stewart"],
                correct: 2
            }
        ]
    },
    {
        id: 90,
        title: "Oil Crisis of 1973",
        text: "In October 1973, members of the Organization of Arab Petroleum Exporting Countries (OAPEC) proclaimed an oil embargo against nations supporting Israel during the Yom Kippur War, particularly the United States. The embargo caused oil prices to quadruple, from about $3 per barrel to nearly $12. Americans faced severe gasoline shortages, with long lines at gas stations becoming a defining image of the era. The Nixon administration implemented measures including reduced speed limits, daylight saving time extensions, and fuel rationing. The crisis exposed America's dependence on foreign oil and had far-reaching economic consequences, contributing to stagflation—a combination of high inflation and economic stagnation. The embargo ended in March 1974, but it fundamentally altered American energy policy, leading to the creation of the Strategic Petroleum Reserve and increased interest in energy conservation and alternative energy sources.",
        primarySource: {
            quote: "Let us set as our national goal, in the spirit of Apollo, with the determination of the Manhattan Project, that by the end of this decade we will have developed the potential to meet our own energy needs without depending on any foreign energy sources.",
            attribution: "President Richard Nixon",
            context: "State of the Union Address, January 30, 1974",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/1973_oil_crisis_gas_station.jpg/800px-1973_oil_crisis_gas_station.jpg",
            imageCaption: "Gas station during the 1973 oil crisis"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What year did the oil crisis begin?",
                options: ["1971", "1972", "1973", "1974"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What triggered the 1973 oil embargo?",
                options: ["Iranian Revolution", "Support for Israel in Yom Kippur War", "Gulf War", "OPEC formation"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Approximately how much did oil prices increase during the crisis?",
                options: ["Doubled", "Tripled", "Quadrupled", "Increased tenfold"],
                correct: 2
            }
        ]
    },
    {
        id: 91,
        title: "Watergate Scandal and Nixon's Resignation (1974)",
        text: "The Watergate scandal began with a break-in at the Democratic National Committee headquarters in the Watergate complex on June 17, 1972, and culminated in President Richard Nixon's resignation on August 9, 1974. Investigative reporting by Washington Post journalists Bob Woodward and Carl Bernstein, along with Congressional hearings, revealed a widespread campaign of political espionage and sabotage conducted by Nixon administration officials. The scandal expanded to include evidence of Nixon's attempts to cover up the break-in, abuse of power, and obstruction of justice. The Supreme Court's unanimous decision in United States v. Nixon forced the president to release incriminating tape recordings. Facing certain impeachment, Nixon became the first U.S. president to resign. Vice President Gerald Ford assumed the presidency and controversially pardoned Nixon. Watergate profoundly damaged public trust in government and led to significant reforms in campaign finance and government ethics.",
        primarySource: {
            quote: "I have never been a quitter. To leave office before my term is completed is abhorrent to every instinct in my body. But as President, I must put the interest of America first.",
            attribution: "President Richard Nixon",
            context: "Resignation speech, August 8, 1974",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nixon_resignation_speech.jpg/800px-Nixon_resignation_speech.jpg",
            imageCaption: "President Nixon delivering his resignation speech, 1974"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did Nixon resign?",
                options: ["1972", "1973", "1974", "1975"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What building was broken into that started Watergate?",
                options: ["Pentagon", "Democratic National Committee headquarters", "FBI headquarters", "Capitol Building"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which two journalists investigated Watergate for the Washington Post?",
                options: ["Cronkite and Rather", "Woodward and Bernstein", "Murrow and Sevareid", "Bradlee and Graham"],
                correct: 1
            }
        ]
    },
    {
        id: 92,
        title: "Fall of Saigon (1975)",
        text: "On April 30, 1975, North Vietnamese forces captured Saigon, the capital of South Vietnam, marking the end of the Vietnam War. The fall came after the Paris Peace Accords of 1973 led to U.S. troop withdrawal, leaving South Vietnam to defend itself. As North Vietnamese troops advanced, a chaotic evacuation ensued. Operation Frequent Wind, the largest helicopter evacuation in history, airlifted over 7,000 people from Saigon in 19 hours. Iconic images showed helicopters on rooftops and desperate Vietnamese trying to reach American aircraft. The fall of Saigon represented America's first major military defeat and had profound psychological and political impacts. The war claimed over 58,000 American lives and an estimated 2-3 million Vietnamese. Vietnam was reunified under communist rule, and the war's legacy influenced U.S. foreign policy for decades, contributing to what became known as 'Vietnam Syndrome'—reluctance to commit to foreign military interventions.",
        primarySource: {
            quote: "Today, America can regain the sense of pride that existed before Vietnam. But it cannot be achieved by refighting a war that is finished.",
            attribution: "President Gerald Ford",
            context: "Speech at Tulane University, April 23, 1975",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Saigon-hubert-van-es.jpg/800px-Saigon-hubert-van-es.jpg",
            imageCaption: "Helicopter evacuation during the Fall of Saigon, 1975"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When did Saigon fall to North Vietnamese forces?",
                options: ["1973", "1974", "1975", "1976"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the name of the evacuation operation?",
                options: ["Operation Rolling Thunder", "Operation Frequent Wind", "Operation Linebacker", "Operation Phoenix"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What city was Saigon renamed after the fall?",
                options: ["Ho Chi Minh City", "Hanoi South", "Liberation City", "New Vietnam"],
                correct: 0
            }
        ]
    },
    {
        id: 93,
        title: "American Bicentennial (1976)",
        text: "The United States celebrated its 200th anniversary of the Declaration of Independence throughout 1976 with nationwide festivities, historical commemorations, and cultural events. The celebration peaked on July 4, 1976, with spectacular events including Operation Sail, a parade of tall ships in New York Harbor featuring vessels from 34 nations. Major cities hosted parades, concerts, and fireworks displays. President Gerald Ford traveled to Independence Hall in Philadelphia and Valley Forge. The Bicentennial sparked a wave of patriotism and historical interest, with Americans reflecting on the nation's journey from revolutionary colony to global superpower. The celebration came at a crucial time, helping to restore national pride after the traumas of Vietnam and Watergate. The Bicentennial inspired restoration of historic sites, increased interest in genealogy and local history, and commercial products ranging from commemorative coins to Bicentennial-themed consumer goods.",
        primarySource: {
            quote: "As we begin our third century, we have opened the door to all people, people of every race, every religion, every ethnic group. We have opened the doors of opportunity, and we are committed to making certain that those doors remain open.",
            attribution: "President Gerald Ford",
            context: "Bicentennial address, July 4, 1976",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bicentennial_fireworks.jpg/800px-Bicentennial_fireworks.jpg",
            imageCaption: "Fireworks over Washington D.C. during Bicentennial celebration, 1976"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What anniversary did America celebrate in 1976?",
                options: ["150th", "175th", "200th", "225th"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was Operation Sail?",
                options: ["Military exercise", "Tall ships parade", "Space mission", "Naval battle reenactment"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who was president during the Bicentennial?",
                options: ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan"],
                correct: 1
            }
        ]
    },
    {
        id: 94,
        title: "Camp David Accords (1978)",
        text: "In September 1978, President Jimmy Carter hosted Israeli Prime Minister Menachem Begin and Egyptian President Anwar Sadat at Camp David for 13 days of secret negotiations. The resulting Camp David Accords established a framework for peace between Israel and Egypt and addressed the broader Arab-Israeli conflict. The accords led to the 1979 Egypt-Israel Peace Treaty, the first peace agreement between Israel and an Arab nation. Egypt recognized Israel's right to exist, while Israel agreed to withdraw from the Sinai Peninsula. The agreement was groundbreaking but controversial—Sadat was assassinated in 1981 partly due to backlash from the Arab world. Begin and Sadat shared the 1978 Nobel Peace Prize. The Camp David Accords demonstrated the potential for American-mediated diplomacy in the Middle East and established a framework for future peace negotiations, though broader Arab-Israeli peace remained elusive.",
        primarySource: {
            quote: "We have won, at last, the first step of peace. A first step on a long and difficult road.",
            attribution: "President Anwar Sadat of Egypt",
            context: "Statement after signing the Camp David Accords, September 17, 1978",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Camp_David_Accords_signing.jpg/800px-Camp_David_Accords_signing.jpg",
            imageCaption: "Carter, Sadat, and Begin at Camp David, 1978"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What year were the Camp David Accords signed?",
                options: ["1976", "1977", "1978", "1979"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which countries made peace at Camp David?",
                options: ["Israel and Jordan", "Israel and Egypt", "Israel and Syria", "Israel and Lebanon"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who mediated the Camp David negotiations?",
                options: ["Gerald Ford", "Jimmy Carter", "Ronald Reagan", "Henry Kissinger"],
                correct: 1
            }
        ]
    },
    {
        id: 95,
        title: "Three Mile Island Nuclear Accident (1979)",
        text: "On March 28, 1979, a partial meltdown occurred at the Three Mile Island nuclear power plant near Harrisburg, Pennsylvania, becoming the most serious accident in U.S. commercial nuclear power plant history. A combination of equipment malfunctions, design flaws, and operator errors led to the release of radioactive gases and iodine into the environment. Though small amounts of radiation were released, there were no deaths or injuries directly attributed to the accident. However, the incident caused widespread panic, with Governor Richard Thornburgh recommending evacuation of pregnant women and young children within a five-mile radius. The accident occurred just 12 days after the release of the film 'The China Syndrome,' about a nuclear plant accident, intensifying public fear. Three Mile Island fundamentally changed America's nuclear power industry, effectively ending the industry's expansion, leading to stricter safety regulations, and galvanizing the anti-nuclear movement.",
        primarySource: {
            quote: "The radiation dose received by the average person in the area was about equal to a chest X-ray.",
            attribution: "Nuclear Regulatory Commission",
            context: "Official assessment of Three Mile Island radiation exposure, 1979",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Three_Mile_Island_nuclear_power_plant.jpg/800px-Three_Mile_Island_nuclear_power_plant.jpg",
            imageCaption: "Three Mile Island nuclear facility, 1979"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what state did the Three Mile Island accident occur?",
                options: ["New York", "Pennsylvania", "New Jersey", "Ohio"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What year did the Three Mile Island accident happen?",
                options: ["1977", "1978", "1979", "1980"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What movie about a nuclear accident was released shortly before Three Mile Island?",
                options: ["The Day After", "Silkwood", "The China Syndrome", "Nuclear Winter"],
                correct: 2
            }
        ]
    },
    {
        id: 96,
        title: "Iran Hostage Crisis (1979-1981)",
        text: "On November 4, 1979, Iranian students stormed the U.S. Embassy in Tehran, taking 52 American diplomats and citizens hostage. The crisis lasted 444 days, dominating the final year of the Carter presidency. The hostage-taking followed the U.S. admission of the deposed Shah of Iran for medical treatment, which Iranians viewed as evidence of American interference. Ayatollah Khomeini's revolutionary government supported the students' actions. Carter's attempts to resolve the crisis diplomatically failed, and a military rescue mission, Operation Eagle Claw, ended in disaster when helicopters crashed in the desert, killing eight servicemen. The crisis was broadcast nightly on ABC's 'Nightline,' keeping it in the American consciousness. The hostages were finally released on January 20, 1981, moments after Ronald Reagan was sworn in as president. The crisis severely damaged Carter's presidency, contributed to his 1980 election defeat, and began decades of Iranian-American hostility.",
        primarySource: {
            quote: "America will never make concessions to terrorists. To do so would only invite more terrorism.",
            attribution: "President Jimmy Carter",
            context: "Address regarding Iran hostage crisis, April 1980",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Hostage_Crisis_Iran_1979.jpg/800px-Hostage_Crisis_Iran_1979.jpg",
            imageCaption: "Blindfolded American hostage during Iran crisis, 1979"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many days did the Iran hostage crisis last?",
                options: ["365 days", "444 days", "500 days", "666 days"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Where were Americans taken hostage in 1979?",
                options: ["U.S. Embassy in Tehran", "Military base in Iraq", "Consulate in Beirut", "Hotel in Kuwait"],
                correct: 0
            },
            {
                difficulty: "advanced",
                question: "What was the failed rescue mission called?",
                options: ["Operation Desert One", "Operation Eagle Claw", "Operation Urgent Fury", "Operation Just Cause"],
                correct: 1
            }
        ]
    },
    {
        id: 97,
        title: "Reagan Assassination Attempt (1981)",
        text: "On March 30, 1981, just 69 days into his presidency, Ronald Reagan was shot and seriously wounded by John Hinckley Jr. outside the Washington Hilton Hotel. The attack also wounded Press Secretary James Brady, Secret Service agent Tim McCarthy, and police officer Thomas Delahanty. Reagan was struck by a ricocheting bullet that punctured his lung and lodged near his heart. He famously quipped to surgeons, 'I hope you're all Republicans.' Reagan's grace under pressure and quick recovery boosted his popularity. James Brady was permanently disabled by a head wound, and the incident led his wife Sarah to become a prominent gun control advocate. The attempted assassination resulted in the Brady Handgun Violence Prevention Act of 1993, which mandated background checks for gun purchases. Hinckley was found not guilty by reason of insanity and institutionalized. The assassination attempt demonstrated the ongoing vulnerability of presidents despite Secret Service protection.",
        primarySource: {
            quote: "Honey, I forgot to duck.",
            attribution: "President Ronald Reagan",
            context: "To Nancy Reagan after being shot, March 30, 1981",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Reagan_assassination_attempt.jpg/800px-Reagan_assassination_attempt.jpg",
            imageCaption: "Moments after the Reagan assassination attempt, 1981"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who attempted to assassinate President Reagan in 1981?",
                options: ["Lee Harvey Oswald", "John Hinckley Jr.", "Lynette Fromme", "Arthur Bremer"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How many days into Reagan's presidency did the attempt occur?",
                options: ["30 days", "50 days", "69 days", "100 days"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which press secretary was permanently disabled in the attack?",
                options: ["Ron Nessen", "James Brady", "Larry Speakes", "Marlin Fitzwater"],
                correct: 1
            }
        ]
    },
    {
        id: 98,
        title: "AIDS Epidemic Emerges (Early 1980s)",
        text: "In 1981, the Centers for Disease Control reported unusual clusters of rare diseases in previously healthy young men, marking the beginning of recognition of what would become the AIDS epidemic. Initially called GRID (Gay-Related Immune Deficiency), the disease was renamed AIDS (Acquired Immune Deficiency Syndrome) in 1982. The virus HIV (Human Immunodeficiency Virus) was identified in 1983-84. The epidemic was initially associated primarily with gay men, leading to stigma and delayed government response. By the mid-1980s, it became clear AIDS could affect anyone. The Reagan administration was criticized for its slow response; Reagan didn't publicly address AIDS until 1985. The crisis galvanized the LGBTQ community and led to increased activism, including the formation of organizations like ACT UP. By 1987, AZT became the first approved AIDS treatment. The epidemic claimed hundreds of thousands of American lives and transformed public health policy, medical research, and attitudes toward sexuality and disease.",
        primarySource: {
            quote: "The AIDS epidemic has rolled back a big rotting log and revealed all the squirming life underneath it, since it involves, all at once, the main themes of our existence: sex, death, power, money, love, hate, disease and panic.",
            attribution: "Edmund White, writer",
            context: "States of Desire: Travels in Gay America, 1980s",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/AIDS_quilt_on_national_mall.jpg/800px-AIDS_quilt_on_national_mall.jpg",
            imageCaption: "AIDS Memorial Quilt displayed on the National Mall"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What does AIDS stand for?",
                options: ["American Immunological Disease Syndrome", "Acquired Immune Deficiency Syndrome", "Advanced Internal Disease System", "Auto-Immune Disorder Syndrome"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When did the CDC first report cases of what became known as AIDS?",
                options: ["1979", "1981", "1983", "1985"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the first FDA-approved drug to treat AIDS?",
                options: ["Penicillin", "AZT", "Interferon", "Protease inhibitors"],
                correct: 1
            }
        ]
    },
    {
        id: 99,
        title: "Challenger Disaster (1986)",
        text: "On January 28, 1986, the Space Shuttle Challenger broke apart 73 seconds after launch, killing all seven crew members including teacher Christa McAuliffe, who was to be the first civilian in space. The disaster occurred due to the failure of an O-ring seal in the right solid rocket booster, exacerbated by unusually cold temperatures at Cape Canaveral. Engineers had warned against launching in cold weather, but management proceeded. The explosion was witnessed live by millions, including schoolchildren watching because of McAuliffe's presence. President Reagan postponed his State of the Union address and delivered a moving tribute, telling schoolchildren that 'the future doesn't belong to the fainthearted; it belongs to the brave.' The Rogers Commission investigated the disaster, criticizing NASA's organizational culture and decision-making. The tragedy led to a 32-month suspension of the shuttle program and significant safety reforms. The Challenger disaster reminded Americans of spaceflight's inherent dangers.",
        primarySource: {
            quote: "We will never forget them, nor the last time we saw them, this morning, as they prepared for their journey and waved goodbye and 'slipped the surly bonds of earth' to 'touch the face of God.'",
            attribution: "President Ronald Reagan",
            context: "Address to the nation after Challenger disaster, January 28, 1986",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Challenger_explosion.jpg/800px-Challenger_explosion.jpg",
            imageCaption: "The Challenger explosion, January 28, 1986"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Challenger disaster occur?",
                options: ["1984", "1985", "1986", "1987"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many crew members died in the Challenger disaster?",
                options: ["Five", "Six", "Seven", "Eight"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What component failure caused the Challenger disaster?",
                options: ["Heat shield", "O-ring seal", "Fuel pump", "Computer system"],
                correct: 1
            }
        ]
    },
    {
        id: 100,
        title: "Iran-Contra Affair (1985-1987)",
        text: "The Iran-Contra affair was a political scandal in which senior Reagan administration officials secretly facilitated arms sales to Iran, despite an arms embargo, and used proceeds to fund Contra rebels fighting Nicaragua's Sandinista government, despite Congressional prohibition. The scheme involved National Security Council staff, particularly Oliver North and John Poindexter. The dual operations violated the Boland Amendment, which banned U.S. assistance to the Contras. When the scandal broke in 1986, it raised questions about presidential knowledge and constitutional governance. Congressional hearings in 1987 captivated the nation. North became a controversial figure, defending his actions as patriotic. President Reagan claimed ignorance of the details, though critics questioned this. Several officials were convicted, though most convictions were overturned or pardoned. The affair damaged Reagan's second term and raised fundamental questions about executive power, covert operations, and foreign policy accountability.",
        primarySource: {
            quote: "I told the American people I did not trade arms for hostages. My heart and my best intentions still tell me that's true, but the facts and the evidence tell me it is not.",
            attribution: "President Ronald Reagan",
            context: "Address to the nation on Iran-Contra, March 4, 1987",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Oliver_North_testifies.jpg/800px-Oliver_North_testifies.jpg",
            imageCaption: "Oliver North testifying at Iran-Contra hearings, 1987"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What administration was involved in the Iran-Contra affair?",
                options: ["Carter", "Reagan", "Bush", "Clinton"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What were the proceeds from arms sales used to fund?",
                options: ["Afghan mujahideen", "Nicaraguan Contras", "Iraqi opposition", "Philippine rebels"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What NSC staff member became the face of Iran-Contra?",
                options: ["Robert McFarlane", "John Poindexter", "Oliver North", "William Casey"],
                correct: 2
            }
        ]
    },
    {
        id: 101,
        title: "Fall of the Berlin Wall (1989)",
        text: "On November 9, 1989, the Berlin Wall, symbol of the Cold War's division of Europe, fell after 28 years. The wall had separated communist East Berlin from democratic West Berlin since 1961. Mounting pressure for reform in Eastern Europe, Soviet leader Mikhail Gorbachev's policies of glasnost and perestroika, and massive peaceful protests in East Germany created conditions for change. When East German official Günter Schabowski mistakenly announced immediate opening of borders, thousands of Berliners converged on checkpoints. Guards, overwhelmed and lacking orders to use force, allowed people through. Jubilant crowds celebrated, and many began physically dismantling the wall. President George H.W. Bush responded cautiously, avoiding triumphalism that might provoke Soviet hardliners. The wall's fall accelerated German reunification in 1990 and symbolized communism's collapse in Eastern Europe. It marked the beginning of the end of the Cold War and represented victory for Western democracy and capitalism.",
        primarySource: {
            quote: "Mr. Gorbachev, tear down this wall!",
            attribution: "President Ronald Reagan",
            context: "Speech at Brandenburg Gate, June 12, 1987",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Thefalloftheberlinwall1989.JPG/800px-Thefalloftheberlinwall1989.JPG",
            imageCaption: "Berliners celebrating on the Berlin Wall, November 1989"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How long had the Berlin Wall stood before it fell?",
                options: ["20 years", "25 years", "28 years", "30 years"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which Soviet leader's policies contributed to the wall's fall?",
                options: ["Leonid Brezhnev", "Yuri Andropov", "Konstantin Chernenko", "Mikhail Gorbachev"],
                correct: 3
            }
        ]
    },
    {
        id: 102,
        title: "Americans with Disabilities Act (1990)",
        text: "Signed by President George H.W. Bush on July 26, 1990, the Americans with Disabilities Act (ADA) is landmark civil rights legislation prohibiting discrimination based on disability. The law requires employers to provide reasonable accommodations to employees with disabilities and mandates accessible public facilities, transportation, and telecommunications. The ADA built on earlier legislation like the Rehabilitation Act of 1973 but provided much broader protections. It was the result of decades of disability rights activism, including the efforts of activists like Justin Dart Jr. and Judith Heumann. The law defines disability broadly and covers physical and mental impairments that substantially limit major life activities. The ADA has transformed American society, making buildings, sidewalks, and public spaces more accessible. While enforcement and compliance have faced challenges, the ADA represents a major achievement in civil rights, recognizing that disability rights are human rights and that people with disabilities deserve full participation in society.",
        primarySource: {
            quote: "Let the shameful wall of exclusion finally come tumbling down.",
            attribution: "President George H.W. Bush",
            context: "Remarks at ADA signing ceremony, July 26, 1990",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bush_signing_ADA.jpg/800px-Bush_signing_ADA.jpg",
            imageCaption: "President Bush signing the Americans with Disabilities Act, 1990"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What does ADA stand for?",
                options: ["American Disability Association", "Americans with Disabilities Act", "Accessible Design Act", "American Design Alliance"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When was the ADA signed into law?",
                options: ["1988", "1989", "1990", "1991"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which president signed the ADA?",
                options: ["Ronald Reagan", "George H.W. Bush", "Bill Clinton", "George W. Bush"],
                correct: 1
            }
        ]
    },
    {
        id: 103,
        title: "Persian Gulf War (1991)",
        text: "On August 2, 1990, Iraq, led by Saddam Hussein, invaded Kuwait, prompting international condemnation. President George H.W. Bush assembled an international coalition of 35 nations and deployed U.S. forces to Saudi Arabia in Operation Desert Shield. When Iraq refused to withdraw by the UN deadline, coalition forces launched Operation Desert Storm on January 17, 1991, beginning with a massive air campaign. The ground war began on February 24 and lasted only 100 hours before Iraqi forces were routed from Kuwait. The war showcased advanced U.S. military technology, including precision-guided munitions and stealth aircraft. CNN's 24-hour coverage brought the war into American living rooms in real time. The swift victory, with minimal coalition casualties, seemed to erase 'Vietnam Syndrome' and boosted Bush's approval ratings to 89 percent. However, Hussein remained in power, setting the stage for future conflict. The war established U.S. military dominance in the post-Cold War era.",
        primarySource: {
            quote: "This will not stand, this aggression against Kuwait.",
            attribution: "President George H.W. Bush",
            context: "Statement on Iraqi invasion, August 5, 1990",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Desert_Storm_forces.jpg/800px-Desert_Storm_forces.jpg",
            imageCaption: "U.S. forces during Operation Desert Storm, 1991"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What country did Iraq invade in 1990?",
                options: ["Saudi Arabia", "Kuwait", "Iran", "Jordan"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the ground war phase called?",
                options: ["Operation Desert Shield", "Operation Desert Storm", "Operation Iraqi Freedom", "Operation Enduring Freedom"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Approximately how long did the ground war last?",
                options: ["48 hours", "100 hours", "Two weeks", "One month"],
                correct: 1
            }
        ]
    },
    {
        id: 104,
        title: "Rodney King Beating and LA Riots (1991-1992)",
        text: "On March 3, 1991, Rodney King, an African American motorist, was brutally beaten by four Los Angeles Police Department officers after a high-speed chase. George Holliday filmed the beating on his video camera, and the footage shocked the nation when broadcast on television. The four officers—Stacey Koon, Laurence Powell, Timothy Wind, and Theodore Briseno—were charged with use of excessive force. On April 29, 1992, a jury with no African American members acquitted the officers. The verdict sparked the Los Angeles riots, six days of violence that left 63 people dead, over 2,000 injured, and caused over $1 billion in property damage. The riots exposed deep racial tensions, economic inequality, and distrust of police in African American communities. Federal charges later resulted in convictions of two officers. King's question during the riots, 'Can we all get along?' became emblematic of the need for racial healing.",
        primarySource: {
            quote: "People, I just want to say, can we all get along? Can we get along?",
            attribution: "Rodney King",
            context: "Press conference during LA riots, May 1, 1992",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/LA_Riots_fire.jpg/800px-LA_Riots_fire.jpg",
            imageCaption: "Building burning during the 1992 Los Angeles riots"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what city did the 1992 riots occur?",
                options: ["New York", "Chicago", "Los Angeles", "Detroit"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What sparked the 1992 LA riots?",
                options: ["Economic recession", "Acquittal of officers who beat Rodney King", "Gang violence", "Police shooting"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who videotaped the Rodney King beating?",
                options: ["News reporter", "George Holliday", "Police dashboard camera", "Security camera"],
                correct: 1
            }
        ]
    },
    {
        id: 105,
        title: "World Trade Center Bombing (1993)",
        text: "On February 26, 1993, terrorists detonated a truck bomb in the underground parking garage of the World Trade Center's North Tower in New York City. The explosion killed six people, injured over 1,000, and left a crater several stories deep. The attack was carried out by a group led by Ramzi Yousef, who intended to topple one tower into the other, killing thousands. Though the towers survived, the bombing was the deadliest terrorist attack on American soil at that time. The attack marked a turning point in American awareness of international terrorism. FBI investigation led to the arrest and conviction of Yousef and several co-conspirators. The attack foreshadowed the September 11, 2001 attacks on the same buildings. It revealed vulnerabilities in domestic security and demonstrated that international terrorists could strike within U.S. borders. The bombing led to increased security measures at public buildings and greater attention to counterterrorism.",
        primarySource: {
            quote: "Yes, I am a terrorist, and I am proud of it.",
            attribution: "Ramzi Yousef",
            context: "Statement at trial, 1997",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/WTC_1993_ATF_Commons.jpg/800px-WTC_1993_ATF_Commons.jpg",
            imageCaption: "Damage from the 1993 World Trade Center bombing"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What year was the first World Trade Center bombing?",
                options: ["1991", "1992", "1993", "1994"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many people were killed in the 1993 WTC bombing?",
                options: ["Two", "Six", "Twelve", "Twenty"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Where was the bomb placed in the 1993 attack?",
                options: ["Rooftop", "Lobby", "Underground garage", "Elevator shaft"],
                correct: 2
            }
        ]
    },
    {
        id: 106,
        title: "Brady Bill Passed (1993)",
        text: "The Brady Handgun Violence Prevention Act, commonly known as the Brady Bill, was signed into law by President Bill Clinton on November 30, 1993. Named for James Brady, President Reagan's press secretary who was permanently disabled in the 1981 assassination attempt, the law mandated federal background checks on firearm purchases and imposed a five-day waiting period. Sarah Brady, James's wife, became a leading advocate for gun control and championed the legislation. The law represented the first significant federal gun control legislation since the Gun Control Act of 1968. In 1998, the waiting period was replaced by the National Instant Criminal Background Check System (NICS). The Brady Bill has prevented millions of prohibited purchasers from obtaining firearms, though debates continue about its effectiveness and the balance between gun rights and public safety. The law remains a touchstone in American gun control debates.",
        primarySource: {
            quote: "If the passage of the Brady bill were to result in a reduction of only 10 or 15 percent of those numbers—and it could be a good deal more—it would be well worth making the effort.",
            attribution: "James Brady",
            context: "Supporting the Brady Bill, 1993",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Clinton_signing_Brady_Bill.jpg/800px-Clinton_signing_Brady_Bill.jpg",
            imageCaption: "President Clinton signing the Brady Bill, 1993"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did the Brady Bill require?",
                options: ["Gun registration", "Background checks for gun purchases", "Assault weapon ban", "Concealed carry permits"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who was the Brady Bill named after?",
                options: ["Tom Brady", "James Brady", "Matthew Brady", "Nicholas Brady"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What president signed the Brady Bill?",
                options: ["George H.W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama"],
                correct: 1
            }
        ]
    },
    {
        id: 107,
        title: "NAFTA Implementation (1994)",
        text: "The North American Free Trade Agreement (NAFTA) took effect on January 1, 1994, creating a free-trade zone among the United States, Canada, and Mexico. Negotiated by President George H.W. Bush and championed by President Bill Clinton despite opposition from labor unions and some Democrats, NAFTA eliminated most tariffs on products traded among the three nations. Proponents argued it would boost economic growth, create jobs, and increase competitiveness. Critics feared job losses as companies moved production to Mexico for cheaper labor. NAFTA significantly increased trade among the three countries, with U.S.-Mexico trade growing from $81 billion in 1993 to over $500 billion by 2014. However, it also coincided with manufacturing job losses in the U.S., though economists debate NAFTA's role versus automation and other factors. The agreement remained controversial, with President Trump renegotiating it as USMCA in 2018-2020.",
        primarySource: {
            quote: "NAFTA means jobs. American jobs, and good-paying American jobs. If I didn't believe that, I wouldn't support this agreement.",
            attribution: "President Bill Clinton",
            context: "Speech supporting NAFTA, September 14, 1993",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/NAFTA_logo.svg/800px-NAFTA_logo.svg.png",
            imageCaption: "NAFTA logo representing the three member nations"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What does NAFTA stand for?",
                options: ["North Atlantic Free Trade Agreement", "North American Free Trade Agreement", "National American Fair Trade Act", "New American Foreign Trade Alliance"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which three countries were part of NAFTA?",
                options: ["U.S., Canada, Brazil", "U.S., Mexico, Guatemala", "U.S., Canada, Mexico", "U.S., Canada, Cuba"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "When did NAFTA take effect?",
                options: ["1992", "1993", "1994", "1995"],
                correct: 2
            }
        ]
    },
    {
        id: 108,
        title: "Oklahoma City Bombing (1995)",
        text: "On April 19, 1995, domestic terrorist Timothy McVeigh detonated a truck bomb outside the Alfred P. Murrah Federal Building in Oklahoma City, killing 168 people, including 19 children in a day care center, and injuring over 680 others. It was the deadliest act of domestic terrorism in U.S. history at that time. McVeigh, a Gulf War veteran, was motivated by anti-government sentiment and anger over the federal government's handling of the Waco siege exactly two years earlier. His co-conspirator, Terry Nichols, helped plan the attack. The bombing shocked the nation and led to increased security at federal buildings. McVeigh was executed in 2001, while Nichols received life in prison. The attack prompted national reflection on domestic extremism and conspiracy theories. The Oklahoma City National Memorial was established at the site, honoring the victims. The bombing demonstrated that terrorism was not only an international threat but could come from within.",
        primarySource: {
            quote: "When the building came down, all Americans came together to grieve and to help. We must all remain together to rebuild and to heal.",
            attribution: "President Bill Clinton",
            context: "Memorial service address, April 23, 1995",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Murrah_Building_-_Aerial_view.jpg/800px-Murrah_Building_-_Aerial_view.jpg",
            imageCaption: "Aerial view of the destroyed Murrah Federal Building, 1995"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Oklahoma City bombing occur?",
                options: ["1993", "1994", "1995", "1996"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who carried out the Oklahoma City bombing?",
                options: ["Foreign terrorists", "Timothy McVeigh", "Unabomber", "Eric Rudolph"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many people were killed in the bombing?",
                options: ["86", "124", "168", "201"],
                correct: 2
            }
        ]
    },
    {
        id: 109,
        title: "Million Man March (1995)",
        text: "On October 16, 1995, hundreds of thousands of African American men gathered on the National Mall in Washington, D.C., for the Million Man March. Organized by Nation of Islam leader Louis Farrakhan and others, the march called for African American men to take responsibility for themselves, their families, and their communities. The event focused on themes of atonement, reconciliation, and responsibility. Speakers included Maya Angelou, Rosa Parks, and Martin Luther King III. While estimates of attendance varied—from 400,000 to over 1 million—it was one of the largest gatherings in Washington's history. The march was controversial due to Farrakhan's leadership and his history of divisive statements, and some civil rights leaders and women's groups criticized the event's focus on men only. Nevertheless, the Million Man March galvanized African American political engagement and inspired similar gatherings, including the Million Woman March in 1997.",
        primarySource: {
            quote: "Black men, you don't have to bash White people. All we got to do is go back home and turn our communities into productive places.",
            attribution: "Louis Farrakhan",
            context: "Address at Million Man March, October 16, 1995",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Million_Man_March.jpg/800px-Million_Man_March.jpg",
            imageCaption: "Crowds at the Million Man March, Washington D.C., 1995"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year was the Million Man March held?",
                options: ["1993", "1994", "1995", "1996"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who organized the Million Man March?",
                options: ["Jesse Jackson", "Al Sharpton", "Louis Farrakhan", "Cornel West"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Where did the Million Man March take place?",
                options: ["New York City", "Atlanta", "Washington, D.C.", "Chicago"],
                correct: 2
            }
        ]
    },
    {
        id: 110,
        title: "Welfare Reform Act (1996)",
        text: "On August 22, 1996, President Bill Clinton signed the Personal Responsibility and Work Opportunity Reconciliation Act, commonly known as welfare reform. The law fundamentally changed the U.S. welfare system, ending the Aid to Families with Dependent Children (AFDC) program that had provided cash assistance since 1935, and replacing it with Temporary Assistance for Needy Families (TANF). The reform imposed work requirements, time limits on benefits (typically five years), and gave states more control through block grants. Clinton had promised to 'end welfare as we know it' during his 1992 campaign. Supporters argued the reform encouraged work and reduced dependency, while critics warned it would harm vulnerable families, particularly children. The law was controversial even among Democrats, with some administration officials resigning in protest. Welfare caseloads declined significantly after the reform, though debates continue about whether this represented success or simply pushed poor families into deeper hardship.",
        primarySource: {
            quote: "Today we are taking a historic chance to make welfare what it was meant to be: a second chance, not a way of life.",
            attribution: "President Bill Clinton",
            context: "Remarks on signing welfare reform, August 22, 1996",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Clinton_welfare_reform.jpg/800px-Clinton_welfare_reform.jpg",
            imageCaption: "President Clinton signing welfare reform legislation, 1996"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which president signed welfare reform in 1996?",
                options: ["George H.W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What program did welfare reform replace?",
                options: ["Social Security", "AFDC", "Medicare", "Food Stamps"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What is the typical time limit on TANF benefits?",
                options: ["Two years", "Three years", "Five years", "Ten years"],
                correct: 2
            }
        ]
    },
    {
        id: 111,
        title: "Clinton Impeachment (1998-1999)",
        text: "President Bill Clinton was impeached by the House of Representatives on December 19, 1998, on charges of perjury and obstruction of justice related to his relationship with White House intern Monica Lewinsky and his testimony in the Paula Jones sexual harassment lawsuit. Clinton became only the second U.S. president to be impeached (after Andrew Johnson in 1868). The scandal began when Independent Counsel Kenneth Starr, originally investigating a real estate deal called Whitewater, expanded his probe to Clinton's personal conduct. Clinton initially denied the relationship with Lewinsky but later admitted to an 'inappropriate relationship.' The impeachment was highly partisan, with Republicans supporting it and Democrats largely opposing. The Senate trial began in January 1999 and ended with Clinton's acquittal on both charges, with neither receiving the two-thirds majority needed for removal. Despite the scandal, Clinton's approval ratings remained high, and the impeachment shaped partisan divisions that persisted for decades.",
        primarySource: {
            quote: "Indeed I did have a relationship with Miss Lewinsky that was not appropriate. In fact, it was wrong.",
            attribution: "President Bill Clinton",
            context: "Televised address to the nation, August 17, 1998",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Clinton_impeachment.jpg/800px-Clinton_impeachment.jpg",
            imageCaption: "President Clinton during impeachment proceedings, 1998"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year was Clinton impeached?",
                options: ["1996", "1997", "1998", "1999"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was Clinton impeached for?",
                options: ["Bribery", "Treason", "Perjury and obstruction of justice", "Tax evasion"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Was Clinton removed from office?",
                options: ["Yes, immediately", "Yes, after Senate trial", "No, he was acquitted", "No, he resigned"],
                correct: 2
            }
        ]
    },
    {
        id: 112,
        title: "Columbine High School Shooting (1999)",
        text: "On April 20, 1999, students Eric Harris and Dylan Klebold murdered 12 students and one teacher at Columbine High School in Littleton, Colorado, before taking their own lives. The massacre shocked the nation and became a watershed moment in discussions about gun violence, school safety, bullying, and youth culture. The shooters had planned the attack for over a year, intending to kill hundreds using bombs that ultimately failed to detonate. Images of terrified students fleeing the school and SWAT teams responding dominated media coverage. The tragedy sparked intense debates about gun control, violent video games, and bullying in schools. It led to significant changes in school security protocols, emergency response procedures, and increased awareness of warning signs of violence. Columbine became a grim touchstone, with subsequent school shootings often compared to it. The shooting influenced everything from pop culture to law enforcement tactics and remains a defining tragedy in American education.",
        primarySource: {
            quote: "We can't be consumed by our petty differences anymore. We will be united in our common interests.",
            attribution: "President Bill Clinton",
            context: "Remarks after Columbine shooting, April 20, 1999",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Columbine_shooting_security_camera.jpg/800px-Columbine_shooting_security_camera.jpg",
            imageCaption: "Security footage from Columbine High School, April 20, 1999"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Columbine shooting occur?",
                options: ["1997", "1998", "1999", "2000"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many people died at Columbine (excluding the shooters)?",
                options: ["10", "13", "15", "20"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "In what state did the Columbine shooting occur?",
                options: ["California", "Colorado", "Connecticut", "Texas"],
                correct: 1
            }
        ]
    },
    {
        id: 113,
        title: "Y2K Computer Bug Concerns (1999-2000)",
        text: "As the year 2000 approached, widespread concern grew about the Y2K bug (also called the Millennium Bug), a computer programming shortcut that represented years with only two digits. Many feared computers would interpret '00' as 1900 rather than 2000, potentially causing massive failures in banking, utilities, transportation, and government systems. The U.S. government and private sector spent an estimated $100 billion to $300 billion updating and testing computer systems. President Clinton created a Y2K council to coordinate preparations. Media coverage ranged from measured concern to apocalyptic predictions. Some people stockpiled food and supplies, while survivalists prepared for societal collapse. When midnight arrived on January 1, 2000, the transition was remarkably smooth, with only minor glitches reported worldwide. While some criticized the concern as overblown, most experts credit the extensive preparation for preventing major problems. The Y2K experience demonstrated both technology's vulnerabilities and the effectiveness of coordinated remediation efforts.",
        primarySource: {
            quote: "The Y2K problem is real, but it is not insurmountable. If we work together, if we keep at it, we will solve the problem.",
            attribution: "President Bill Clinton",
            context: "Remarks on Y2K preparations, July 14, 1999",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Y2K_bug.png/800px-Y2K_bug.png",
            imageCaption: "Y2K warning symbol used in late 1999"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What does Y2K stand for?",
                options: ["Year 2000", "Yesterday's 2000 Knowledge", "Yellow 2000 Kit", "Yearly 2000 Kernel"],
                correct: 0
            },
            {
                difficulty: "intermediate",
                question: "What was the main concern about Y2K?",
                options: ["Computer virus", "Date format causing system failures", "Internet crash", "Power grid collapse"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Did major Y2K problems occur when 2000 arrived?",
                options: ["Yes, widespread failures", "Yes, moderate problems", "No, only minor glitches", "No systems were affected"],
                correct: 2
            }
        ]
    },
    {
        id: 114,
        title: "Telecommunications Act of 1996",
        text: "Signed by President Clinton on February 8, 1996, the Telecommunications Act was the first major overhaul of telecommunications law since the Communications Act of 1934. The law aimed to promote competition and reduce regulation in telecommunications markets by removing barriers between different types of communications companies. It allowed long-distance carriers to compete in local markets and vice versa, permitted greater consolidation in media ownership, and included provisions on internet regulation and decency. The act significantly affected radio and television, leading to massive consolidation as ownership caps were relaxed. Critics argue it led to reduced diversity in media ownership and content. The law also included the controversial Communications Decency Act, parts of which were struck down by the Supreme Court. The Telecommunications Act shaped the modern media landscape and set the stage for the internet age, though debates continue about whether it adequately promoted competition or simply enabled monopolistic consolidation.",
        primarySource: {
            quote: "This historic legislation will enable us to ride the information superhighway and bring the benefits of the information age to all Americans.",
            attribution: "President Bill Clinton",
            context: "Signing ceremony for Telecommunications Act, February 8, 1996",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Clinton_signing_telecom_act.jpg/800px-Clinton_signing_telecom_act.jpg",
            imageCaption: "President Clinton signing the Telecommunications Act, 1996"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When was the Telecommunications Act signed?",
                options: ["1994", "1995", "1996", "1997"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was a major goal of the Telecommunications Act?",
                options: ["Nationalize phone companies", "Promote competition and reduce regulation", "Ban cable television", "Create internet tax"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What did the act primarily replace?",
                options: ["Federal Radio Act of 1927", "Communications Act of 1934", "Cable Act of 1984", "Digital Millennium Copyright Act"],
                correct: 1
            }
        ]
    },
    {
        id: 115,
        title: "Rwandan Genocide and U.S. Response (1994)",
        text: "From April to July 1994, members of Rwanda's Hutu majority murdered an estimated 800,000 people, primarily from the Tutsi minority, in one of the fastest genocides in history. The international community, including the United States, failed to intervene effectively. The Clinton administration, still reeling from the Somalia intervention in 1993, was reluctant to commit troops. Officials avoided using the word 'genocide' for weeks, as it would have obligated action under international law. The UN peacekeeping force was reduced rather than reinforced. The genocide ended when Tutsi-led forces captured the capital. The U.S. failure to act in Rwanda became one of the greatest regrets of the Clinton presidency. In 1998, Clinton visited Rwanda and apologized for inaction. The genocide and tepid international response led to reforms in how the international community addresses mass atrocities and shaped debates about humanitarian intervention and the responsibility to protect.",
        primarySource: {
            quote: "We did not act quickly enough after the killing began... We did not immediately call these crimes by their rightful name: genocide.",
            attribution: "President Bill Clinton",
            context: "Remarks in Kigali, Rwanda, March 25, 1998",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rwandan_genocide_Murambi_skulls.jpg/800px-Rwandan_genocide_Murambi_skulls.jpg",
            imageCaption: "Memorial to victims of the Rwandan genocide"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what year did the Rwandan genocide occur?",
                options: ["1992", "1993", "1994", "1995"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Approximately how many people were killed?",
                options: ["100,000", "300,000", "800,000", "2 million"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was criticized about the U.S. response?",
                options: ["Over-intervention", "Failure to act and intervene", "Supporting the wrong side", "Providing weapons"],
                correct: 1
            }
        ]
    },
    {
        id: 116,
        title: "Unabomber Arrested (1996)",
        text: "On April 3, 1996, federal agents arrested Theodore Kaczynski, known as the Unabomber, at his remote Montana cabin, ending one of the longest and most expensive manhunts in FBI history. From 1978 to 1995, Kaczynski conducted a mail bombing campaign targeting universities and airlines (hence 'Unabomber'), killing three people and injuring 23. A former mathematics professor who had retreated to a primitive lifestyle, Kaczynski harbored anti-technology and anti-industrial beliefs. In 1995, he sent a 35,000-word manifesto titled 'Industrial Society and Its Future' to major newspapers, promising to stop the bombings if it was published. The Washington Post and New York Times published it, and Kaczynski's brother David recognized the writing and alerted authorities. Kaczynski was convicted and sentenced to life in prison without parole. The case highlighted domestic terrorism threats and raised questions about technology, modernity, and mental illness.",
        primarySource: {
            quote: "The Industrial Revolution and its consequences have been a disaster for the human race.",
            attribution: "Theodore Kaczynski",
            context: "Opening line of Unabomber manifesto, 1995",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Unabomber-sketch.png/800px-Unabomber-sketch.png",
            imageCaption: "FBI sketch of the Unabomber before his arrest"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was the Unabomber's real name?",
                options: ["Timothy McVeigh", "Theodore Kaczynski", "Eric Rudolph", "David Berkowitz"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How was the Unabomber finally identified?",
                options: ["DNA evidence", "Fingerprints", "His brother recognized his manifesto", "Security camera footage"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "In what year was Kaczynski arrested?",
                options: ["1994", "1995", "1996", "1997"],
                correct: 2
            }
        ]
    },
    {
        id: 117,
        title: "TWA Flight 800 Explosion (1996)",
        text: "On July 17, 1996, Trans World Airlines Flight 800, a Boeing 747, exploded and crashed into the Atlantic Ocean near East Moriches, New York, killing all 230 people aboard. The plane was en route from New York to Paris when it exploded just 12 minutes after takeoff. The disaster sparked intense investigation and numerous conspiracy theories, with some claiming a missile strike. The National Transportation Safety Board conducted a four-year investigation, one of the most extensive in aviation history. The NTSB concluded that the probable cause was an explosion of flammable fuel-air vapors in the center wing fuel tank, likely ignited by a short circuit. The investigation examined over 95 percent of the recovered wreckage. The tragedy led to significant aviation safety improvements, including fuel tank inerting systems and enhanced electrical system designs. The crash remains one of the deadliest aviation disasters in U.S. history.",
        primarySource: {
            quote: "To the families and loved ones of those lost: You are not alone. Our hearts are with you.",
            attribution: "President Bill Clinton",
            context: "Statement on TWA Flight 800, July 18, 1996",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TWA_Flight_800_wreckage.jpg/800px-TWA_Flight_800_wreckage.jpg",
            imageCaption: "Recovered wreckage from TWA Flight 800, 1996"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many people died on TWA Flight 800?",
                options: ["150", "230", "300", "400"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What did the NTSB determine caused the explosion?",
                options: ["Missile strike", "Bomb", "Fuel tank explosion", "Engine failure"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "In what year did TWA Flight 800 crash?",
                options: ["1994", "1995", "1996", "1997"],
                correct: 2
            }
        ]
    },
    {
        id: 118,
        title: "Centennial Olympic Park Bombing (1996)",
        text: "During the 1996 Summer Olympics in Atlanta, a pipe bomb exploded in Centennial Olympic Park on July 27, killing one person directly and causing a fatal heart attack in another, while injuring 111 others. Security guard Richard Jewell discovered the bomb and helped evacuate the area before it detonated, initially being hailed as a hero. However, the FBI soon focused on Jewell as the prime suspect, and media coverage destroyed his reputation despite never being charged. Jewell was eventually cleared, but his life was permanently affected. The actual bomber, Eric Rudolph, an anti-abortion extremist, evaded capture for years and committed additional bombings. Rudolph was finally arrested in 2003 and pleaded guilty to the Olympic bombing and other attacks, receiving life in prison. The case highlighted problems with premature rush to judgment, trial by media, and the dangers faced by those in the public eye during investigations.",
        primarySource: {
            quote: "The ATF and FBI are out to get me. They have no other suspect. I have no idea why they're doing this to me.",
            attribution: "Richard Jewell",
            context: "Interview during investigation, 1996",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Centennial_Olympic_Park_bombing.jpg/800px-Centennial_Olympic_Park_bombing.jpg",
            imageCaption: "Aftermath of Centennial Olympic Park bombing, 1996"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Where did the 1996 Olympic bombing occur?",
                options: ["Los Angeles", "Atlanta", "Salt Lake City", "New York"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who was initially wrongly suspected of the bombing?",
                options: ["Eric Rudolph", "Timothy McVeigh", "Richard Jewell", "Terry Nichols"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Who actually committed the Olympic Park bombing?",
                options: ["Richard Jewell", "Eric Rudolph", "Theodore Kaczynski", "Ramzi Yousef"],
                correct: 1
            }
        ]
    },
    {
        id: 119,
        title: "Waco Siege (1993)",
        text: "From February 28 to April 19, 1993, federal agents laid siege to the Branch Davidian compound near Waco, Texas, led by David Koresh. The standoff began when the Bureau of Alcohol, Tobacco, and Firearms (ATF) attempted to execute a search warrant for illegal weapons, resulting in a gunfight that killed four agents and six Branch Davidians. The FBI took over, and a 51-day siege ensued with intense negotiations. On April 19, the FBI launched a tear gas assault to force out the occupants. A fire engulfed the compound, killing 76 people, including Koresh and 25 children. The cause of the fire remains disputed—the government claimed the Davidians set it, while survivors blamed the FBI's actions. The tragedy was highly controversial, with critics accusing the government of excessive force. Waco became a rallying point for anti-government extremists and directly inspired Timothy McVeigh's Oklahoma City bombing exactly two years later.",
        primarySource: {
            quote: "I am your God and you will bow under my feet.",
            attribution: "David Koresh",
            context: "Reported statement to Branch Davidian followers",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Waco_fire.jpg/800px-Waco_fire.jpg",
            imageCaption: "Branch Davidian compound on fire, April 19, 1993"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How long did the Waco siege last?",
                options: ["30 days", "51 days", "75 days", "100 days"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who led the Branch Davidians?",
                options: ["Jim Jones", "David Koresh", "Charles Manson", "Marshall Applewhite"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "When did the Waco compound fire occur?",
                options: ["February 28, 1993", "March 15, 1993", "April 19, 1993", "May 1, 1993"],
                correct: 2
            }
        ]
    },
    {
        id: 120,
        title: "Branch Davidian Aftermath and Ruby Ridge (1992)",
        text: "The Ruby Ridge incident in August 1992 preceded Waco and similarly involved a federal siege that ended in tragedy. U.S. Marshals attempted to arrest Randy Weaver, a white separatist, for weapons charges at his remote Idaho cabin. A confrontation resulted in the deaths of a U.S. Marshal and Weaver's 14-year-old son. During an 11-day FBI siege, an FBI sniper shot and killed Weaver's wife, Vicki, while she held their infant daughter. Weaver eventually surrendered and was acquitted of the most serious charges; the government later paid a $3.1 million settlement. Ruby Ridge, like Waco, became a symbol for anti-government militia movements and raised serious questions about federal law enforcement tactics. Both incidents contributed to domestic terrorism, influenced the Oklahoma City bombing, and led to reforms in federal law enforcement rules of engagement. The events galvanized the militia movement and deepened distrust between rural Americans and federal authorities.",
        primarySource: {
            quote: "The FBI and the Justice Department must be held accountable for Ruby Ridge.",
            attribution: "Senator Arlen Specter",
            context: "Senate Judiciary Committee hearings on Ruby Ridge, 1995",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ruby_Ridge_aerial.jpg/800px-Ruby_Ridge_aerial.jpg",
            imageCaption: "Aerial view of Randy Weaver's cabin at Ruby Ridge"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what state did Ruby Ridge occur?",
                options: ["Montana", "Wyoming", "Idaho", "Colorado"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What year did the Ruby Ridge standoff occur?",
                options: ["1990", "1991", "1992", "1993"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Who was the survivalist at the center of Ruby Ridge?",
                options: ["David Koresh", "Timothy McVeigh", "Randy Weaver", "Ted Kaczynski"],
                correct: 2
            }
        ]
    },
    {
        id: 121,
        title: "Anita Hill and Clarence Thomas Hearings (1991)",
        text: "In October 1991, the Senate Judiciary Committee held dramatic hearings on sexual harassment allegations against Supreme Court nominee Clarence Thomas. Anita Hill, a law professor who had worked for Thomas at the Department of Education and EEOC, testified that Thomas had sexually harassed her with inappropriate comments and descriptions of pornography. Thomas vehemently denied the allegations, calling the hearings a 'high-tech lynching.' The all-male, all-white Judiciary Committee's questioning of Hill drew criticism and galvanized women's political activism. The hearings were televised and captivated the nation, sparking national conversation about sexual harassment in the workplace. Thomas was confirmed to the Supreme Court by a narrow 52-48 vote. The hearings are credited with raising awareness of sexual harassment, contributing to the 'Year of the Woman' in the 1992 elections when record numbers of women were elected to Congress, and presaging later movements like #MeToo.",
        primarySource: {
            quote: "It is a high-tech lynching for uppity blacks who in any way deign to think for themselves.",
            attribution: "Clarence Thomas",
            context: "Testimony before Senate Judiciary Committee, October 11, 1991",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Anita_Hill_testifies.jpg/800px-Anita_Hill_testifies.jpg",
            imageCaption: "Anita Hill testifying before the Senate, 1991"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who accused Clarence Thomas of sexual harassment?",
                options: ["Paula Jones", "Anita Hill", "Monica Lewinsky", "Christine Blasey Ford"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What position was Thomas nominated for?",
                options: ["Attorney General", "Secretary of State", "Supreme Court Justice", "Federal Appeals Court Judge"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Was Clarence Thomas confirmed?",
                options: ["Yes, unanimously", "Yes, by narrow margin", "No, rejected", "Nomination withdrawn"],
                correct: 1
            }
        ]
    },
    {
        id: 122,
        title: "Don't Ask, Don't Tell Policy (1993)",
        text: "On July 19, 1993, President Clinton announced the 'Don't Ask, Don't Tell' (DADT) policy regarding homosexuals serving in the U.S. military. The policy prohibited military personnel from discriminating against or harassing closeted homosexual service members, while barring openly gay, lesbian, or bisexual persons from military service. It was a compromise between Clinton's campaign promise to allow gays to serve openly and strong military and Congressional opposition. Under DADT, superiors were not to ask about sexual orientation, and service members were not to disclose their homosexuality or engage in homosexual conduct. The policy was controversial from the start, with LGBTQ advocates viewing it as discriminatory and many military leaders seeing it as disruptive. Over 13,000 service members were discharged under DADT. The policy remained in effect until 2011, when President Obama signed its repeal, allowing LGBTQ individuals to serve openly in the military.",
        primarySource: {
            quote: "The policy of Don't Ask, Don't Tell was a useful step that brought us to where we are today. Now, we can take the next step.",
            attribution: "President Barack Obama",
            context: "Statement on repealing Don't Ask, Don't Tell, 2010",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Dont_Ask_Dont_Tell_protest.jpg/800px-Dont_Ask_Dont_Tell_protest.jpg",
            imageCaption: "Protest against Don't Ask, Don't Tell policy"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What did Don't Ask, Don't Tell relate to?",
                options: ["Privacy laws", "Gays in the military", "Witness protection", "Classified information"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which president implemented Don't Ask, Don't Tell?",
                options: ["George H.W. Bush", "Bill Clinton", "George W. Bush", "Barack Obama"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "When was Don't Ask, Don't Tell repealed?",
                options: ["2007", "2009", "2011", "2013"],
                correct: 2
            }
        ]
    },
    {
        id: 123,
        title: "Whitewater Controversy (1992-2000)",
        text: "The Whitewater controversy involved allegations of improper real estate dealings by Bill and Hillary Clinton in Arkansas in the 1970s and 1980s. The Clintons had invested in the Whitewater Development Corporation with business partners Jim and Susan McDougal. When McDougal's savings and loan failed, questions arose about whether the Clintons received favorable treatment or engaged in illegal activities. Attorney General Janet Reno appointed a special prosecutor (later Independent Counsel Kenneth Starr) to investigate. The investigation expanded to examine other matters including the firing of White House travel office employees, FBI files controversy, and eventually Clinton's relationship with Monica Lewinsky. After years of investigation and tens of millions in costs, no charges were brought against the Clintons regarding Whitewater, though several associates were convicted of crimes. The lengthy investigation contributed to partisan polarization and raised questions about the scope of independent counsel investigations.",
        primarySource: {
            quote: "I did not have sexual relations with that woman, Miss Lewinsky.",
            attribution: "President Bill Clinton",
            context: "White House statement, January 26, 1998",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kenneth_Starr.jpg/800px-Kenneth_Starr.jpg",
            imageCaption: "Independent Counsel Kenneth Starr"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was Whitewater?",
                options: ["Water scandal", "Real estate controversy", "Arms deal", "Spy ring"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Who was the independent counsel who investigated Whitewater?",
                options: ["Robert Mueller", "Kenneth Starr", "Patrick Fitzgerald", "Leon Jaworski"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Were the Clintons charged with crimes related to Whitewater?",
                options: ["Yes, both convicted", "Yes, Hillary only", "Yes, Bill only", "No charges brought"],
                correct: 3
            }
        ]
    },
    {
        id: 124,
        title: "Exxon Valdez Oil Spill (1989)",
        text: "On March 24, 1989, the oil tanker Exxon Valdez struck Bligh Reef in Prince William Sound, Alaska, spilling approximately 11 million gallons of crude oil. It was the worst oil spill in U.S. waters until the 2010 Deepwater Horizon disaster. The spill covered 1,300 miles of coastline, killing hundreds of thousands of seabirds, thousands of sea otters, and other wildlife. The tanker's captain, Joseph Hazelwood, had a history of alcohol abuse, and questions arose about whether he was impaired. The cleanup effort involved thousands of workers but was hampered by the remote location and harsh conditions. Exxon spent about $2 billion on cleanup and paid billions more in damages and settlements. The disaster led to the Oil Pollution Act of 1990, which improved oil spill prevention and response and mandated double hulls for tankers. The Exxon Valdez spill galvanized the environmental movement and remains a cautionary tale about environmental protection.",
        primarySource: {
            quote: "We will make you whole again. We will make Prince William Sound whole again.",
            attribution: "Exxon CEO Lawrence Rawl",
            context: "Statement after the spill, March 1989",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Exxon_Valdez_oil_spill.jpg/800px-Exxon_Valdez_oil_spill.jpg",
            imageCaption: "Cleanup efforts after Exxon Valdez spill, 1989"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what state did the Exxon Valdez spill occur?",
                options: ["California", "Washington", "Alaska", "Oregon"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What year did the Exxon Valdez spill happen?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how many gallons of oil spilled?",
                options: ["5 million", "11 million", "25 million", "50 million"],
                correct: 1
            }
        ]
    },
    {
        id: 125,
        title: "Jonestown Massacre (1978)",
        text: "On November 18, 1978, over 900 members of the Peoples Temple, led by Jim Jones, died in a mass murder-suicide in Jonestown, Guyana. Jones, a charismatic preacher who had moved his congregation from California to Guyana, created an agricultural commune he called a socialist paradise. Concerned about reports of abuse, Congressman Leo Ryan visited Jonestown to investigate. As Ryan and others attempted to leave with some defectors, they were ambushed and killed at a nearby airstrip. Jones then ordered his followers to drink cyanide-laced punch, killing 909 people including 304 children. Some were murdered, others died by suicide. The tragedy shocked the world and introduced the phrase 'drinking the Kool-Aid' into popular culture. Jonestown raised questions about cult manipulation, government oversight of religious groups, and the vulnerability of people seeking community and meaning. It remains the largest single loss of American civilian life in a deliberate act until September 11, 2001.",
        primarySource: {
            quote: "We didn't commit suicide; we committed an act of revolutionary suicide protesting the conditions of an inhumane world.",
            attribution: "Jim Jones",
            context: "Final death tape recording, November 18, 1978",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jonestown_aerial_view.jpg/800px-Jonestown_aerial_view.jpg",
            imageCaption: "Aerial view of Jonestown after the massacre, 1978"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who led the Peoples Temple?",
                options: ["David Koresh", "Jim Jones", "Charles Manson", "Marshall Applewhite"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Where was Jonestown located?",
                options: ["California", "Texas", "Guyana", "Honduras"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how many people died at Jonestown?",
                options: ["300", "600", "900", "1,200"],
                correct: 2
            }
        ]
    },
    {
        id: 126,
        title: "Love Canal Environmental Disaster (1978)",
        text: "Love Canal, a neighborhood in Niagara Falls, New York, became synonymous with environmental contamination in the late 1970s. From 1942 to 1953, the Hooker Chemical Company dumped 21,000 tons of toxic waste into an abandoned canal. The company covered the site and sold it to the city, which built an elementary school and homes. By the 1970s, residents experienced high rates of birth defects, miscarriages, and illnesses. In 1978, resident Lois Gibbs organized protests after her son became ill. President Carter declared a federal emergency in 1978 and 1980, leading to the evacuation of over 800 families. The disaster led to the 1980 Superfund law (CERCLA), which established a federal program to clean up hazardous waste sites and hold polluters accountable. Love Canal raised awareness about environmental justice and toxic waste, transforming how America addresses environmental contamination. It demonstrated the power of grassroots activism in environmental protection.",
        primarySource: {
            quote: "We the people will have to take care of ourselves. The government has failed us.",
            attribution: "Lois Gibbs, Love Canal resident activist",
            context: "Statement during Love Canal crisis, 1978",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Love_Canal_protest.jpg/800px-Love_Canal_protest.jpg",
            imageCaption: "Residents protesting at Love Canal, 1978"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what state is Love Canal located?",
                options: ["New Jersey", "Pennsylvania", "New York", "Ohio"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What major environmental law resulted from Love Canal?",
                options: ["Clean Air Act", "Clean Water Act", "Superfund law", "Endangered Species Act"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Who was the resident activist who organized Love Canal protests?",
                options: ["Rachel Carson", "Lois Gibbs", "Erin Brockovich", "Dolores Huerta"],
                correct: 1
            }
        ]
    },
    {
        id: 127,
        title: "Disco Demolition Night (1979)",
        text: "On July 12, 1979, a promotional event at Comiskey Park in Chicago turned into a riot that symbolized cultural tensions of the late 1970s. Chicago radio DJ Steve Dahl organized 'Disco Demolition Night' between games of a White Sox doubleheader, inviting fans to bring disco records to be blown up on the field. Admission was 98 cents with a disco record. An estimated 50,000 people attended (far more than expected), and after the explosion of records, thousands stormed the field, tearing up the turf and bases. The White Sox had to forfeit the second game. While presented as a protest against disco music's dominance, many scholars note the event had racist and homophobic undertones, as disco was associated with Black, Latino, and LGBTQ communities. The event is often cited as marking the symbolic end of disco's mainstream popularity. It reflected broader cultural backlash and tensions around race, sexuality, and cultural change.",
        primarySource: {
            quote: "This is now officially the world's largest anti-disco rally!",
            attribution: "Steve Dahl",
            context: "Announcement before exploding disco records, July 12, 1979",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Disco_Demolition_Night.jpg/800px-Disco_Demolition_Night.jpg",
            imageCaption: "Fans storming the field at Disco Demolition Night, 1979"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what city did Disco Demolition Night occur?",
                options: ["New York", "Los Angeles", "Chicago", "Detroit"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What year was Disco Demolition Night?",
                options: ["1977", "1978", "1979", "1980"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the consequence of the riot?",
                options: ["Game was delayed", "White Sox forfeited second game", "Stadium was closed", "DJ was arrested"],
                correct: 1
            }
        ]
    },
    {
        id: 128,
        title: "ACT UP and AIDS Activism (1987)",
        text: "AIDS Coalition to Unleash Power (ACT UP) was founded in March 1987 in New York City in response to the AIDS crisis and government inaction. The activist organization used confrontational tactics including civil disobedience, demonstrations, and public actions to demand government action on AIDS research, treatment, and prevention. ACT UP's slogan 'SILENCE = DEATH' and its distinctive logo became symbols of AIDS activism. The group staged dramatic protests, including disrupting the New York Stock Exchange, holding die-ins at the FDA, and unfurling a giant condom over Jesse Helms's house. ACT UP successfully pressured pharmaceutical companies to lower drug prices, the FDA to speed drug approval processes, and the National Institutes of Health to include people with AIDS in research. The organization's tactics influenced later activist movements and demonstrated the power of direct action. ACT UP transformed AIDS from a stigmatized disease into a political issue demanding urgent response.",
        primarySource: {
            quote: "SILENCE = DEATH",
            attribution: "ACT UP",
            context: "Organization slogan, 1987",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/ACT_UP_protest.jpg/800px-ACT_UP_protest.jpg",
            imageCaption: "ACT UP protest demanding AIDS treatment, late 1980s"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What does ACT UP stand for?",
                options: ["American Coalition for Treatment and Unity Program", "AIDS Coalition to Unleash Power", "Alliance for Change Through Unified Protest", "Action Committee for Treatment of Underserved Patients"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When was ACT UP founded?",
                options: ["1985", "1986", "1987", "1988"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was ACT UP's famous slogan?",
                options: ["Act Now, Save Lives", "SILENCE = DEATH", "AIDS is Not Over", "Fight Back"],
                correct: 1
            }
        ]
    },
    {
        id: 129,
        title: "Hands Across America (1986)",
        text: "On May 25, 1986, approximately 6.5 million people joined hands in a human chain across the contiguous United States to raise money and awareness for hunger and homelessness. The event, called Hands Across America, stretched from New York City to Long Beach, California, covering 4,152 miles. Participants each paid $10 to reserve their spot in line. The chain was not continuous due to sparsely populated areas, but it represented a massive show of solidarity. President Reagan and numerous celebrities participated. The event was organized by USA for Africa, which had produced 'We Are the World.' While Hands Across America raised about $15 million (less than hoped due to organizational costs), it succeeded in raising awareness about poverty and homelessness in America. The event epitomized 1980s feel-good activism and benefit culture. It remains one of the largest participatory charity events in American history.",
        primarySource: {
            quote: "We want to send a message to hungry and homeless people that we care about them.",
            attribution: "Ken Kragen, organizer",
            context: "Statement before Hands Across America, 1986",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Hands_Across_America.jpg/800px-Hands_Across_America.jpg",
            imageCaption: "Participants in Hands Across America, May 25, 1986"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was Hands Across America intended to address?",
                options: ["AIDS crisis", "Nuclear weapons", "Hunger and homelessness", "Environmental protection"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "When did Hands Across America take place?",
                options: ["1984", "1985", "1986", "1987"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately how many people participated?",
                options: ["2 million", "4.5 million", "6.5 million", "10 million"],
                correct: 2
            }
        ]
    },
    {
        id: 130,
        title: "Reaganomics and Supply-Side Economics (1981-1989)",
        text: "Reaganomics refers to the economic policies of President Ronald Reagan based on supply-side economics. The approach included tax cuts, especially for upper income brackets and corporations; reduced government spending on social programs; decreased regulation of business; and tight monetary policy to control inflation. Reagan argued that tax cuts would stimulate investment and economic growth, producing enough revenue to offset the cuts—a theory critics called 'voodoo economics.' The 1981 Economic Recovery Tax Act cut the top tax rate from 70 percent to 50 percent, later reduced to 28 percent. The economy grew significantly in the mid-1980s, inflation fell, and millions of jobs were created. However, the national debt tripled, income inequality increased, and critics argued the benefits went primarily to the wealthy. Reaganomics fundamentally shifted American economic policy and political discourse, with debates about its effectiveness continuing decades later.",
        primarySource: {
            quote: "Government is not the solution to our problem; government is the problem.",
            attribution: "President Ronald Reagan",
            context: "First inaugural address, January 20, 1981",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Reagan_tax_cuts.jpg/800px-Reagan_tax_cuts.jpg",
            imageCaption: "President Reagan promoting tax cuts, 1981"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What president implemented Reaganomics?",
                options: ["Jimmy Carter", "Ronald Reagan", "George H.W. Bush", "Bill Clinton"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was a key feature of Reaganomics?",
                options: ["Nationalization of industries", "Tax increases", "Tax cuts and reduced regulation", "Universal healthcare"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What happened to the national debt during Reagan's presidency?",
                options: ["Decreased significantly", "Stayed the same", "Doubled", "Tripled"],
                correct: 3
            }
        ]
    },
    {
        id: 131,
        title: "Air Traffic Controllers Strike (1981)",
        text: "On August 3, 1981, approximately 13,000 air traffic controllers in the Professional Air Traffic Controllers Organization (PATCO) went on strike, demanding better pay, a shorter workweek, and improved working conditions. Federal law prohibited strikes by government employees, and President Reagan gave strikers 48 hours to return to work or be fired. When most refused, Reagan fired 11,345 controllers, banned them from federal service for life (later rescinded), and decertified PATCO. The military and supervisors maintained reduced air traffic operations while new controllers were trained. Reagan's decisive action was praised by supporters as demonstrating strong leadership and condemned by labor advocates as union-busting. The strike's failure weakened organized labor nationally and emboldened private sector employers to take harder lines with unions. It marked a turning point in labor relations, contributing to declining union membership and power that continued for decades.",
        primarySource: {
            quote: "They are in violation of the law, and if they do not report for work within 48 hours, they have forfeited their jobs and will be terminated.",
            attribution: "President Ronald Reagan",
            context: "Statement on air traffic controllers strike, August 3, 1981",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/PATCO_strike.jpg/800px-PATCO_strike.jpg",
            imageCaption: "Air traffic controllers on strike, August 1981"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What workers went on strike in 1981?",
                options: ["Coal miners", "Auto workers", "Air traffic controllers", "Teachers"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What did President Reagan do when strikers didn't return?",
                options: ["Negotiated compromise", "Fired them", "Gave them raises", "Ignored the strike"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Approximately how many controllers were fired?",
                options: ["5,000", "8,000", "11,000", "15,000"],
                correct: 2
            }
        ]
    },
    {
        id: 132,
        title: "Grenada Invasion (1983)",
        text: "On October 25, 1983, President Reagan ordered the invasion of Grenada, a small Caribbean island nation, in Operation Urgent Fury. The action followed a Marxist coup that killed Prime Minister Maurice Bishop and raised concerns about Cuban and Soviet influence in the region. Reagan cited the safety of approximately 1,000 American medical students on the island as justification. About 7,000 U.S. troops invaded, quickly defeating Grenadian and Cuban forces. The invasion lasted a few days, with 19 American servicemembers killed. The United Nations General Assembly condemned the invasion as a violation of international law, though the U.S. vetoed a Security Council resolution. The operation was controversial, with critics calling it an illegal invasion and supporters praising it as protecting American lives and rolling back communism. Grenada was Reagan's first major use of military force and boosted his image as a strong leader, helping overcome lingering 'Vietnam Syndrome.'",
        primarySource: {
            quote: "We got there just in time.",
            attribution: "President Ronald Reagan",
            context: "Address on Grenada invasion, October 27, 1983",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Grenada_invasion_1983.jpg/800px-Grenada_invasion_1983.jpg",
            imageCaption: "U.S. troops during Grenada invasion, 1983"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What country did the U.S. invade in 1983?",
                options: ["Nicaragua", "Panama", "Grenada", "Cuba"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was a justification for the Grenada invasion?",
                options: ["Oil resources", "Protecting American students", "Nuclear weapons", "Drug trafficking"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the military operation called?",
                options: ["Operation Just Cause", "Operation Urgent Fury", "Operation Desert Storm", "Operation Restore Hope"],
                correct: 1
            }
        ]
    },
    {
        id: 133,
        title: "Beirut Barracks Bombing (1983)",
        text: "On October 23, 1983, two truck bombs struck buildings housing American and French military forces in Beirut, Lebanon, killing 241 American servicemembers (220 Marines, 18 Navy personnel, and 3 Army soldiers) and 58 French paratroopers. It was the deadliest single-day death toll for the U.S. Marine Corps since Iwo Jima. The attack was carried out by Islamic militants, likely backed by Iran. U.S. forces were in Lebanon as part of a multinational peacekeeping force following the 1982 Israeli invasion. The bombing shocked America and raised questions about U.S. involvement in Lebanon's complex civil war. President Reagan initially vowed to keep forces in Lebanon but withdrew them in February 1984. The attack demonstrated the vulnerability of U.S. forces to terrorism and foreshadowed later conflicts in the Middle East. A commission found that security measures were inadequate. The bombing influenced future military deployments and force protection policies.",
        primarySource: {
            quote: "The reason they were there is because we had to try to help bring peace to that troubled region.",
            attribution: "President Ronald Reagan",
            context: "Address after Beirut bombing, October 23, 1983",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Beirut_barracks_bombing.jpg/800px-Beirut_barracks_bombing.jpg",
            imageCaption: "Aftermath of Beirut barracks bombing, October 1983"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In what country did the 1983 barracks bombing occur?",
                options: ["Iraq", "Iran", "Lebanon", "Syria"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many Americans were killed?",
                options: ["58", "128", "241", "340"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What branch suffered the most casualties?",
                options: ["Army", "Navy", "Marines", "Air Force"],
                correct: 2
            }
        ]
    },
    {
        id: 134,
        title: "Panama Invasion and Noriega Capture (1989)",
        text: "On December 20, 1989, President George H.W. Bush ordered the invasion of Panama in Operation Just Cause, deploying 27,000 troops to depose military dictator Manuel Noriega. Noriega, once a CIA asset, had been indicted by U.S. courts on drug trafficking charges and was accused of election fraud, suppressing opposition, and threatening American lives. The invasion met limited resistance, with 23 American servicemembers and several hundred Panamanian soldiers and civilians killed. Noriega initially evaded capture, taking refuge in the Vatican embassy. U.S. forces famously blasted rock music at the embassy. Noriega surrendered on January 3, 1990, was tried in U.S. courts, and convicted on drug charges. The invasion restored democratic government under Guillermo Endara. Critics called it an illegal invasion violating Panamanian sovereignty, while supporters cited protecting American lives and interests. The operation demonstrated post-Cold War U.S. willingness to use military force.",
        primarySource: {
            quote: "General Noriega's reckless threats and attacks upon Americans in Panama created an imminent danger to the 35,000 American citizens in Panama.",
            attribution: "President George H.W. Bush",
            context: "Address announcing Panama invasion, December 20, 1989",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Manuel_Noriega_mugshot.jpg/800px-Manuel_Noriega_mugshot.jpg",
            imageCaption: "Manuel Noriega in U.S. custody, 1990"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who was the Panamanian dictator captured in 1989?",
                options: ["Fidel Castro", "Manuel Noriega", "Hugo Chavez", "Augusto Pinochet"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the invasion operation called?",
                options: ["Operation Just Cause", "Operation Urgent Fury", "Operation Restore Hope", "Operation Enduring Freedom"],
                correct: 0
            },
            {
                difficulty: "advanced",
                question: "What were the charges against Noriega?",
                options: ["Human rights violations", "Murder", "Drug trafficking", "Weapons smuggling"],
                correct: 2
            }
        ]
    },
    {
        id: 135,
        title: "Rodney Dangerfield and Comedy's Cultural Impact (1980s)",
        text: "During the 1980s, American comedy underwent significant transformation, reflecting and shaping cultural attitudes. Comedians like Rodney Dangerfield ('I don't get no respect'), Eddie Murphy, Joan Rivers, George Carlin, and Robin Williams became cultural icons. Comedy clubs proliferated across America, and stand-up comedy moved from nightclubs to mainstream entertainment through cable TV specials and movies. 'Saturday Night Live' continued influencing political and social discourse. The decade saw comedy addressing taboo subjects including race, politics, and social norms. Eddie Murphy's success broke barriers for Black comedians, while Joan Rivers challenged gender norms. The rise of comedy reflected broader cultural shifts toward irreverence and questioning authority that characterized the Reagan era. Comedy became a lens through which Americans processed rapid social, political, and technological change. The 1980s established comedy as a major cultural force and launching pad for entertainment careers.",
        primarySource: {
            quote: "I told my psychiatrist that everyone hates me. He said I was being ridiculous—everyone hasn't met me yet.",
            attribution: "Rodney Dangerfield",
            context: "Classic stand-up routine, 1980s",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Rodney_Dangerfield.jpg/800px-Rodney_Dangerfield.jpg",
            imageCaption: "Rodney Dangerfield performing in the 1980s"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What was Rodney Dangerfield's famous catchphrase?",
                options: ["Make my day", "I don't get no respect", "Just say no", "Where's the beef"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which comedian became a major star in the 1980s with movies and SNL?",
                options: ["Chris Rock", "Eddie Murphy", "Dave Chappelle", "Kevin Hart"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What entertainment venue type proliferated in the 1980s?",
                options: ["Drive-in theaters", "Comedy clubs", "Dinner theaters", "Arcade halls"],
                correct: 1
            }
        ]
    },
    {
        id: 136,
        title: "Bush v. Gore and the 2000 Election",
        text: "The 2000 presidential election between Republican George W. Bush and Democrat Al Gore became one of the closest and most controversial in American history. The outcome hinged on Florida's 25 electoral votes, where initial results showed an extremely narrow margin. Disputes over ballot design, counting procedures, and voting irregularities led to multiple recounts. The infamous 'butterfly ballot' in Palm Beach County confused thousands of voters. After 36 days of legal battles, the Supreme Court's 5-4 decision in Bush v. Gore halted the Florida recount, effectively awarding the presidency to Bush. The decision cited equal protection violations in the recount process. Bush won the Electoral College 271-266 despite Gore winning the popular vote by over 500,000 votes. The election exposed vulnerabilities in American voting systems and intensified partisan divisions. It raised fundamental questions about electoral integrity, the role of the judiciary in elections, and the Electoral College system itself.",
        primarySource: {
            quote: "Seven justices of the Court agree that there are constitutional problems with the recount ordered by the Florida Supreme Court.",
            attribution: "Supreme Court majority opinion in Bush v. Gore",
            context: "December 12, 2000, halting the Florida recount",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2000_Florida_Vote_for_President_by_County.svg/800px-2000_Florida_Vote_for_President_by_County.svg.png",
            imageCaption: "Florida county-by-county results in the 2000 presidential election"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which state's electoral votes decided the 2000 presidential election?",
                options: ["California", "Texas", "Florida", "Ohio"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who won the popular vote in the 2000 presidential election?",
                options: ["George W. Bush", "Al Gore", "Ralph Nader", "Neither, it was tied"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the Supreme Court's vote in Bush v. Gore?",
                options: ["9-0", "7-2", "6-3", "5-4"],
                correct: 3
            }
        ]
    },
    {
        id: 137,
        title: "September 11, 2001 Terrorist Attacks",
        text: "On September 11, 2001, nineteen al-Qaeda terrorists hijacked four commercial airplanes, carrying out the deadliest terrorist attack in world history. Two planes struck the World Trade Center towers in New York City, causing both to collapse within hours. A third plane hit the Pentagon in Arlington, Virginia. The fourth plane, United Flight 93, crashed in a Pennsylvania field after passengers fought back against hijackers, likely preventing an attack on the Capitol or White House. Nearly 3,000 people died, including 343 firefighters and 72 law enforcement officers. The attacks transformed American foreign policy, domestic security, and national consciousness. They launched the War on Terror, leading to wars in Afghanistan and Iraq. Domestically, 9/11 prompted massive expansion of surveillance and security measures. The attacks united Americans in grief and patriotism while raising complex questions about civil liberties, foreign intervention, and America's role in the world.",
        primarySource: {
            quote: "Freedom itself was attacked this morning by a faceless coward, and freedom will be defended.",
            attribution: "President George W. Bush",
            context: "Address to the nation, September 11, 2001",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/World_Trade_Center%2C_New_York_City_-_aerial_view_March_2001.jpg/800px-World_Trade_Center%2C_New_York_City_-_aerial_view_March_2001.jpg",
            imageCaption: "World Trade Center before the attacks, March 2001"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many planes were hijacked on September 11, 2001?",
                options: ["Two", "Three", "Four", "Five"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which terrorist organization carried out the 9/11 attacks?",
                options: ["ISIS", "Hamas", "Al-Qaeda", "Taliban"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which flight crashed in Pennsylvania after passengers fought the hijackers?",
                options: ["United Flight 93", "American Flight 11", "United Flight 175", "American Flight 77"],
                correct: 0
            }
        ]
    },
    {
        id: 138,
        title: "The USA PATRIOT Act (2001)",
        text: "Just 45 days after 9/11, Congress passed the USA PATRIOT Act (Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism) with overwhelming bipartisan support. President Bush signed it into law on October 26, 2001. The Act dramatically expanded government surveillance powers, allowing intelligence agencies to monitor phone and email communications, conduct 'sneak and peek' searches without immediate notification, and access library and business records with limited judicial oversight. It relaxed restrictions on intelligence gathering and information sharing between agencies. Supporters argued these powers were essential to prevent future attacks. Critics warned of constitutional violations, particularly Fourth Amendment protections against unreasonable searches. The Act symbolized the tension between security and liberty in the post-9/11 era. Provisions were later modified, though many surveillance powers remained controversial, especially after Edward Snowden's 2013 revelations about NSA programs.",
        primarySource: {
            quote: "The bill before me takes account of the new realities and dangers posed by modern terrorists. It will help law enforcement to identify, to dismantle, to disrupt, and to punish terrorists before they strike.",
            attribution: "President George W. Bush",
            context: "Signing the PATRIOT Act, October 26, 2001",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/President_George_W._Bush_signs_the_Patriot_Act.jpg/800px-President_George_W._Bush_signs_the_Patriot_Act.jpg",
            imageCaption: "President Bush signs the USA PATRIOT Act into law"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When was the USA PATRIOT Act signed into law?",
                options: ["September 2001", "October 2001", "November 2001", "December 2001"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the primary purpose of the PATRIOT Act?",
                options: ["Strengthen border security", "Expand surveillance to fight terrorism", "Increase military funding", "Reform immigration laws"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which Constitutional amendment did critics say the PATRIOT Act violated?",
                options: ["First Amendment", "Second Amendment", "Fourth Amendment", "Fifth Amendment"],
                correct: 2
            }
        ]
    },
    {
        id: 139,
        title: "The War in Afghanistan Begins (2001)",
        text: "On October 7, 2001, less than a month after 9/11, the United States launched Operation Enduring Freedom, beginning the War in Afghanistan. The initial goal was to dismantle al-Qaeda and remove the Taliban government that harbored them. The campaign combined U.S. airstrikes, special forces, and Afghan opposition forces (Northern Alliance). By December, the Taliban regime had fallen, and Hamama Karzai became interim leader. However, the mission evolved into a two-decade nation-building effort—the longest war in American history. The conflict cost over 2,400 American lives and $2 trillion. It aimed to establish democracy, improve women's rights, and prevent Afghanistan from becoming a terrorist haven. The war faced challenges including Taliban resurgence, government corruption, and unclear objectives. The U.S. withdrawal in 2021 and rapid Taliban takeover prompted debate about the war's purpose and lessons about intervention, nation-building, and American power limits.",
        primarySource: {
            quote: "On my orders, the United States military has begun strikes against al Qaeda terrorist training camps and military installations of the Taliban regime in Afghanistan.",
            attribution: "President George W. Bush",
            context: "Address to the nation, October 7, 2001",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/US_Navy_030329-N-5471P-007_An_F-A-18_Hornet_conducts_a_mission_over_the_skies_of_Iraq.jpg/800px-US_Navy_030329-N-5471P-007_An_F-A-18_Hornet_conducts_a_mission_over_the_skies_of_Iraq.jpg",
            imageCaption: "U.S. military operations in Afghanistan, 2001"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the War in Afghanistan begin?",
                options: ["2000", "2001", "2002", "2003"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which regime did the U.S. remove from power in Afghanistan in 2001?",
                options: ["The Taliban", "Al-Qaeda", "Northern Alliance", "ISIS"],
                correct: 0
            },
            {
                difficulty: "advanced",
                question: "How long did the War in Afghanistan last?",
                options: ["10 years", "15 years", "20 years", "25 years"],
                correct: 2
            }
        ]
    },
    {
        id: 140,
        title: "Department of Homeland Security Created (2002)",
        text: "In response to 9/11, Congress passed the Homeland Security Act in November 2002, creating the Department of Homeland Security (DHS). It began operations on March 1, 2003, representing the largest government reorganization since the Department of Defense was created in 1947. DHS consolidated 22 federal agencies and 170,000 employees under one Cabinet department. It absorbed agencies including the Coast Guard, Secret Service, Immigration and Naturalization Service (split into ICE and CBP), Federal Emergency Management Agency (FEMA), and newly created Transportation Security Administration (TSA). The department's mission focused on preventing terrorist attacks, protecting borders, securing cyberspace, and responding to disasters. The creation of DHS reflected a shift toward viewing security through a coordinated, domestic lens. However, critics questioned its efficiency, citing bureaucratic redundancy and civil liberties concerns. DHS has faced challenges from Hurricane Katrina response to immigration enforcement debates.",
        primarySource: {
            quote: "We are fighting a new kind of war against determined enemies. And public servants long into the future will bear the responsibility to defend Americans against terror.",
            attribution: "President George W. Bush",
            context: "Signing the Homeland Security Act, November 25, 2002",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Seal_of_the_United_States_Department_of_Homeland_Security.svg/800px-Seal_of_the_United_States_Department_of_Homeland_Security.svg.png",
            imageCaption: "Seal of the Department of Homeland Security"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When was the Department of Homeland Security created?",
                options: ["2001", "2002", "2003", "2004"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How many federal agencies were consolidated into DHS?",
                options: ["10", "15", "22", "30"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which agency is NOT part of the Department of Homeland Security?",
                options: ["TSA", "FEMA", "Secret Service", "FBI"],
                correct: 3
            }
        ]
    },
    {
        id: 141,
        title: "The Iraq War Begins (2003)",
        text: "On March 19, 2003, the United States launched Operation Iraqi Freedom, invading Iraq with a 'Coalition of the Willing' led primarily by American and British forces. The Bush administration justified the war by claiming Iraq possessed weapons of mass destruction (WMDs) and supported terrorism. Baghdad fell within weeks, and President Bush declared 'Mission Accomplished' on May 1, 2003. However, no WMDs were found, undermining the war's rationale. What followed was a prolonged occupation facing fierce insurgency, sectarian violence, and nation-building challenges. The war cost over 4,400 American lives, hundreds of thousands of Iraqi lives, and over $2 trillion. It destabilized the region, contributing to the rise of ISIS. The Iraq War deeply divided Americans, damaged U.S. credibility internationally, and prompted debate about intelligence failures, executive power, and the costs of intervention.",
        primarySource: {
            quote: "My fellow citizens, at this hour, American and coalition forces are in the early stages of military operations to disarm Iraq, to free its people and to defend the world from grave danger.",
            attribution: "President George W. Bush",
            context: "Address announcing the invasion of Iraq, March 19, 2003",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Saddam_statue_falling.jpg/800px-Saddam_statue_falling.jpg",
            imageCaption: "Statue of Saddam Hussein being toppled in Baghdad, April 2003"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Iraq War begin?",
                options: ["2001", "2002", "2003", "2004"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the primary justification for invading Iraq?",
                options: ["Oil resources", "Weapons of mass destruction", "Human rights violations", "Support for al-Qaeda"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Were weapons of mass destruction found in Iraq?",
                options: ["Yes, many were found", "Yes, but only a few", "No, none were found", "The search is still ongoing"],
                correct: 2
            }
        ]
    },
    {
        id: 142,
        title: "Abu Ghraib Prison Scandal (2004)",
        text: "In April 2004, photographs emerged showing U.S. military personnel abusing and torturing Iraqi prisoners at Abu Ghraib prison near Baghdad. Images depicted detainees subjected to humiliation, physical abuse, and torture. The scandal shocked the world and severely damaged America's moral authority and claims to be liberating Iraq. CBS's '60 Minutes II' first broke the story, followed by extensive media coverage. An internal Army investigation (the Taguba Report) confirmed systematic abuse. Eleven soldiers were convicted of crimes, though critics argued higher-ranking officials who authorized harsh interrogation techniques escaped accountability. The scandal raised fundamental questions about the treatment of detainees, the application of the Geneva Conventions to the War on Terror, and whether torture was official policy. Abu Ghraib became a symbol of the Iraq War's moral compromises and fueled anti-American sentiment worldwide.",
        primarySource: {
            quote: "I share a deep disgust that those prisoners were treated the way they were treated. Their treatment does not reflect the nature of the American people.",
            attribution: "President George W. Bush",
            context: "Response to Abu Ghraib scandal, May 2004",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Abu_Ghraib_17a.jpg/800px-Abu_Ghraib_17a.jpg",
            imageCaption: "Abu Ghraib prison in Iraq"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which country was Abu Ghraib prison located?",
                options: ["Afghanistan", "Iraq", "Syria", "Iran"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When did the Abu Ghraib scandal become public?",
                options: ["2002", "2003", "2004", "2005"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which news program first broke the Abu Ghraib story?",
                options: ["60 Minutes II", "Nightline", "20/20", "Dateline"],
                correct: 0
            }
        ]
    },
    {
        id: 143,
        title: "Hurricane Katrina (2005)",
        text: "Hurricane Katrina struck the Gulf Coast on August 29, 2005, becoming one of the deadliest and costliest natural disasters in U.S. history. The Category 3 hurricane devastated New Orleans when levees failed, flooding 80% of the city. Over 1,800 people died, and hundreds of thousands were displaced. The disaster exposed deep failures in disaster preparedness, emergency response, and infrastructure. Images of stranded residents at the Superdome and Convention Center, predominantly poor and Black, sparked national outrage. FEMA's slow response drew fierce criticism, and Director Michael Brown resigned. The catastrophe highlighted racial and economic inequality—poor communities suffered disproportionately. Recovery proved slow and incomplete, with population and economic impacts lasting decades. Katrina prompted reforms in disaster response but also became a symbol of government failure and systemic inequality. The disaster raised questions about climate change, coastal development, and America's commitment to its most vulnerable citizens.",
        primarySource: {
            quote: "We are extremely pleased with the response that every element of the federal government, all of our federal partners, have made to this terrible tragedy.",
            attribution: "Michael Brown, FEMA Director",
            context: "September 2, 2005, three days after Katrina struck",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Katrina-noaa-2005aug28-1545UTC.jpg/800px-Katrina-noaa-2005aug28-1545UTC.jpg",
            imageCaption: "Satellite image of Hurricane Katrina, August 28, 2005"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did Hurricane Katrina strike?",
                options: ["2004", "2005", "2006", "2007"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which major city was devastated by Hurricane Katrina?",
                options: ["Miami", "Houston", "New Orleans", "Mobile"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Approximately what percentage of New Orleans flooded after Katrina?",
                options: ["50%", "60%", "70%", "80%"],
                correct: 3
            }
        ]
    },
    {
        id: 144,
        title: "The Housing Bubble and Subprime Mortgage Crisis (2007-2008)",
        text: "From the early 2000s through 2006, housing prices soared as risky lending practices proliferated. Banks offered subprime mortgages to borrowers with poor credit, often with adjustable rates and little documentation. Financial institutions bundled these mortgages into complex securities (mortgage-backed securities, CDOs) sold worldwide. Rating agencies gave high ratings to risky investments. When housing prices peaked in 2006 and began falling, homeowners defaulted, triggering a cascade. By 2007, the crisis was evident as major lenders like Countrywide Financial faltered. In 2008, investment bank Bear Stearns collapsed, followed by Lehman Brothers' bankruptcy in September—the largest in U.S. history. The crisis revealed systemic problems: predatory lending, regulatory failures, excessive risk-taking, and 'too big to fail' institutions. It demonstrated how interconnected global finance had become and triggered the worst economic downturn since the Great Depression.",
        primarySource: {
            quote: "We have a good economy and I think the fundamentals of our economy are strong.",
            attribution: "President George W. Bush",
            context: "Statement on the economy, July 2007, as crisis emerged",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Median_and_Average_Sales_Prices_of_New_Homes_Sold_in_the_United_States_1963-2010_Monthly.png/800px-Median_and_Average_Sales_Prices_of_New_Homes_Sold_in_the_United_States_1963-2010_Monthly.png",
            imageCaption: "U.S. housing prices showing the bubble and crash, 1963-2010"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What type of risky loans contributed to the housing crisis?",
                options: ["Prime mortgages", "Subprime mortgages", "Student loans", "Car loans"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which major investment bank collapsed in September 2008?",
                options: ["Goldman Sachs", "Morgan Stanley", "Lehman Brothers", "Bear Stearns"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "When did housing prices peak before the crash?",
                options: ["2004", "2005", "2006", "2007"],
                correct: 2
            }
        ]
    },
    {
        id: 145,
        title: "The Great Recession (2008-2009)",
        text: "The Great Recession, triggered by the financial crisis, became the worst economic downturn since the 1930s. The crisis peaked in September 2008 with Lehman Brothers' collapse. Credit markets froze, stock markets plummeted, and unemployment surged to 10% by October 2009. Millions lost homes, jobs, and retirement savings. GDP contracted sharply, and major industries like auto manufacturing neared collapse. The government responded with unprecedented interventions: the Troubled Asset Relief Program (TARP) provided $700 billion to stabilize banks; the Federal Reserve slashed interest rates to near zero and implemented quantitative easing; the 2009 American Recovery and Reinvestment Act ($831 billion stimulus) aimed to create jobs and prevent depression. The recession exposed deep economic vulnerabilities and inequality. Recovery was slow and uneven. The crisis reshaped economic policy, strengthened financial regulation (Dodd-Frank Act), and influenced political movements from the Tea Party to Occupy Wall Street.",
        primarySource: {
            quote: "This sucker could go down.",
            attribution: "President George W. Bush",
            context: "Warning to Congressional leaders about the financial crisis, September 2008",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/U.S._Unemployment_1890-2009.gif/800px-U.S._Unemployment_1890-2009.gif",
            imageCaption: "U.S. unemployment rate 1890-2009, showing the Great Recession spike"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Great Recession begin?",
                options: ["2006", "2007", "2008", "2009"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the peak unemployment rate during the Great Recession?",
                options: ["7%", "8%", "9%", "10%"],
                correct: 3
            },
            {
                difficulty: "advanced",
                question: "What was the TARP program designed to do?",
                options: ["Create jobs", "Stabilize banks", "Build infrastructure", "Lower taxes"],
                correct: 1
            }
        ]
    },
    {
        id: 146,
        title: "Barack Obama's Historic Election (2008)",
        text: "On November 4, 2008, Senator Barack Obama defeated Republican John McCain to become the 44th President and the first African American president in U.S. history. Obama's campaign emphasized 'Hope' and 'Change,' resonating with voters seeking new direction amid economic crisis and war fatigue. His grassroots organization, innovative use of social media, and fundraising through small donors revolutionized campaigning. Obama won decisively with 365 electoral votes and 53% of the popular vote, carrying states like Virginia and North Carolina that hadn't voted Democratic in decades. His election marked a historic milestone in a nation founded with slavery. Over 240,000 people gathered in Chicago's Grant Park for his victory speech. The moment symbolized progress on race relations, though Obama himself emphasized that his presidency was beginning, not the culmination, of America's journey toward equality. His election energized young voters and minorities while intensifying partisan divisions.",
        primarySource: {
            quote: "If there is anyone out there who still doubts that America is a place where all things are possible, who still wonders if the dream of our founders is alive in our time, who still questions the power of our democracy, tonight is your answer.",
            attribution: "Barack Obama",
            context: "Victory speech in Chicago, November 4, 2008",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/800px-Official_portrait_of_Barack_Obama.jpg",
            imageCaption: "Official portrait of President Barack Obama"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was Barack Obama first elected president?",
                options: ["2006", "2007", "2008", "2009"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who did Barack Obama defeat in the 2008 presidential election?",
                options: ["Mitt Romney", "John McCain", "Hillary Clinton", "Mike Huckabee"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was Obama's campaign slogan?",
                options: ["Yes We Can", "Hope and Change", "Forward", "Change We Can Believe In"],
                correct: 1
            }
        ]
    },
    {
        id: 147,
        title: "The Affordable Care Act (Obamacare) - 2010",
        text: "On March 23, 2010, President Obama signed the Patient Protection and Affordable Care Act (ACA), the most significant healthcare reform since Medicare and Medicaid. The law aimed to expand coverage, reduce costs, and improve care quality. Key provisions included: prohibiting denial of coverage for pre-existing conditions; allowing children to stay on parents' insurance until 26; expanding Medicaid; creating insurance marketplaces (exchanges); and mandating individuals obtain insurance or pay a penalty. The ACA extended coverage to approximately 20 million previously uninsured Americans. However, it proved intensely controversial. Republicans opposed the individual mandate as government overreach, while some progressives wanted a single-payer system. The law survived Supreme Court challenges and Republican repeal attempts. It reshaped American healthcare and politics, becoming a defining issue in elections. The ACA demonstrated deep partisan divisions over government's role in healthcare and society.",
        primarySource: {
            quote: "This is what change looks like.",
            attribution: "President Barack Obama",
            context: "Signing the Affordable Care Act, March 23, 2010",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/President_Barack_Obama_signs_the_health_insurance_reform_bill.jpg/800px-President_Barack_Obama_signs_the_health_insurance_reform_bill.jpg",
            imageCaption: "President Obama signs the Affordable Care Act into law"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was the Affordable Care Act signed into law?",
                options: ["2008", "2009", "2010", "2011"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What age can children stay on parents' insurance under the ACA?",
                options: ["21", "23", "26", "30"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which provision was most controversial in the ACA?",
                options: ["Pre-existing conditions protection", "Individual mandate", "Medicaid expansion", "Insurance exchanges"],
                correct: 1
            }
        ]
    },
    {
        id: 148,
        title: "The Tea Party Movement (2009-2010)",
        text: "The Tea Party emerged in early 2009 as a conservative grassroots movement opposing President Obama's policies, particularly government spending, taxes, and healthcare reform. The name referenced the Boston Tea Party, symbolizing opposition to taxation and government overreach. CNBC's Rick Santelli's February 2009 on-air rant against mortgage bailouts is often cited as a catalyst. The movement organized rallies, town halls, and primary challenges to establishment Republicans. Tea Party supporters advocated for limited government, fiscal conservatism, and strict Constitutional interpretation. The movement helped Republicans gain 63 House seats in the 2010 midterm elections. However, critics noted racial undertones in some rhetoric and questioned grassroots authenticity given funding from wealthy donors and groups like Americans for Prosperity (Koch brothers). The Tea Party represented populist frustration with political establishment, foreshadowing later political upheavals. It reshaped Republican politics, pulling the party rightward and influencing figures like Ted Cruz and later Donald Trump.",
        primarySource: {
            quote: "This is America! How many of you people want to pay for your neighbor's mortgage that has an extra bathroom and can't pay their bills?",
            attribution: "Rick Santelli, CNBC",
            context: "Rant that helped spark the Tea Party movement, February 19, 2009",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tea_Party_Express_-_Sacramento_-_Aug_28%2C_2009_-_18.jpg/800px-Tea_Party_Express_-_Sacramento_-_Aug_28%2C_2009_-_18.jpg",
            imageCaption: "Tea Party rally in Sacramento, California, August 2009"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Tea Party movement emerge?",
                options: ["2007", "2008", "2009", "2010"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the Tea Party's primary focus?",
                options: ["Environmental protection", "Limited government and fiscal conservatism", "Social welfare programs", "Military expansion"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Which historical event inspired the Tea Party's name?",
                options: ["The American Revolution", "The Boston Tea Party", "The Constitutional Convention", "The Civil War"],
                correct: 1
            }
        ]
    },
    {
        id: 149,
        title: "Death of Osama bin Laden (2011)",
        text: "On May 2, 2011, U.S. Navy SEALs killed Osama bin Laden during a raid on his compound in Abbottabad, Pakistan. Bin Laden, al-Qaeda founder and architect of the 9/11 attacks, had evaded capture for nearly a decade. The operation, code-named Neptune Spear, followed years of intelligence work, including tracking bin Laden's courier. President Obama announced the news late evening May 1st (U.S. time), declaring 'Justice has been done.' Americans celebrated in the streets, particularly at Ground Zero. The raid strained U.S.-Pakistan relations, as bin Laden's presence near a Pakistani military academy raised questions about Pakistani complicity or incompetence. The killing provided symbolic closure for 9/11 victims' families but didn't end terrorism or the War on Terror. Al-Qaeda remained active, and ISIS would soon emerge. The operation demonstrated sophisticated intelligence capabilities and special forces prowess, yet highlighted persistent challenges in combating terrorism.",
        primarySource: {
            quote: "Tonight, I can report to the American people and to the world that the United States has conducted an operation that killed Osama bin Laden, the leader of al Qaeda.",
            attribution: "President Barack Obama",
            context: "Address to the nation, May 1, 2011",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Obama_and_Biden_await_updates_on_bin_Laden.jpg/800px-Obama_and_Biden_await_updates_on_bin_Laden.jpg",
            imageCaption: "President Obama and his national security team monitor the bin Laden raid"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was Osama bin Laden killed?",
                options: ["2009", "2010", "2011", "2012"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "In which country was bin Laden found and killed?",
                options: ["Afghanistan", "Iraq", "Pakistan", "Saudi Arabia"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which U.S. military unit conducted the raid?",
                options: ["Army Rangers", "Navy SEALs", "Delta Force", "Marine Force Recon"],
                correct: 1
            }
        ]
    },
    {
        id: 150,
        title: "Occupy Wall Street (2011)",
        text: "On September 17, 2011, protesters occupied Zuccotti Park in Manhattan's financial district, launching the Occupy Wall Street movement. The protest emerged from frustration with economic inequality, corporate influence in politics, and lack of accountability for the 2008 financial crisis. Adopting the slogan 'We are the 99%,' the movement highlighted the wealth gap between the richest 1% and everyone else. Occupy used consensus-based decision-making, general assemblies, and the 'human microphone' to amplify speakers without permits. The movement spread to hundreds of cities worldwide. While criticized for lacking clear demands or leadership, Occupy shifted national conversation toward economic inequality and influenced politics, contributing to Bernie Sanders' popularity and progressive economic platforms. Police eventually cleared encampments, citing health and safety concerns. Though the physical occupation ended, Occupy's framing of economic inequality and critique of corporate power remained influential in American political discourse.",
        primarySource: {
            quote: "We are the 99%.",
            attribution: "Occupy Wall Street slogan",
            context: "Popularized during the 2011 occupation",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Day_14_Occupy_Wall_Street_September_30_2011_Shankbone_49.JPG/800px-Day_14_Occupy_Wall_Street_September_30_2011_Shankbone_49.JPG",
            imageCaption: "Occupy Wall Street protesters in Zuccotti Park, September 2011"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did Occupy Wall Street begin?",
                options: ["2009", "2010", "2011", "2012"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was Occupy Wall Street's famous slogan?",
                options: ["Take Back America", "We are the 99%", "Fight the Power", "People Over Profits"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "In which New York park did Occupy Wall Street begin?",
                options: ["Central Park", "Battery Park", "Zuccotti Park", "Union Square"],
                correct: 2
            }
        ]
    },
    {
        id: 151,
        title: "Sandy Hook Elementary School Shooting (2012)",
        text: "On December 14, 2012, 20-year-old Adam Lanza fatally shot 20 children (ages 6-7) and six adult staff members at Sandy Hook Elementary School in Newtown, Connecticut, before taking his own life. He had killed his mother earlier that morning. The massacre shocked the nation with its targeting of young children. President Obama delivered an emotional address, later attending a vigil where he promised action. The tragedy reignited the gun control debate. Proposals included universal background checks, assault weapons bans, and mental health initiatives. Despite public support for some measures, legislation failed in Congress, blocked by gun rights advocates and the NRA. Sandy Hook families became advocates for gun safety, while conspiracy theorists disgracefully harassed them. The shooting exemplified America's struggle with gun violence, the political gridlock preventing reform, and the devastating toll of mass shootings. It remains one of the deadliest school shootings in U.S. history.",
        primarySource: {
            quote: "Our hearts are broken today—for the parents and grandparents, sisters and brothers of these little children, and for the families of the adults who were lost.",
            attribution: "President Barack Obama",
            context: "Statement following the Sandy Hook shooting, December 14, 2012",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sandy_Hook_Elementary_School_-_Aerial_Photo.jpg/800px-Sandy_Hook_Elementary_School_-_Aerial_Photo.jpg",
            imageCaption: "Aerial view of Sandy Hook Elementary School"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Sandy Hook shooting occur?",
                options: ["2010", "2011", "2012", "2013"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "In which state did the Sandy Hook shooting take place?",
                options: ["Massachusetts", "Connecticut", "New York", "New Jersey"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many children were killed in the Sandy Hook shooting?",
                options: ["15", "17", "20", "26"],
                correct: 2
            }
        ]
    },
    {
        id: 152,
        title: "Boston Marathon Bombing (2013)",
        text: "On April 15, 2013, two pressure-cooker bombs exploded near the finish line of the Boston Marathon, killing three people and injuring over 260, many severely. Brothers Tamerlan and Dzhokhar Tsarnaev, Chechen immigrants radicalized by jihadist ideology, carried out the attack. A massive manhunt ensued, during which the brothers killed MIT police officer Sean Collier and engaged in a shootout with police. Tamerlan died in the confrontation, while Dzhokhar was captured hiding in a boat in Watertown. Boston went into lockdown during the search. The city united with the slogan 'Boston Strong,' displaying resilience amid tragedy. The bombing raised questions about homegrown terrorism, immigrant radicalization, and intelligence sharing. Dzhokhar Tsarnaev was convicted and sentenced to death (later commuted to life imprisonment). The attack demonstrated terrorism's capacity to strike soft targets and America's vulnerability despite post-9/11 security enhancements.",
        primarySource: {
            quote: "You should anticipate that the staying power of Boston and its people is a lot longer than any terrorist activity.",
            attribution: "Massachusetts Governor Deval Patrick",
            context: "Press conference following the bombing, April 16, 2013",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Boston_Marathon_Bombing_aftermath.jpg/800px-Boston_Marathon_Bombing_aftermath.jpg",
            imageCaption: "Aftermath of the Boston Marathon bombing, April 15, 2013"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Boston Marathon bombing occur?",
                options: ["2011", "2012", "2013", "2014"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What slogan did Boston adopt after the bombing?",
                options: ["Boston United", "Boston Strong", "Boston Resilient", "One Boston"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What were the bombers' last names?",
                options: ["Tsarnaev", "Tamerlan", "Chechen", "Dzhokhar"],
                correct: 0
            }
        ]
    },
    {
        id: 153,
        title: "Edward Snowden NSA Leaks (2013)",
        text: "In June 2013, former NSA contractor Edward Snowden leaked classified documents revealing massive global surveillance programs by the NSA and Five Eyes intelligence alliance. The revelations disclosed programs like PRISM (collecting data from tech companies) and bulk collection of phone metadata on millions of Americans. Snowden provided documents to journalists Glenn Greenwald and Laura Poitras, who published them in The Guardian and Washington Post. The leaks sparked international controversy, with allies like Germany outraged to learn their leaders were surveilled. Supporters called Snowden a whistleblower exposing unconstitutional mass surveillance; critics labeled him a traitor endangering national security. Snowden fled to Hong Kong, then Russia, where he received asylum. The disclosures prompted limited reforms (USA Freedom Act) but raised fundamental questions about privacy versus security, government transparency, and the power of intelligence agencies in the digital age.",
        primarySource: {
            quote: "I don't want to live in a society that does these sort of things. I do not want to live in a world where everything I do and say is recorded.",
            attribution: "Edward Snowden",
            context: "Interview explaining his motivation for leaking NSA documents, June 2013",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Edward_Snowden-2.jpg/800px-Edward_Snowden-2.jpg",
            imageCaption: "Edward Snowden, photographed in 2013"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did Edward Snowden leak NSA documents?",
                options: ["2011", "2012", "2013", "2014"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which country granted Snowden asylum?",
                options: ["China", "Russia", "Ecuador", "Venezuela"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was one of the surveillance programs Snowden revealed?",
                options: ["ECHELON", "PRISM", "CARNIVORE", "MAINWAY"],
                correct: 1
            }
        ]
    },
    {
        id: 154,
        title: "Ferguson Protests and Black Lives Matter Emergence (2014)",
        text: "On August 9, 2014, white police officer Darren Wilson shot and killed Michael Brown, an unarmed 18-year-old Black man, in Ferguson, Missouri. The shooting sparked protests that sometimes turned violent. Militarized police response—armored vehicles, tear gas—shocked many Americans. A grand jury's decision not to indict Wilson intensified protests. The Department of Justice investigation found no grounds to charge Wilson but revealed systematic racial bias in Ferguson's police and courts. Ferguson became a catalyst for the Black Lives Matter movement, founded in 2013 after George Zimmerman's acquittal in Trayvon Martin's killing. The movement highlighted police violence against Black Americans, systemic racism, and criminal justice reform. Ferguson demonstrated how social media mobilizes protest and how local incidents spark national movements. It intensified debates about policing, racial justice, and inequality. The protests foreshadowed larger demonstrations following other police killings in subsequent years.",
        primarySource: {
            quote: "Hands up, don't shoot.",
            attribution: "Ferguson protesters",
            context: "Chant based on disputed account of Michael Brown's death, August 2014",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ferguson_Day_6%2C_Picture_50.png/800px-Ferguson_Day_6%2C_Picture_50.png",
            imageCaption: "Protesters in Ferguson, Missouri, August 2014"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Ferguson protests occur?",
                options: ["2012", "2013", "2014", "2015"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the name of the young man killed in Ferguson?",
                options: ["Trayvon Martin", "Eric Garner", "Michael Brown", "Tamir Rice"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "In which year was Black Lives Matter founded?",
                options: ["2012", "2013", "2014", "2015"],
                correct: 1
            }
        ]
    },
    {
        id: 155,
        title: "Same-Sex Marriage Legalized Nationwide (2015)",
        text: "On June 26, 2015, the Supreme Court ruled 5-4 in Obergefell v. Hodges that same-sex couples have a constitutional right to marry. The decision required all states to issue marriage licenses to same-sex couples and recognize same-sex marriages performed in other jurisdictions. Justice Anthony Kennedy wrote the majority opinion, stating 'No union is more profound than marriage.' The ruling culminated decades of LGBTQ+ rights activism, building on earlier victories like Lawrence v. Texas (2003, striking down sodomy laws) and United States v. Windsor (2013, invalidating part of the Defense of Marriage Act). The White House was lit in rainbow colors to celebrate. The decision represented a major civil rights victory, extending marriage's legal and symbolic benefits to millions. However, it also intensified culture wars, with opponents citing religious liberty concerns. The ruling demonstrated how rapidly public opinion on LGBTQ+ rights had shifted.",
        primarySource: {
            quote: "No union is more profound than marriage, for it embodies the highest ideals of love, fidelity, devotion, sacrifice, and family. In forming a marital union, two people become something greater than once they were.",
            attribution: "Justice Anthony Kennedy",
            context: "Majority opinion in Obergefell v. Hodges, June 26, 2015",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Supreme_Court_Marriage_Equality.jpg/800px-Supreme_Court_Marriage_Equality.jpg",
            imageCaption: "The White House illuminated in rainbow colors after the ruling"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was same-sex marriage legalized nationwide?",
                options: ["2013", "2014", "2015", "2016"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the Supreme Court case that legalized same-sex marriage?",
                options: ["Lawrence v. Texas", "Windsor v. United States", "Obergefell v. Hodges", "Perry v. Brown"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the Supreme Court vote in Obergefell v. Hodges?",
                options: ["6-3", "5-4", "7-2", "9-0"],
                correct: 1
            }
        ]
    },
    {
        id: 156,
        title: "Charleston Church Shooting (2015)",
        text: "On June 17, 2015, white supremacist Dylann Roof murdered nine African American worshippers during a Bible study at Emanuel African Methodist Episcopal Church in Charleston, South Carolina. Roof sat with the group for nearly an hour before opening fire. Victims included senior pastor and state senator Clementa Pinckney. Roof explicitly stated his goal was to start a race war. He was arrested the next day in North Carolina. The massacre shocked the nation, highlighting persistent racism and domestic terrorism. In an extraordinary display of grace, victims' families offered forgiveness at Roof's bond hearing, though they also demanded justice. The shooting reignited debate about Confederate symbols—the Confederate flag was removed from South Carolina's statehouse grounds. Roof was convicted of federal hate crimes and sentenced to death. The tragedy demonstrated the ongoing threat of white supremacist violence and America's unresolved racial tensions.",
        primarySource: {
            quote: "I forgive you. You took something very precious away from me. I will never get to talk to her ever again. I will never be able to hold her again, but I forgive you.",
            attribution: "Nadine Collier, daughter of victim Ethel Lance",
            context: "Speaking to Dylann Roof at his bond hearing, June 19, 2015",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mother_Emanuel_AME_Church_June_27_2015.jpg/800px-Mother_Emanuel_AME_Church_June_27_2015.jpg",
            imageCaption: "Emanuel AME Church in Charleston, South Carolina"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Charleston church shooting occur?",
                options: ["2013", "2014", "2015", "2016"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many people were killed in the Charleston church shooting?",
                options: ["Six", "Seven", "Nine", "Twelve"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the shooter's name?",
                options: ["Dylan Storm", "Dylann Roof", "Dylan Klebold", "Dylan Roof"],
                correct: 1
            }
        ]
    },
    {
        id: 157,
        title: "Dakota Access Pipeline Protests (2016)",
        text: "In 2016, the Standing Rock Sioux Tribe and allies established camps near the Dakota Access Pipeline (DAPL) construction site in North Dakota, protesting the pipeline's route near the Standing Rock Reservation and under Lake Oahe, their water source. Protesters, calling themselves 'water protectors,' argued the pipeline threatened sacred sites and water supplies, and that tribal consultation was inadequate. The movement grew to thousands, with support from indigenous groups nationwide and environmental activists. Confrontations with police grew increasingly violent—officers used water cannons in freezing temperatures, tear gas, and rubber bullets. The protests drew attention to indigenous rights, treaty obligations, and environmental justice. In December 2016, the Obama administration halted the project, ordering environmental review. However, President Trump reversed this decision days after inauguration. The pipeline became operational in 2017. Standing Rock demonstrated indigenous resistance and raised awareness about pipeline impacts and sovereignty rights.",
        primarySource: {
            quote: "Mni Wiconi - Water is Life.",
            attribution: "Standing Rock Sioux protesters",
            context: "Central slogan of the Dakota Access Pipeline protests, 2016",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/DAPL_protest_signs_at_Standing_Rock.jpg/800px-DAPL_protest_signs_at_Standing_Rock.jpg",
            imageCaption: "Protest signs at Standing Rock, 2016"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which state did the Standing Rock protests occur?",
                options: ["South Dakota", "North Dakota", "Montana", "Wyoming"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What did protesters call themselves?",
                options: ["Pipeline fighters", "Water protectors", "Land defenders", "Earth guardians"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the protesters' main concern about the pipeline?",
                options: ["Job losses", "Property values", "Water contamination", "Air pollution"],
                correct: 2
            }
        ]
    },
    {
        id: 158,
        title: "Donald Trump's Election (2016)",
        text: "On November 8, 2016, businessman and reality TV star Donald Trump defeated Democrat Hillary Clinton to become the 45th President, shocking pollsters and analysts. Trump ran as a political outsider, promising to 'Make America Great Again,' criticizing trade deals, promising a border wall, and attacking political correctness. Despite losing the popular vote by nearly 3 million, Trump won the Electoral College 304-227, flipping traditionally Democratic states like Michigan, Wisconsin, and Pennsylvania. His victory reflected working-class frustration, particularly in the Rust Belt, with economic anxiety, globalization, and perceived elite indifference. Clinton faced challenges including FBI Director Comey's late investigation announcement and lingering controversy over her emails and the Clinton Foundation. Trump's election represented populist backlash against establishment politics. His presidency would prove highly polarizing, reshaping American politics, the Republican Party, and political discourse itself.",
        primarySource: {
            quote: "Now it's time for America to bind the wounds of division. To all Republicans and Democrats and Independents across this nation, I say it is time for us to come together as one united people.",
            attribution: "Donald Trump",
            context: "Victory speech, November 9, 2016",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg",
            imageCaption: "Official portrait of President Donald Trump"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who did Donald Trump defeat in the 2016 election?",
                options: ["Bernie Sanders", "Hillary Clinton", "Jeb Bush", "Ted Cruz"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Did Trump win the popular vote in 2016?",
                options: ["Yes, by 3 million votes", "No, Clinton won the popular vote", "Yes, by a narrow margin", "It was exactly tied"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was Trump's campaign slogan?",
                options: ["America First", "Make America Great Again", "Keep America Great", "Promises Made, Promises Kept"],
                correct: 1
            }
        ]
    },
    {
        id: 159,
        title: "Women's March (2017)",
        text: "On January 21, 2017, the day after President Trump's inauguration, an estimated 3-5 million people participated in Women's Marches across the United States, with millions more worldwide. The Washington, D.C. march drew over 500,000, possibly the largest single-day protest in U.S. history. Protesters opposed Trump's rhetoric and policies regarding women's rights, healthcare, immigration, and the environment. Many wore pink 'pussy hats' referencing Trump's leaked 'Access Hollywood' tape. The march brought together diverse groups advocating for women's rights, reproductive freedom, LGBTQ+ rights, racial justice, and immigrant rights. It demonstrated opposition to Trump and mobilized political activism. However, the march faced criticism regarding intersectionality and inclusion. The march helped launch the 'Resistance' movement and contributed to increased political engagement, including record numbers of women running for office. It represented a significant moment of political mobilization and protest.",
        primarySource: {
            quote: "We stand together in solidarity with our partners and children for the protection of our rights, our safety, our health, and our families—recognizing that our vibrant and diverse communities are the strength of our country.",
            attribution: "Women's March mission statement",
            context: "Published before the January 21, 2017 march",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Women%27s_March_on_Washington_%2832593123745%29.jpg/800px-Women%27s_March_on_Washington_%2832593123745%29.jpg",
            imageCaption: "Women's March in Washington, D.C., January 21, 2017"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When did the Women's March take place?",
                options: ["The day of Trump's inauguration", "The day after Trump's inauguration", "A week after Trump's inauguration", "A month after Trump's inauguration"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Approximately how many people participated in U.S. Women's Marches?",
                options: ["500,000", "1-2 million", "3-5 million", "10 million"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What color hats became symbolic of the march?",
                options: ["Red", "Pink", "Purple", "Blue"],
                correct: 1
            }
        ]
    },
    {
        id: 160,
        title: "Charlottesville Unite the Right Rally (2017)",
        text: "On August 11-12, 2017, white supremacists, neo-Nazis, and far-right groups held the 'Unite the Right' rally in Charlottesville, Virginia, ostensibly protesting the removal of a Robert E. Lee statue. Hundreds of white nationalists marched with torches chanting 'Jews will not replace us' and 'Blood and soil.' Counter-protesters opposed them. Violent clashes erupted. On August 12, James Alex Fields Jr., a rally participant, deliberately drove his car into counter-protesters, killing Heather Heyer and injuring 19 others. President Trump faced intense criticism for stating there were 'very fine people on both sides,' creating moral equivalence between white supremacists and those opposing them. The rally shocked Americans, bringing white nationalism into public view and raising alarms about rising extremism. Fields was convicted of murder. Charlottesville became a defining moment highlighting racial tensions, domestic terrorism, and debates about Confederate monuments.",
        primarySource: {
            quote: "You had some very bad people in that group, but you also had people that were very fine people, on both sides.",
            attribution: "President Donald Trump",
            context: "Press conference discussing Charlottesville violence, August 15, 2017",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Charlottesville_%27Unite_the_Right%27_Rally_%2835780274914%29_crop.jpg/800px-Charlottesville_%27Unite_the_Right%27_Rally_%2835780274914%29_crop.jpg",
            imageCaption: "White nationalist rally in Charlottesville, August 2017"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Charlottesville rally occur?",
                options: ["2015", "2016", "2017", "2018"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the rally's stated reason for gathering?",
                options: ["Presidential campaign", "Protesting statue removal", "Economic policy", "Immigration reform"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Who was killed when a car drove into counter-protesters?",
                options: ["Susan Bro", "Heather Heyer", "Emily Fields", "Sarah Thompson"],
                correct: 1
            }
        ]
    },
    {
        id: 161,
        title: "Tax Cuts and Jobs Act of 2017",
        text: "In December 2017, President Trump signed the Tax Cuts and Jobs Act, the most significant tax overhaul since 1986. The law reduced the corporate tax rate from 35% to 21% permanently, lowered individual tax rates temporarily (expiring in 2025), nearly doubled the standard deduction, and limited state and local tax (SALT) deductions. Republicans argued the cuts would stimulate economic growth, create jobs, and benefit middle-class families. Critics contended the law disproportionately benefited corporations and wealthy individuals while increasing the deficit by an estimated $1.5 trillion over ten years. Initial corporate tax savings often went to stock buybacks rather than worker wages. The law proved divisive along partisan and geographic lines—blue-state residents with high property taxes were hit by SALT deduction limits. The legislation demonstrated Republican commitment to supply-side economics despite growing concerns about inequality and debt.",
        primarySource: {
            quote: "We are making America great again. We are going to make it even better. This is the largest tax cut in the history of our country.",
            attribution: "President Donald Trump",
            context: "Remarks after signing the Tax Cuts and Jobs Act, December 22, 2017",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/President_Trump_Signs_the_Tax_Cuts_and_Jobs_Act.jpg/800px-President_Trump_Signs_the_Tax_Cuts_and_Jobs_Act.jpg",
            imageCaption: "President Trump signs the Tax Cuts and Jobs Act"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was the Tax Cuts and Jobs Act signed?",
                options: ["2016", "2017", "2018", "2019"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What did the law reduce the corporate tax rate to?",
                options: ["15%", "18%", "21%", "25%"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Are the individual tax cuts permanent or temporary?",
                options: ["Permanent", "Temporary, expiring in 2025", "Temporary, expiring in 2030", "They were repealed immediately"],
                correct: 1
            }
        ]
    },
    {
        id: 162,
        title: "Parkland School Shooting and March for Our Lives (2018)",
        text: "On February 14, 2018, a former student killed 17 people at Marjory Stoneman Douglas High School in Parkland, Florida. Unlike previous mass shootings, Parkland students became vocal activists, demanding gun control. Survivors like Emma González and David Hogg used social media to organize and advocate. On March 24, 2018, they led the March for Our Lives in Washington, D.C., with sister marches worldwide. An estimated 800,000 people attended the D.C. march, one of the largest youth-led demonstrations in American history. Students called for universal background checks, assault weapons bans, and higher minimum age for gun purchases. The movement energized young voters and influenced the 2018 midterms. Florida passed some reforms, raising the minimum age for gun purchases. However, comprehensive federal legislation stalled. Parkland demonstrated youth political engagement but also persistent gridlock on gun control despite repeated tragedies.",
        primarySource: {
            quote: "We call BS!",
            attribution: "Emma González, Parkland survivor",
            context: "Speech at Fort Lauderdale rally, February 17, 2018",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/March_For_Our_Lives_-_March_24_2018_%2840728095071%29.jpg/800px-March_For_Our_Lives_-_March_24_2018_%2840728095071%29.jpg",
            imageCaption: "March for Our Lives in Washington, D.C., March 24, 2018"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Parkland shooting occur?",
                options: ["2016", "2017", "2018", "2019"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many people were killed in the Parkland shooting?",
                options: ["12", "17", "20", "26"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the name of the march organized by Parkland students?",
                options: ["Never Again", "March for Our Lives", "Students Demand Action", "Enough is Enough"],
                correct: 1
            }
        ]
    },
    {
        id: 163,
        title: "Family Separation at the Border (2018)",
        text: "In spring 2018, the Trump administration implemented a 'zero tolerance' immigration policy, criminally prosecuting all adults crossing the border illegally. This resulted in separating children from parents, as children couldn't be held in criminal detention. Over 2,700 children were separated, some placed in detention facilities or foster care. Images of children in chain-link enclosures ('cages') and audio of crying children sparked national outrage. The policy was justified as deterrence and enforcement of immigration law. Critics called it cruel and traumatic, violating human rights. Even some Republicans opposed the policy. Facing intense pressure, Trump signed an executive order ending family separation in June 2018, though many families remained separated for extended periods. The episode highlighted harsh immigration enforcement, debates about border security versus humanitarian concerns, and the use of deterrence in immigration policy. Reunification efforts continued for years.",
        primarySource: {
            quote: "If you don't want your child to be separated, then don't bring them across the border illegally.",
            attribution: "Attorney General Jeff Sessions",
            context: "Defending the family separation policy, June 2018",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/CBP_holding_cells_-_Rio_Grande_Valley_Border_Patrol_-_McAllen%2C_Texas_%282018%29.jpg/800px-CBP_holding_cells_-_Rio_Grande_Valley_Border_Patrol_-_McAllen%2C_Texas_%282018%29.jpg",
            imageCaption: "Detention facility for migrant children, McAllen, Texas, 2018"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did family separations at the border peak?",
                options: ["2016", "2017", "2018", "2019"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Approximately how many children were separated from parents?",
                options: ["1,000", "2,700", "5,000", "10,000"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the policy called that led to family separations?",
                options: ["Secure borders", "Zero tolerance", "Family deterrence", "Border enforcement"],
                correct: 1
            }
        ]
    },
    {
        id: 164,
        title: "Brett Kavanaugh Supreme Court Confirmation (2018)",
        text: "President Trump nominated Brett Kavanaugh to the Supreme Court in July 2018 to replace retiring Justice Anthony Kennedy. The confirmation became contentious when Dr. Christine Blasey Ford accused Kavanaugh of sexual assault at a 1982 high school party. Ford testified before the Senate Judiciary Committee, describing the alleged assault in detail. Kavanaugh emotionally denied the allegations, giving combative testimony that concerned some about judicial temperament. Republicans called the allegations unproven and politically motivated. The hearing became a cultural flashpoint, echoing Anita Hill's 1991 testimony against Clarence Thomas and reflecting the #MeToo movement's impact. Despite protests and narrow opposition, the Republican-controlled Senate confirmed Kavanaugh 50-48, one of the closest Supreme Court votes in history. The confirmation further polarized the country along partisan and gender lines, intensified battles over Supreme Court nominations, and demonstrated the Court's central role in American politics.",
        primarySource: {
            quote: "I am here today not because I want to be. I am terrified. I am here because I believe it is my civic duty.",
            attribution: "Dr. Christine Blasey Ford",
            context: "Testimony before Senate Judiciary Committee, September 27, 2018",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Associate_Justice_Brett_Kavanaugh_Official_Portrait.jpg/800px-Associate_Justice_Brett_Kavanaugh_Official_Portrait.jpg",
            imageCaption: "Official portrait of Justice Brett Kavanaugh"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was Brett Kavanaugh confirmed to the Supreme Court?",
                options: ["2016", "2017", "2018", "2019"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who accused Kavanaugh of sexual assault?",
                options: ["Anita Hill", "Christine Blasey Ford", "Deborah Ramirez", "Monica Lewinsky"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the Senate vote to confirm Kavanaugh?",
                options: ["48-50", "50-48", "51-49", "52-48"],
                correct: 1
            }
        ]
    },
    {
        id: 165,
        title: "Government Shutdown Over Border Wall (2018-2019)",
        text: "The longest government shutdown in U.S. history began on December 22, 2018, and lasted 35 days, ending January 25, 2019. The impasse occurred when Trump demanded $5.7 billion for a border wall, while Democrats, who had taken House control after the 2018 midterms, refused. Over 800,000 federal employees were furloughed or worked without pay. TSA agents, Coast Guard, and park rangers faced financial hardship. Air traffic controllers called in sick, threatening flight safety. Food inspections were reduced. Trump had promised Mexico would pay for the wall, but now demanded taxpayer funding. The shutdown damaged the economy, costing an estimated $11 billion. Trump eventually agreed to a temporary reopening without wall funding, declaring a national emergency to redirect military construction funds—a move courts challenged. The shutdown demonstrated government dysfunction, the cost of political brinkmanship, and Trump's commitment to his signature campaign promise.",
        primarySource: {
            quote: "I am proud to shut down the government for border security... I will take the mantle. I will be the one to shut it down.",
            attribution: "President Donald Trump",
            context: "Oval Office meeting with congressional leaders, December 11, 2018",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Federal_government_of_the_United_States_revenue_and_spending_1792_to_2018.png/800px-Federal_government_of_the_United_States_revenue_and_spending_1792_to_2018.png",
            imageCaption: "Government revenue and spending showing shutdown impact"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What caused the 2018-2019 government shutdown?",
                options: ["Healthcare debate", "Border wall funding", "Tax cuts", "Military spending"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How long did the shutdown last?",
                options: ["16 days", "21 days", "35 days", "42 days"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "How much funding did Trump demand for the border wall?",
                options: ["$2.5 billion", "$5.7 billion", "$10 billion", "$15 billion"],
                correct: 1
            }
        ]
    },
    {
        id: 166,
        title: "Mueller Report Released (2019)",
        text: "On April 18, 2019, a redacted version of Special Counsel Robert Mueller's report was released, concluding a 22-month investigation into Russian interference in the 2016 election and potential Trump campaign coordination. The 448-page report found Russia interfered 'in sweeping and systematic fashion' to help Trump but didn't establish a criminal conspiracy between the Trump campaign and Russia. However, the report detailed ten instances of possible obstruction of justice by Trump. Mueller stated he couldn't exonerate the president on obstruction, citing Justice Department policy against indicting a sitting president and leaving the question to Congress. Attorney General William Barr's summary before release downplayed obstruction findings, drawing criticism. Democrats debated impeachment, though Mueller's testimony proved anticlimactic. The report became a Rorschach test—each side claimed vindication. It highlighted Russian interference, questions about presidential accountability, and deep partisan divisions.",
        primarySource: {
            quote: "If we had confidence after a thorough investigation of the facts that the President clearly did not commit obstruction of justice, we would so state. Based on the facts and the applicable legal standards, however, we are unable to reach that judgment.",
            attribution: "Robert Mueller",
            context: "Mueller Report, Volume II, April 2019",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Robert_Mueller_official_portrait.jpg/800px-Robert_Mueller_official_portrait.jpg",
            imageCaption: "Robert Mueller, Special Counsel"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who conducted the investigation into Russian interference?",
                options: ["James Comey", "Robert Mueller", "William Barr", "Rod Rosenstein"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Did the Mueller Report find a criminal conspiracy between Trump's campaign and Russia?",
                options: ["Yes, it found definitive proof", "No, it did not establish a conspiracy", "It was inconclusive", "The report didn't investigate this"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How many instances of possible obstruction did Mueller detail?",
                options: ["Five", "Seven", "Ten", "Fifteen"],
                correct: 2
            }
        ]
    },
    {
        id: 167,
        title: "First Trump Impeachment (2019)",
        text: "The House of Representatives impeached President Trump on December 18, 2019, on charges of abuse of power and obstruction of Congress. The impeachment centered on Trump's July 25 phone call with Ukrainian President Volodymyr Zelensky, asking him to investigate Joe Biden and his son Hunter. A whistleblower complaint revealed Trump withheld military aid to Ukraine while requesting investigations. Democrats argued Trump solicited foreign interference in the 2020 election and abused his office for political gain. Trump refused to cooperate with the House investigation, leading to the obstruction charge. The Senate acquitted Trump on both articles in February 2020, with only one Republican (Mitt Romney) voting to convict on the abuse of power charge. The impeachment deepened partisan divisions. Trump became the third president impeached and the first to run for reelection after impeachment. The trial foreshadowed debates about presidential accountability and foreign policy.",
        primarySource: {
            quote: "I would like you to do us a favor though.",
            attribution: "President Donald Trump",
            context: "Phone call with Ukrainian President Zelensky, July 25, 2019",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Trump_first_impeachment.jpg/800px-Trump_first_impeachment.jpg",
            imageCaption: "House impeachment proceedings, December 2019"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was Trump first impeached?",
                options: ["2017", "2018", "2019", "2020"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which country was at the center of Trump's first impeachment?",
                options: ["Russia", "China", "Ukraine", "North Korea"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "How many Republicans voted to convict Trump in the Senate?",
                options: ["Zero", "One", "Three", "Five"],
                correct: 1
            }
        ]
    },
    {
        id: 168,
        title: "COVID-19 Pandemic Reaches America (2020)",
        text: "In early 2020, the novel coronavirus (COVID-19) reached the United States, triggering the worst pandemic in over a century. The first U.S. case was confirmed January 21, 2020, in Washington State. By March, the virus spread rapidly. On March 11, the WHO declared COVID-19 a pandemic. States implemented lockdowns, closing schools, businesses, and public spaces. The economy crashed—unemployment spiked to 14.7% in April, the highest since the Great Depression. Hospitals were overwhelmed. Over 1 million Americans would eventually die from COVID. The pandemic exposed healthcare inequities, with Black and Latino communities suffering disproportionately. Political divisions emerged over masks, lockdowns, and vaccines. The federal response faced criticism for downplaying severity, inconsistent messaging, and supply shortages. COVID-19 transformed American life—remote work, Zoom meetings, mask mandates, and social distancing became ubiquitous. The pandemic tested institutions, reshaped politics, and altered society profoundly.",
        primarySource: {
            quote: "It's going to disappear. One day—it's like a miracle—it will disappear.",
            attribution: "President Donald Trump",
            context: "White House meeting, February 27, 2020",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/800px-SARS-CoV-2_without_background.png",
            imageCaption: "SARS-CoV-2 virus that causes COVID-19"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did COVID-19 reach the United States?",
                options: ["2019", "2020", "2021", "2022"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When did the WHO declare COVID-19 a pandemic?",
                options: ["January 2020", "February 2020", "March 2020", "April 2020"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the peak unemployment rate in April 2020?",
                options: ["10.2%", "12.5%", "14.7%", "18.3%"],
                correct: 2
            }
        ]
    },
    {
        id: 169,
        title: "George Floyd Murder and Nationwide Protests (2020)",
        text: "On May 25, 2020, Minneapolis police officer Derek Chauvin killed George Floyd, a 46-year-old Black man, by kneeling on his neck for over nine minutes during an arrest for allegedly using a counterfeit $20 bill. Bystander video captured Floyd repeatedly saying 'I can't breathe' before losing consciousness. His death sparked the largest protest movement in U.S. history. Millions participated in Black Lives Matter demonstrations in all 50 states and worldwide, demanding police reform and racial justice. Protests were largely peaceful, though some cities experienced riots and looting. The movement called for defunding or reimagining policing. Confederate monuments were removed; corporations pledged racial equity initiatives. The uprising reflected accumulated grief over police killings of Black Americans. In April 2021, Chauvin was convicted of murder—a rare conviction of a police officer. Floyd's death became a catalyst for national reckoning with racism, policing, and systemic inequality.",
        primarySource: {
            quote: "I can't breathe.",
            attribution: "George Floyd",
            context: "Words spoken while being restrained by police, May 25, 2020",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Black_Lives_Matter_protests_in_Washington_DC_on_May_30%2C_2020.jpg/800px-Black_Lives_Matter_protests_in_Washington_DC_on_May_30%2C_2020.jpg",
            imageCaption: "Black Lives Matter protest in Washington, D.C., May 2020"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which city was George Floyd killed?",
                options: ["Chicago", "Detroit", "Minneapolis", "Milwaukee"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the name of the officer who killed George Floyd?",
                options: ["Derek Chauvin", "Tou Thao", "Thomas Lane", "Alexander Kueng"],
                correct: 0
            },
            {
                difficulty: "advanced",
                question: "How long did Chauvin kneel on Floyd's neck?",
                options: ["5 minutes", "7 minutes", "Over 9 minutes", "15 minutes"],
                correct: 2
            }
        ]
    },
    {
        id: 170,
        title: "Death of Ruth Bader Ginsburg and Amy Coney Barrett Confirmation (2020)",
        text: "Justice Ruth Bader Ginsburg died on September 18, 2020, just 46 days before the presidential election. Ginsburg, a feminist icon and liberal stalwart, served 27 years on the Supreme Court. Her death gave Trump an opportunity to shift the Court's ideological balance. He nominated Amy Coney Barrett, a conservative appeals court judge, on September 26. Republicans rushed the confirmation despite their 2016 position that voters should decide Court appointments in election years—they had blocked Obama's nomination of Merrick Garland 237 days before that election. Barrett was confirmed 52-48 on October 26, 2020, just eight days before the election. Democrats called the process hypocritical and illegitimate. Barrett's confirmation gave conservatives a 6-3 Court majority, with implications for abortion, healthcare, voting rights, and other issues. The episode intensified debates about Court expansion, term limits, and the judiciary's role in democracy.",
        primarySource: {
            quote: "My most fervent wish is that I will not be replaced until a new president is installed.",
            attribution: "Justice Ruth Bader Ginsburg",
            context: "Statement dictated to her granddaughter before her death, September 2020",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Ruth_Bader_Ginsburg_official_SCOTUS_portrait.jpg/800px-Ruth_Bader_Ginsburg_official_SCOTUS_portrait.jpg",
            imageCaption: "Official portrait of Justice Ruth Bader Ginsburg"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who did Trump nominate to replace Ruth Bader Ginsburg?",
                options: ["Brett Kavanaugh", "Neil Gorsuch", "Amy Coney Barrett", "Merrick Garland"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many days before the 2020 election did Ginsburg die?",
                options: ["30 days", "46 days", "60 days", "90 days"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What is the current conservative-liberal split on the Supreme Court after Barrett's confirmation?",
                options: ["5-4 conservative", "6-3 conservative", "7-2 conservative", "5-4 liberal"],
                correct: 1
            }
        ]
    },
    {
        id: 171,
        title: "2020 Presidential Election",
        text: "The 2020 presidential election occurred amid a pandemic, economic crisis, and social unrest. Democrat Joe Biden defeated incumbent Donald Trump with 306 electoral votes to 232 and a popular vote margin of over 7 million. Voter turnout reached its highest percentage in 120 years. The election saw unprecedented mail-in voting due to COVID-19. Trump refused to concede, making false claims of widespread fraud without evidence. Lawsuits challenging results failed. State and federal officials, including Trump-appointed judges and his own attorney general, found no evidence of fraud that would change the outcome. The Cybersecurity and Infrastructure Security Agency called it 'the most secure election in American history.' Despite this, Trump's claims convinced millions of supporters the election was stolen. The refusal to accept results undermined democratic norms and trust in elections. It set the stage for the January 6, 2021 Capitol attack.",
        primarySource: {
            quote: "This was a massive fraud. It shouldn't be allowed. We're fighting a tough battle and we're going to win it.",
            attribution: "President Donald Trump",
            context: "False claims about the election, November 5, 2020",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg",
            imageCaption: "Official portrait of President Joe Biden"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Who won the 2020 presidential election?",
                options: ["Donald Trump", "Joe Biden", "Bernie Sanders", "Kamala Harris"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "How many electoral votes did Biden receive?",
                options: ["270", "290", "306", "320"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Did Trump concede the 2020 election?",
                options: ["Yes, immediately", "Yes, after lawsuits failed", "No, he never conceded", "Yes, but later retracted"],
                correct: 2
            }
        ]
    },
    {
        id: 172,
        title: "January 6 Capitol Attack (2021)",
        text: "On January 6, 2021, a mob of Trump supporters stormed the U.S. Capitol attempting to overturn the 2020 election. Congress was certifying electoral votes when rioters breached the building, forcing lawmakers to evacuate or shelter in place. The attack followed a Trump rally where he urged supporters to 'fight like hell' and march to the Capitol. Five people died in connection with the violence; over 140 police officers were injured. Rioters vandalized offices, stole property, and threatened lawmakers. Vice President Pence, presiding over certification, refused Trump's demand to reject electoral votes. The attack represented the first breach of the Capitol since 1814. It was described as an insurrection and domestic terrorism. Over 1,000 people have been charged. The attack shocked the world, damaged America's democratic reputation, and raised questions about accountability, extremism, and political violence. It led to Trump's second impeachment.",
        primarySource: {
            quote: "We fight like hell. And if you don't fight like hell, you're not going to have a country anymore.",
            attribution: "President Donald Trump",
            context: "Speech at the Ellipse before the Capitol attack, January 6, 2021",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Protestors_storming_the_U.S._Capitol_on_January_6%2C_2021.jpg/800px-Protestors_storming_the_U.S._Capitol_on_January_6%2C_2021.jpg",
            imageCaption: "Rioters breach the U.S. Capitol, January 6, 2021"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "On which date did the Capitol attack occur?",
                options: ["January 6, 2021", "January 20, 2021", "November 3, 2020", "December 14, 2020"],
                correct: 0
            },
            {
                difficulty: "intermediate",
                question: "What was Congress doing when the attack occurred?",
                options: ["Debating legislation", "Certifying electoral votes", "Holding impeachment trial", "Confirming cabinet members"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "When was the last time the Capitol was breached before January 6?",
                options: ["1968", "1814", "1941", "Never before"],
                correct: 1
            }
        ]
    },
    {
        id: 173,
        title: "Second Trump Impeachment (2021)",
        text: "One week after the January 6 Capitol attack, the House impeached President Trump for a second time on January 13, 2021, charging him with 'incitement of insurrection.' The article of impeachment accused Trump of inciting the mob that stormed the Capitol. Ten Republicans joined Democrats in voting to impeach, the most bipartisan presidential impeachment in history. Trump became the only president impeached twice. The Senate trial occurred after Trump left office, raising constitutional questions about convicting a former president. On February 13, 2021, the Senate voted 57-43 to convict, falling short of the required two-thirds majority. Seven Republicans voted to convict—the most senators ever voting to convict a president of their own party. Senate Minority Leader Mitch McConnell, despite voting to acquit on procedural grounds, called Trump 'practically and morally responsible' for the attack.",
        primarySource: {
            quote: "There's no question—none—that President Trump is practically and morally responsible for provoking the events of the day.",
            attribution: "Senator Mitch McConnell",
            context: "Speech after voting to acquit Trump, February 13, 2021",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Second_impeachment_trial_of_Donald_Trump.jpg/800px-Second_impeachment_trial_of_Donald_Trump.jpg",
            imageCaption: "Senate impeachment trial, February 2021"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many times was Trump impeached?",
                options: ["Once", "Twice", "Three times", "Never"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "What was the charge in Trump's second impeachment?",
                options: ["Abuse of power", "Obstruction of Congress", "Incitement of insurrection", "Contempt of Congress"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "How many Senate Republicans voted to convict in the second impeachment?",
                options: ["One", "Three", "Seven", "Ten"],
                correct: 2
            }
        ]
    },
    {
        id: 174,
        title: "COVID-19 Vaccines Rollout (2021)",
        text: "In late 2020, the FDA authorized emergency use of COVID-19 vaccines from Pfizer-BioNTech and Moderna, using novel mRNA technology developed at unprecedented speed through Operation Warp Speed. Mass vaccination began in December 2020, prioritizing healthcare workers and elderly. By early 2021, vaccine availability expanded. The Biden administration set ambitious goals, delivering 200 million shots in its first 100 days. Vaccines proved highly effective at preventing severe disease and death. However, vaccine hesitancy emerged, often along partisan lines. Misinformation spread on social media. Some states implemented vaccine mandates for certain workers; others banned mandates. Delta and Omicron variants complicated the picture. Despite challenges, vaccines saved hundreds of thousands of lives and allowed society to gradually reopen. The vaccine development represented a scientific achievement, while the uneven rollout and resistance highlighted political divisions and public health communication challenges.",
        primarySource: {
            quote: "Today is a day when we can start to see the light at the end of the tunnel.",
            attribution: "Dr. Anthony Fauci",
            context: "After FDA authorized first COVID vaccine, December 2020",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/COVID-19_vaccine_vials.jpg/800px-COVID-19_vaccine_vials.jpg",
            imageCaption: "COVID-19 vaccine vials"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which vaccine technology was used for Pfizer and Moderna vaccines?",
                options: ["Live attenuated", "mRNA", "Viral vector", "Protein subunit"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "When did COVID vaccine distribution begin in the U.S.?",
                options: ["September 2020", "October 2020", "December 2020", "March 2021"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What was the name of the government program that funded vaccine development?",
                options: ["Project Lightspeed", "Operation Warp Speed", "Apollo Program", "Manhattan Project"],
                correct: 1
            }
        ]
    },
    {
        id: 175,
        title: "American Rescue Plan Act (2021)",
        text: "On March 11, 2021, President Biden signed the $1.9 trillion American Rescue Plan Act, one of the largest economic relief packages in U.S. history. The law aimed to combat COVID-19's economic impact. It provided $1,400 direct payments to most Americans, extended unemployment benefits, expanded the child tax credit, allocated funds for vaccine distribution, and provided aid to state and local governments. The expanded child tax credit temporarily reduced child poverty by nearly 30%. However, economists debated whether the massive spending contributed to inflation that emerged in 2021. Republicans unanimously opposed the bill, arguing it was too expensive and poorly targeted. Democrats passed it using budget reconciliation. The law demonstrated different approaches to economic recovery—Democrats favoring aggressive government intervention, Republicans concerned about debt and inflation. The rescue plan helped fuel economic recovery but also became embroiled in partisan debates about spending and inflation.",
        primarySource: {
            quote: "This historic legislation is about rebuilding the backbone of this country and giving people in this nation, working people, middle-class folks, people who built the country, a fighting chance.",
            attribution: "President Joe Biden",
            context: "Signing the American Rescue Plan, March 11, 2021",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/President_Biden_signs_the_American_Rescue_Plan_Act.jpg/800px-President_Biden_signs_the_American_Rescue_Plan_Act.jpg",
            imageCaption: "President Biden signs the American Rescue Plan Act"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How much was the American Rescue Plan Act?",
                options: ["$800 billion", "$1.2 trillion", "$1.9 trillion", "$2.5 trillion"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How much were the direct payments to Americans?",
                options: ["$600", "$1,200", "$1,400", "$2,000"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Did any Republicans vote for the American Rescue Plan?",
                options: ["Yes, many", "Yes, a few", "No, none voted for it", "It was unanimous"],
                correct: 2
            }
        ]
    },
    {
        id: 176,
        title: "Afghanistan Withdrawal and Taliban Takeover (2021)",
        text: "In August 2021, the U.S. completed its withdrawal from Afghanistan, ending America's longest war after 20 years. President Biden followed through on Trump's agreement with the Taliban to withdraw by May 2021 (later extended to August). As U.S. forces departed, the Afghan government and military collapsed far faster than predicted. The Taliban seized control within weeks. On August 15, they entered Kabul as President Ghani fled. Desperate Afghans crowded Kabul airport seeking evacuation. Images of people clinging to departing planes shocked the world. The U.S. evacuated over 120,000 people, but many Afghan allies were left behind. A suicide bombing killed 13 U.S. service members and 170 Afghans. The withdrawal was widely criticized as chaotic and poorly planned. It raised questions about the war's purpose, cost (2,400 American lives, $2 trillion), and whether nation-building was achievable.",
        primarySource: {
            quote: "I stand squarely behind my decision. After 20 years, I've learned the hard way that there was never a good time to withdraw U.S. forces.",
            attribution: "President Joe Biden",
            context: "Address on Afghanistan withdrawal, August 16, 2021",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Afghans_at_Kabul_airport.jpg/800px-Afghans_at_Kabul_airport.jpg",
            imageCaption: "Afghans crowd Kabul airport seeking evacuation, August 2021"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the U.S. withdraw from Afghanistan?",
                options: ["2019", "2020", "2021", "2022"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How long did the Afghanistan War last?",
                options: ["10 years", "15 years", "20 years", "25 years"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Who took control of Afghanistan after the U.S. withdrawal?",
                options: ["The Northern Alliance", "The Taliban", "Al-Qaeda", "ISIS"],
                correct: 1
            }
        ]
    },
    {
        id: 177,
        title: "Texas Abortion Ban and Roe v. Wade Challenges (2021)",
        text: "On September 1, 2021, Texas's S.B. 8 took effect, banning abortion after about six weeks of pregnancy (before many women know they're pregnant) and allowing private citizens to sue anyone who 'aids or abets' an abortion. The law had no exceptions for rape or incest. Its enforcement mechanism—private lawsuits rather than government prosecution—was designed to evade judicial review. The Supreme Court declined to block the law in a 5-4 decision, though litigation continued. The Texas law emboldened other states to pass restrictive abortion laws. It previewed the Supreme Court's approach in Dobbs v. Jackson Women's Health Organization, argued in December 2021. The case challenged Mississippi's 15-week abortion ban and directly confronted Roe v. Wade. During oral arguments, the conservative majority signaled willingness to overturn or significantly limit Roe. The Texas law and Dobbs case demonstrated how dramatically the Court's composition affected abortion rights.",
        primarySource: {
            quote: "The court's order is stunning. Presented with an application to enjoin a flagrantly unconstitutional law engineered to prohibit women from exercising their constitutional rights, the Court merely looked the other way.",
            attribution: "Justice Sonia Sotomayor, dissenting",
            context: "Supreme Court decision not to block Texas abortion law, September 2021",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Supreme_Court_of_the_United_States_-_Whole_Foods_-_2021.jpg/800px-Supreme_Court_of_the_United_States_-_Whole_Foods_-_2021.jpg",
            imageCaption: "Abortion rights protest at the Supreme Court, 2021"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "At how many weeks did Texas ban abortion in 2021?",
                options: ["Six weeks", "12 weeks", "15 weeks", "20 weeks"],
                correct: 0
            },
            {
                difficulty: "intermediate",
                question: "What was unique about Texas's abortion law enforcement?",
                options: ["Government prosecution", "Private citizen lawsuits", "Criminal penalties only", "No enforcement mechanism"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What was the Mississippi case challenging Roe v. Wade called?",
                options: ["Casey v. Planned Parenthood", "Dobbs v. Jackson", "Texas v. Roe", "Mississippi v. Wade"],
                correct: 1
            }
        ]
    },
    {
        id: 178,
        title: "Build Back Better and Infrastructure Bills (2021)",
        text: "In 2021, President Biden pursued two major pieces of legislation: the Infrastructure Investment and Jobs Act and Build Back Better Act. The bipartisan infrastructure bill ($1.2 trillion over ten years) passed with Republican support in November 2021, funding roads, bridges, broadband, and clean water. It represented a traditional infrastructure investment. The Build Back Better Act ($1.75 trillion) aimed to expand the social safety net—universal pre-K, child care subsidies, expanded Medicare, climate initiatives, and extended child tax credits. It faced opposition from Republicans and moderate Democrats Joe Manchin and Kyrsten Sinema, who demanded it be smaller. Despite months of negotiations, Build Back Better failed to pass. Parts were later revived in the Inflation Reduction Act (2022). The saga demonstrated Democratic divisions between progressives and moderates, the challenge of governing with narrow margins, and debates about government's role in addressing inequality and climate change.",
        primarySource: {
            quote: "This bill is not about left versus right or moderate versus progressive or anything that pits Americans against one another. This is about competitiveness versus complacency.",
            attribution: "President Joe Biden",
            context: "Signing the Infrastructure Investment and Jobs Act, November 15, 2021",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/President_Biden_signs_the_Infrastructure_Investment_and_Jobs_Act.jpg/800px-President_Biden_signs_the_Infrastructure_Investment_and_Jobs_Act.jpg",
            imageCaption: "President Biden signs the infrastructure bill"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which infrastructure bill passed in 2021?",
                options: ["Build Back Better", "Infrastructure Investment and Jobs Act", "Green New Deal", "American Jobs Plan"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Did Build Back Better pass in 2021?",
                options: ["Yes, with bipartisan support", "Yes, but only with Democrats", "No, it failed to pass", "It's still being debated"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "Which Democratic senator was key in blocking Build Back Better?",
                options: ["Bernie Sanders", "Elizabeth Warren", "Joe Manchin", "Chuck Schumer"],
                correct: 2
            }
        ]
    },
    {
        id: 179,
        title: "Inflation Surge (2021-2022)",
        text: "In 2021, inflation began rising significantly, reaching levels not seen since the early 1980s. By mid-2022, inflation peaked at 9.1% year-over-year. Multiple factors contributed: pandemic-related supply chain disruptions, labor shortages, pent-up consumer demand, massive government spending (COVID relief packages), and Russia's invasion of Ukraine affecting energy and food prices. Gas prices surged, straining household budgets. The Federal Reserve, which had kept interest rates near zero, began aggressively raising rates in 2022 to cool inflation. Economists debated causes—was it 'transitory' (Fed Chair Powell's initial assessment) or more persistent? Republicans blamed Biden's spending; Democrats pointed to corporate price gouging and global factors. Inflation became a major political issue, affecting the 2022 midterms. It demonstrated macroeconomic policy challenges, global economic interconnectedness, and how economic conditions shape political fortunes.",
        primarySource: {
            quote: "I'm sick of this stuff. We have to talk about it because the American people think the reason for inflation is the government spending more money. Simply not true.",
            attribution: "President Joe Biden",
            context: "Defending his economic policies, May 2022",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/US_Inflation_Rate_1914-2022.png/800px-US_Inflation_Rate_1914-2022.png",
            imageCaption: "U.S. inflation rate showing 2021-2022 surge"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "When did inflation surge in the U.S.?",
                options: ["2019-2020", "2020-2021", "2021-2022", "2022-2023"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the peak inflation rate in 2022?",
                options: ["5.4%", "7.1%", "9.1%", "11.2%"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What did the Federal Reserve do to combat inflation?",
                options: ["Lowered interest rates", "Raised interest rates", "Increased government spending", "Nothing"],
                correct: 1
            }
        ]
    },
    {
        id: 180,
        title: "Russia Invades Ukraine (2022)",
        text: "On February 24, 2022, Russia launched a full-scale invasion of Ukraine, the largest conventional military attack in Europe since World War II. Russian President Vladimir Putin claimed Ukraine was governed by Nazis (false) and threatened Russian security by potentially joining NATO. The invasion followed years of tension after Russia's 2014 annexation of Crimea. Ukrainian forces, led by President Volodymyr Zelensky, mounted fierce resistance. The U.S. and NATO allies imposed unprecedented sanctions on Russia and provided billions in military aid to Ukraine. The war caused a humanitarian crisis—millions fled Ukraine. It disrupted global energy and food supplies, contributing to inflation. The conflict tested Western unity, raised nuclear concerns, and challenged the post-Cold War order. It became the defining foreign policy crisis of Biden's presidency. The war demonstrated renewed great power competition and autocracy's challenge to democracy.",
        primarySource: {
            quote: "The fight is here; I need ammunition, not a ride.",
            attribution: "Ukrainian President Volodymyr Zelensky",
            context: "Response to U.S. offer of evacuation, February 2022",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2022_Russian_invasion_of_Ukraine.svg/800px-2022_Russian_invasion_of_Ukraine.svg.png",
            imageCaption: "Map showing Russian invasion of Ukraine, 2022"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did Russia invade Ukraine?",
                options: ["2020", "2021", "2022", "2023"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Who is Ukraine's president during the invasion?",
                options: ["Vladimir Putin", "Volodymyr Zelensky", "Viktor Yanukovych", "Petro Poroshenko"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "When did Russia previously annex Crimea from Ukraine?",
                options: ["2008", "2012", "2014", "2018"],
                correct: 2
            }
        ]
    },
    {
        id: 181,
        title: "Dobbs v. Jackson - Roe v. Wade Overturned (2022)",
        text: "On June 24, 2022, the Supreme Court overturned Roe v. Wade in Dobbs v. Jackson Women's Health Organization, eliminating the constitutional right to abortion after nearly 50 years. The 6-3 decision upheld Mississippi's 15-week abortion ban and returned abortion regulation to states. Justice Alito's majority opinion stated Roe was 'egregiously wrong from the start.' Justices Breyer, Sotomayor, and Kagan dissented, warning the decision threatened other rights based on privacy. The ruling triggered bans in over a dozen states with 'trigger laws.' It sparked protests nationwide. The decision reshaped American politics—Democrats mobilized around abortion rights, potentially mitigating predicted Republican midterm gains. Some states enshrined abortion rights; others passed near-total bans. The ruling demonstrated the Court's conservative transformation and raised questions about its legitimacy after a leaked draft opinion in May 2022 suggested the outcome.",
        primarySource: {
            quote: "The Constitution does not confer a right to abortion; Roe and Casey are overruled; and the authority to regulate abortion is returned to the people and their elected representatives.",
            attribution: "Justice Samuel Alito",
            context: "Majority opinion in Dobbs v. Jackson, June 24, 2022",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Abortion_rights_protest_at_the_Supreme_Court.jpg/800px-Abortion_rights_protest_at_the_Supreme_Court.jpg",
            imageCaption: "Abortion rights protesters at Supreme Court after Dobbs decision"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year was Roe v. Wade overturned?",
                options: ["2020", "2021", "2022", "2023"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "What was the Supreme Court vote in Dobbs?",
                options: ["5-4", "6-3", "7-2", "9-0"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "How long had Roe v. Wade been precedent before being overturned?",
                options: ["25 years", "35 years", "Nearly 50 years", "60 years"],
                correct: 2
            }
        ]
    },
    {
        id: 182,
        title: "Uvalde School Shooting (2022)",
        text: "On May 24, 2022, an 18-year-old gunman killed 19 children and two teachers at Robb Elementary School in Uvalde, Texas. It became one of the deadliest school shootings in U.S. history. The massacre was compounded by catastrophic law enforcement failure—nearly 400 officers waited over an hour in hallways while children called 911 begging for help. The delayed response drew national outrage and investigations. Parents desperately tried to enter the building to save their children. The tragedy reignited gun control debates. Unlike after previous mass shootings, Congress passed bipartisan legislation—the Bipartisan Safer Communities Act, the first major gun safety law in decades. It enhanced background checks for young buyers, funded red flag laws, and addressed mental health. However, it fell short of measures like assault weapons bans that gun control advocates sought. Uvalde highlighted America's unique gun violence problem and the agonizing gap between tragedy and meaningful reform.",
        primarySource: {
            quote: "When are we going to do something? I'm sick and tired of it. We have to act.",
            attribution: "President Joe Biden",
            context: "Address following Uvalde shooting, May 24, 2022",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Robb_Elementary_School_memorial.jpg/800px-Robb_Elementary_School_memorial.jpg",
            imageCaption: "Memorial for victims at Robb Elementary School, Uvalde"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "In which year did the Uvalde shooting occur?",
                options: ["2020", "2021", "2022", "2023"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "How many people were killed in the Uvalde shooting?",
                options: ["17", "19 children and 2 teachers", "26", "20 children"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What gun safety law passed after Uvalde?",
                options: ["Assault Weapons Ban", "Brady Bill", "Bipartisan Safer Communities Act", "No law passed"],
                correct: 2
            }
        ]
    },
    {
        id: 183,
        title: "2022 Midterm Elections",
        text: "The 2022 midterm elections defied historical patterns and expectations. Typically, the president's party loses seats, especially with Biden's low approval ratings and high inflation. Republicans predicted a 'red wave.' However, Democrats retained Senate control (eventually 51-49 after Georgia's runoff) and Republicans gained only a narrow House majority (222-213). Several factors explained Democratic resilience: backlash to the Dobbs decision overturning Roe v. Wade energized Democratic voters, particularly women; Trump-endorsed election deniers and weak candidates lost key races; and January 6 hearings kept Trump's role prominent. Young voters turned out in unusually high numbers. Abortion appeared on ballots in several states, with abortion rights prevailing. The results suggested abortion rights and Trump's influence were liabilities for Republicans. The elections demonstrated how Dobbs reshaped American politics and that candidate quality matters.",
        primarySource: {
            quote: "It was a good day I think for democracy. And I think a good day for America.",
            attribution: "President Joe Biden",
            context: "Press conference after midterm elections, November 9, 2022",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2022_United_States_House_of_Representatives_elections_results.svg/800px-2022_United_States_House_of_Representatives_elections_results.svg.png",
            imageCaption: "2022 House election results by district"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "Which party controlled the Senate after 2022 midterms?",
                options: ["Republicans", "Democrats", "Split 50-50", "Independents"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Did Republicans experience a 'red wave' in 2022?",
                options: ["Yes, they won overwhelmingly", "No, they underperformed expectations", "Results were exactly as predicted", "They lost both chambers"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "What issue particularly motivated Democratic voters in 2022?",
                options: ["Immigration", "Abortion rights", "Tax cuts", "Foreign policy"],
                correct: 1
            }
        ]
    },
    {
        id: 184,
        title: "January 6 Committee Hearings (2022)",
        text: "From June to December 2022, the House Select Committee investigating January 6 held televised hearings revealing the attack's planning and Trump's role. The bipartisan committee (seven Democrats, two Republicans—Liz Cheney and Adam Kinzinger) heard from over 1,000 witnesses, including Trump administration officials. Key revelations included: Trump knew claims of election fraud were false but continued pushing them; he pressured Vice President Pence to reject electoral votes despite being told it was illegal; he watched the violence on TV for hours without calling it off; and some Republican lawmakers sought pardons afterward. Cassidy Hutchinson, Mark Meadows' aide, provided explosive testimony about Trump's actions. The committee referred Trump to the Justice Department for potential criminal charges. While compelling to some, the hearings failed to shift Republican voters' views significantly. The committee demonstrated extensive presidential misconduct but highlighted deep partisan divides.",
        primarySource: {
            quote: "President Trump is a 76-year-old man. He is not an impressionable child. Donald Trump cannot escape responsibility by being willfully blind.",
            attribution: "Rep. Liz Cheney",
            context: "Committee hearing closing statement, July 2022",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/January_6_Committee_hearing_room.jpg/800px-January_6_Committee_hearing_room.jpg",
            imageCaption: "January 6 Committee hearing room"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "What event did the committee investigate?",
                options: ["COVID response", "January 6 Capitol attack", "Afghanistan withdrawal", "Election fraud"],
                correct: 1
            },
            {
                difficulty: "intermediate",
                question: "Which Republican served as vice chair of the committee?",
                options: ["Mitch McConnell", "Kevin McCarthy", "Liz Cheney", "Mitt Romney"],
                correct: 2
            },
            {
                difficulty: "advanced",
                question: "What did the committee do regarding Trump at the end of its investigation?",
                options: ["Nothing", "Censured him", "Referred him to DOJ for potential charges", "Impeached him again"],
                correct: 2
            }
        ]
    },
    {
        id: 185,
        title: "Trump Indictments and Legal Challenges (2023-2024)",
        text: "In 2023-2024, Donald Trump faced unprecedented legal challenges for a former president: four criminal indictments totaling 91 felony counts. In March 2023, Manhattan DA charged him with falsifying business records related to hush money payments. In June, Special Counsel Jack Smith indicted him for mishandling classified documents. In August, Smith charged him over efforts to overturn the 2020 election. Georgia DA Fani Willis indicted him and 18 others for election interference. Additionally, Trump faced civil trials—a jury found him liable for sexual abuse and defamation (E. Jean Carroll case, awarding $83 million), and a judge found his business guilty of fraud, ordering $454 million in penalties. Despite legal troubles, Trump maintained Republican frontrunner status for 2024, claiming political persecution. His legal strategy involved delay tactics. The situation raised questions about accountability, the rule of law, and whether legal troubles would affect his political viability.",
        primarySource: {
            quote: "These charges are the very definition of election interference and the weaponization of our justice system.",
            attribution: "Donald Trump",
            context: "Statement after federal indictment, August 2023",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Donald_Trump_mug_shot.jpg/800px-Donald_Trump_mug_shot.jpg",
            imageCaption: "Trump's booking photo from Fulton County, Georgia, August 2023"
        },
        quiz: [
            {
                difficulty: "beginner",
                question: "How many criminal indictments did Trump face as of 2024?",
                options: ["One", "Two", "Four", "Six"],
                correct: 2
            },
            {
                difficulty: "intermediate",
                question: "Which prosecutor indicted Trump over classified documents?",
                options: ["Manhattan DA", "Jack Smith", "Fani Willis", "Merrick Garland"],
                correct: 1
            },
            {
                difficulty: "advanced",
                question: "Approximately how many total felony counts did Trump face?",
                options: ["34", "60", "91", "120"],
                correct: 2
            }
        ]
    }
];

// "On This Day" events for all 365 days of the year
function getOnThisDayEvent() {
    const today = new Date();
    const month = today.getMonth(); // 0-11 (January = 0, December = 11)
    const day = today.getDate(); // 1-31

    // Create a comprehensive database of exactly 150 "On This Day" events covering important dates in American history
    const events = {
        // January (31 events)
        "0-1": { year: 1863, event: "President Abraham Lincoln signs the Emancipation Proclamation, declaring slaves in Confederate states to be free." },
        "0-2": { year: 1788, event: "Georgia becomes the fourth state to ratify the U.S. Constitution." },
        "0-3": { year: 1777, event: "General George Washington's army defeats the British at the Battle of Princeton during the Revolutionary War." },
        "0-4": { year: 1896, event: "Utah is admitted as the 45th state of the United States." },
        "0-5": { year: 1933, event: "Construction begins on the Golden Gate Bridge in San Francisco." },
        "0-6": { year: 1912, event: "New Mexico is admitted as the 47th state of the United States." },
        "0-7": { year: 1789, event: "The first U.S. presidential election is held, with George Washington running unopposed." },
        "0-8": { year: 1815, event: "The Battle of New Orleans occurs, with Andrew Jackson's forces defeating the British in the War of 1812's final major battle." },
        "0-9": { year: 1788, event: "Connecticut becomes the fifth state to ratify the U.S. Constitution." },
        "0-10": { year: 1776, event: "Thomas Paine publishes 'Common Sense,' calling for American independence from Britain." },
        "0-11": { year: 1964, event: "U.S. Surgeon General Luther Terry releases a landmark report linking smoking to cancer." },
        "0-12": { year: 1991, event: "Congress authorizes the use of military force against Iraq to liberate Kuwait, beginning the Gulf War." },
        "0-13": { year: 1898, event: "Émile Zola publishes 'J'Accuse,' defending Alfred Dreyfus and influencing American views on justice." },
        "0-14": { year: 1784, event: "The Treaty of Paris is ratified by Congress, officially ending the Revolutionary War." },
        "0-15": { year: 1929, event: "Martin Luther King Jr. is born in Atlanta, Georgia." },
        "0-16": { year: 1919, event: "The 18th Amendment is ratified, beginning Prohibition in the United States." },
        "0-17": { year: 1706, event: "Benjamin Franklin is born in Boston, Massachusetts." },
        "0-18": { year: 1911, event: "Eugene Ely lands an airplane on a ship for the first time, aboard the USS Pennsylvania." },
        "0-19": { year: 1807, event: "Robert E. Lee, Confederate general during the Civil War, is born in Virginia." },
        "0-20": { year: 1961, event: "John F. Kennedy is inaugurated as the 35th President of the United States, delivering his famous 'Ask not what your country can do for you' speech." },
        "0-21": { year: 1954, event: "The USS Nautilus, the world's first nuclear-powered submarine, is launched." },
        "0-22": { year: 1973, event: "The Supreme Court rules in Roe v. Wade, establishing a woman's legal right to abortion." },
        "0-23": { year: 1849, event: "Elizabeth Blackwell becomes the first woman to receive a medical degree in the United States." },
        "0-24": { year: 1848, event: "James W. Marshall discovers gold at Sutter's Mill in California, sparking the Gold Rush." },
        "0-25": { year: 1890, event: "Nellie Bly completes her journey around the world in 72 days, breaking the fictional record from 'Around the World in Eighty Days.'" },
        "0-26": { year: 1788, event: "The First Fleet arrives in Australia; Captain Arthur Phillip raises the British flag at Sydney Cove (impacts American convict transportation policy)." },
        "0-27": { year: 1967, event: "Astronauts Gus Grissom, Ed White, and Roger Chaffee die in a fire during a launch pad test for Apollo 1." },
        "0-28": { year: 1986, event: "The Space Shuttle Challenger explodes 73 seconds after liftoff, killing all seven crew members." },
        "0-29": { year: 1861, event: "Kansas is admitted as the 34th state of the United States." },
        "0-30": { year: 1968, event: "The Tet Offensive begins during the Vietnam War, marking a turning point in American public opinion." },
        "0-31": { year: 1865, event: "The U.S. House of Representatives passes the 13th Amendment, abolishing slavery." },

        // February (29 events)
        "1-1": { year: 1960, event: "Four African American students stage a sit-in at a segregated Woolworth's lunch counter in Greensboro, North Carolina, sparking similar protests nationwide." },
        "1-2": { year: 1848, event: "The Treaty of Guadalupe Hidalgo is signed, ending the Mexican-American War and adding vast territories to the United States." },
        "1-3": { year: 1870, event: "The 15th Amendment is ratified, granting African American men the right to vote." },
        "1-4": { year: 1789, event: "George Washington is unanimously elected as the first President of the United States." },
        "1-5": { year: 1917, event: "The Immigration Act of 1917 is passed, restricting immigration through a literacy test." },
        "1-6": { year: 1788, event: "Massachusetts becomes the sixth state to ratify the U.S. Constitution." },
        "1-7": { year: 1944, event: "The 'Double V Campaign' for victory against fascism abroad and racism at home gains momentum during WWII." },
        "1-8": { year: 1910, event: "The Boy Scouts of America is incorporated." },
        "1-9": { year: 1825, event: "The House of Representatives elects John Quincy Adams as President after no candidate wins the electoral college." },
        "1-10": { year: 1967, event: "The 25th Amendment is ratified, clarifying presidential succession." },
        "1-11": { year: 1990, event: "Nelson Mandela is released from prison in South Africa, celebrated widely in the United States." },
        "1-12": { year: 1809, event: "Abraham Lincoln is born in Hodgenville, Kentucky." },
        "1-13": { year: 1935, event: "A jury in New Jersey finds Bruno Hauptmann guilty of the kidnapping and murder of Charles Lindbergh Jr." },
        "1-14": { year: 1859, event: "Oregon is admitted as the 33rd state of the United States." },
        "1-15": { year: 1898, event: "The USS Maine explodes in Havana Harbor, leading to the Spanish-American War." },
        "1-16": { year: 1968, event: "The first 911 emergency telephone system is inaugurated in Haleyville, Alabama." },
        "1-17": { year: 1801, event: "The House of Representatives breaks an electoral tie between Thomas Jefferson and Aaron Burr, electing Jefferson as President." },
        "1-18": { year: 1930, event: "Pluto is discovered by astronomer Clyde Tombaugh at the Lowell Observatory in Arizona." },
        "1-19": { year: 1942, event: "President Franklin D. Roosevelt signs Executive Order 9066, leading to the internment of Japanese Americans." },
        "1-20": { year: 1962, event: "John Glenn becomes the first American to orbit the Earth aboard Friendship 7." },
        "1-21": { year: 1965, event: "Malcolm X is assassinated in New York City." },
        "1-22": { year: 1732, event: "George Washington is born in Westmoreland County, Virginia." },
        "1-23": { year: 1945, event: "U.S. Marines raise the American flag on Mount Suribachi during the Battle of Iwo Jima." },
        "1-24": { year: 1868, event: "President Andrew Johnson becomes the first U.S. president to be impeached by the House of Representatives." },
        "1-25": { year: 1870, event: "Hiram Revels becomes the first African American to serve in the U.S. Senate." },
        "1-26": { year: 1993, event: "A bomb explodes in the parking garage of the World Trade Center in New York City, killing six people." },
        "1-27": { year: 1951, event: "The 22nd Amendment is ratified, limiting presidents to two terms in office." },
        "1-28": { year: 1854, event: "The Republican Party is founded in Ripon, Wisconsin." },
        "1-29": { year: 1704, event: "French and Native American forces attack the English settlement of Deerfield, Massachusetts, during Queen Anne's War." },

        // March (13 events)
        "2-1": { year: 1781, event: "The Articles of Confederation are ratified, creating the first U.S. constitution." },
        "2-2": { year: 1877, event: "Rutherford B. Hayes is declared the winner of the disputed 1876 presidential election in the Compromise of 1877." },
        "2-3": { year: 1931, event: "'The Star-Spangled Banner' officially becomes the national anthem of the United States." },
        "2-5": { year: 1770, event: "The Boston Massacre occurs when British soldiers fire on colonists, killing five people." },
        "2-6": { year: 1836, event: "The Alamo falls to Mexican forces after a 13-day siege in Texas." },
        "2-7": { year: 1965, event: "State troopers attack civil rights marchers on the Edmund Pettus Bridge in Selma, Alabama, in an event known as 'Bloody Sunday.'" },
        "2-10": { year: 1876, event: "Alexander Graham Bell makes the first successful telephone call, saying 'Mr. Watson, come here, I want to see you.'" },
        "2-15": { year: 1820, event: "Maine is admitted as the 23rd state under the Missouri Compromise." },
        "2-20": { year: 1852, event: "Harriet Beecher Stowe publishes 'Uncle Tom's Cabin,' a novel that galvanizes the abolitionist movement." },
        "2-21": { year: 1965, event: "Martin Luther King Jr. leads the successful Selma to Montgomery march for voting rights." },
        "2-23": { year: 1775, event: "Patrick Henry delivers his famous 'Give me liberty, or give me death!' speech in Virginia." },
        "2-25": { year: 1911, event: "A fire at the Triangle Shirtwaist Factory in New York City kills 146 workers, leading to workplace safety reforms." },
        "2-30": { year: 1981, event: "President Ronald Reagan is shot by John Hinckley Jr. in Washington, D.C., but survives." },

        // April (14 events)
        "3-2": { year: 1917, event: "President Woodrow Wilson asks Congress to declare war on Germany, entering World War I." },
        "3-4": { year: 1968, event: "Martin Luther King Jr. is assassinated in Memphis, Tennessee." },
        "3-6": { year: 1917, event: "The United States declares war on Germany, officially entering World War I." },
        "3-9": { year: 1865, event: "Confederate General Robert E. Lee surrenders to Union General Ulysses S. Grant at Appomattox Court House, effectively ending the Civil War." },
        "3-12": { year: 1861, event: "The American Civil War begins when Confederate forces fire on Fort Sumter in South Carolina." },
        "3-13": { year: 1743, event: "Thomas Jefferson is born at Shadwell, Virginia." },
        "3-15": { year: 1865, event: "President Abraham Lincoln dies after being shot by John Wilkes Booth at Ford's Theatre." },
        "3-16": { year: 1947, event: "Jackie Robinson breaks baseball's color barrier when he plays his first game for the Brooklyn Dodgers." },
        "3-18": { year: 1775, event: "Paul Revere begins his midnight ride to warn colonists that 'the British are coming.'" },
        "3-19": { year: 1775, event: "The Battles of Lexington and Concord are fought, marking the start of the Revolutionary War." },
        "3-21": { year: 1836, event: "Sam Houston's Texan army defeats Mexican General Santa Anna at the Battle of San Jacinto, securing Texas independence." },
        "3-26": { year: 1607, event: "English colonists make landfall at Cape Henry, Virginia, before establishing Jamestown." },
        "3-28": { year: 1788, event: "Maryland becomes the seventh state to ratify the U.S. Constitution." },
        "3-30": { year: 1803, event: "The United States purchases the Louisiana Territory from France, doubling the size of the nation." },

        // May (13 events)
        "4-1": { year: 1931, event: "The Empire State Building is dedicated in New York City, becoming the world's tallest building." },
        "4-4": { year: 1886, event: "The Haymarket affair occurs in Chicago when a labor rally turns violent." },
        "4-5": { year: 1961, event: "Alan Shepard becomes the first American in space aboard Freedom 7." },
        "4-6": { year: 1937, event: "The German airship Hindenburg catches fire while landing in New Jersey, ending the era of passenger airships." },
        "4-7": { year: 1915, event: "A German U-boat sinks the British passenger ship Lusitania, killing 1,198 people including 128 Americans." },
        "4-8": { year: 1945, event: "V-E Day (Victory in Europe Day) marks the end of World War II in Europe." },
        "4-10": { year: 1869, event: "The First Transcontinental Railroad is completed when the 'golden spike' is driven at Promontory Summit, Utah." },
        "4-13": { year: 1607, event: "English colonists establish Jamestown, Virginia, the first permanent English settlement in North America." },
        "4-14": { year: 1804, event: "The Lewis and Clark Expedition begins its journey to explore the Louisiana Purchase." },
        "4-17": { year: 1954, event: "The Supreme Court rules in Brown v. Board of Education that school segregation is unconstitutional." },
        "4-18": { year: 1980, event: "Mount St. Helens erupts in Washington state, killing 57 people." },
        "4-20": { year: 1927, event: "Charles Lindbergh takes off from New York on the first solo nonstop flight across the Atlantic Ocean." },
        "4-30": { year: 1922, event: "The Lincoln Memorial is dedicated in Washington, D.C." },

        // June (12 events)
        "5-1": { year: 1792, event: "Kentucky is admitted as the 15th state of the United States." },
        "5-3": { year: 1965, event: "Astronaut Ed White becomes the first American to walk in space during the Gemini 4 mission." },
        "5-5": { year: 1968, event: "Robert F. Kennedy is assassinated in Los Angeles after winning the California Democratic primary." },
        "5-6": { year: 1944, event: "D-Day: Allied forces land on the beaches of Normandy, France, beginning the liberation of Western Europe in World War II." },
        "5-11": { year: 1776, event: "The Continental Congress appoints a committee to draft the Declaration of Independence." },
        "5-12": { year: 1963, event: "Civil rights leader Medgar Evers is assassinated in Mississippi." },
        "5-14": { year: 1777, event: "Congress adopts the Stars and Stripes as the official flag of the United States." },
        "5-16": { year: 1858, event: "Abraham Lincoln delivers his 'House Divided' speech, arguing that the nation cannot endure permanently half slave and half free." },
        "5-18": { year: 1812, event: "The War of 1812 begins when the United States declares war on Britain." },
        "5-19": { year: 1865, event: "Union General Gordon Granger arrives in Galveston, Texas, to announce that the Civil War is over and enslaved people are free, now celebrated as Juneteenth." },
        "5-24": { year: 1876, event: "General George Custer and his 7th Cavalry are defeated at the Battle of Little Bighorn by Lakota, Northern Cheyenne, and Arapaho warriors." },
        "5-28": { year: 1969, event: "The Stonewall riots begin in New York City, marking a turning point in the gay rights movement." },

        // July (13 events)
        "6-1": { year: 1863, event: "The Battle of Gettysburg begins in Pennsylvania, the Civil War's turning point." },
        "6-2": { year: 1776, event: "The Continental Congress votes for independence from Britain." },
        "6-4": { year: 1776, event: "The Continental Congress formally adopts the Declaration of Independence in Philadelphia." },
        "6-9": { year: 1868, event: "The 14th Amendment is ratified, granting citizenship to all persons born or naturalized in the United States." },
        "6-11": { year: 1804, event: "Vice President Aaron Burr mortally wounds former Treasury Secretary Alexander Hamilton in a duel." },
        "6-16": { year: 1945, event: "The United States conducts the Trinity test, the first detonation of a nuclear weapon." },
        "6-20": { year: 1969, event: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon." },
        "6-21": { year: 1861, event: "The First Battle of Bull Run (First Manassas) is fought in Virginia, the first major battle of the Civil War." },
        "6-26": { year: 1788, event: "New York becomes the 11th state to ratify the U.S. Constitution." },
        "6-27": { year: 1953, event: "The Korean War armistice is signed, ending three years of fighting." },
        "6-29": { year: 1958, event: "Congress passes the National Aeronautics and Space Act, creating NASA." },
        "6-30": { year: 1619, event: "The first representative assembly in the Americas, the House of Burgesses, convenes in Virginia." },
        "6-31": { year: 1777, event: "The Marquis de Lafayette arrives in South Carolina to help the American Revolution." },

        // August (12 events)
        "7-1": { year: 1876, event: "Colorado is admitted as the 38th state, the 'Centennial State.'" },
        "7-3": { year: 1492, event: "Christopher Columbus sets sail from Spain on his first voyage to the New World." },
        "7-6": { year: 1945, event: "The United States drops an atomic bomb on Hiroshima, Japan." },
        "7-8": { year: 1974, event: "President Richard Nixon announces his resignation following the Watergate scandal." },
        "7-9": { year: 1945, event: "The United States drops an atomic bomb on Nagasaki, Japan." },
        "7-14": { year: 1935, event: "President Franklin D. Roosevelt signs the Social Security Act into law." },
        "7-15": { year: 1945, event: "Emperor Hirohito announces Japan's surrender, ending World War II." },
        "7-18": { year: 1920, event: "The 19th Amendment is ratified, granting women the right to vote." },
        "7-20": { year: 1619, event: "The first enslaved Africans arrive in the English colony of Virginia." },
        "7-24": { year: 1814, event: "British forces burn Washington, D.C., including the White House, during the War of 1812." },
        "7-28": { year: 1963, event: "Martin Luther King Jr. delivers his 'I Have a Dream' speech at the March on Washington." },
        "7-29": { year: 2005, event: "Hurricane Katrina makes landfall on the Gulf Coast, devastating New Orleans." },

        // September (13 events)
        "8-2": { year: 1945, event: "Japan formally surrenders aboard the USS Missouri, ending World War II." },
        "8-3": { year: 1783, event: "The Treaty of Paris is signed, officially ending the Revolutionary War." },
        "8-5": { year: 1774, event: "The First Continental Congress convenes in Philadelphia." },
        "8-6": { year: 1901, event: "President William McKinley is shot by an anarchist in Buffalo, New York; he dies eight days later." },
        "8-9": { year: 1850, event: "California is admitted as the 31st state as part of the Compromise of 1850." },
        "8-11": { year: 2001, event: "Terrorists attack the World Trade Center and Pentagon, killing nearly 3,000 people." },
        "8-12": { year: 1814, event: "Francis Scott Key writes 'The Star-Spangled Banner' after witnessing the British bombardment of Fort McHenry." },
        "8-17": { year: 1787, event: "The U.S. Constitution is signed by delegates to the Constitutional Convention in Philadelphia." },
        "8-22": { year: 1862, event: "President Abraham Lincoln issues the preliminary Emancipation Proclamation." },
        "8-24": { year: 1957, event: "President Eisenhower sends federal troops to Little Rock, Arkansas, to enforce school desegregation." },
        "8-25": { year: 1789, event: "Congress proposes the Bill of Rights." },
        "8-26": { year: 1960, event: "The first televised presidential debate takes place between John F. Kennedy and Richard Nixon." },
        "8-30": { year: 1935, event: "The Hoover Dam is dedicated by President Franklin D. Roosevelt." },

        // October (12 events)
        "9-1": { year: 1890, event: "Yosemite National Park is established." },
        "9-2": { year: 1967, event: "Thurgood Marshall is sworn in as the first African American Supreme Court Justice." },
        "9-4": { year: 1957, event: "The Soviet Union launches Sputnik 1, the first artificial satellite, beginning the Space Race." },
        "9-7": { year: 1765, event: "The Stamp Act Congress convenes in New York to protest British taxation." },
        "9-8": { year: 1871, event: "The Great Chicago Fire begins, destroying much of the city." },
        "9-12": { year: 1492, event: "Christopher Columbus's expedition first sights land in the Americas (Bahamas)." },
        "9-14": { year: 1947, event: "Air Force Captain Chuck Yeager breaks the sound barrier in the Bell X-1." },
        "9-16": { year: 1859, event: "Abolitionist John Brown leads a raid on the federal arsenal at Harpers Ferry, Virginia (now West Virginia)." },
        "9-18": { year: 1867, event: "The United States takes possession of Alaska from Russia." },
        "9-19": { year: 1781, event: "British General Cornwallis surrenders at Yorktown, Virginia, effectively ending the Revolutionary War." },
        "9-22": { year: 1962, event: "President Kennedy delivers a televised address announcing the Cuban Missile Crisis." },
        "9-29": { year: 1929, event: "The stock market crashes on 'Black Tuesday,' beginning the Great Depression." },

        // November (12 events)
        "10-1": { year: 1800, event: "John Adams becomes the first president to live in the White House." },
        "10-4": { year: 2008, event: "Barack Obama is elected as the first African American President of the United States." },
        "10-6": { year: 1860, event: "Abraham Lincoln is elected as the 16th President of the United States." },
        "10-9": { year: 1620, event: "The Mayflower sights land at Cape Cod, Massachusetts." },
        "10-11": { year: 1918, event: "World War I ends at 11 a.m. with the signing of the armistice (Armistice Day, now Veterans Day)." },
        "10-19": { year: 1863, event: "President Abraham Lincoln delivers the Gettysburg Address." },
        "10-21": { year: 1620, event: "The Mayflower Compact is signed by Pilgrim leaders aboard the Mayflower." },
        "10-22": { year: 1963, event: "President John F. Kennedy is assassinated in Dallas, Texas." },
        "10-25": { year: 1783, event: "The last British troops leave New York City." },
        "10-26": { year: 1789, event: "The first Thanksgiving Day is proclaimed by President George Washington." },
        "10-27": { year: 1924, event: "Macy's holds its first Thanksgiving Day Parade in New York City." },
        "10-30": { year: 1803, event: "Spain officially transfers Louisiana to France, setting up the Louisiana Purchase." },

        // December (11 events)
        "11-1": { year: 1955, event: "Rosa Parks refuses to give up her bus seat, sparking the Montgomery Bus Boycott." },
        "11-5": { year: 1933, event: "Prohibition ends as the 21st Amendment is ratified." },
        "11-6": { year: 1865, event: "The 13th Amendment is ratified, abolishing slavery in the United States." },
        "11-7": { year: 1941, event: "The Japanese attack Pearl Harbor, bringing the United States into World War II." },
        "11-8": { year: 1776, event: "George Washington crosses the Delaware River for a surprise attack on Hessian forces." },
        "11-15": { year: 1791, event: "The Bill of Rights is ratified, the first ten amendments to the Constitution." },
        "11-16": { year: 1773, event: "The Boston Tea Party occurs as colonists dump tea into Boston Harbor." },
        "11-17": { year: 1903, event: "The Wright Brothers make the first powered airplane flight at Kitty Hawk, North Carolina." },
        "11-21": { year: 1620, event: "Pilgrims aboard the Mayflower land at Plymouth Rock." },
        "11-25": { year: 1776, event: "George Washington and his troops cross the Delaware River on Christmas night." },
        "11-26": { year: 1776, event: "George Washington's forces score a victory at the Battle of Trenton." }
    };

    // Create the lookup key: "month-day" (e.g., "0-1" for January 1st, "11-25" for December 25th)
    const key = `${month}-${day}`;

    // Look up the event for today's date in the events database
    // If found, return that event; otherwise return the default message
    return events[key] || { year: 2024, event: "An important event in American history occurred on this day." };
}
