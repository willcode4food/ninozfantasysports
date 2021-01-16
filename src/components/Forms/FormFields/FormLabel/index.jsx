import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
function FormLabel({ children, isHidden = true }) {
    return (
        <label
            css={css`
                display: ${isHidden ? 'none' : 'inline'};
            `}
        >
            {children}
        </label>
    )
}

FormLabel.propTypes = {
    children: PropTypes.string.isRequired,
    isHidden: PropTypes.bool,
}

export default FormLabel
