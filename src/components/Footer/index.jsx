import React from 'react'
import { Link } from 'gatsby'
import { COLORS } from 'utils/styleHelpers'
import SocialLinks from 'components/SocialLinks'
import Logo from 'components/Header/Logo'
import useBreakpointDetector from 'hooks/useBreakpointDetector'

import {
    CopyrightText,
    FooterContentWrapper,
    FooterContentBoxLogo,
    FooterContentBoxTermsAndPolicy,
    FooterContentCopyrightWrapper,
    FooterLogoWrapper,
    FooterSocialLinksMobileWrapper,
    FooterSocialLinksWrapper,
    FooterWrapper,
    FooterWrapperBox,
} from './styles'

const Footer = () => {
    const { isSmall, isLarge } = useBreakpointDetector()

    return (
        <FooterWrapper>
            <FooterWrapperBox>
                <FooterContentWrapper>
                    <FooterContentBoxLogo>
                        <FooterLogoWrapper>
                            <Logo color={COLORS.PRIMARY} textColor={COLORS.PRIMARY} />
                        </FooterLogoWrapper>
                    </FooterContentBoxLogo>
                    <FooterSocialLinksWrapper>{isLarge && <SocialLinks />}</FooterSocialLinksWrapper>
                    <FooterContentBoxTermsAndPolicy>
                        <Link to="/tos"> Terms of Use</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
                    </FooterContentBoxTermsAndPolicy>
                    <div>
                        <FooterContentCopyrightWrapper>
                            {isSmall && (
                                <FooterSocialLinksMobileWrapper>
                                    <SocialLinks />
                                </FooterSocialLinksMobileWrapper>
                            )}
                            <div>
                                <CopyrightText>Copyright 2020 All Rights Researved</CopyrightText>
                            </div>
                        </FooterContentCopyrightWrapper>
                    </div>
                </FooterContentWrapper>
            </FooterWrapperBox>
        </FooterWrapper>
    )
}

export default Footer
