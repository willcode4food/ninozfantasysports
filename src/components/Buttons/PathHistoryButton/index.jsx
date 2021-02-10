import styled from '@emotion/styled'
import { primaryButtonStyles } from '../styles'
import { PathHistoryLink } from 'components/PathHistory'
import { FONT_SIZES, SPACERS } from 'utils/styleHelpers'

const PathHistoryButton = styled(PathHistoryLink)`
    ${({ color, fontSize, textColor, textColorDark }) =>
        primaryButtonStyles({ color, fontSize, textColorDark, textColor })}
    width: 30px;
    text-align: center;
    font-size: ${FONT_SIZES.H4};
    margin-left: ${SPACERS.M};
    margin-right: ${SPACERS.M};
`

export default PathHistoryButton
