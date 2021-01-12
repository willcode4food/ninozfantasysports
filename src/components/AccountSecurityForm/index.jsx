import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
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
import { StyledLink } from 'components/Forms/FormStyles'
import { InputField } from 'components/Forms/FormFields'
import { FIREBASE } from 'utils/constants'
import { passwordFormatRegex, emailFormatRegex } from 'utils/securityHelpers'
import { UPDATE_USER } from 'queries'

function AccountSecurityForm({ location }) {
    console.log('🚀 ~ file: index.jsx ~ line 25 ~ AccountSecurityForm ~ location', location)
    const { register, handleSubmit, errors, watch, reset } = useForm()
    const { authUser } = useContext(SessionContext)
    const [accountSecurityError, setAccountSecurityError] = useState(null)
    const { onAuthIdentifierUpdate, isAuthenticationLoading, authenticationError } = useFirebaseAuthentication({
        firebaseConfig: FIREBASE.CONFIG,
    })

    useEffect(() => {
        setAccountSecurityError(authenticationError)
    }, [authenticationError])

    const [updateUser] = useMutation(UPDATE_USER)

    const onSubmit = async (data) => {
        const { email, existingPassword, newPassword } = data
        await onAuthIdentifierUpdate(email, existingPassword, newPassword)
        await updateUser({
            variables: {
                data: { id: authUser.uid.toString(), ...location.state.userData, email },
            },
        })
        reset()
        // setAccountSecurityError({ message: 'Security Information Updated Successfully' })
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
                                            validate: (value) => {
                                                if (value !== '') {
                                                    return watch('existingPassword').length > 0
                                                }
                                                return true
                                            },
                                        })}
                                        name="email"
                                        placeholder="New Email"
                                        type="text"
                                        aria-label="New Email"
                                        defaultValue={authUser?.email}
                                        onFocus={() => setAccountSecurityError(null)}
                                    />
                                </FormBox>
                                {errors?.email && errors?.email?.type === 'pattern' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please provide a valid email address</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.email?.type === 'validate' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please provide your existing password</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="existingPassword"
                                        register={register({ required: true })}
                                        placeholder="Existing Password"
                                        type="password"
                                        aria-label="Existing Password"
                                        onFocus={() => setAccountSecurityError(null)}
                                    />
                                </FormBox>
                                <FormBox>
                                    <InputField
                                        name="newPassword"
                                        register={register({
                                            pattern: passwordFormatRegex,
                                            validate: (value) => {
                                                if (value !== '') {
                                                    return watch('existingPassword').length > 0
                                                }
                                                return true
                                            },
                                        })}
                                        placeholder="New Password"
                                        type="password"
                                        aria-label="New Password"
                                        onFocus={() => setAccountSecurityError(null)}
                                    />
                                </FormBox>
                                {errors?.newPassword?.type === 'validate' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage>Please provide your existing password</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.newPassword && errors?.newPassword?.type === 'pattern' && (
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
                        <FormBox>
                            <StyledLink to="/account">Return to Account Profile</StyledLink>
                        </FormBox>
                    </FormWrapperBox>
                </FormWrapper>
            )}
        </>
    )
}

AccountSecurityForm.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            userData: PropTypes.shape({
                city: PropTypes.string,
                dateCreated: PropTypes.string,
                defaultAvatarThemeIndex: PropTypes.number,
                email: PropTypes.string,
                firstName: PropTypes.string,
                lastName: PropTypes.string,
                loginProvider: PropTypes.string,
                profileImageName: PropTypes.string,
                state: PropTypes.string,
                username: PropTypes.string,
                zip: PropTypes.string,
                __typename: PropTypes.string,
            }),
        }),
    }),
}

export default AccountSecurityForm
