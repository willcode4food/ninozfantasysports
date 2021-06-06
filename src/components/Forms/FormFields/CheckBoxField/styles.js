import styled from '@emotion/styled'
import { COLORS } from 'utils/styleHelpers'

export const CheckBoxContainer = styled.label`
    appearence: button;
    background-color: ${(
        props = { isChecked: false, backgroundColor: COLORS.PRIMARY, backgroundColorOff: COLORS.SECONDARY }
    ) => (props.isChecked ? props.backgroundColor : props.backgroundColorOff)};
    border: 1px solid ${(props = { backgroundColor: COLORS.PRIMARY }) => props.backgroundColor};
    border-radius: 1px;
    cursor: pointer;
    display: inline;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 9px;
    margin-right: 9px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-right: 3px;
    padding-left: 3px;
    width: 2px;
    height: 25px;

    &:after {
        content: ${({ isChecked }) => (isChecked ? "'✓'" : '&nbsp;')};
        font-size: 20px;
        color: ${COLORS.SECONDARY};
    }
`

export const CheckBoxStyle = styled.input`
    position: absolute;
    left: -9999px;
    &:checked + label {
        color: red;
    }
`
