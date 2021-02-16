import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Payment({ setIsPaymentReady }) {
    const [isPaymentAccepted] = useState(false)

    useEffect(() => {
        setIsPaymentReady(isPaymentAccepted)
    }, [isPaymentAccepted])
    return <div>Payment</div>
}

Payment.propTypes = {
    setIsPaymentReady: PropTypes.func,
}

export default Payment
