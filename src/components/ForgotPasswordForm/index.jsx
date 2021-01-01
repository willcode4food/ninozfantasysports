import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from 'components/Forms/FormFields'
import {
    ButtonLabelWrapper,
    ButtonLabelBox,
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
import Loader from 'components/Loader'
import { FIREBASE } from 'utils/constants'
import useFirebaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'

function ForgotPasswordForm() {
    const { errors, register, handleSubmit } = useForm()
    const [appError, setAppError] = useState(null)
    const { onForgotPassword, isAuthenticationLoading, authenticationError } = useFirebaseAuthentication({
        firebaseConfig: FIREBASE.CONFIG,
    })
    useEffect(() => {
        setAppError(authenticationError)
    }, [authenticationError])
    return (
        <>
            {isAuthenticationLoading ? (
                <Loader />
            ) : (
                <FormWrapper>
                    <FormWrapperBox>
                        <FormHeader>Forgot Password</FormHeader>
                        <form onSubmit={handleSubmit(onForgotPassword)}>
                            <FormFlex>
                                <FormBox>
                                    <InputField
                                        name="email"
                                        placeholder="Email Address"
                                        register={register({ required: true })}
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
                                    <FormFlexInner>
                                        <FormFlexInnerBox>
                                            <FormButton>
                                                <ButtonLabelWrapper>
                                                    <ButtonLabelBox>Reset Password</ButtonLabelBox>
                                                </ButtonLabelWrapper>
                                            </FormButton>
                                        </FormFlexInnerBox>
                                    </FormFlexInner>
                                </FormBox>
                                {appError && (
                                    <FormBox>
                                        <ErrorMessage>{appError.message}</ErrorMessage>
                                    </FormBox>
                                )}
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

export default ForgotPasswordForm
