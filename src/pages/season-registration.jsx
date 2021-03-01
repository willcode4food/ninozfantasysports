import React from 'react'
import PropTypes from 'prop-types'
import GlobalLayout from 'components/GlobalLayout'
import { authConditionIsUser } from 'utils/securityHelpers'
import useAuthorization from 'hooks/useAuthorization'
import UnauthorizedPage from 'components/UnauthorizedPage'
import SeasonRegistrationWizard from 'components/SeasonRegistrationWizard'

function SeasonRegistrationPage({ location }) {
    const { isAuthorized, isAuthorizationLoading } = useAuthorization(authConditionIsUser)

    if (!isAuthorizationLoading) {
        return (
            <>
                {isAuthorized ? (
                    <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
                        <SeasonRegistrationWizard />
                    </GlobalLayout>
                ) : (
                    <UnauthorizedPage />
                )}
            </>
        )
    }
    return null
}
SeasonRegistrationPage.propTypes = {
    location: PropTypes.object,
}
export default SeasonRegistrationPage
