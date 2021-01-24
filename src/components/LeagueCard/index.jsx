import React from 'react'
// import PropTypes from 'prop-types'
import { LeagueCardWrapper, LeagueCardBox } from './styles'

function LeagueCard() {
    return (
        <LeagueCardWrapper>
            <LeagueCardBox>League Title</LeagueCardBox>
            <LeagueCardBox>League description</LeagueCardBox>
        </LeagueCardWrapper>
    )
}

export default LeagueCard
