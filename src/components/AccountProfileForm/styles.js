import styled from '@emotion/styled'
import { SPACERS, COLORS } from 'utils/styleHelpers'

export const ImageEditorControlsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const ImageEditorControlsBox = styled.div``

export const ImageEditorControlsCenterBox = styled.div`
    flex-basis: 60%;
`
export const AvatarEditorBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: ${SPACERS.S};
    text-align: center;
`

export const AuthIdentifierLabel = styled.div`
    color: ${COLORS.TOGGLE};
    align-self: center;
    padding-top: ${SPACERS.S};
    padding-bottom: ${SPACERS.M};
`
