import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { SEASON_REGISTER_STEPS } from 'utils/constants'

function TermsAndConditions({ setFieldValidation, fieldValidation }) {
    const chxTermsAndConditions = useRef()

    return (
        <div>
            <div>Terms and Conditions</div>
            <input
                ref={chxTermsAndConditions}
                type="checkbox"
                checked={fieldValidation[SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]}
                onChange={() => {
                    setFieldValidation({
                        ...fieldValidation,
                        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: !fieldValidation[
                            SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS
                        ],
                    })
                }}
            />
        </div>
    )
}

TermsAndConditions.propTypes = {
    setFieldValidation: PropTypes.func,
    fieldValidation: PropTypes.shape({
        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: PropTypes.bool,
        [SEASON_REGISTER_STEPS.PAYMENT]: PropTypes.bool,
    }),
}

export default TermsAndConditions
