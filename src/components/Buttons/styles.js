import { css } from '@emotion/react'
import { COLORS, SPACERS, FONT_FAMILY, FONT_SIZES } from 'utils/styleHelpers.js'

export const primaryButtonStyles = ({
    color = COLORS.PRIMARY_BUTTON,
    fontSize = FONT_SIZES.H4,
    textColor = COLORS.PRIMARY,
    textColorDark = COLORS.PRIMARY,
}) => css`
    border: 1px solid ${color};
    border-radius: 4px;
    background: ${color};
    color: ${textColor};
    font-size: ${fontSize};
    font-family: ${FONT_FAMILY};
    padding-top: ${SPACERS.M};
    padding-bottom: ${SPACERS.M};
    padding-right: ${SPACERS.L};
    padding-left: ${SPACERS.L};
    width: 100%;
    &:disabled {
        background: ${COLORS.TERNARY_DARK};
        border-color: ${COLORS.TERNARY_DARK};
        color: ${COLORS.TOGGLE};
    }
    &:hover {
        background: ${color};
    }
    .dark & {
        color: ${textColorDark || textColor};
        background: ${color};
        border: 1px solid ${color};
        &:disabled {
            background: ${COLORS.TERNARY_DARK};
            color: ${COLORS.PRIMARY_DARK};
            border-color: ${COLORS.TERNARY_DARK};
        }
    }
`
