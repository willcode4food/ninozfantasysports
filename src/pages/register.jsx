import React from 'react'
import PropTypes from 'prop-types'
import RegisterForm from 'components/RegisterForm'
import GlobalLayout from 'components/GlobalLayout'

function RegisterPage({ location }) {
    return (
        <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
            <RegisterForm />
        </GlobalLayout>
    )
}
RegisterPage.propTypes = {
    location: PropTypes.object,
}

export default RegisterPage
