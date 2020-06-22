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

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.setCustomParameters({display: 'popup'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookAuthProvider);
export default firebase;