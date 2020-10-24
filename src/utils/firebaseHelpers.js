import { FIREBASE } from 'utils/constants'

export function getStorageImagePublicUrl(imageUrl) {
    if (!imageUrl || typeof imageUrl === undefined) {
        return null
    }
    return `${FIREBASE.STORAGE.BASE_URL}/${FIREBASE.STORAGE.PROFILE_IMG_FOLDER}%2F${imageUrl}?alt=media`
}
