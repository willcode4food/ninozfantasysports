import React from 'react'
import PropTypes from 'prop-types'
import { format, parseISO } from 'date-fns'
import {
    LeagueCardTitle,
    LeagueCardWrapper,
    LeagueCardBox,
    LeagueSeasonBox,
    LeagueSeasonInnerBox,
    LeagueSeasonInnerWrapper,
    LeagueSeasonWrapper,
    LeagueSeasonTitle,
} from './styles'

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
                            <LeagueSeasonTitle>{season.name}</LeagueSeasonTitle>
                            <LeagueSeasonBox>
                                <LeagueSeasonInnerWrapper key={season.id}>
                                    <LeagueSeasonInnerBox>
                                        {format(parseISO(season.startDate), `MMMM do, yyyy`)}
                                    </LeagueSeasonInnerBox>
                                    <LeagueSeasonInnerBox> - </LeagueSeasonInnerBox>
                                    <LeagueSeasonInnerBox>
                                        {format(parseISO(season.endDate), `MMMM do, yyyy`)}
                                    </LeagueSeasonInnerBox>
                                </LeagueSeasonInnerWrapper>
                            </LeagueSeasonBox>
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
