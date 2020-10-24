import React from 'react'
import PropTypes from 'prop-types'
import { SignOutButton } from 'components/SignOutForm'
import { PathHistoryLink } from 'components/PathHistory'
import { NavWrapper, NavBox } from './styles'

const UserMenu = ({ uid, pathname }) => {
    return (
        <NavWrapper>
            <NavBox>
                {!uid ? <PathHistoryLink previousUrl={pathname} to="/login" text="Login" /> : <SignOutButton />}
            </NavBox>
        </NavWrapper>
    )
}

UserMenu.propTypes = {
    pathname: PropTypes.string,
    uid: PropTypes.string,
}

export default UserMenu
