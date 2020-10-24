import styled from '@emotion/styled'
import { primaryButtonStyles } from '../styles'

export const PrimaryButtonAnchor = styled.a`
    ${({ color, fontSize, textColor, textColorDark }) =>
        primaryButtonStyles({ color, fontSize, textColorDark, textColor })}
`
export default PrimaryButtonAnchor
