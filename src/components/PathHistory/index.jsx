import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { PATH_HISTORY_STORAGE } from 'utils/constants'

export const PathHistoryLink = ({ to = '/login', text = 'Login', previousUrl = null, ...rest }) => {
    const setPreviousPage = () => {
        try {
            if (typeof window !== 'undefined' && previousUrl) {
                window.localStorage.setItem(PATH_HISTORY_STORAGE, previousUrl)
            }
        } catch (ex) {
            console.log(ex.message)
        }
    }
    return (
        <Link {...rest} to={to} onClick={setPreviousPage}>
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
    if (typeof window !== 'undefined') {
        if (typeof window.localStorage !== 'undefined') {
            const pathHistory = window.localStorage.getItem(PATH_HISTORY_STORAGE)
            if (pathHistory) {
                console.log('🚀 ~ file: index.jsx ~ line 34 ~ navigateToPathHistory ~ pathHistory', pathHistory)
                window.localStorage.removeItem(PATH_HISTORY_STORAGE)
                navigate(pathHistory)
                return
            }
            navigate(defaultNavigateUrl)
        } else {
            navigate(defaultNavigateUrl)
        }
    } else {
        navigate(defaultNavigateUrl)
    }
}

export function resetPathHistory() {
    window.localStorage.removeItem(PATH_HISTORY_STORAGE)
}

export function getPathHistory() {
    return window.localStorage.getItem(PATH_HISTORY_STORAGE)
}
