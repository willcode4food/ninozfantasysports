import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CheckBoxContainer, CheckBoxStyle } from './styles'
import { COLORS } from 'utils/styleHelpers'
function CheckBoxField({ label, backgroundColor, backgroundColorOff }) {
    const [isChecked, setIsChecked] = useState(false)
    function handleChange() {
        setIsChecked(!isChecked)
    }

    return (
        <CheckBoxContainer isChecked={isChecked}>
            <CheckBoxStyle
                backgroundColor={backgroundColor}
                backgroundColorOff={backgroundColorOff}
                controlName={`chkbx___${label}`}
                isChecked={isChecked}
                onClick={handleChange}
                role="checkbox"
                type="checkbox"
            />
        </CheckBoxContainer>
    )
}

CheckBoxField.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundColorOff: PropTypes.string,
    defaultIsChecked: PropTypes.bool,
}

CheckBoxField.defaultProps = {
    label: '',
    backgroundColor: COLORS.SECONDARY,
    backgroundColorOff: COLORS.PRIMARY,
    defaultIsChecked: false,
}

export default CheckBoxField
