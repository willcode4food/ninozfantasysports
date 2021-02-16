import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Payment({ setIsNextStepReady }) {
    const [isPaymentAccepted] = useState(false)

    useEffect(() => {
        setIsNextStepReady(isPaymentAccepted)
    }, [isPaymentAccepted])
    return <div>Payment</div>
}

Payment.propTypes = {
    setIsNextStepReady: PropTypes.func,
}

export default Payment
