import React from 'react'
import PropTypes from 'prop-types'
import { WithWizard } from 'react-albus'
import { PrimaryButton } from 'components/Buttons'
import { COLORS } from 'utils/styleHelpers'
import { NavigationContainer, NavigationBox } from './styles'

const Navigation = ({ isNextStepReady }) => {
    return (
        <WithWizard>
            {({ next, previous, step, steps }) => {
                return (
                    <NavigationContainer>
                        {steps.indexOf(step) > 0 && (
                            <NavigationBox>
                                <PrimaryButton color={COLORS.PRIMARY_DARK} onClick={previous}>
                                    Back
                                </PrimaryButton>
                            </NavigationBox>
                        )}
                        {steps.indexOf(step) < steps.length - 1 && (
                            <NavigationBox>
                                <PrimaryButton disabled={!isNextStepReady} onClick={next}>
                                    Next
                                </PrimaryButton>
                            </NavigationBox>
                        )}
                    </NavigationContainer>
                )
            }}
        </WithWizard>
    )
}

Navigation.propTypes = {
    isNextStepReady: PropTypes.bool,
}

export default Navigation
