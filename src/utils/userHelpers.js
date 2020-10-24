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
