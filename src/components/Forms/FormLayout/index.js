import styled from '@emotion/styled'
import { SPACERS, MQ } from 'utils/styleHelpers'

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${SPACERS.M};
    width: 100%;
`
export const FormWrapperBox = styled.div`
    width: 80%;
    ${MQ.L} {
        width: 40%;
    }
`

export const FormFlex = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
    justify-content: center;
    width: 100%;
`

export const FormFlexInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const FormFlexInnerBox = styled.div`
    padding-top: ${SPACERS.S};
    padding-bottom: ${SPACERS.S};
    width: 100%;
`
export const FormFlexInnerColumn = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const FormBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin-left: ${({ marginLeft = SPACERS.S }) => marginLeft};
    margin-right: ${({ marginRight = SPACERS.S }) => marginRight};
    margin-top: ${({ marginTop = SPACERS.S }) => marginTop};
    margin-bottom: ${({ marginBottom = SPACERS.S }) => marginBottom};
`
export const FormBoxCenter = styled.div`
    width: 100%;
    text-align: center;
`
