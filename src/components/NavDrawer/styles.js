import styled from '@emotion/styled'
import { COLORS, FONT_SIZES, SPACERS, MQ } from 'utils/styleHelpers'

// width: 320px;
export const Drawer = styled.div`
    background-color: white;
    box-sizing: border-box;
    color: #fff;
    height: calc(100vh - ${SPACERS.HEADER});
    margin-top: ${SPACERS.HEADER};
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0px;
    position: fixed;
    transition: left 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    top: 0;
    ${'' /* top: ${({ open }) => (open ? `0` : `calc(${SPACERS.HEADER} - 100vh)`)}; */}
    left: ${({ open }) => (open ? `0` : `-105%`)};
    width: 100%;
    z-index: 2;
    ${MQ.L} {
        box-shadow: 4px 1px 10px -5px rgba(0, 0, 0, 0.75);
        left: ${({ open }) => (open ? `0` : `-33%`)};
        width: 30%;
    }
`
export const NavWrapper = styled.nav`
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size: ${FONT_SIZES.H2};
    font-weight: bold;
    height: 100%;
    justify-content: center;
    transition: background 0.5s;
    a {
        color: ${COLORS.SECONDARY_DARK};
        margin: ${SPACERS.L} 0;
    }

    .dark & {
        background: ${COLORS.PRIMARY_DARK};
        color: #fff;

        a {
            color: #cac8c8;
        }
    }
`
