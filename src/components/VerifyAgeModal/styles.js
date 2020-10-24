import styled from '@emotion/styled'
import { COLORS, FONT_SIZES, MQ, SPACERS } from 'utils/styleHelpers'

export const StyledOverlay = styled.div`
    background: ${COLORS.PRIMARY};
    border-radius: 4px;
    box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.25), 0 0 32px rgba(0, 0, 0, 0.25);
    left: 50%;
    max-width: 100vw;
    max-height: 100vh;
    overflow: auto;
    padding: 16px;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    height: calc(80vh - ${SPACERS.HEADER});
    width: 70vw;
    .dark & {
        background: ${COLORS.TERNARY_DARK};
    }
    ${MQ.L} {
        height: calc(70vh - ${SPACERS.HEADER});
        width: 40vw;
    }
`
export const ModalContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 80%;
`
export const ModalVerificationBox = styled.div`
    align-self: center;
`

export const ModalContentWrapperBox = styled.div`
    flex-grow: 4;
`
export const ModalMessageText = styled.span`
    font-size: ${FONT_SIZES.H3};
`

export const ModalMessageWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    ${MQ.L} {
        padding-left: ${SPACERS.L};
        padding-right: ${SPACERS.L};
    }
`

export const OverlayTitle = styled('h2')`
    text-align: left;
    text-transform: uppercase;
`
export const Blocker = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 4;
`
