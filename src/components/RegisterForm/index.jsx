import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { InputField, EmailSubmitButton } from 'components/Forms/FormFields'
import {
    ButtonLabelWrapper,
    ButtonLabelBox,
    ButtonLabelIconBox,
    ErrorMessage,
    ErrorIcon,
    FormHeader,
    FormButton,
    GoogleLoginIcon,
    StyledLink,
} from 'components/Forms/FormStyles'
import {
    FormBox,
    FormFlex,
    FormFlexInner,
    FormWrapper,
    FormWrapperBox,
    FormFlexInnerBox,
} from 'components/Forms/FormLayout'
import { FIREBASE } from 'utils/constants'
import { getAvatarThemeIndex } from 'utils/userHelpers'
import useFirebaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'
import Loader from 'components/Loader'

function RegisterForm() {
    const { errors, register, handleSubmit, watch } = useForm()
    const [hasGoogleRegistrationError, setHasGoogleRegistrationError] = useState(false)
    function onAuthenticationSuccess() {
        navigate('/account')
    }

    const defaultFields = {
        defaultAvatarThemeIndex: getDefaultAvatarIndex(),
        profileImageName: '',
        city: '',
        state: '',
        zip: '',
    }

    const {
        authenticationError,
        isAuthenticationLoading,
        onGoogleRegistration,
        onEmailRegistration,
    } = useFirebaseAuthentication({
        onAuthenticationSuccess,
        firebaseConfig: FIREBASE.CONFIG,
    })
    function getDefaultAvatarIndex() {
        try {
            const index = document.getElementsByName('defaultAvatarThemeIndex')[0]
            return parseInt(index.value)
        } catch (e) {
            return 0
        }
    }
    const handleGoogleSubmit = async (event) => {
        event.preventDefault()
        const username = document.getElementsByName('username')[0]
        if (!username.value || typeof username.value === undefined) {
            setHasGoogleRegistrationError(true)
            return
        }
        await onGoogleRegistration({
            username: username.value,
            loginProvider: 'google',
            ...defaultFields,
        })
        return
    }
    const onSubmit = async (data) => {
        // eslint-disable-next-line no-unused-vars
        const { confirmPassword, ...restOfFormData } = data
        onEmailRegistration({
            ...restOfFormData,
            loginProvider: 'email',
            ...defaultFields,
        })
    }
    return (
        <>
            {isAuthenticationLoading ? (
                <Loader />
            ) : (
                <FormWrapper>
                    <FormWrapperBox>
                        <FormHeader>Register</FormHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {authenticationError && (
                                <FormBox>
                                    <ErrorMessage>{authenticationError}</ErrorMessage>
                                </FormBox>
                            )}
                            <FormFlex>
                                <FormBox>
                                    <InputField
                                        onChange={() => {
                                            hasGoogleRegistrationError && setHasGoogleRegistrationError(false)
                                        }}
                                        name="username"
                                        placeholder="Username"
                                        register={register({ required: true, minLength: 2 })}
                                        type="text"
                                        aria-label="Username"
                                    />
                                </FormBox>
                                {((errors.username && errors.username.type === 'required') ||
                                    hasGoogleRegistrationError) && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Username is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors.username && errors.username.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Username must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="firstName"
                                        placeholder="First Name"
                                        register={register({ required: true, minLength: 2 })}
                                        type="text"
                                        aria-label="First Name"
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
                                        name="email"
                                        placeholder="Email"
                                        register={register({
                                            required: true,
                                            pattern: /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        })}
                                        type="text"
                                        aria-label="Email"
                                    />
                                </FormBox>
                                {errors.email && errors.email.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Email is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors.email && errors.email.type === 'pattern' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Enter a valid email</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="password"
                                        placeholder="Password"
                                        register={register({
                                            required: true,
                                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
                                        })}
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
                                <FormBox>
                                    <InputField
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        register={register({ validate: (value) => value === watch('password') })}
                                        type="password"
                                        aria-label="Confirm Password"
                                    />
                                    <input
                                        type="hidden"
                                        ref={register}
                                        name="defaultAvatarThemeIndex"
                                        defaultValue={getAvatarThemeIndex()}
                                    />
                                </FormBox>
                                {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Password and confirmation do not match</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <FormFlexInner>
                                        <FormFlexInnerBox>
                                            <EmailSubmitButton text="Register With Email" />
                                        </FormFlexInnerBox>
                                        <FormFlexInnerBox>
                                            <FormButton onClick={handleGoogleSubmit}>
                                                <ButtonLabelWrapper>
                                                    <ButtonLabelIconBox>
                                                        <GoogleLoginIcon />
                                                    </ButtonLabelIconBox>
                                                    <ButtonLabelBox>Register With Google</ButtonLabelBox>
                                                </ButtonLabelWrapper>
                                            </FormButton>
                                        </FormFlexInnerBox>
                                    </FormFlexInner>
                                </FormBox>
                                <FormBox>
                                    <StyledLink to="/login">Return to Login</StyledLink>
                                </FormBox>
                            </FormFlex>
                        </form>
                    </FormWrapperBox>
                </FormWrapper>
            )}
        </>
    )
}

export default RegisterForm
