import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

function UnauthorizedPage() {
    useEffect(() => {
        navigate('/login')
    }, [])
    return <div />
}

export default UnauthorizedPage
