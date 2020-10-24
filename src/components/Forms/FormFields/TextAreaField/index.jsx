import React from 'react'
import PropTypes from 'prop-types'
import { TextAreaStyle } from './styles'

const TextAreaField = ({ input, meta, placeholder, cols = 32, rows = 5 }) => (
    <TextAreaStyle
        {...input}
        meta={meta}
        errorText={meta && meta.touched ? meta.error : ''}
        placeholder={placeholder}
        aria-label={placeholder}
        cols={cols}
        rows={rows}
    />
)

TextAreaField.propTypes = {
    cols: PropTypes.number,
    input: PropTypes.any,
    meta: PropTypes.any,
    placeholder: PropTypes.any,
    rows: PropTypes.number,
}

export default TextAreaField
