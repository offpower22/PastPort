// Briefing page logic

// Helper function to update user stats display
function updateUserStats() {
    const userData = window.userData || {
        streak: parseInt(localStorage.getItem('pastport_user_streak')) || 0,
        hearts: parseInt(localStorage.getItem('pastport_user_hearts')) || 5
    };

    const streakElement = document.getElementById('streak');
    const heartsElement = document.getElementById('hearts');

    if (streakElement) {
        streakElement.textContent = userData.streak;
    }

    if (heartsElement) {
        heartsElement.textContent = userData.hearts;
    }
}

class BriefingSession {
    constructor() {
        this.totalBriefings = parseInt(sessionStorage.getItem('briefingCount')) || 1;
        this.currentIndex = 0;
        this.currentPhase = 'briefing'; // 'briefing' or 'quiz'
        this.selectedBriefings = this.selectRandomBriefings();
        this.currentQuizIndex = 0;
        this.quizAttempts = 0;

        this.init();
    }

    selectRandomBriefings() {
        // Get today's date to determine which briefings are available
        const today = new Date();
        const dayOfYear = this.getDayOfYear(today);

        // Each day gets a unique set of 5 briefings assigned to it
        // Use day of year to deterministically select 5 briefings
        const availableBriefingsForToday = this.getDailyBriefings(dayOfYear);

        // Only allow user to access the number they selected, up to 5
        const requestedCount = Math.min(this.totalBriefings, 5);
        return availableBriefingsForToday.slice(0, requestedCount);
    }

    getDayOfYear(date) {
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    }

    getDailyBriefings(dayOfYear) {
        // Use the day of year to create a deterministic but seemingly random selection
        // This ensures the same 5 briefings are always available on the same day
        const seed = dayOfYear * 12345; // Arbitrary multiplier for spread

        // Create a seeded random number generator
        const seededRandom = (seed) => {
            let x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        };

        // Create an array of indices
        const indices = briefings.map((_, i) => i);

        // Fisher-Yates shuffle with seeded random
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        // Select the first 5 briefings based on shuffled indices
        return indices.slice(0, 5).map(index => briefings[index]);
    }

    init() {
        updateUserStats();
        this.updateProgress();
        this.showBriefing();

        document.getElementById('continueButton').addEventListener('click', () => {
            this.handleContinue();
        });
    }

    updateProgress() {
        // Each briefing has 2 steps: reading the briefing (50%) and answering the quiz (50%)
        // Calculate progress based on completed briefings and current phase
        let completedSteps = this.currentIndex * 2; // Each completed briefing = 2 steps

        if (this.currentPhase === 'quiz') {
            completedSteps += 1; // Add 1 for the briefing reading phase we just completed
        }

        const totalSteps = this.totalBriefings * 2; // Total steps = briefings * 2 (reading + quiz each)
        const progress = (completedSteps / totalSteps) * 100;

        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
        document.getElementById('currentBriefing').textContent = this.currentIndex + 1;
        document.getElementById('totalBriefings').textContent = this.totalBriefings;
    }

    showBriefing() {
        const briefing = this.selectedBriefings[this.currentIndex];
        const briefingContent = document.getElementById('briefingContent');

        const imageHtml = briefing.primarySource.image
            ? `<img src="${briefing.primarySource.image}" alt="${briefing.primarySource.imageCaption}" class="primary-source-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='none';">
               <cite class="image-caption">${briefing.primarySource.imageCaption}</cite>`
            : '';

        briefingContent.innerHTML = `
            <h2>${briefing.title}</h2>
            <div class="briefing-text">
                ${briefing.text}
            </div>
            <div class="primary-source">
                <h4>📜 Primary Source</h4>
                <blockquote>"${briefing.primarySource.quote}"</blockquote>
                <cite>— ${briefing.primarySource.attribution}<br>${briefing.primarySource.context}</cite>
                ${imageHtml}
            </div>
        `;

        briefingContent.classList.remove('hidden');
        document.getElementById('quizContent').classList.add('hidden');
        document.getElementById('resultContent').classList.add('hidden');

        this.currentPhase = 'briefing';
    }

    showQuiz() {
        const briefing = this.selectedBriefings[this.currentIndex];
        const quizContent = document.getElementById('quizContent');

        // Update phase and progress
        this.currentPhase = 'quiz';
        this.updateProgress();

        // Filter quiz questions by difficulty level
        const userLevel = userData.difficultyLevel || 'intermediate';
        const availableQuestions = briefing.quiz.filter(q =>
            !q.difficulty || q.difficulty === userLevel
        );

        // Get a quiz question (use filtered or fallback to all)
        const questionsToUse = availableQuestions.length > 0 ? availableQuestions : briefing.quiz;
        const quizQuestion = questionsToUse[this.currentQuizIndex % questionsToUse.length];

        quizContent.innerHTML = `
            <h3>Test Your Knowledge</h3>
            <div class="quiz-question">${quizQuestion.question}</div>
            <div class="quiz-options">
                ${quizQuestion.options.map((option, index) => `
                    <button class="quiz-option" data-index="${index}">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;

        document.getElementById('briefingContent').classList.add('hidden');
        quizContent.classList.remove('hidden');
        document.getElementById('resultContent').classList.add('hidden');

        // Disable continue button until answer is selected
        const continueBtn = document.getElementById('continueButton');
        continueBtn.disabled = true;
        continueBtn.textContent = 'Select an answer';

        // Add click handlers to options
        const options = quizContent.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                this.handleQuizAnswer(parseInt(option.dataset.index), quizQuestion.correct, options);
            });
        });
    }

    handleQuizAnswer(selected, correct, options) {
        const continueBtn = document.getElementById('continueButton');

        // Disable all options after selection
        options.forEach(opt => opt.classList.add('disabled'));

        if (selected === correct) {
            // Correct answer
            options[selected].classList.add('correct');
            this.showResult(true);
            continueBtn.disabled = false;
            continueBtn.innerHTML = 'Continue <span class="button-arrow">→</span>';
        } else {
            // Incorrect answer
            options[selected].classList.add('incorrect');
            options[correct].classList.add('correct');

            // Check if user has hearts
            if (userData.hearts > 0 && this.quizAttempts === 0) {
                this.quizAttempts++;
                this.showHeartOption();
            } else {
                this.showResult(false);
                continueBtn.disabled = false;
                continueBtn.innerHTML = 'Continue <span class="button-arrow">→</span>';
            }
        }
    }

    showHeartOption() {
        const resultContent = document.getElementById('resultContent');
        resultContent.innerHTML = `
            <div class="result-icon">💔</div>
            <h3>Not quite right!</h3>
            <div class="result-message">
                Would you like to use a heart to try again with a new question?
            </div>
            <div class="navigation-buttons">
                <button id="useHeartButton" class="primary-button" style="background: var(--error-red); box-shadow: 0 4px 0 #cc0000;">
                    Use a Heart ❤️
                </button>
                <button id="skipHeartButton" class="primary-button" style="background: var(--text-light); box-shadow: 0 4px 0 #5a5a5a; margin-top: 12px;">
                    Continue Without Heart
                </button>
            </div>
        `;

        document.getElementById('briefingContent').classList.add('hidden');
        document.getElementById('quizContent').classList.add('hidden');
        resultContent.classList.remove('hidden');
        document.getElementById('continueButton').classList.add('hidden');

        document.getElementById('useHeartButton').addEventListener('click', () => {
            userData.useHeart();
            updateUserStats();
            this.currentQuizIndex = (this.currentQuizIndex + 1) % this.selectedBriefings[this.currentIndex].quiz.length;
            document.getElementById('continueButton').classList.remove('hidden');
            this.showQuiz();
        });

        document.getElementById('skipHeartButton').addEventListener('click', () => {
            document.getElementById('continueButton').classList.remove('hidden');
            this.showResult(false);
            document.getElementById('continueButton').disabled = false;
            document.getElementById('continueButton').innerHTML = 'Continue <span class="button-arrow">→</span>';
        });
    }

    showResult(correct) {
        const resultContent = document.getElementById('resultContent');

        if (correct) {
            resultContent.innerHTML = `
                <div class="result-icon">🎉</div>
                <h3>Excellent!</h3>
                <div class="result-message">
                    You've mastered this piece of history. Ready for the next one?
                </div>
            `;
        } else {
            resultContent.innerHTML = `
                <div class="result-icon">📚</div>
                <h3>Keep Learning!</h3>
                <div class="result-message">
                    Every mistake is a step toward mastery. Let's continue your journey through history.
                </div>
            `;
        }

        document.getElementById('briefingContent').classList.add('hidden');
        document.getElementById('quizContent').classList.add('hidden');
        resultContent.classList.remove('hidden');
    }

    handleContinue() {
        if (this.currentPhase === 'briefing') {
            // Move from briefing to quiz
            this.showQuiz();
        } else {
            // Move to next briefing or finish
            this.quizAttempts = 0;
            this.currentQuizIndex = 0;
            this.currentIndex++;

            if (this.currentIndex < this.totalBriefings) {
                this.updateProgress();
                this.showBriefing();
            } else {
                this.showCompletion();
            }
        }
    }

    showCompletion() {
        userData.completeDay(this.totalBriefings);

        // Update progress to 100%
        document.getElementById('progressBar').style.width = '100%';

        // Show streak celebration animation
        this.showStreakCelebration();
    }

    showStreakCelebration() {
        const celebration = document.getElementById('streakCelebration');
        const streakNumber = document.getElementById('celebrationStreakNumber');
        const confettiContainer = document.getElementById('confettiContainer');

        // Update streak number
        streakNumber.textContent = userData.streak;

        // Show the celebration overlay
        celebration.classList.remove('hidden');

        // Create confetti
        this.createConfetti(confettiContainer);

        // Handle continue button
        document.getElementById('celebrationContinue').onclick = () => {
            celebration.classList.add('hidden');
            this.showCompletionSummary();
        };
    }

    createConfetti(container) {
        const colors = ['#c9a961', '#8b6f47', '#2c5f8d', '#5a7d5a', '#d4a574'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            // Random shapes
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }

            container.appendChild(confetti);
        }

        // Clean up confetti after animation
        setTimeout(() => {
            container.innerHTML = '';
        }, 4000);
    }

    showCompletionSummary() {
        const briefingContent = document.getElementById('briefingContent');
        briefingContent.innerHTML = `
            <div class="result-content">
                <div class="result-icon">🏆</div>
                <h2>Today's Journey Complete!</h2>
                <div class="result-message">
                    <p>You've completed ${this.totalBriefings} historical briefing${this.totalBriefings > 1 ? 's' : ''} today.</p>
                    <p style="margin-top: 20px;">
                        <strong>Current Streak: ${userData.streak} day${userData.streak !== 1 ? 's' : ''} 🔥</strong><br>
                        <strong>Hearts Remaining: ${userData.hearts} ❤️</strong>
                    </p>
                    <p style="margin-top: 20px; color: var(--text-light);">
                        Come back tomorrow for more fascinating history!
                    </p>
                </div>
            </div>
        `;

        briefingContent.classList.remove('hidden');
        document.getElementById('quizContent').classList.add('hidden');
        document.getElementById('resultContent').classList.add('hidden');

        const continueBtn = document.getElementById('continueButton');
        continueBtn.innerHTML = 'Back to Home <span class="button-arrow">→</span>';
        continueBtn.disabled = false;
        continueBtn.onclick = () => {
            window.location.href = 'index.html';
        };
    }
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BriefingSession();
    });
} else {
    new BriefingSession();
}
