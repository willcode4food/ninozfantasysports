import React from 'react'
import PropTypes from 'prop-types'
import { Switch, SwitchSlider, SwitchInput } from './styles'

const SwitchField = ({ checked, onChange }) => {
    return (
        <Switch>
            <SwitchInput type="checkbox" checked={checked} onChange={onChange} />
            <SwitchSlider />
        </Switch>
    )
}

SwitchField.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
}
export default SwitchField
