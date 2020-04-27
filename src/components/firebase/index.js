import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7__Gii4YR9pmYPeC6Mn0jaemewBZCPKw",
    authDomain: "finance-notes-d4cab.firebaseapp.com",
    databaseURL: "https://finance-notes-d4cab.firebaseio.com",
    projectId: "finance-notes-d4cab",
    storageBucket: "finance-notes-d4cab.appspot.com",
    messagingSenderId: "656152237093",
    appId: "1:656152237093:web:acee99e2128988b48b1bcc",
    measurementId: "G-ZC1Q2C5F72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  