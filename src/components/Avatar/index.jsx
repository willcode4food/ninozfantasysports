import styled from '@emotion/styled'
import { AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE } from 'utils/constants'
import { MQ } from 'utils/styleHelpers'

const Avatar = styled.img`
    vertical-align: middle;
    width: ${({ size = [AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE] }) => size[0]}px;
    height: ${({ size = [AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE] }) => size[0]}px;
    margin-bottom: 0;
    border-radius: 50%;
    ${MQ.L} {
        width: ${({ size = [AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE] }) => size[2]}px;
        height: ${({ size = [AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE] }) => size[2]}px;
    }
    ${MQ.M} {
        width: ${({ size = [AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE] }) => size[1]}px;
        height: ${({ size = [AVATAR_IMAGE_SIZE, AVATAR_IMAGE_SIZE_MEDIUM, AVATAR_IMAGE_SIZE_LARGE] }) => size[1]}px;
    }
`
export default Avatar
