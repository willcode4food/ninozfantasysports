import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { SEASON_REGISTER_STEPS } from 'utils/constants'
import { useForm } from 'react-hook-form'
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
import { InputField, StandardSubmitButton, StateSelectField } from 'components/Forms/FormFields'
function Payment({ setFieldValidation, fieldValidation }) {
    const chxPayment = useRef()
    const [error, setError] = useState(null)

    return (
        <FormWrapper>
            <FormWrapperBox>
                <FormHeader>Payment Information</FormHeader>
                <form onSubmit={() => {}}>
                    <FormFlex>
                        {error && (
                            <FormBox>
                                <ErrorIcon>
                                    <ErrorMessage>{`Error Message`}</ErrorMessage>
                                </ErrorIcon>
                            </FormBox>
                        )}
                        <FormBox>
                            <FormFlex flexDirection="row">
                                <FormBox marginLeft={0}>
                                    <InputField
                                        name="firstname"
                                        placeholder="First Name"
                                        type="text"
                                        aria-label="first name"
                                    />
                                </FormBox>
                                <FormBox marginRight={0}>
                                    <InputField
                                        name="lastname"
                                        placeholder="Last Name"
                                        type="text"
                                        aria-label="last name"
                                    />
                                </FormBox>
                            </FormFlex>
                        </FormBox>
                        <FormBox>
                            <InputField name="city" placeholder="city" type="text" aria-label="city" />
                        </FormBox>
                        <FormBox>
                            <StateSelectField
                                data-testid="state"
                                name="state"
                                aria-label="state"
                                // register={register({ required: true })}
                                // defaultValue={queryData && queryData.state}
                            />
                        </FormBox>
                        <FormBox>
                            <InputField
                                // register={register({ required: true, minLength: 5 })}
                                name="zip"
                                placeholder="zip"
                                type="text"
                                aria-label="Zip"
                                // defaultValue={queryData && queryData?.zip}
                            />
                        </FormBox>
                        <FormBox>
                            <FormFlexInner>
                                <FormFlexInnerBox>
                                    <StandardSubmitButton
                                        role="button"
                                        aria-label="submit payment"
                                        text="Submit Payment"
                                    />
                                </FormFlexInnerBox>
                            </FormFlexInner>
                        </FormBox>
                    </FormFlex>
                </form>
            </FormWrapperBox>
        </FormWrapper>
        // <input
        //     ref={chxPayment}
        //     type="checkbox"
        //     checked={fieldValidation[SEASON_REGISTER_STEPS.PAYMENT]}
        //     onChange={() => {
        //         setFieldValidation({
        //             ...fieldValidation,
        //             [SEASON_REGISTER_STEPS.PAYMENT]: !fieldValidation[SEASON_REGISTER_STEPS.PAYMENT],
        //         })
        //     }}
        // />
    )
}

Payment.propTypes = {
    setFieldValidation: PropTypes.func,
    fieldValidation: PropTypes.shape({
        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: PropTypes.bool,
        [SEASON_REGISTER_STEPS.PAYMENT]: PropTypes.bool,
    }),
}

export default Payment
