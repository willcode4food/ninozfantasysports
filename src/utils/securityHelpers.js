import { USER_ROLES } from 'utils/constants'

export const authConditionReviewer = (authUser, roles) => {
    if (!roles) {
        return false
    }
    return roles.filter((r) => r === 'reviewer').length > 0
}

export const authConditionIsUser = (authUser) => {
    return !!authUser.uid
}

export const authConditionIsAdmin = (authUser, roles) => {
    if (!roles) {
        return false
    }
    return roles.filter((r) => r === USER_ROLES.ADMIN).length > 0
}

export const emailFormatRegex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const passwordFormatRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/
