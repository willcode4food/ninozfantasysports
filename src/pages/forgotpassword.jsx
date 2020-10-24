import React from 'react'
import PropTypes from 'prop-types'
import ForgotPasswordForm from 'components/ForgotPasswordForm'
import GlobalLayout from 'components/GlobalLayout'

function ForgotPasswordPage({ location }) {
    return (
        <GlobalLayout isShowingBreadcrumbs={false} location={location} isVerifyAgeModalOverriden={true}>
            <ForgotPasswordForm />
        </GlobalLayout>
    )
}

ForgotPasswordPage.propTypes = {
    location: PropTypes.object,
}

export default ForgotPasswordPage
