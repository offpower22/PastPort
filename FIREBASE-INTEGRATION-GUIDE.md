# Firebase Integration Guide for PastPort

## ✅ What's Already Done

1. **firebase-config.js** - Your Firebase project configuration
2. **firebase-auth-helper.js** - Helper functions for authentication
3. **app-original-backup.js** - Backup of your original app.js
4. **Updated HTML files** - Added Firebase module imports

## 🚀 What You Need to Do

Your current app works with localStorage. Firebase is set up and ready, but we need to integrate it into app.js. Here's what needs to change:

### Option 1: Quick Test (Recommended First)

Open your browser console and test if Firebase is working:

```javascript
// In browser console
import { auth } from './firebase-config.js';
console.log(auth); // Should show Firebase auth object
```

If you see the Firebase object, connection is working!

### Option 2: Full Integration

I can help you integrate Firebase into app.js. The changes needed are:

#### 1. Import Firebase helpers at the top of app.js

Add after the existing code:
```javascript
import {
    firebaseSignUp,
    firebaseSignIn,
    firebaseSignOut,
    getCurrentUser,
    loadUserDataFromFirestore,
    saveUserDataToFirestore
} from './firebase-auth-helper.js';
```

#### 2. Update the sign-up form handler (around line 301)

Replace the localStorage code with:
```javascript
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

    // Use Firebase instead of localStorage
    const result = await firebaseSignUp(name, email, password);

    if (result.success) {
        // Mark account prompt as seen
        localStorage.setItem('pastport_account_prompt_seen', 'true');

        // Close modal and proceed
        signUpModal.classList.add('hidden');

        if (!userData.difficultyLevel) {
            showDifficultyModal(briefingCount);
        } else {
            startBriefing(briefingCount);
        }
    } else {
        alert(result.error);
    }
}, { once: true });
```

####3. Update the sign-in form handler (around line 339)

Replace with:
```javascript
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    // Use Firebase instead of localStorage
    const result = await firebaseSignIn(email, password);

    if (result.success) {
        localStorage.setItem('pastport_account_prompt_seen', 'true');
        signInModal.classList.add('hidden');

        // Firebase will automatically load user data
        if (!userData.difficultyLevel) {
            showDifficultyModal(briefingCount);
        } else {
            startBriefing(briefingCount);
        }
    } else {
        alert(result.error);
    }
}, { once: true });
```

#### 4. Update UserData class to use Firestore

In the `save()` method (around line 36), add:
```javascript
save() {
    const user = getCurrentUser();

    if (user) {
        // Save to Firestore if logged in
        saveUserDataToFirestore(user.uid, {
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
        });
    }

    // Also save to localStorage as backup
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
```

## 🧪 Testing

1. Open index.html in your browser
2. Click "Start Learning"
3. Choose "Create Account"
4. Fill in the form and submit
5. Check Firebase Console → Authentication → Users
   - You should see your new user!
6. Check Firestore → users collection
   - You should see your user data!

## ⚠️ Current Status

- ✅ Firebase is connected and configured
- ✅ Authentication functions are ready
- ⏳ Need to integrate into app.js (awaiting your confirmation)
- ⏳ Need to test

## 💡 Next Steps

Would you like me to:
1. Make these changes to app.js automatically?
2. Create a completely new Firebase-enabled app.js?
3. Walk you through making the changes manually?

Let me know and I'll proceed!
