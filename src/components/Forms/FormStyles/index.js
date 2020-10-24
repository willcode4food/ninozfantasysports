import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { COLORS, SPACERS } from 'utils/styleHelpers'
import { css } from '@emotion/core'
import { AiFillWarning } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMail } from 'react-icons/hi'
import { MQ } from 'utils/styleHelpers'

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
    justify-content: space-around;
    ${MQ.L} {
        justify-content: center;
    }
    ${MQ.M} {
        justify-content: center;
    }
`
export const ButtonLabelIconBox = styled.div`
    flex-basis: 25%;
    ${MQ.L} {
        flex-basis: 10%;
    }
    ${MQ.M} {
        flex-basis: 10%;
    }
`
export const ButtonLabelBox = styled.div`
    flex-basis: 75%;
    text-align: left;
    ${MQ.L} {
        text-align: center;
        flex-basis: 25%;
    }
    ${MQ.M} {
        text-align: center;
        flex-basis: 30%;
    }
`

export const ButtonLabelBoxFull = styled.div`
    text-align: center;
`
