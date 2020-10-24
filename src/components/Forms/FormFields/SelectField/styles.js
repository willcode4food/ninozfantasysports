import styled from '@emotion/styled'
import { COLORS } from 'utils/styleHelpers'

export const SelectFieldStyle = styled.select`
    padding-left: 10px;
    padding-right: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: ${COLORS.PRIMARY_DARK};
    background-color: transparent;
    width: 100%;
    box-shadow: ${COLORS.TOGGLE} 0px 0px 0px 1px inset;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    -webkit-appearance: none;
    margin: 0px;
    border-radius: 4px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
    padding-top: 13px;
	padding-bottom: 13px;
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
    .dark & {
        color:  ${COLORS.PRIMARY};
    }
}
`
