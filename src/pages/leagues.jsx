import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import LeagueCardList from 'components/LeagueCardList'
import GlobalLayout from 'components/GlobalLayout'
import { FONT_SIZES, MQ } from 'utils/styleHelpers'

const LeagueListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LeagueListBox = styled.div`
    align-self: center;
    ${MQ.L} {
        width: 75%;
    }
`

const LeagueListTitle = styled.h1`
    align-self: center;
    font-size: ${FONT_SIZES.H1};
`

function LeaguePage({ location }) {
    return (
        <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
            <LeagueListWrapper>
                <LeagueListTitle>Our Current Leagues</LeagueListTitle>
                <LeagueListBox>
                    <LeagueCardList />
                </LeagueListBox>
            </LeagueListWrapper>
        </GlobalLayout>
    )
}
LeaguePage.propTypes = {
    location: PropTypes.object,
}
export default LeaguePage
