import React from 'react'
import { Link, navigate } from 'gatsby'
import useFiresbaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'
import { FIREBASE } from 'utils/constants'

const SignOutButton = () => {
    const { onSignOut } = useFiresbaseAuthentication({ firebaseConfig: FIREBASE.CONFIG })
    const handleClick = async (e) => {
        e.preventDefault()
        await onSignOut()
        navigate('/')
    }
    return (
        <Link onClick={handleClick} to="/login">
            Sign Out
        </Link>
    )
}

export { SignOutButton }
