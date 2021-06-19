import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL-mFpw-AFx2jstrXulqNZXtbG_ekk2ho",
  authDomain: "instagram-voting.firebaseapp.com",
  projectId: "instagram-voting",
  storageBucket: "instagram-voting.appspot.com",
  messagingSenderId: "69467386001",
  appId: "1:69467386001:web:a6620d49df35a7b78f0f30",
  measurementId: "G-W77ZDHX3HG"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()

  export {db}