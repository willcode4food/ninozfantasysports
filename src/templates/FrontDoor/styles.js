import styled from '@emotion/styled'
import { MQ, SPACERS, COLORS, FONT_SIZES } from 'utils/styleHelpers'

export const FrontDoorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    z-index: 0;
    ${MQ.M} {
        flex-wrap: nowrap;
    }
`

export const ContentBoxCta = styled.div`
    display: ${({ isHidden }) => (isHidden.length > 1 && isHidden[0] ? 'none' : 'inline')};
    background-color: ${({ color }) => color || COLORS.TERNARY};
    box-shadow: ${({ boxShadow }) => (boxShadow ? '-1px 9px 18px - 7px rgba(0, 0, 0, 0.75)' : 'none')};
    flex-grow: auto;
    flex-basis: auto;
    transition: background-color 0.5s, box-shadow 0.5s;
    padding-top: ${SPACERS.XL};
    padding-right: ${SPACERS.L};
    padding-left: ${SPACERS.L};
    padding-bottom: ${SPACERS.XL};
    .dark & {
        background-color: ${({ darkColor }) => darkColor || COLORS.SECONDARY_DARK};
        box-shadow: ${({ boxShadow }) => (boxShadow ? '-1px 9px 18px - 7px rgba(0, 0, 0, 0.75)' : 'none')};
        ${MQ.L} {
            padding-top: ${SPACERS.L};
            padding-bottom: ${SPACERS.L};
            box-shadow: none;
            flex-grow: 1;
            flex-basis: 0;
        }
    }
    ${MQ.L} {
        padding-top: ${SPACERS.L};
        padding-bottom: ${SPACERS.L};
        display: ${({ isHidden }) => (isHidden.length > 1 && isHidden[1] ? 'none' : 'inline')};
        box-shadow: none;
        flex-grow: 1;
        flex-basis: 0;
    }
`
export const ContentBanner = styled.div`
    background: ${COLORS.SECONDARY};
    padding: ${SPACERS.L};
`
export const ContentBannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${MQ.L} {
        flex-direction: row;
        justify-content: space-between;
    }
`
export const ContentBannerBox = styled.div`
    padding-bottom: ${SPACERS.M};
    padding-right: ${SPACERS.M};
    padding-left: ${SPACERS.M};
`

export const ContentBannerMessage = styled.span`
    font-size: ${FONT_SIZES.H3};
    color: ${COLORS.PRIMARY};
    ${MQ.L} {
        font-size: ${FONT_SIZES.H1};
        font-weight: 600;
    }
`

export const ContentBannerButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ContentBannerButtonBox = styled.div`
    margin: ${SPACERS.S};
`

export const ContentValueProp = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: ${SPACERS.S};
    justify-content: center;
    height: 400px;
    width: 100%;
    ${MQ.L} {
        align-items: center;
        justify-content: center;
        margin: auto;
    }
`
export const ContentValuePropHorizontal = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: ${SPACERS.S};
    justify-content: center;
    height: 400px;
    width: 100%;
    ${MQ.L} {
        align-items: center;
        justify-content: space-around;
        margin: auto;
        flex-direction: row;
        width: 60%;
    }
`

export const ContentValuePropBox = styled.div`
    padding: ${SPACERS.L};
    margin: ${SPACERS.L};
`
export const IconBox = styled.div`
    padding: ${SPACERS.M};
    margin-top: ${SPACERS.M};
    margin-right: ${SPACERS.M};
    margin-left: ${SPACERS.M};
`
export const ContentValuePropHeader = styled.h2`
    color: ${COLORS.SECONDARY_DARK};
    font-size: ${FONT_SIZES.H3};
    text-align: center;
    font-weight: 600;
    transition: color 0.5s;
    .dark & {
        color: ${COLORS.PRIMARY};
    }
    ${MQ.M} {
        font-size: 2rem;
    }
`
export const CarouselHeader = styled.h2`
    color: ${COLORS.SECONDARY_DARK};
    margin-bottom: ${SPACERS.M};
    font-size: ${FONT_SIZES.H2};
    text-align: center;
    font-weight: 600;
    transition: color 0.5s;
    .dark & {
        color: ${COLORS.PRIMARY};
    }
    ${MQ.M} {
        font-size: 2rem;
    }
`
export const ContentValuePropContent = styled.div`
    color: ${COLORS.SECONDARY_DARK};
    font-size: ${FONT_SIZES.H4};
    text-align: center;
    padding-top: ${SPACERS.M};
    padding-bottom: ${SPACERS.M};
    width: 90%;
    transition: color 0.5s;
    .dark & {
        color: ${COLORS.PRIMARY};
    }
    ${MQ.M} {
        font-size: ${FONT_SIZES.H4};
    }
    ${MQ.L} {
        font-size: ${FONT_SIZES.H3};
    }
`
