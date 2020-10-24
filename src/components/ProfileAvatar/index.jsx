import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from 'components/Avatar'
import { PROFILE_IMAGE_SIZE, DEFAULT_AVATAR_SIZE } from 'utils/constants'
import { getStorageImagePublicUrl } from 'utils/firebaseHelpers'
import { DefaultAvatarWrapper, DefaultAvatarCircle, DefaultAvatarInitials, DefaultAvatarBox } from './styles'
// See https://codepen.io/AllThingsSmitty/pen/dWmmQp
function ProfileAvatar({
    alt = 'Member Avater',
    defaultAvatarThemeIndex = 3,
    displayText,
    circleHeight = DEFAULT_AVATAR_SIZE,
    initialsHeight = DEFAULT_AVATAR_SIZE,
    imageFileName,
    profileImageSize = PROFILE_IMAGE_SIZE,
    width = DEFAULT_AVATAR_SIZE,
}) {
    const [imageUrl, setImageUrl] = useState(null)
    const [caption, setCaption] = useState('')
    const [imageHash] = useState(Date.now())

    useEffect(() => {
        setImageUrl(imageFileName)
        setCaption(displayText)
    }, [])

    return (
        <>
            {imageUrl ? (
                <DefaultAvatarWrapper>
                    <Avatar
                        size={[profileImageSize, profileImageSize]}
                        //
                        src={`${getStorageImagePublicUrl(imageUrl)}&bust=${imageHash}`}
                        alt={alt}
                    />
                </DefaultAvatarWrapper>
            ) : (
                <DefaultAvatarWrapper>
                    <DefaultAvatarBox>
                        <DefaultAvatarCircle
                            circleHeight={circleHeight}
                            themeIndex={defaultAvatarThemeIndex}
                            width={width}
                        >
                            <DefaultAvatarInitials
                                initialsHeight={initialsHeight}
                                themeIndex={defaultAvatarThemeIndex}
                                width={width}
                            >
                                {caption}
                            </DefaultAvatarInitials>
                        </DefaultAvatarCircle>
                    </DefaultAvatarBox>
                </DefaultAvatarWrapper>
            )}
        </>
    )
}

ProfileAvatar.propTypes = {
    alt: PropTypes.string,
    defaultAvatarThemeIndex: PropTypes.number,
    displayText: PropTypes.string.isRequired,
    circleHeight: PropTypes.string,
    initialsHeight: PropTypes.string,
    imageFileName: PropTypes.string,
    profileImageSize: PropTypes.number,
    width: PropTypes.string,
}
export default ProfileAvatar
