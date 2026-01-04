import {
    GoogleAuthProvider,
    OAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

export async function signInWithGoogle() {
    const res = await signInWithPopup(auth, googleProvider);
    return res.user;
}

export async function signInWithMicrosoft() {
    const res = await signInWithPopup(auth, microsoftProvider);
    return res.user;
}

export async function signupWithEmail(email, password) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
}

export async function loginWithEmail(email, password) {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
}
