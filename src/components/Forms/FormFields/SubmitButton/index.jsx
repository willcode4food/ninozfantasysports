import React from 'react'
import PropTypes from 'prop-types'
import { FormButton } from 'components/Forms/FormStyles'
import { HiddenInput } from './styles'

function SubmitButton({ children }) {
    return (
        <label htmlFor="Submit">
            <HiddenInput type="submit" />
            <FormButton>{children}</FormButton>
        </label>
    )
}

SubmitButton.propTypes = {
    children: PropTypes.node,
}

export default SubmitButton
