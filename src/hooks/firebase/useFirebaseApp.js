import { useMemo } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

function useFirebaseApp({ firebaseConfig }) {
    const { auth } = firebase
    const db = useMemo(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
        return firebase.firestore()
    })
    const storage = useMemo(() => {
        return firebase.storage()
    })

    return {
        db,
        auth,
        storage,
    }
}

export default useFirebaseApp
