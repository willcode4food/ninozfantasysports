import styled from '@emotion/styled'
import { COLORS, MQ, SPACERS } from 'utils/styleHelpers'

export const StickyNav = styled.div`
    background: #fff;
    position: sticky;
    left: 0;
    top: 0;
    transition: background 0.5s;
    box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.12);
    z-index: 3;
    .dark & {
        background: ${COLORS.PRIMARY_DARK};
    }
`

export const StickyNavInner = styled.div`
    z-index: 3;
`

export const HeaderBar = styled.header`
    display: flex;
    padding: 15px;
    z-index: 3;
    ${MQ.L} {
        padding: 15px;
    }
`
export const HeaderCenterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`

// https://stackoverflow.com/questions/32378953/keep-the-middle-item-centered-when-side-items-have-different-widths
export const HeaderBox = styled.div`
    align-self: center;
    flex: 1;
    display: flex;
    justify-content: center;
    :first-of-type > span {
        margin-right: auto;
    }
    :last-of-type > span {
        margin-left: auto;
    }
`

export const HeaderIconBox = styled.div`
    padding: ${SPACERS.S};
`
export const HeaderIconBoxCentered = styled.div`
    padding: ${SPACERS.S};
    align-self: center;
`

export const LogoWrapper = styled.div``

export const PathThemeAware = styled.path`
    fill: ${({ textColor }) => textColor};
    transition: fill 1.5s;
    .dark & {
        fill: #fff;
    }
`

export const SearchWrapper = styled.div`
    height: auto;
    padding: 0px;
    width: 40px;
    svg {
        fill: ${COLORS.MEDIUM_LIGHT_GRAY};
        transition: fill 0.5s;
    }
    .dark & {
        svg {
            fill: ${COLORS.MEDIUM_LIGHT_GRAY};
        }
    }
`
