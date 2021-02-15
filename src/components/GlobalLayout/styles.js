import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { BREAKPOINTS_VALUES, COLORS, MQ, SPACERS } from 'utils/styleHelpers'

const mainColumn = css`
    margin: 0 auto;
    max-width: ${BREAKPOINTS_VALUES.L};
    ${MQ.XL} {
        max-width: ${BREAKPOINTS_VALUES.XL};
    }
`
const fixedHeight = css`
    min-height: 500px;

    ${MQ.M} {
        min-height: 900px;
    }
`

export const Body = styled.main`
    ${({ isDisplayingSearch }) => (isDisplayingSearch ? mainColumn : '')}
    ${({ isShowingFooter }) => isShowingFooter && fixedHeight}
`

export const BreadcrumbsWrapper = styled.div`
    display: flex;
    background: ${COLORS.PRIMARY};
    transition: background 0.5s;
    padding-top: ${SPACERS.S};
    width: 100vw;
    z-index: 1;
    .dark & {
        background: ${COLORS.SECONDARY_DARK};
    }
`
