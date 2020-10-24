import styled from '@emotion/styled'
import { primaryButtonStyles } from '../styles'

const PrimaryButton = styled.button`
    ${({ color, fontSize, textColor, textColorDark }) =>
        primaryButtonStyles({ color, fontSize, textColorDark, textColor })}
`
export default PrimaryButton
