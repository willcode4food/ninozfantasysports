import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { InputField, EmailSubmitButton } from 'components/Forms/FormFields'
import * as Rug from 'random-username-generator'
import {
    ButtonLabelWrapper,
    ButtonLabelIconBox,
    ButtonLabelBox,
    GoogleLoginIcon,
    ErrorMessage,
    FormHeader,
    FormButton,
    StyledLink,
    ErrorIcon,
} from 'components/Forms/FormStyles'
import {
    FormBox,
    FormFlex,
    FormFlexInner,
    FormWrapper,
    FormWrapperBox,
    FormFlexInnerBox,
} from 'components/Forms/FormLayout'
// import { navigate } from 'gatsby'
import Loader from 'components/Loader'
import { FIREBASE, LOGIN_PROVIDER } from 'utils/constants'
import { defaultUserRegFields } from 'utils/userHelpers'
import useFirebaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'
import { navigateToPathHistory } from 'components/PathHistory'

function LoginForm() {
    const { errors, register, handleSubmit } = useForm()
    const [authError, setAuthError] = useState(null)

    function onAuthenticationSuccess() {
        console.log('Success')
        navigateToPathHistory('/account')
    }

    const { onEmailLogin, onGoogleLogin, authenticationError, isAuthenticationLoading } = useFirebaseAuthentication({
        firebaseConfig: FIREBASE.CONFIG,
        onAuthenticationSuccess,
    })

    useEffect(() => {
        setAuthError(authenticationError)
    }, [authenticationError])

    const onEmailSubmit = async (data) => {
        try {
            await onEmailLogin(data)
        } catch (e) {
            authenticationError
        }
    }

    const onGoogleSubmit = async (event) => {
        event.preventDefault()
        onGoogleLogin({ ...defaultUserRegFields, loginProvider: LOGIN_PROVIDER.GOOGLE, username: Rug.generate() })
    }

    return (
        <>
            {isAuthenticationLoading ? (
                <Loader />
            ) : (
                <FormWrapper>
                    <FormWrapperBox>
                        <FormHeader>Login</FormHeader>
                        <form onSubmit={handleSubmit(onEmailSubmit)}>
                            <FormFlex>
                                {authError && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>{authError.message}</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        register={register({ required: true })}
                                        name="email"
                                        placeholder="Email Address"
                                        type="text"
                                        aria-label="Email Address"
                                    />
                                </FormBox>
                                {errors.email && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please enter a valid email</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        register={register({ required: true })}
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        aria-label="Password"
                                    />
                                </FormBox>
                                {errors.password && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please enter a password</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <FormFlexInner>
                                        <FormFlexInnerBox>
                                            <EmailSubmitButton text="Login With Email" />
                                        </FormFlexInnerBox>
                                        <FormFlexInnerBox>
                                            <FormButton onClick={onGoogleSubmit}>
                                                <ButtonLabelWrapper>
                                                    <ButtonLabelIconBox>
                                                        <GoogleLoginIcon />
                                                    </ButtonLabelIconBox>
                                                    <ButtonLabelBox>Login With Google</ButtonLabelBox>
                                                </ButtonLabelWrapper>
                                            </FormButton>
                                        </FormFlexInnerBox>
                                    </FormFlexInner>
                                </FormBox>
                                <FormBox>
                                    <StyledLink to="/register">Create an Account</StyledLink>
                                </FormBox>
                                <FormBox>
                                    <StyledLink to="/forgotpassword">Forgot Your Password?</StyledLink>
                                </FormBox>
                            </FormFlex>
                        </form>
                    </FormWrapperBox>
                </FormWrapper>
            )}
        </>
    )
}

export default LoginForm
