import { gql, useMutation, useQuery } from '@apollo/client'
import { FileField, InputField, SliderField, StandardSubmitButton, StateSelectField } from 'components/Forms/FormFields'
import {
    FormBox,
    FormBoxCenter,
    FormFlex,
    FormFlexInner,
    FormFlexInnerBox,
    FormWrapper,
    FormWrapperBox,
} from 'components/Forms/FormLayout'
import { ErrorIcon, ErrorMessage, FormHeader } from 'components/Forms/FormStyles'
import Loader from 'components/Loader'
import ProfileAvatar from 'components/ProfileAvatar'
import RotateLeftIcon from 'components/RotateLeftIcon'
import RotateRightIcon from 'components/RotateRightIcon'
import SessionContext from 'context/SessionContext'
import useFirebaseApp from 'hooks/firebase/useFirebaseApp'
import useFirebaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'
import React, { useContext, useEffect, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useForm } from 'react-hook-form'
import { ACCEPTED_IMAGE_FORMATS, FIREBASE, LOGIN_PROVIDER, PROFILE_IMAGE_SIZE } from 'utils/constants'
import { getInitials } from 'utils/userHelpers'

import {
    AvatarEditorBox,
    ImageEditorControlsBox,
    ImageEditorControlsCenterBox,
    ImageEditorControlsWrapper,
} from './styles'

function AccountProfileForm() {
    const { register, handleSubmit, errors, watch, reset } = useForm()
    const [isEditingAvatar, setIsEditingAvatar] = useState(false)
    const [profileImageBuffer, setProfileImageBuffer] = useState(null)
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [accountProfileFormError, setAccountProfileFormError] = useState(null)
    const editor = useRef(null)
    const { authUser } = useContext(SessionContext)
    const { storage } = useFirebaseApp({ firebaseConfig: FIREBASE.CONFIG })
    const { onPasswordUpdate } = useFirebaseAuthentication({ firebaseConfig: FIREBASE.CONFIG })
    const GET_USER = gql`
        {
            returnSingleUser(id: "${authUser.uid.toString()}") {
                dateCreated
                defaultAvatarThemeIndex
                email
                firstName
                lastName
                loginProvider
                profileImageName
                username
                city
                state
                zip
            }
        }
    `
    const UPDATE_USER = gql`
        mutation UpdateUser($data: UserUpdateInput!) {
            updateUser(data: $data) {
                id
                username
                email
                firstName
                lastName
                city
                state
                zip
            }
        }
    `

    const { data: queryData = null, error: queryError = null, loading: queryLoading } = useQuery(GET_USER)

    const [
        updateUser,
        { data: mutationData = null, error: mutationError = null, loading: mutationLoading },
    ] = useMutation(UPDATE_USER)

    function resetForm(data) {
        reset(
            {
                ...data,
            },
            {
                errors: true, // errors will not be reset
                dirtyFields: true, // dirtyFields will not be reset
                isDirty: true, // dirty will not be reset
                isSubmitted: false,
                touched: false,
                isValid: false,
                submitCount: false,
            }
        )
    }
    useEffect(() => {
        if (queryData && queryData?.returnSingleUser) {
            resetForm(queryData.returnSingleUser)
        }
    }, [queryData])

    useEffect(() => {
        if (mutationData && mutationData?.updateUser) {
            console.log(
                '🚀 ~ file: index.jsx ~ line 108 ~ useEffect ~ mutationData.updateUser',
                mutationData.updateUser
            )
            resetForm(mutationData.updateUser)
        }
    }, [mutationData])

    useEffect(() => {
        setAccountProfileFormError(queryError)
    }, [queryError])

    useEffect(() => {
        setAccountProfileFormError(mutationError)
    }, [mutationError])

    function isLoginProviderEmail() {
        return queryData && queryData?.returnSingleUser?.loginProvider === LOGIN_PROVIDER.EMAIL
    }

    const onScale = (event) => {
        setScale(parseFloat(event.target.value))
    }

    const onSubmit = async (data) => {
        // eslint-disable-next-line no-unused-vars
        const { password, confirmPassword, ...userData } = data
        const email = userData?.email || authUser.email

        if (!userData.username) {
            setAccountProfileFormError({ message: 'Please give yourself a unique username' })
            return
        }
        if (password) {
            try {
                await onPasswordUpdate(password)
            } catch (e) {
                setAccountProfileFormError(e.message)
                return
            }
        }

        const imageUrlFromSave = await handleEditedImage()
        setAccountProfileFormError(null)
        const data2 = { id: authUser.uid.toString(), ...userData, profileImageName: imageUrlFromSave, email }
        await updateUser({
            variables: {
                data: data2,
            },
        })
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
        return ''
    }
    return (
        <>
            {queryLoading || mutationLoading || !queryData ? (
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
                                            imageFileName={queryData && queryData?.returnSingleUser?.profileImageName}
                                            defaultAvatarThemeIndex={
                                                queryData && queryData?.returnSingleUser?.defaultAvatarThemeIndex
                                            }
                                            displayText={getInitials({
                                                username: queryData && queryData?.returnSingleUser?.username,
                                                firstName: queryData && queryData?.returnSingleUser?.firstName,
                                                lastName: queryData && queryData?.returnSingleUser?.lastName,
                                            })}
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
                                        register={register({
                                            required: true,
                                            minLength: 2,
                                        })}
                                        name="username"
                                        placeholder="Username"
                                        type="text"
                                        aria-label="Username"
                                        defaultValue={queryData && queryData?.username}
                                    />
                                </FormBox>
                                {errors?.username && errors?.username?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please enter a valid username</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.username && errors?.username?.type === 'minLength' && (
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
                                        defaultValue={queryData && queryData?.firstName}
                                    />
                                </FormBox>
                                {errors?.firstName && errors?.firstName?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>First Name is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.firstName && errors?.firstName?.type === 'minLength' && (
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
                                        defaultValue={queryData && queryData.lastName}
                                    />
                                </FormBox>
                                {errors?.lastName && errors?.lastName?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Last Name is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.lastName && errors?.lastName?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Last name must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}

                                <FormBox>
                                    <InputField
                                        name="email"
                                        placeholder="Email"
                                        register={register({
                                            required: true,
                                            pattern: /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        })}
                                        type="text"
                                        aria-label="Email"
                                        disabled={!isLoginProviderEmail()}
                                    />
                                </FormBox>

                                {errors.email && errors.email.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Email is required</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="city"
                                        placeholder="City"
                                        register={register({ minLength: 2 })}
                                        type="text"
                                        aria-label="City"
                                        defaultValue={queryData && queryData.city}
                                    />
                                </FormBox>
                                {errors?.lastName && errors?.lastName?.type === 'minLength' && (
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
                                        defaultValue={queryData && queryData.state}
                                    />
                                </FormBox>
                                {errors?.lastName && errors?.lastName?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>City must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        register={register({ required: true, minLength: 5 })}
                                        name="zip"
                                        placeholder="zip"
                                        type="text"
                                        aria-label="Zip"
                                        defaultValue={queryData && queryData?.zip}
                                    />
                                </FormBox>
                                {errors?.lastName && errors?.zip?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Zip must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}

                                {queryData && isLoginProviderEmail() && (
                                    <>
                                        <FormBox>
                                            <InputField
                                                name="password"
                                                register={register({
                                                    required: true,
                                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
                                                })}
                                                placeholder="Password"
                                                type="password"
                                                aria-label="Password"
                                            />
                                        </FormBox>
                                        {errors.password && errors.password.type === 'required' && (
                                            <FormBox>
                                                <ErrorIcon />
                                                <ErrorMessage>A Password is required</ErrorMessage>
                                            </FormBox>
                                        )}
                                        {errors.password && errors.password.type === 'pattern' && (
                                            <FormBox>
                                                <ErrorIcon />
                                                <ErrorMessage>
                                                    Passwords must be:{' '}
                                                    <ul>
                                                        <li>8 characters long</li>
                                                        <li>1 uppercase character</li>
                                                        <li>1 lowercase character</li>
                                                        <li>at least one numeric character</li>
                                                        <li>at least one special character (#, @, $, etc.)</li>
                                                    </ul>
                                                </ErrorMessage>
                                            </FormBox>
                                        )}
                                    </>
                                )}
                                {queryData && isLoginProviderEmail() && (
                                    <>
                                        <FormBox>
                                            <InputField
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                register={register({
                                                    validate: (value) => value === watch('password'),
                                                })}
                                                type="password"
                                                aria-label="Confirm Password"
                                            />
                                        </FormBox>
                                        {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                                            <FormBox>
                                                <ErrorIcon />
                                                <ErrorMessage>Password and confirmation do not match</ErrorMessage>
                                            </FormBox>
                                        )}
                                    </>
                                )}
                                {isLoginProviderEmail() &&
                                    errors?.confirmPassword &&
                                    errors?.confirmPassword?.type === 'validate' && (
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
