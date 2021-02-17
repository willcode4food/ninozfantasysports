import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { SEASON_REGISTER_STEPS } from 'utils/constants'
function Payment({ setFieldValidation, fieldValidation }) {
    const chxPayment = useRef()

    return (
        <input
            ref={chxPayment}
            type="checkbox"
            checked={fieldValidation[SEASON_REGISTER_STEPS.PAYMENT]}
            onChange={() => {
                setFieldValidation({
                    ...fieldValidation,
                    [SEASON_REGISTER_STEPS.PAYMENT]: !fieldValidation[SEASON_REGISTER_STEPS.PAYMENT],
                })
            }}
        />
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
