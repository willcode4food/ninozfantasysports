import React, { useState } from 'react'
import { Wizard, Steps, Step } from 'react-albus'
import Navigation from 'components/SeasonRegistrationWizard/Navigation'
import Confirmation from 'components/SeasonRegistrationWizard/steps/Confirmation'
import Payment from 'components/SeasonRegistrationWizard/steps/Payment'
import TermsAndConditions from 'components/SeasonRegistrationWizard/steps/TermsAndConditions'

function SeasonRegistratinWizard() {
    const [isNextStepReady, setIsNextStepReady] = useState(true)
    return (
        <Wizard>
            <Steps>
                <Step id="termsConditionsConfirmation">
                    <TermsAndConditions setIsNextStepReady={setIsNextStepReady} />
                </Step>
                <Step id="paymentConfirmation">
                    <Payment setIsNextStepReady={setIsNextStepReady} />
                </Step>
                <Step id="confirmation">
                    <Confirmation setIsNextStepReady={setIsNextStepReady} />
                </Step>
            </Steps>
            <Navigation isNextStepReady={isNextStepReady} />
        </Wizard>
    )
}

export default SeasonRegistratinWizard
