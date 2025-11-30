import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const updateUser = async (name, photoURL) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: name, photoURL });
            setUser({ ...auth.currentUser });
        }
    };
    const resetPassword = (email) => sendPasswordResetEmail(auth, email)
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const sigInUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const googleSignIn = () => signInWithPopup(auth, googleProvider)
    const signOutUser = () => signOut(auth)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            if (u) setUser(u)
            else setUser(null)
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading, createUser, updateUser, sigInUser, signOutUser, googleSignIn, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )
}