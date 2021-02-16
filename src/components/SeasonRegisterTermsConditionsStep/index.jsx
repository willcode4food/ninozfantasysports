import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function SeasonRegisterTermsConditionsStep({ setIsNextStepReady }) {
    const [isAccepted, setIsAccepted] = useState(false)
    const chxIsAccepted = useRef()
    useEffect(() => {
        setIsNextStepReady(isAccepted)
    }, [isAccepted])
    return (
        <div>
            <div>Terms and Conditions</div>
            <input
                ref={chxIsAccepted}
                type="checkbox"
                onChange={() => {
                    setIsAccepted(!isAccepted)
                }}
            />
        </div>
    )
}

SeasonRegisterTermsConditionsStep.propTypes = {
    setIsNextStepReady: PropTypes.func,
}

export default SeasonRegisterTermsConditionsStep
