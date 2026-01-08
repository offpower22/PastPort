# Firestore Backend Setup Guide

## Common Issues and Solutions

### Issue 1: Firestore Not Enabled

**Symptoms**: Errors like "Firestore is not enabled" or connection failures

**Solution**:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `pastport-31ee7`
3. Click on "Firestore Database" in the left sidebar
4. If you see a "Create database" button, click it
5. Choose "Start in test mode" for now
6. Select a location (choose closest to you, e.g., `us-central`)
7. Click "Enable"

### Issue 2: Permission Denied Errors

**Symptoms**: Errors with code `permission-denied`

**Solution - Update Firestore Security Rules**:

1. Go to Firebase Console → Firestore Database → Rules
2. Replace the existing rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read and write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Allow any authenticated user to read the test collection (for diagnostics)
    match /test/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

**For Development/Testing (More Permissive)**:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Issue 3: Authentication Issues

**Symptoms**: Can't sign up or sign in, auth errors

**Solution**:

1. Go to Firebase Console → Authentication
2. Click "Get Started" if not enabled
3. Click on "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

### Issue 4: CORS Errors

**Symptoms**: "blocked by CORS policy" errors in console

**Solution**: Must use a local web server, NOT file:// URLs

```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000/index.html`

## Testing Your Setup

### Step 1: Run Diagnostic Test

1. Start your local server:
   ```bash
   python3 -m http.server 8000
   ```

2. Open in browser:
   ```
   http://localhost:8000/firebase-test.html
   ```

3. Follow the test results and fix any issues

### Step 2: Manual Testing

Click these buttons in order:
1. **Test Authentication** - Creates/signs in test user
2. **Test Firestore** - Tests connection
3. **Test Write Data** - Writes to Firestore
4. **Test Read Data** - Reads from Firestore

### Step 3: Verify in Firebase Console

1. Go to Firebase Console → Authentication → Users
   - You should see `test@pastport.com`

2. Go to Firebase Console → Firestore Database
   - You should see a `users` collection
   - Inside should be a document with the test user's data

## Production Security Rules

Once everything works, use these secure rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Leaderboard (read-only for all authenticated users)
    match /leaderboard/{document=**} {
      allow read: if request.auth != null;
      allow write: if false; // Managed by Cloud Functions
    }
  }
}
```

## Quick Checklist

- [ ] Firestore Database created and enabled
- [ ] Authentication Email/Password provider enabled
- [ ] Security rules updated and published
- [ ] Using http://localhost:8000 (not file://)
- [ ] firebase-test.html shows all green checkmarks

## Still Having Issues?

Check the browser console (F12 → Console) for specific error messages and codes. Common error codes:

- `permission-denied` → Update security rules
- `not-found` → Firestore not enabled or wrong project
- `auth/user-not-found` → User doesn't exist yet
- `auth/wrong-password` → Incorrect password
- `auth/email-already-in-use` → Account already exists

## Need Help?

Run the diagnostic test at `http://localhost:8000/firebase-test.html` and share the error messages.
