import React from 'react'
import PropTypes from 'prop-types'

import LeagueCard from 'components/LeagueCard'
import GlobalLayout from 'components/GlobalLayout'

function LeaguePage({ location }) {
    return (
        <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
            <LeagueCard />
        </GlobalLayout>
    )
}
LeaguePage.propTypes = {
    location: PropTypes.object,
}
export default LeaguePage
