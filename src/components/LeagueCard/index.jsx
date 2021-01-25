import React from 'react'
import PropTypes from 'prop-types'
import { LeagueCardTitle, LeagueCardWrapper, LeagueCardBox, LeagueSeasonBox, LeagueSeasonWrapper } from './styles'

function LeagueCard({ league }) {
    return (
        <LeagueCardWrapper>
            <LeagueCardTitle>{league.name}</LeagueCardTitle>
            <LeagueCardBox>{league.description}</LeagueCardBox>
            <LeagueCardBox>{league.ownerName}</LeagueCardBox>
            <LeagueCardBox>{league.type}</LeagueCardBox>
            <LeagueCardBox>
                {league.seasons?.length > 0 &&
                    league.seasons.map((season) => (
                        <LeagueSeasonWrapper key={season.id}>
                            <LeagueSeasonBox>{season.name}</LeagueSeasonBox>
                            <LeagueSeasonBox>{season.startDate}</LeagueSeasonBox>
                            <LeagueSeasonBox>{season.endDate}</LeagueSeasonBox>
                        </LeagueSeasonWrapper>
                    ))}
            </LeagueCardBox>
        </LeagueCardWrapper>
    )
}
LeagueCard.propTypes = {
    league: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        seasons: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                startDate: PropTypes.string,
                endDate: PropTypes.string,
            })
        ),
        type: PropTypes.string,
        ownerId: PropTypes.string,
        ownerName: PropTypes.string,
    }),
}
export default LeagueCard
