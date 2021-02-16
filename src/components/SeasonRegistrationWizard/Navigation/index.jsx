import React from 'react'
import PropTypes from 'prop-types'
import { WithWizard } from 'react-albus'
import { PrimaryButton } from 'components/Buttons'
import { COLORS } from 'utils/styleHelpers'
import { WizardNavContainer, WizardNavBox } from './styles'

const Navigation = ({ isNextStepReady }) => {
    return (
        <WithWizard
            render={({ next, previous, step, steps }) => {
                return (
                    <WizardNavContainer>
                        {steps.indexOf(step) > 0 && (
                            <WizardNavBox>
                                <PrimaryButton color={COLORS.PRIMARY_DARK} onClick={previous}>
                                    Back
                                </PrimaryButton>
                            </WizardNavBox>
                        )}
                        {steps.indexOf(step) < steps.length - 1 && (
                            <WizardNavBox>
                                <PrimaryButton disabled={!isNextStepReady} onClick={next}>
                                    Next
                                </PrimaryButton>
                            </WizardNavBox>
                        )}
                    </WizardNavContainer>
                )
            }}
        />
    )
}

Navigation.propTypes = {
    isNextStepReady: PropTypes.bool,
}

export default Navigation
