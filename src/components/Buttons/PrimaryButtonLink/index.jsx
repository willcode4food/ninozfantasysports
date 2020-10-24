import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { primaryButtonStyles } from '../styles'

const PrimaryButtonLink = styled(Link)`
    ${({ color, fontSize, textColor, textColorDark }) =>
        primaryButtonStyles({ color, fontSize, textColorDark, textColor })}
`

export default PrimaryButtonLink
