import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function TermsAndConditions({ setIsTermsAndConditionsReady }) {
    const [isAccepted, setIsAccepted] = useState(false)
    const chxIsAccepted = useRef()
    useEffect(() => {
        setIsTermsAndConditionsReady(isAccepted)
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

TermsAndConditions.propTypes = {
    setIsTermsAndConditionsReady: PropTypes.func,
}

export default TermsAndConditions
