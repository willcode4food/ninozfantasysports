import styled from '@emotion/styled'

import { COLORS, shadeColor2 } from 'utils/styleHelpers'

const SliderField = styled.input`
    -webkit-appearance: none;
    margin: 8px 0;
    width: 100%;
    &:focus {
        outline: none;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: ${({ runnerColor }) => (runnerColor ? shadeColor2(runnerColor, -0.1) : COLORS.TERNARY)};
        border-radius: 2px;
        border: 1px solid ${({ runnerColor }) => (runnerColor ? shadeColor2(runnerColor, -0.1) : COLORS.TERNARY)};
    }
    &::-webkit-slider-thumb {
        height: 25px;
        width: 25px;
        border: 1px solid ${({ thumbColor }) => thumbColor || COLORS.SECONDARY};
        border-radius: 20px;
        background: ${({ thumbColor }) => thumbColor || COLORS.SECONDARY};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -12px;
    }
    &:focus::-webkit-slider-runnable-track {
        background: #367ebd;
    }
    &::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        animate: 0.2s;
        background: ${COLORS.GRAY};
        border-radius: 1.3px;
        border: 1px solid ${COLORS.GRAY};
    }
    &::-moz-range-thumb {
        height: 36px;
        width: 16px;
        border: 1px solid ${COLORS.WHITE};
        border-radius: 5px;
        background: ${COLORS.BLACK};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -14px;
    }
    &::-ms-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        animate: 0.2s;
        background: ${COLORS.GRAY};
        border-radius: 1.3px;
        border: 1px solid ${COLORS.GRAY};
    }
    &::-ms-fill-lower {
        background: #2a6495;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &::-ms-fill-upper {
        background: #3071a9;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &::-ms-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }
    &:focus::-ms-fill-lower {
        background: #3071a9;
    }
    &:focus::-ms-fill-upper {
        background: #367ebd;
    }
`

export default SliderField
