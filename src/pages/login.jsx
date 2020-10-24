import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from 'components/LoginForm'
import GlobalLayout from 'components/GlobalLayout'

function LoginPage({ location }) {
    return (
        <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
            <LoginForm />
        </GlobalLayout>
    )
}
LoginPage.propTypes = {
    location: PropTypes.object,
}
export default LoginPage
