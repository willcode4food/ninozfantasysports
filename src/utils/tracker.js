import axios from 'axios'
import * as firebase from 'firebase/app'
import { apiEventsURL } from 'utils/apiHelpers'

export const stampTime = () => {
    try {
        const timestamp = new Date()
        const time = timestamp.toString().split(' ')
        return `${time[3]} ${time[1]} ${time[2]} ${time[4]}`
    } catch (e) {
        return 'unknown'
    }
}

export async function eventDispatch(eventData) {
    if (typeof window !== undefined) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(eventData)
    }
    if (process.env.NODE_ENV === 'development') {
        return
    }
    try {
        let currentUser = await firebase.auth().currentUser
        const token = await currentUser.getIdToken(true)
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        }
        // eslint-disable-next-line no-unused-vars
        const { 'gtm.uniqueEventId': uniqueEventId, ...rest } = eventData
        axios.post(apiEventsURL, { ...rest }, config)
        return true
    } catch (error) {
        console.log(error.message)
        return false
    }
}
