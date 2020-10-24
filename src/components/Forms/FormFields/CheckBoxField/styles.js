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
    display: block;
    margin: 5px 10px;
    padding: 5px 10px;
    width: 25px;
    height: 25px;
    &:after {
        content: '✓';
        font-size: 25px;
        color: ${COLORS.SECONDARY};
    }
    &:before {
        content: '';
    }
`

export const CheckBoxStyle = styled.input`
    position: absolute;
    left: -9999px;
    &:checked + label {
        color: red;
    }
`
