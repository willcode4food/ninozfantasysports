import React from 'react'
import PropTypes from 'prop-types'
import { SubmitButton } from 'components/Forms/FormFields'
import { ButtonLabelWrapper, ButtonLabelBox, ButtonLabelIconBox, EmailLoginIcon } from 'components/Forms/FormStyles'

function EmailSubmitButton({ text }) {
    return (
        <SubmitButton>
            <ButtonLabelWrapper>
                <ButtonLabelIconBox>
                    <EmailLoginIcon />
                </ButtonLabelIconBox>
                <ButtonLabelBox>{text}</ButtonLabelBox>
            </ButtonLabelWrapper>
        </SubmitButton>
    )
}

EmailSubmitButton.propTypes = {
    text: PropTypes.string,
}

export default EmailSubmitButton
