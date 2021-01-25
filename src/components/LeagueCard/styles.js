import styled from '@emotion/styled'
import { SPACERS, COLORS, FONT_SIZES } from 'utils/styleHelpers'

export const LeagueCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.SECONDARY};
    padding: ${SPACERS.L};
    border-radius: 10px;
    margin: ${SPACERS.L};
`
export const LeagueCardTitle = styled.h2`
    margin-top: 0px;
    font-size: ${FONT_SIZES.H2};
`
export const LeagueCardBox = styled.div`
    font-size: ${FONT_SIZES.H7};
`

export const LeagueSeasonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.PRIMARY};
    padding: ${SPACERS.L};
    margin: ${SPACERS.L};
    border-radius: 10px;
`

export const LeagueSeasonBox = styled.div``
