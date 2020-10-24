import styled from '@emotion/styled'
import { COLORS, SPACERS, FONT_SIZES, MQ } from 'utils/styleHelpers'
import { Link } from 'gatsby'

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${COLORS.SECONDARY_DARK};
    transition: background 0.5s;
    .dark & {
        background: ${COLORS.PRIMARY_DARK};
    }
    ${MQ.L} {
        flex-direction: column;
        justify-content: flex-start;
    }
`
export const FooterLogoWrapper = styled.div`
    height: 32px;
    width: 194px;
`

export const FooterWrapperBox = styled.div`
    padding-top: ${SPACERS.L};
    padding-bottom: ${SPACERS.L};
    margin-top: ${SPACERS.M};
    margin-bottom: ${SPACERS.M};
    ${MQ.L} {
        width: 15%;
    }
`
export const FooterContentWrapper = styled.div`
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FooterContentBoxLogo = styled.div`
    margin-left: ${SPACERS.M};
    margin-right: ${SPACERS.M};
    margin-top: ${SPACERS.L};
    ${MQ.L} {
        margin-top: ${SPACERS.L};
    }
`

export const FooterContentBoxTermsAndPolicy = styled.div`
    font-size: ${FONT_SIZES.H7};
    color: ${COLORS.SECONDARY};
`

export const FooterContentCopyrightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${SPACERS.M};
    ${MQ.L} {
        flex-direction: row;
    }
`

export const FooterSocialLinksWrapper = styled.div`
    margin: ${SPACERS.M};
`
export const FooterSocialLinksMobileWrapper = styled.div`
    margin-bottom: ${SPACERS.M};
`

export const FooterLinkBox = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    line-height: 20px;
`
export const FooterLink = styled(Link)`
    color: ${COLORS.TERNARY};
    font-size: ${FONT_SIZES.H5};
`
export const CopyrightText = styled.p`
    color: ${COLORS.TERNARY};
    font-size: ${FONT_SIZES.H8};
    margin: 0;
`
