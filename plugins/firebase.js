import firebase from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyCo-fQ5_UnpjBlzKcUQq8FvOZ2R8eX14xI",      
    authDomain: "artybot-609cc.firebaseapp.com",      
    projectId: "artybot-609cc",      
    storageBucket: "artybot-609cc.appspot.com",
    messagingSenderId: "447810280334",
    appId: "1:447810280334:web:abaaea1fca3a06921b62df",
    measurementId: "G-CT9Y4QJRX4"
}

// firebase.initializeApp(config)
// firebase.firestore().settings({timestampsInSnapshots: true})

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);



// const fireDb = firebase.firestore()

export {app, db}