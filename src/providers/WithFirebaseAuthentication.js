import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import AuthContext from 'context/AuthContext'
import { FIREBASE } from 'utils/constants'
import useFirebaseApp from 'hooks/firebase/useFirebaseApp'

function WithFirebaseAuthentication({ children }) {
    const hasMounted = useRef(false)
    const [authUser, setAuthUser] = useState({ uid: null })
    const [isLoading, setIsLoading] = useState(true)
    const [roles, setRoles] = useState([])
    const { db, auth } = useFirebaseApp({ firebaseConfig: FIREBASE.CONFIG })
    //TODO: implemtn into a hook
    const getUserRoles = async (userID) => {
        try {
            const rolesSnapShot = await db.collection('users').doc(userID).collection('roles').get()
            return !rolesSnapShot.empty ? rolesSnapShot.docs.map((d) => d.id) : []
        } catch (error) {
            throw new Error(error.message)
        }
    }

    useEffect(() => {
        async function getAuth() {
            hasMounted.current = true
            auth().onAuthStateChanged(async (authUser) => {
                if (hasMounted.current) {
                    setIsLoading(true)
                    if (authUser) {
                        const roles = await getUserRoles(authUser.uid)
                        setAuthUser(authUser)
                        setRoles(roles)
                    }
                    setIsLoading(false)
                }
            })
        }
        getAuth()
    }, [])

    return <AuthContext.Provider value={{ authUser, isLoading, roles }}>{children}</AuthContext.Provider>
}

WithFirebaseAuthentication.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default WithFirebaseAuthentication
