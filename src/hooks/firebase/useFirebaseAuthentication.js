import { useEffect, useState } from 'react'
import useFirebaseApp from 'hooks/firebase/useFirebaseApp'
import useFirestoreDocument from 'hooks/firebase/useFirestoreDocument'

function useFirebaseAuthentication({ onAuthenticationSuccess = null, firebaseConfig }) {
    const [isAuthenticationLoading, setIsAuthenticationLoading] = useState(false)
    const [authenticationError, setAuthenticationError] = useState(null)
    const { createDocument, document } = useFirestoreDocument({ firebaseConfig })
    const LOGIN_FLAG_STORAGE = 'LOGIN_FLAG_STORAGE'
    const USER_PROFILE_STORAGE = 'USER_PROFILE_STORAGE'

    // Temporarry Storage Setters and getters
    const setLoginFlagStorage = () => {
        window.localStorage.setItem(LOGIN_FLAG_STORAGE, true)
    }
    const getLoginFlagStorage = () => {
        return window.localStorage.getItem(LOGIN_FLAG_STORAGE)
    }
    const unsetLoginFlagStorage = () => {
        window.localStorage.removeItem(LOGIN_FLAG_STORAGE)
    }
    const setUserProfileStorage = (userProfileData) => {
        window.localStorage.setItem(USER_PROFILE_STORAGE, JSON.stringify({ ...userProfileData }))
    }
    const unsetUserProfileStorage = () => {
        window.localStorage.removeItem(USER_PROFILE_STORAGE)
    }
    const getUserProfileStorage = () => {
        const storedProfile = window.localStorage.getItem(USER_PROFILE_STORAGE)
        return JSON.parse(storedProfile)
    }

    // Actions

    const doCreateUser = async ({ id, ...data }) => {
        try {
            const dateCreated = new Date(Date.now())

            // const authUser = await db.collection('users').doc(id).set(firestorePayload)
            createDocument('users', { dateCreated, ...data }, id)
            await doDefaultUserRole(id)
            return document
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const doCreateUserWithEmailAndPassword = async (email, password) => {
        const result = await auth().createUserWithEmailAndPassword(email, password)
        return result
    }

    const doDefaultUserRole = async (userID) => {
        const rolesRef = await db
            .collection('users')
            .doc(userID)
            .collection('roles')
            .doc('user')
            .set({
                dateAdded: new Date(Date.now()),
            })

        return rolesRef
    }

    const doGetUser = async (id) => {
        const docRef = await db.collection('users').doc(id)
        const doc = await docRef.get()

        return doc.exists ? { ...doc.data(), exists: true } : { exists: false }
    }

    const doPasswordReset = async (email) => {
        try {
            await auth().sendPasswordResetEmail(email)
            return true
        } catch (error) {
            const { message } = error
            setIsAuthenticationLoading(false)
            setAuthenticationError({ message })
        }
    }

    const doSignInWithGoogle = async () => {
        const googleProvider = new auth.GoogleAuthProvider()
        try {
            await auth().signInWithRedirect(googleProvider)
            return true
        } catch (error) {
            throw Error(error)
        }
    }

    const doSignInWithEmailAndPassword = async (email, password) => {
        try {
            await auth().setPersistence(auth.Auth.Persistence.LOCAL)
            return await auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            throw Error(error)
        }
    }

    // Event Handlers
    const onEmailLogin = async (data) => {
        const { email, password } = data
        setIsAuthenticationLoading(true)
        try {
            await doSignInWithEmailAndPassword(email, password)

            setIsAuthenticationLoading(false)
            onAuthenticationSuccess()
        } catch (error) {
            const { message } = error
            setIsAuthenticationLoading(false)
            setAuthenticationError({ message })
        }
    }

    const onEmailRegistration = async (data) => {
        setAuthenticationError(null)
        setIsAuthenticationLoading(true)
        try {
            const { email = null, password = null, username = null, ...restOfUserData } = data

            if (!email) {
                const errorMessage = 'No data for email'
                setAuthenticationError(errorMessage)
                return
            }
            if (!password) {
                const errorMessage = 'No data for password'
                setAuthenticationError(errorMessage)
                return
            }
            const authUser = await doCreateUserWithEmailAndPassword(email, password)
            const {
                user: { uid },
            } = authUser

            const userObject = {
                id: uid,
                username,
                email,
                ...restOfUserData,
            }
            // create a user with email
            await doCreateUser(userObject)
            onAuthenticationSuccess()
        } catch (e) {
            setAuthenticationError(e.message)
        }
        setIsAuthenticationLoading(false)
    }

    const onForgotPassword = async (data) => {
        try {
            setIsAuthenticationLoading(true)
            await doPasswordReset(data.email)
            setAuthenticationError({
                message:
                    'If your email address is registered with us, instructions have been sent to reset your password',
            })
            setIsAuthenticationLoading(false)
        } catch (error) {
            const { message } = error
            setIsAuthenticationLoading(false)
            setAuthenticationError({ message })
        }
    }

    const onGoogleLogin = async () => {
        try {
            setIsAuthenticationLoading(true)
            setLoginFlagStorage()
            await doSignInWithGoogle()
        } catch (error) {
            const { message } = error
            setIsAuthenticationLoading(false)
            setAuthenticationError({ message })
        }
    }
    const onGoogleRegistration = async (data) => {
        setAuthenticationError(null)

        setUserProfileStorage({ ...data })

        setLoginFlagStorage()
        setIsAuthenticationLoading(true)

        try {
            await doSignInWithGoogle()
        } catch (e) {
            setIsAuthenticationLoading(false)
            setAuthenticationError(e.message)
        }
    }

    const onSignOut = async () => {
        try {
            await auth().signOut()
            window.location.reload()
        } catch (error) {
            setAuthenticationError({ message: error.message })
        }
    }
    const { db, auth } = useFirebaseApp({ firebaseConfig })

    useEffect(() => {
        if (!onAuthenticationSuccess) {
            onAuthenticationSuccess = () => (window ? (window.location.href = '/') : true)
        }
    }, [onAuthenticationSuccess])

    ///handles redirect from third party authentication
    useEffect(() => {
        if (getLoginFlagStorage()) {
            setIsAuthenticationLoading(true)
            unsetLoginFlagStorage()
        }
        const handleRedirectResult = async () => {
            try {
                const result = await auth().getRedirectResult()
                if (result.user) {
                    setIsAuthenticationLoading(true)
                    const { user } = result
                    const { displayName, uid, email, emailVerified } = user
                    const { exists } = await doGetUser(uid)
                    if (!emailVerified) {
                        setIsAuthenticationLoading(false)
                        setAuthenticationError('Your Google Account is not verified')
                    } else if (!exists) {
                        const userProfileData = getUserProfileStorage()
                        const name = displayName.indexOf(' ') >= 0 ? displayName.split(' ') : [displayName]
                        const firstName = name[0]
                        const lastName = name.length > 1 ? name[1] : ''
                        const userObject = {
                            id: uid,
                            firstName,
                            email,
                            lastName,
                            city: '',
                            state: '',
                            zip: '',
                            username: '',
                            ...userProfileData,
                        }
                        try {
                            await doCreateUser({ ...userObject })
                            onAuthenticationSuccess()
                        } catch (e) {
                            setIsAuthenticationLoading(false)
                            setAuthenticationError(e.message)
                        }
                    }
                    onAuthenticationSuccess()
                    setIsAuthenticationLoading(false)
                }
            } catch (e) {
                setIsAuthenticationLoading(false)
            }
        }
        handleRedirectResult()
        return () => {
            unsetUserProfileStorage()
        }
    }, [])

    return {
        isAuthenticationLoading,
        onGoogleLogin,
        onGoogleRegistration,
        onEmailLogin,
        onEmailRegistration,
        onForgotPassword,
        onSignOut,
        authenticationError,
    }
}

export default useFirebaseAuthentication
