import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "live-chat-demo-af57d.firebaseapp.com",
    projectId: "live-chat-demo-af57d",
    storageBucket: "live-chat-demo-af57d.appspot.com",
    messagingSenderId: "1022591306344",
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { auth, firestore, timestamp }
