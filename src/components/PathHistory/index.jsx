import React from 'react'
import PropTypes from 'prop-types'
import { PATH_HISTORY_STORAGE } from 'utils/constants'
import { Link, navigate } from 'gatsby'

export const PathHistoryLink = ({ to = '/login', text = 'Login' }) => {
    const setPreviousPage = () => {
        const { previousUrl } = this.props
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(PATH_HISTORY_STORAGE, previousUrl)
            }
        } catch (ex) {
            console.log(ex.message)
        }
    }
    return (
        <Link to={to} onClick={setPreviousPage}>
            {text}
        </Link>
    )
}

PathHistoryLink.propTypes = {
    previousUrl: PropTypes.string,
    to: PropTypes.string,
    text: PropTypes.string,
}

export function navigateToPathHistory(defaultNavigateUrl = '/') {
    console.log('navigateToPathHistory -> defaultNavigateUrl', defaultNavigateUrl)
    if (typeof window !== 'undefined') {
        if (typeof window.localStorage !== 'undefined') {
            const pathHistory = window.localStorage.getItem(PATH_HISTORY_STORAGE)
            if (pathHistory) {
                window.localStorage.removeItem(PATH_HISTORY_STORAGE)
                navigate(pathHistory)
            }
            navigate(defaultNavigateUrl)
        } else {
            navigate(defaultNavigateUrl)
        }
    } else {
        navigate(defaultNavigateUrl)
    }
}
