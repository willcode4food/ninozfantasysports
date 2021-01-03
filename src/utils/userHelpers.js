export const getInitials = ({ prefersUsername, username, firstName, lastName }) => {
    if (prefersUsername && !username) {
        return 'N/A'
    }
    if (!prefersUsername && !(firstName && lastName)) {
        return 'N/A'
    }
    return prefersUsername
        ? username.substring(0, 2).toUpperCase()
        : `${firstName.substring(0, 1).toUpperCase()}${lastName.substring(0, 1).toUpperCase()}`
}

export const getAvatarThemeIndex = () => Math.floor(Math.random() * 3) + 0
export function getDefaultAvatarIndex() {
    try {
        const index = document.getElementsByName('defaultAvatarThemeIndex')[0]
        return parseInt(index.value)
    } catch (e) {
        return 0
    }
}
export const defaultUserRegFields = {
    defaultAvatarThemeIndex: getDefaultAvatarIndex(),
    profileImageName: '',
    city: '',
    state: '',
    zip: '',
}
