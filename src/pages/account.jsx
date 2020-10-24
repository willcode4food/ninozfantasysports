import React from 'react'
import PropTypes from 'prop-types'
import AccountProfileForm from 'components/AccountProfileForm'
import GlobalLayout from 'components/GlobalLayout'
import { authConditionIsUser } from 'utils/securityHelpers'
import useAuthorization from 'hooks/useAuthorization'
import UnauthorizedPage from 'components/UnauthorizedPage'

function AccountPage({ location }) {
    const { isAuthorized, isAuthorizationLoading } = useAuthorization(authConditionIsUser)
    if (!isAuthorizationLoading) {
        return (
            <>
                {isAuthorized ? (
                    <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
                        <AccountProfileForm />
                    </GlobalLayout>
                ) : (
                    <UnauthorizedPage />
                )}
            </>
        )
    }
    return null
}
AccountPage.propTypes = {
    location: PropTypes.object,
}
export default AccountPage
