import styled from '@emotion/styled'
import { COLORS } from 'utils/styleHelpers'
import { MdAccountCircle } from 'react-icons/md'

export const AccountCircle = styled(MdAccountCircle)`
    width: 25px;
    height: 25px;
    color: ${COLORS.TOGGLE};
    transition: color 0.5s;
    .dark & {
        color: ${COLORS.PRIMARY};
    }
`
