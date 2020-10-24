import React from 'react'

const AuthContext = React.createContext({ authUser: { uid: null }, isLoading: null, roles: null })

export default AuthContext
