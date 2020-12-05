import React from 'react'
import { HeroWrapper, WelcomeMessageWrapper, WelcomeMessageTitle, WelcomeMessageSubTitle } from './styles'

function Hero() {
    return (
        <HeroWrapper>
            <WelcomeMessageWrapper>
                <WelcomeMessageTitle>Welcome</WelcomeMessageTitle>
                <WelcomeMessageSubTitle>To Ninoz Fantasy Sports!</WelcomeMessageSubTitle>
            </WelcomeMessageWrapper>
        </HeroWrapper>
    )
}
export default Hero
