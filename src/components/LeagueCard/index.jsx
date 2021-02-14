import React from 'react'
import PropTypes from 'prop-types'
import { formatIsoDate } from 'utils/dateHelpers'
import {
    LeagueCardTitle,
    LeagueCardWrapper,
    LeagueCardBox,
    LeagueDetail,
    LeagueSeasonBox,
    LeagueSeasonDatesBoxWrapper,
    LeagueSeasonInnerBox,
    LeagueSeasonInnerWrapper,
    LeagueSeasonWrapper,
    LeagueSeasonTitle,
} from './styles'

import { PathHistoryButton } from 'components/Buttons'

function LeagueCard({ league }) {
    return (
        <LeagueCardWrapper>
            <LeagueCardTitle>{league.name}</LeagueCardTitle>
            <LeagueCardBox>{league.description}</LeagueCardBox>
            <LeagueCardBox>
                <LeagueDetail>{`League Owner:\u00A0\u00A0${league.ownerName}`}</LeagueDetail>
            </LeagueCardBox>
            <LeagueCardBox>
                <LeagueDetail>{`Sport:\u00A0\u00A0${league.type}`}</LeagueDetail>
            </LeagueCardBox>
            <LeagueCardBox>
                {league.seasons?.length > 0 &&
                    league.seasons.map((season) => (
                        <LeagueSeasonWrapper key={season.id}>
                            <LeagueSeasonTitle>{season.name}</LeagueSeasonTitle>
                            <LeagueSeasonBox>
                                <LeagueSeasonInnerWrapper key={season.id}>
                                    <LeagueSeasonDatesBoxWrapper>
                                        <LeagueSeasonInnerBox>{formatIsoDate(season.startDate)}</LeagueSeasonInnerBox>
                                        <LeagueSeasonInnerBox> - </LeagueSeasonInnerBox>
                                        <LeagueSeasonInnerBox>{formatIsoDate(season.endDate)}</LeagueSeasonInnerBox>
                                    </LeagueSeasonDatesBoxWrapper>
                                    <PathHistoryButton
                                        to="/season-registration"
                                        text="Join"
                                        previousUrl="/season-registration"
                                    />
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
