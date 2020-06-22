import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNUqtwId2c_Ucsp2ehKF9LvNw7vHZfSaw",
    authDomain: "mess-manager-26035.firebaseapp.com",
    databaseURL: "https://mess-manager-26035.firebaseio.com",
    projectId: "mess-manager-26035",
    storageBucket: "mess-manager-26035.appspot.com",
    messagingSenderId: "834434354408",
    appId: "1:834434354408:web:6864cc7b14c72d19174d5d",
    measurementId: "G-PXNMT0C7ZC"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;