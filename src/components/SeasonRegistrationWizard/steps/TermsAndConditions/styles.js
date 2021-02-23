import styled from '@emotion/styled'
import { COLORS, MQ } from 'utils/styleHelpers'

export const TermsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const TermsBox = styled.div`
    padding-top: ${({ paddingTop }) => paddingTop || '0px'};
`

export const TermsScollBox = styled.div`
    height: 400px;
    overflow: scroll;
    border: 1px solid #ccc;
    margin: 5px 0;
    padding: 10px 20px;
    ${MQ.L} {
        width: 850px;
        height: 400px;
    }
`
export const TermsScollStyles = styled.span`
    color: ${COLORS.PRIMARY_DARK};
    transition: color 0.5s;
    .dark & {
        color: ${COLORS.PRIMARY};
    }
`
