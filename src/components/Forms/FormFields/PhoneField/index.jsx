import React from 'react'
import MaskedInputField from '../MaskedInputField'

function PhoneField(input) {
    return (
        <MaskedInputField
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            {...input}
            placeholder="(999) 999-9999"
            type="tel"
        />
    )
}

export default PhoneField
