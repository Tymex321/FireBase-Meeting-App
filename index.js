// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';

import * as firebaseui from 'firebaseui';

// Document elements
const registerButton = document.querySelector('#registerUser');

// Add Firebase project configuration object here
const firebaseConfig = {
  //Add your own Config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    },
  },
};

const ui = new firebaseui.auth.AuthUI(auth);


registerButton.addEventListener("click", () => {
  ui.start("#firebaseui-auth-container", uiConfig);
});
