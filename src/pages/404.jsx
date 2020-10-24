import React from 'react'
import PropTypes from 'prop-types'
import GlobalLayout from 'components/GlobalLayout'

const NotFoundPage = ({ location }) => (
    <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </GlobalLayout>
)

NotFoundPage.propTypes = {
    location: PropTypes.object,
}

export default NotFoundPage
