import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { SPACERS, FONT_SIZES, MQ } from 'utils/styleHelpers'

export const BreadcrumbList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`
export const BreadcrumbItem = styled.li`
    float: left;
    font-size: ${FONT_SIZES.H7};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    ${MQ.L} {
        font-size: ${FONT_SIZES.H5};
    }
    ${MQ.M} {
        font-size: ${FONT_SIZES.H5};
    }
`
export const BreadcrumbItemPadding = styled.span`
    padding-left: ${SPACERS.M};
    padding-right: ${SPACERS.M};
`

export const BreadcrumbLink = styled(Link)`
    padding-left: ${SPACERS.M};
    padding-right: ${SPACERS.M};
`

export const BreadcrumbNav = styled.nav``
