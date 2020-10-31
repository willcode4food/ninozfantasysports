import React, { useState, useRef, useContext, useEffect } from 'react'
import SessionContext from 'context/SessionContext'
import { useForm } from 'react-hook-form'
import AvatarEditor from 'react-avatar-editor'
import { InputField, SliderField, StandardSubmitButton, StateSelectField, FileField } from 'components/Forms/FormFields'
import Loader from 'components/Loader'
import ProfileAvatar from 'components/ProfileAvatar'
import {
    FormBox,
    FormBoxCenter,
    FormFlex,
    FormFlexInner,
    FormWrapper,
    FormWrapperBox,
    FormFlexInnerBox,
} from 'components/Forms/FormLayout'

import {
    AvatarEditorBox,
    ImageEditorControlsWrapper,
    ImageEditorControlsBox,
    ImageEditorControlsCenterBox,
} from './styles'

import RotateLeftIcon from 'components/RotateLeftIcon'
import RotateRightIcon from 'components/RotateRightIcon'
import { ErrorMessage, FormHeader, ErrorIcon } from 'components/Forms/FormStyles'
import { FIREBASE, LOGIN_PROVIDER, PROFILE_IMAGE_SIZE, ACCEPTED_IMAGE_FORMATS } from 'utils/constants'
import useFirestoreDocument from 'hooks/firebase/useFirestoreDocument'
import useFirebaseApp from 'hooks/firebase/useFirebaseApp'
import { getInitials } from 'utils/userHelpers'

function AccountProfileForm() {
    const { register, handleSubmit, errors, watch } = useForm()
    const [isEditingAvatar, setIsEditingAvatar] = useState(false)
    const [profileImageBuffer, setProfileImageBuffer] = useState(null)
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [accountProfileFormError, setAccountProfileFormError] = useState(null)
    const editor = useRef(null)
    const { authUser } = useContext(SessionContext)
    const { storage } = useFirebaseApp({ firebaseConfig: FIREBASE.CONFIG })
    const { document, isFirestoreLoading, updateDocument, firestoreError } = useFirestoreDocument({
        firebaseConfig: FIREBASE.CONFIG,
        collection: 'users',
        docId: authUser.uid,
    })
    useEffect(() => {
        if (document && (!document.username || document.username === '')) {
            setAccountProfileFormError({ message: 'Please give yourself a unique username' })
        }
    }, [document])
    useEffect(() => {
        setAccountProfileFormError(firestoreError)
    }, [firestoreError])

    function isLoginProviderEmail() {
        return document && document.loginProvider === LOGIN_PROVIDER.EMAIL
    }
    const onScale = (event) => {
        setScale(parseFloat(event.target.value))
    }

    const onSubmit = async (data) => {
        // eslint-disable-next-line no-unused-vars
        const { confirmPassword, ...userData } = data
        const imageUrlFromSave = await handleEditedImage()
        setAccountProfileFormError(null)
        await updateDocument({ ...userData, profileImageName: imageUrlFromSave })
    }
    const onFileChanged = (event) => {
        setAccountProfileFormError(null)
        const profileImageName = event.target.files[0].name
        const isValidImageFile = ACCEPTED_IMAGE_FORMATS.filter((type) => {
            return profileImageName.indexOf(type) !== -1
        })
        if (isValidImageFile.length === 0) {
            // is not a valid file extension (.jpg, jpeg, png)
            setAccountProfileFormError({ message: 'Make sure your photo is a JPG, PNG or GIF' })
            return
        }
        setProfileImageBuffer(event.target.files[0])
        setIsEditingAvatar(true)
    }
    const onRotateLeft = () => {
        setRotate(rotate - 90)
    }

    const onRotateRight = () => {
        setRotate(rotate + 90)
    }
    async function handleEditedImage() {
        const { uid } = authUser
        let imagePath = ''

        if (profileImageBuffer) {
            // send photo to Google Cloud Storage
            try {
                const imgObj = editor.current.getImageScaledToCanvas()
                const imgBlob = await new Promise((resolve) => {
                    imgObj.toBlob((blob) => resolve(blob), 'image/png', 0.95)
                })

                const storageRef = storage.ref()
                imagePath = `${FIREBASE.STORAGE.PROFILE_IMG_FOLDER}/${uid}.png`
                const profileImageRef = storageRef.child(imagePath)
                await profileImageRef.put(imgBlob)
                // setProfileImageUrl(`${FIREBASE.STORAGE.BASE_URL}/${imagePath}`)
            } catch (error) {
                // eslint-disable-next-line
                setAccountProfileFormError(error)
                setIsEditingAvatar(false)
            }
            setIsEditingAvatar(false)
            return profileImageBuffer ? `${uid}.png` : null
        }
        return
    }
    return (
        <>
            {isFirestoreLoading || !document || typeof document === undefined ? (
                <Loader />
            ) : (
                <FormWrapper>
                    <FormWrapperBox>
                        <FormHeader>Account</FormHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormFlex>
                                {accountProfileFormError && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>{accountProfileFormError.message}</ErrorMessage>
                                    </FormBox>
                                )}
                                {isEditingAvatar && (
                                    <>
                                        <AvatarEditorBox>
                                            <AvatarEditor
                                                ref={editor}
                                                border={50}
                                                borderRadius={999}
                                                color={[4, 50, 56, 0.6]}
                                                height={PROFILE_IMAGE_SIZE}
                                                image={profileImageBuffer}
                                                rotate={parseFloat(rotate)} // RGBA
                                                scale={parseFloat(scale)}
                                                width={PROFILE_IMAGE_SIZE}
                                            />
                                        </AvatarEditorBox>
                                        <FormBox>
                                            <ImageEditorControlsWrapper>
                                                <ImageEditorControlsBox onClick={onRotateLeft} onKeyDown={onRotateLeft}>
                                                    <RotateLeftIcon height={30} tabIndex={-1} width={30} />
                                                </ImageEditorControlsBox>
                                                <ImageEditorControlsCenterBox>
                                                    <SliderField
                                                        defaultValue={1}
                                                        max="2"
                                                        min="0.1"
                                                        onChange={onScale}
                                                        step="0.01"
                                                        tabIndex={-1}
                                                        width={[1]}
                                                        type="range"
                                                    ></SliderField>
                                                </ImageEditorControlsCenterBox>
                                                <ImageEditorControlsBox
                                                    onClick={onRotateRight}
                                                    onKeyDown={onRotateRight}
                                                >
                                                    <RotateRightIcon height={30} tabIndex={-1} width={30} />
                                                </ImageEditorControlsBox>
                                            </ImageEditorControlsWrapper>
                                        </FormBox>
                                    </>
                                )}
                                <FormBox>
                                    {!isEditingAvatar && (
                                        <ProfileAvatar
                                            key={authUser.uid}
                                            imageFileName={document && document.profileImageName}
                                            defaultAvatarThemeIndex={
                                                document &&
                                                document.defaultAvatarThemeIndex &&
                                                document.defaultAvatarThemeIndex
                                            }
                                            displayText={getInitials({
                                                username: document && document.username,
                                                firstName: document && document.firstName,
                                                lastName: document && document.lastName,
                                            })}
                                            // imageFileURL={profileImageUrl}
                                        />
                                    )}
                                </FormBox>
                                <FormBox>
                                    {!isEditingAvatar && (
                                        <FormBoxCenter>
                                            <FileField onChange={onFileChanged} tabIndex={-1} />
                                        </FormBoxCenter>
                                    )}
                                </FormBox>
                                <FormBox>
                                    <InputField
                                        register={register({ required: true, minLength: 2 })}
                                        name="username"
                                        placeholder="Username"
                                        type="text"
                                        aria-label="Username"
                                        defaultValue={document && document.username}
                                    />
                                </FormBox>
                                {errors.username && errors.username.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please enter a valid username</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors.username && errors.username.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Usernames must be at least 2 characters long</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="firstName"
                                        placeholder="First Name"
                                        register={register({ required: true, minLength: 2 })}
                                        type="text"
                                        aria-label="First Name"
                                        defaultValue={document && document.firstName}
                                    />
                                </FormBox>
                                {errors.firstName && errors.firstName.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>First Name is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors.firstName && errors.firstName.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>First name must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="lastName"
                                        placeholder="Last Name"
                                        register={register({ required: true, minLength: 2 })}
                                        type="text"
                                        aria-label="Last Name"
                                        defaultValue={document && document.lastName}
                                    />
                                </FormBox>
                                {errors.lastName && errors.lastName.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Last Name is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors.lastName && errors.lastName.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Last name must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="city"
                                        placeholder="City"
                                        register={register({ minLength: 2 })}
                                        type="text"
                                        aria-label="City"
                                        defaultValue={document && document.city}
                                    />
                                </FormBox>
                                {errors.lastName && errors.lastName.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>City must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <StateSelectField
                                        name="state"
                                        aria-label="state"
                                        register={register}
                                        defaultValue={document && document.state}
                                    />
                                </FormBox>
                                {errors.lastName && errors.lastName.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>City must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}

                                {document && isLoginProviderEmail() && (
                                    <FormBox>
                                        <InputField
                                            register={register}
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            aria-label="Password"
                                        />
                                    </FormBox>
                                )}
                                {document && isLoginProviderEmail() && (
                                    <FormBox>
                                        <InputField
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            register={register({ validate: (value) => value === watch('password') })}
                                            type="password"
                                            aria-label="Confirm Password"
                                        />
                                    </FormBox>
                                )}
                                {isLoginProviderEmail() &&
                                    errors.confirmPassword &&
                                    errors.confirmPassword.type === 'validate' && (
                                        <FormBox>
                                            <ErrorIcon />
                                            <ErrorMessage>Password and confirmation do not match</ErrorMessage>
                                        </FormBox>
                                    )}
                                <FormBox>
                                    <FormFlexInner>
                                        <FormFlexInnerBox>
                                            <StandardSubmitButton text="Save Profile" />
                                        </FormFlexInnerBox>
                                    </FormFlexInner>
                                </FormBox>
                            </FormFlex>
                        </form>
                    </FormWrapperBox>
                </FormWrapper>
            )}
        </>
    )
}

export default AccountProfileForm
