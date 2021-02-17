import React, { useState } from 'react'
import { Wizard, Steps, Step } from 'react-albus'
import Navigation from 'components/SeasonRegistrationWizard/Navigation'
import Confirmation from 'components/SeasonRegistrationWizard/steps/Confirmation'
import Payment from 'components/SeasonRegistrationWizard/steps/Payment'
import TermsAndConditions from 'components/SeasonRegistrationWizard/steps/TermsAndConditions'
import { SEASON_REGISTER_STEPS } from 'utils/constants'

function SeasonRegistrationWizard() {
    const [fieldValidation, setFieldValidation] = useState({
        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: false,
        [SEASON_REGISTER_STEPS.PAYMENT]: false,
    })
    return (
        <Wizard>
            <Steps>
                <Step id={SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS}>
                    <TermsAndConditions setFieldValidation={setFieldValidation} fieldValidation={fieldValidation} />
                </Step>
                <Step id={SEASON_REGISTER_STEPS.PAYMENT}>
                    <Payment setFieldValidation={setFieldValidation} fieldValidation={fieldValidation} />
                </Step>
                <Step id={SEASON_REGISTER_STEPS.CONFIRMATION}>
                    <Confirmation />
                </Step>
            </Steps>
            <Navigation fieldValidation={fieldValidation} />
        </Wizard>
    )
}

export default SeasonRegistrationWizard
