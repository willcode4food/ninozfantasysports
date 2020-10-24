import styled from '@emotion/styled'
import { SPACERS, DEFAULT_AVATAR_THEMES } from 'utils/styleHelpers'

export const DefaultAvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: ${SPACERS.M};
    margin-bottom: ${SPACERS.M};
`
export const DefaultAvatarBox = styled.div``

export const DefaultAvatarCircle = styled.div`
    background-color: ${({ themeIndex }) => DEFAULT_AVATAR_THEMES[themeIndex].background};
    border: 1px solid ${({ themeIndex }) => DEFAULT_AVATAR_THEMES[themeIndex].border};
    border-radius: 50%;
    height: ${({ circleHeight }) => circleHeight};
    text-align: center;
    width: ${({ width }) => width};
`

export const DefaultAvatarInitials = styled.div`
    font-size: calc(${({ initialsHeight }) => initialsHeight} / 2); /* 50% of parent */
    color: ${({ themeIndex }) => DEFAULT_AVATAR_THEMES[themeIndex].foreground};
    top: calc(${({ initialsHeight }) => initialsHeight} / 4); /* 25% of parent */
    line-height: 1;
    position: relative;
`
