import {auth} from "./firebase.utils";
import firebase from "firebase";

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.setCustomParameters({display: 'popup'});

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookAuthProvider)
    .catch(e => {
        console.log(e)
    });