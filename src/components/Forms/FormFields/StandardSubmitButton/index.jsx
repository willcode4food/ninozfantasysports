import React from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from 'components/Forms/FormFields'
import { ButtonLabelWrapper, ButtonLabelBoxFull } from 'components/Forms/FormStyles'

function StandardSubmitButton({ text }) {
    return (
        <SubmitButton>
            <ButtonLabelWrapper>
                <ButtonLabelBoxFull>{text}</ButtonLabelBoxFull>
            </ButtonLabelWrapper>
        </SubmitButton>
    )
}

StandardSubmitButton.propTypes = {
    text: PropTypes.string,
}

export default StandardSubmitButton
