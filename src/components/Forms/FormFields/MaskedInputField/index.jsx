import React from 'react'
import PropTypes from 'prop-types'
import { MaskedInputFieldStyle } from './styles'

function MaskedInputField({ input, meta, ...rest }) {
    return <MaskedInputFieldStyle {...input} meta={meta} {...rest} />
}

MaskedInputField.propTypes = {
    input: PropTypes.any,
    meta: PropTypes.any,
}

export default MaskedInputField
