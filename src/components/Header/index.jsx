import React, { useContext } from 'react'
import { func, bool, object } from 'prop-types'
import { Link } from 'gatsby'
import UserMenu from 'components/UserMenu'
import Logo from './Logo'
import AccountLink from 'components/AccountLink'
import HamburgerArrow from './HamburgerArrow'
import ThemeToggle from 'components/ThemeToggle'
import SessionContext from 'context/SessionContext'
import useBreakpointDetector from 'hooks/useBreakpointDetector'
import {
    StickyNav,
    HeaderBar,
    LogoWrapper,
    HeaderBox,
    HeaderCenterWrapper,
    HeaderIconBoxCentered,
    HeaderIconBox,
} from './styles'

const Header = ({ resetDrawer, location, isShowingAccountLink = false, toggleNav }) => {
    const { uid, sessionID } = useContext(SessionContext)
    const { isLarge } = useBreakpointDetector()
    return (
        <StickyNav id="headerBar">
            <div>
                <HeaderBar>
                    <HeaderBox>
                        <span>
                            <HamburgerArrow onClick={toggleNav} />
                        </span>
                    </HeaderBox>
                    <HeaderBox onClick={resetDrawer}>
                        <LogoWrapper>
                            <Link to="/">
                                <Logo width={isLarge ? '100%' : '200px'} />
                            </Link>
                        </LogoWrapper>
                    </HeaderBox>
                    <HeaderBox>
                        <span>
                            <HeaderCenterWrapper>
                                {isShowingAccountLink && (
                                    <HeaderIconBoxCentered>
                                        <AccountLink />
                                    </HeaderIconBoxCentered>
                                )}
                                <HeaderIconBox>
                                    <ThemeToggle />
                                </HeaderIconBox>
                                {sessionID && (
                                    <HeaderIconBox>
                                        <UserMenu sessionID={sessionID} uid={uid} pathname={location.pathname} />
                                    </HeaderIconBox>
                                )}
                            </HeaderCenterWrapper>
                        </span>
                    </HeaderBox>
                </HeaderBar>
            </div>
        </StickyNav>
    )
}

Header.propTypes = {
    isDisplayingSearch: bool,
    isShowingAccountLink: bool,
    location: object,
    resetDrawer: func,
    toggleNav: func,
    toggleSearch: func,
}

export default Header
