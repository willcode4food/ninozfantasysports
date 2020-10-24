import React, { useState, useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import AuthContext from 'context/AuthContext'
import SessionContext from 'context/SessionContext'
import { version } from '../../package.json'
import useUserIp from 'hooks/useUserIp'
import { genGuid } from 'utils/genGuid'

function WithSession({ children }) {
    const { authUser, isLoading, roles } = useContext(AuthContext)
    const [userLocation, setUserLocation] = useState([])
    const [sessionId, setSessionId] = useState(null)
    const { ip } = useUserIp()

    useLayoutEffect(() => {
        const storedSessionId = sessionStorage.getItem('sessionId')
        if (!storedSessionId) {
            const guid = genGuid()
            sessionStorage.setItem('sessionId', guid)
            setSessionId(guid)
        } else {
            setSessionId(storedSessionId)
        }

        return () => sessionStorage.removeItem('sessionId')
    }, [])
    return (
        <SessionContext.Provider
            value={{
                authUser,
                isLoading,
                roles,
                setUserLocation,
                sessionId,
                version,
                uid: authUser.uid,
                userLocation: userLocation.length > 0 ? userLocation.toString() : null,
                userIp: ip,
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}

WithSession.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default WithSession
