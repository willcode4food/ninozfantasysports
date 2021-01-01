import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { COLORS, SPACERS, FONT_SIZES } from 'utils/styleHelpers'
import { css } from '@emotion/core'
import { AiFillWarning } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'

export const ErrorMessage = styled.span`
    color: ${COLORS.ERROR};
    padding-top: 5px;
`

export const ErrorIcon = styled(AiFillWarning)`
	padding-left: ${SPACERS.S};
	padding-right ${SPACERS.S};
	color: ${COLORS.ERROR};
`

export const GoogleLoginIcon = styled(FcGoogle)``

export const EmailLoginIcon = styled(HiOutlineMail)``

const formButtonStyles = ({ textColor, bgColor }) => css`
    color: ${textColor || COLORS.PRIMARY_DARK};
    background-color: ${bgColor || COLORS.PRIMARY};
    border: 1px solid ${COLORS.TERNARY_DARK};
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    padding: 14px 28px;
    text-align: center;
    width: 100%;
    transition: background-color 0.5s, border 0.5s, color 0.5s;
    .dark & {
        background-color: ${COLORS.SECONDARY_DARK};
        border: 1px solid ${COLORS.PRIMARY};
        color: ${COLORS.PRIMARY};
    }
`

export const FormButton = styled.button`
    ${({ textColor, bgColor }) => formButtonStyles({ textColor, bgColor })}
`
export const FormSubmitButton = styled.input`
    ${({ textColor, bgColor }) => formButtonStyles({ textColor, bgColor })}
`
export const FormHeader = styled.h2`
    padding-left: ${SPACERS.S};
    text-transform: uppercase;
`

export const StyledLink = styled(Link)`
    color: ${COLORS.PRIMARY_DARK};
    &:hover {
        text-decoration: underline;
    }
    transition: color 0.5s;
    .dark & {
        color: ${COLORS.SECONDARY};
    }
`

export const ButtonLabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const ButtonLabelIconBox = styled.div`
    line-height: 1px;
    font-size: ${FONT_SIZES.H2};
    padding-left: ${SPACERS.L};
    padding-right: ${SPACERS.L};
    padding-top: ${SPACERS.S};
    padding-bottom: ${SPACERS.S};
`
export const ButtonLabelBox = styled.div`
    align-self: center;
    font-size: ${FONT_SIZES.H4};
`

export const ButtonLabelBoxFull = styled.div`
    text-align: center;
`
