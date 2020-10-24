import React from 'react'

const SessionContext = React.createContext({ sessionID: null, userIp: null, uid: null, version: null })

export default SessionContext
