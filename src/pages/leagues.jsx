import React from 'react'
import PropTypes from 'prop-types'

import LeagueCardList from 'components/LeagueCardList'
import GlobalLayout from 'components/GlobalLayout'

function LeaguePage({ location }) {
    return (
        <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
            <LeagueCardList />
        </GlobalLayout>
    )
}
LeaguePage.propTypes = {
    location: PropTypes.object,
}
export default LeaguePage
