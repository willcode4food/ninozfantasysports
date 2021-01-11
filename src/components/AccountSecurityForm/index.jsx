import React, { useContext, useEffect, useState } from 'react'
import Loader from 'components/Loader'
import { StandardSubmitButton } from 'components/Forms/FormFields'
import { ErrorIcon, ErrorMessage, FormHeader } from 'components/Forms/FormStyles'
import SessionContext from 'context/SessionContext'
import useFirebaseAuthentication from 'hooks/firebase/useFirebaseAuthentication'
import { useForm } from 'react-hook-form'
import {
    FormBox,
    FormFlex,
    FormFlexInner,
    FormFlexInnerBox,
    FormWrapper,
    FormWrapperBox,
} from 'components/Forms/FormLayout'
import { InputField } from 'components/Forms/FormFields'
import { FIREBASE } from 'utils/constants'
import { passwordFormatRegex, emailFormatRegex } from 'utils/securityHelpers'

function AccountSecurityForm() {
    const { register, handleSubmit, errors, watch, reset } = useForm()
    const { authUser } = useContext(SessionContext)
    const [accountSecurityError, setAccountSecurityError] = useState(null)
    const { onAuthIdentifierUpdate, isAuthenticationLoading, authenticationError } = useFirebaseAuthentication({
        firebaseConfig: FIREBASE.CONFIG,
    })

    useEffect(() => {
        setAccountSecurityError(authenticationError)
    }, [authenticationError])

    const onSubmit = async (data) => {
        const { email, newPassword } = data
        await onAuthIdentifierUpdate(email, newPassword)
        reset()
        setAccountSecurityError({ message: 'Security Information Updated Successfully' })
    }

    return (
        <>
            {isAuthenticationLoading ? (
                <Loader />
            ) : (
                <FormWrapper>
                    <FormWrapperBox>
                        <FormHeader>Email and Password</FormHeader>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormFlex>
                                {accountSecurityError && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>{accountSecurityError.message}</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        register={register({
                                            required: true,
                                            pattern: emailFormatRegex,
                                        })}
                                        name="email"
                                        placeholder="New Email"
                                        type="text"
                                        aria-label="New Email"
                                        defaultValue={authUser?.email}
                                        onFocus={() => setAccountSecurityError(null)}
                                    />
                                </FormBox>
                                <FormBox>
                                    <InputField
                                        name="newPassword"
                                        register={register({
                                            pattern: passwordFormatRegex,
                                        })}
                                        placeholder="New Password"
                                        type="password"
                                        aria-label="New Password"
                                        onFocus={() => setAccountSecurityError(null)}
                                    />
                                </FormBox>
                                {errors?.password && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please supply a new password </ErrorMessage>
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
                                        register={register({
                                            validate: (value) => value === watch('newPassword'),
                                        })}
                                        type="password"
                                        aria-label="Confirm Password"
                                        onFocus={() => setAccountSecurityError(null)}
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
                                            <StandardSubmitButton text="Save Email and Password" />
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

export default AccountSecurityForm
