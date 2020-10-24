import styled from '@emotion/styled'
import { COLORS, MQ } from 'utils/styleHelpers'

export const HeroWrapper = styled.div`
    align-items: center;
    display: flex;
    background-color: ${COLORS.SECONDARY};
    background-image: url(/images/front-door-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    padding: 50px 15px;
    position: relative;
    text-align: center;
    min-height: 450px;
    ${MQ.L} {
        padding: 50px 30px;
    }
`
export const SearchPositionCentered = styled.div`
    width: 100%;
`
export const WelcomeMessageWrapper = styled.div`
    color: #fff;
    margin-bottom: 20px;
`
export const WelcomeMessageTitle = styled.h1`
    border: none;
    font-size: 5rem;
    margin-top: 0px;
`
export const WelcomeMessageSubTitle = styled.h3`
    border: none;
    font-size: 3rem;
    margin-top: 0px;
`
