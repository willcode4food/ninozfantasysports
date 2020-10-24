import styled from '@emotion/styled'
import { SPACERS, MQ } from 'utils/styleHelpers'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    ${MQ.L} {
        justify-content: flex-start;
    }
    ${MQ.M} {
        justify-content: space-evenly;
    }
`

export const SocialLink = styled.a`
    color: #fff;
    font-size: 35px;
    transition: 0.3s;
    margin-right: ${SPACERS.M};
    &:hover {
        color: #016f41;
    }
`
