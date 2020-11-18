import React from 'react'
import PropTypes from 'prop-types'
import Hero from 'components/Hero'
import {
    FrontDoorWrapper,
    ContentBoxCta,
    ContentBanner,
    ContentBannerBox,
    ContentBannerButtonBox,
    ContentBannerButtonWrapper,
    ContentBannerMessage,
    ContentBannerWrapper,
    ContentValueProp,
    ContentValuePropBox,
    ContentValuePropContent,
    ContentValuePropHeader,
    ContentValuePropHorizontal,
} from './styles'
import { COLORS, FONT_SIZES } from 'utils/styleHelpers'
import { PrimaryButtonLink } from 'components/Buttons'

import { PrimaryButtonAnchor } from 'components/Buttons'
import GameDayImage from 'components/GameDayImage'

function FrontDoor() {
    return (
        <>
            <Hero />
            <FrontDoorWrapper>
                <ContentBoxCta color={COLORS.PRIMARY} isHidden={[false, false]}>
                    <ContentValuePropHorizontal>
                        <ContentValuePropHeader>
                            <PrimaryButtonLink
                                color={COLORS.PRIMARY_BUTTON}
                                textcolor={COLORS.PRIMARY}
                                to="/dispensaries"
                            >
                                Join the Fantasy Golf League
                            </PrimaryButtonLink>
                        </ContentValuePropHeader>
                        <ContentValuePropBox>
                            <GameDayImage />
                        </ContentValuePropBox>
                    </ContentValuePropHorizontal>
                </ContentBoxCta>
                <ContentBoxCta color={COLORS.TERNARY} darkColor={COLORS.TERNARY_DARK} isHidden={[false, false]}>
                    <ContentValueProp>
                        <ContentValuePropHeader>Do you like being awesome?</ContentValuePropHeader>
                        <ContentValuePropContent>Let&apos;s be awesome together</ContentValuePropContent>
                        <ContentValuePropBox>
                            <PrimaryButtonLink
                                color={COLORS.PRIMARY_BUTTON}
                                textcolor={COLORS.PRIMARY}
                                to="/dispensaries"
                            >
                                Step into Awesomeness
                            </PrimaryButtonLink>
                        </ContentValuePropBox>
                    </ContentValueProp>
                </ContentBoxCta>
                <ContentBanner>
                    <ContentBannerWrapper>
                        <ContentBannerBox>
                            <ContentBannerMessage>Find out how you can be even more awesome!</ContentBannerMessage>
                        </ContentBannerBox>
                        <ContentBannerBox>
                            <ContentBannerButtonWrapper>
                                <ContentBannerButtonBox>
                                    <PrimaryButtonLink
                                        color={COLORS.PRIMARY_BUTTON}
                                        textcolor={COLORS.PRIMARY}
                                        to={'/register'}
                                        state={{ activeTabIndex: 2 }}
                                        fontSize={FONT_SIZES.H4}
                                        paddingx={'40px'}
                                    >
                                        Sign Up
                                    </PrimaryButtonLink>
                                </ContentBannerButtonBox>
                                <ContentBannerButtonBox>
                                    <PrimaryButtonAnchor
                                        color={COLORS.SECONDARY_DARK}
                                        textcolor={COLORS.PRIMARY}
                                        href={'mailto:sales@weedrater.com'}
                                        state={{ activeTabIndex: 2 }}
                                        fontSize={FONT_SIZES.H4}
                                        paddingx={'40px'}
                                    >
                                        Advertise
                                    </PrimaryButtonAnchor>
                                </ContentBannerButtonBox>
                            </ContentBannerButtonWrapper>
                        </ContentBannerBox>
                    </ContentBannerWrapper>
                </ContentBanner>
            </FrontDoorWrapper>
        </>
    )
}

FrontDoor.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
}

export default FrontDoor
