import React from 'react'
import { Link } from 'gatsby'
import { authConditionIsUser } from 'utils/securityHelpers'
import useAuthorization from 'hooks/useAuthorization'
import { AccountCircle } from './styles'

function AccountLink() {
    const { isAuthorized, isLoading } = useAuthorization(authConditionIsUser)
    if (!isLoading && isAuthorized) {
        return (
            <Link to={'/account'}>
                <AccountCircle />
            </Link>
        )
    }
    return null
}
export default AccountLink
