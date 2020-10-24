import React from 'react'
import PropTypes from 'prop-types'
import { FileFieldWrapper, FileFieldInput, FileFieldLabel } from './styles'

function FileField({ onChange }) {
    return (
        <FileFieldWrapper>
            <FileFieldInput id="file" name="file" onChange={onChange} type="file" />
            <FileFieldLabel htmlFor="file">Change Profile Photo</FileFieldLabel>
        </FileFieldWrapper>
    )
}

FileField.propTypes = {
    onChange: PropTypes.func,
}

export default FileField
