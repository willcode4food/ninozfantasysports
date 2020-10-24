import styled from '@emotion/styled'
import { COLORS } from 'utils/styleHelpers'

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 43px;
    height: 24px;
    &input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`
export const SwitchSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    border-radius: 34px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    .dark & {
        background: ${COLORS.PRIMARY_DARK};
        border: solid 1px ${COLORS.PRIMARY};
    }
    &:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background: ${COLORS.PRIMARY};
        border-radius: 50%;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        .dark & {
            bottom: 3px;
        }
    }
`
export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
        background: ${COLORS.SECONDARY};
        .dark & {
            border: 1px solid ${COLORS.SECONDARY};
        }
    }
    &:focus + span {
        box-shadow: 0 0 1px #2196f3;
    }
    &:checked + span:before {
        transform: translateX(19px);
    }
`
