import React from 'react'
import PropTypes from 'prop-types'
import { InputFieldStyle } from './styles'

function InputField({ input, register, ...rest }) {
    return <InputFieldStyle ref={register} {...input} {...rest} />
}

InputField.propTypes = {
    input: PropTypes.any,
    meta: PropTypes.any,
    register: PropTypes.func,
}

export default InputField
