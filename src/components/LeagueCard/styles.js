import styled from '@emotion/styled'
import { SPACERS, COLORS, FONT_SIZES } from 'utils/styleHelpers'

export const LeagueCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid ${COLORS.SECONDARY};
    padding: ${SPACERS.L};
    border-radius: 5px;
    margin: ${SPACERS.L};
`
export const LeagueCardTitle = styled.h2`
    margin-top: 0px;
    font-size: ${FONT_SIZES.H2};
    text-decoration: underline;
`
export const LeagueCardBox = styled.div`
    font-size: ${FONT_SIZES.H7};
    margin-bottom: ${SPACERS.M};
`

export const LeagueSeasonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.PRIMARY};
    padding: ${SPACERS.M};
    margin: ${SPACERS.M};
    border-radius: 5px;
`
export const LeagueSeasonInnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const LeagueSeasonBox = styled.div``
export const LeagueDetail = styled.span`
    text-transform: uppercase;
`
export const LeagueSeasonInnerBox = styled.div`
    margin: ${SPACERS.S};
`
export const LeagueSeasonTitle = styled.h3`
    font-size: ${FONT_SIZES.H4};
    margin-top: 0px;
    margin-bottom: ${SPACERS.L};
`
