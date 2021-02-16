import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function SeasonRegisterPaymentStep({ setIsNextStepReady }) {
    const [isPaymentAccepted] = useState(false)

    useEffect(() => {
        setIsNextStepReady(isPaymentAccepted)
    }, [isPaymentAccepted])
    return <div>Payment</div>
}

SeasonRegisterPaymentStep.propTypes = {
    setIsNextStepReady: PropTypes.func,
}

export default SeasonRegisterPaymentStep
