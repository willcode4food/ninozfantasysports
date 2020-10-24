import React from 'react'
import PropTypes from 'prop-types'
import { SelectFieldStyle } from './styles'

function SelectField({ input, register, ...rest }) {
    return <SelectFieldStyle ref={register} {...input} {...rest} />
}

SelectField.propTypes = {
    input: PropTypes.any,
    register: PropTypes.func,
}

export default SelectField
