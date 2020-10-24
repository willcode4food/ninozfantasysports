import firebase from 'firebase/app'
import 'firebase/auth'
const { auth } = firebase

// Sign Up (Email)
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    const result = await auth().createUserWithEmailAndPassword(email, password)
    return result
}

// Sign In (Email)
export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        await auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        return await auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        throw Error(error)
    }
}

// Sign Out (Email)
export const doSignOut = async () => {
    try {
        await auth().signOut()
        window.location.reload()
    } catch (error) {
        throw Error(error)
    }
}

// Password Reset (Email)
export const doPasswordReset = async (email) => {
    try {
        await auth().sendPasswordResetEmail(email)
        return true
    } catch (error) {
        throw Error(error)
    }
}

// Password Reset (Email)
export const doPasswordUpdate = async (password) => {
    try {
        await auth().currentUser.updatePassword(password)
        return true
    } catch (error) {
        throw Error(error)
    }
}

export const doSignInWithGoogle = async () => {
    const googleProvider = new auth.GoogleAuthProvider()
    try {
        await auth().signInWithRedirect(googleProvider)
        return true
    } catch (error) {
        throw Error(error)
    }
}

export const doSignInWithFacebook = async () => {
    const facebookProvider = new auth.FacebookAuthProvider()
    try {
        await auth().signInWithRedirect(facebookProvider)
        return true
    } catch (error) {
        throw Error(error)
    }
}

export const doUpdateEmail = async (email) => {
    try {
        await auth().currentUser.updateEmail(email)
        return true
    } catch (error) {
        throw Error(error)
    }
}
