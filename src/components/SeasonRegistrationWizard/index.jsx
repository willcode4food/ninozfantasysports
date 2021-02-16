import React, { useState, useEffect } from 'react'
import { Wizard, Steps, Step } from 'react-albus'
import Navigation from 'components/SeasonRegistrationWizard/Navigation'
import Confirmation from 'components/SeasonRegistrationWizard/steps/Confirmation'
import Payment from 'components/SeasonRegistrationWizard/steps/Payment'
import TermsAndConditions from 'components/SeasonRegistrationWizard/steps/TermsAndConditions'
import { SEASON_REGISTER_STEPS } from 'utils/constants'

function SeasonRegistratinWizard() {
    const [isTermsAndConditionsReady, setIsTermsAndConditionsReady] = useState(false)
    const [isPaymentReady, setIsPaymentReady] = useState(false)
    const [wizardValidation, setWizardValidation] = useState({
        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: isTermsAndConditionsReady,
        [SEASON_REGISTER_STEPS.PAYMENT]: isPaymentReady,
    })

    useEffect(() => {
        setWizardValidation({
            [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: isTermsAndConditionsReady,
            [SEASON_REGISTER_STEPS.PAYMENT]: isPaymentReady,
        })
    }, [isTermsAndConditionsReady, isPaymentReady, setWizardValidation])
    console.log('🚀 ~ file: index.jsx ~ line 13 ~ SeasonRegistratinWizard ~ wizardValidation', wizardValidation)
    return (
        <Wizard>
            <Steps>
                <Step id={SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS}>
                    <TermsAndConditions setIsTermsAndConditionsReady={setIsTermsAndConditionsReady} />
                </Step>
                <Step id={SEASON_REGISTER_STEPS.PAYMENT}>
                    <Payment setIsPaymentReady={setIsPaymentReady} />
                </Step>
                <Step id={SEASON_REGISTER_STEPS.CONFIRMATION} wizardValiation={wizardValidation}>
                    <Confirmation />
                </Step>
            </Steps>
            <Navigation wizardValidation={wizardValidation} />
        </Wizard>
    )
}

export default SeasonRegistratinWizard
