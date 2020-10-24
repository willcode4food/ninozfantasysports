import { bool, func, string } from 'prop-types'
import React, { useContext } from 'react'
import track, { TrackingPropType } from 'react-tracking'
import { Link } from 'gatsby'
import SessionContext from 'context/SessionContext'
import { PathHistoryLink } from 'components/PathHistory'
import { SignOutButton } from 'components/SignOutForm'
import { stampTime, eventDispatch } from 'utils/tracker'

import { Drawer, NavWrapper } from './styles'

function NavDrawer({ isNavOpen, pathname, resetState }) {
    const { sessionId, uid } = useContext(SessionContext)
    return (
        <Drawer open={isNavOpen}>
            {sessionId && (
                <NavWrapper onClick={resetState}>
                    <Link to="/">Home</Link>
                    {uid && <Link to="/account">My Account</Link>}
                    {!uid && <PathHistoryLink previousUrl={pathname} />}
                    {!uid && <PathHistoryLink previousUrl={pathname} to="/register" text="Create an Account" />}
                    {uid && <SignOutButton />}
                </NavWrapper>
            )}
        </Drawer>
    )
}
NavDrawer.propTypes = {
    isNavOpen: bool,
    isShowingBreadcrumbs: bool,
    pathname: string,
    resetState: func,
    tracking: TrackingPropType,
}

export default track({ timestamp: stampTime() }, { dispatch: (data) => eventDispatch(data) })(NavDrawer)
