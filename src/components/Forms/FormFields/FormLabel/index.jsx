/** @jsx jsx */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'
function FormLabel({ children, isHidden = true, ...restProps }) {
    return (
        <label
            {...restProps}
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
