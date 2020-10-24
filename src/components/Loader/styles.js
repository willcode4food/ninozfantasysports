import { COLORS, SPACERS } from 'utils/styleHelpers'
import styled from '@emotion/styled'

export const LoaderOverlay = styled.div`
    background-color: ${COLORS.WHITE};
    height: calc(80vh - ${SPACERS.HEADER});
    .dark & {
        background: ${COLORS.BLACK};
    }
    z-index: 3;
`

export const LoaderWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const LoaderBox = styled.div`
    align: flex-start;
`
