import axios from 'axios'
import { apiUsersURL } from 'utils/apiHelpers'
import { getAvatarThemeIndex } from 'utils/userHelpers'
import * as firebase from 'firebase/app'
import { FIREBASE } from 'utils/constants'
const db = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE.CONFIG)
    }
    return firebase.firestore()
}
// data layer for firebase and Users
export const doDefaultUserRole = async (userID) => {
    const rolesRef = await db()
        .collection('users')
        .doc(userID)
        .collection('roles')
        .doc('user')
        .set({
            dateAdded: new Date(Date.now()),
        })

    return rolesRef
}

export const doCreateUser = async ({ id, ...data }) => {
    try {
        const dateCreated = new Date(Date.now())

        const firestorePayload = {
            ...data,
            dateCreated,
            defaultAvatarThemeIndex: getAvatarThemeIndex(),
        }

        const authUser = await db().collection('users').doc(id).set(firestorePayload)
        await doDefaultUserRole(id)
        return authUser
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getUserRoles = async (userID) => {
    try {
        const rolesSnapShot = await db().collection('users').doc(userID).collection('roles').get()
        return !rolesSnapShot.empty ? rolesSnapShot.docs.map((d) => d.id) : []
    } catch (error) {
        throw new Error(error.message)
    }
}

export const doGetUsers = async () => {
    // const db = firebase.firestore()
    const querySnapshot = await db().collection('users').get()
    return !querySnapshot.empty ? querySnapshot.docs : []
}

export const doGetUser = async (id) => {
    const docRef = await db().collection('users').doc(id)
    const doc = await docRef.get()
    return doc.exists ? { ...doc.data(), exists: true } : { exists: false }
}

export const doUpdateUser = async (data) => {
    const { id, ...rest } = data
    const userData = { ...rest }
    const userRef = db().collection('users').doc(id)
    try {
        await db().runTransaction(async function (transaction) {
            const userDoc = await transaction.get(userRef)
            if (!userDoc.exists) {
                throw Error('Invalid User Id')
            }
            // filter out nulls
            const updatedUserData = Object.keys(userData).reduce((prev, curr) => {
                if (userData[curr]) {
                    prev[curr] = userData[curr]
                }
                return prev
            }, {})
            await transaction.update(userRef, { ...updatedUserData })
            return userDoc.data()
        })
    } catch (e) {
        console.log(e.message)
    }
}

export const validateUsername = async (username) => {
    const token = await firebase.auth().currentUser.getIdToken(true)
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    const usernameValidation = await axios.get(`${apiUsersURL}/validateusername/${username}`, config)
    return usernameValidation.data
}
