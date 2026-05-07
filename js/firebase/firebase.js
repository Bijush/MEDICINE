// 🔥 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAqexDDuY_1T7ZfcENbYLGgh5eNpDNwN6U",
  authDomain: "bijus-app-52978.firebaseapp.com",
  projectId: "bijus-app-52978",
  storageBucket: "bijus-app-52978.firebasestorage.app",
  messagingSenderId: "796288544713",
  appId: "1:796288544713:web:bc2f8560d78db783aec218"
};

// init
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

console.log("🔥 Firestore connected");