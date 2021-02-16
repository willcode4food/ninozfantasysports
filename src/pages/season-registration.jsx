import React, { useState } from 'react'
import PropTypes from 'prop-types'
import GlobalLayout from 'components/GlobalLayout'
import { authConditionIsUser } from 'utils/securityHelpers'
import useAuthorization from 'hooks/useAuthorization'
import UnauthorizedPage from 'components/UnauthorizedPage'
import { Wizard, Steps, Step } from 'react-albus'
import WizardNavigation from 'components/WizardNavigation'
import SeasonRegisterConfirmationStep from 'components/SeasonRegisterConfirmationStep'
import SeasonRegisterPaymentStep from 'components/SeasonRegisterPaymentStep'
import SeasonRegisterTermsConditionsStep from 'components/SeasonRegisterTermsConditionsStep'

function SeasonRegistrationPage({ location }) {
    const { isAuthorized, isAuthorizationLoading } = useAuthorization(authConditionIsUser)
    const [isNextStepReady, setIsNextStepReady] = useState(true)

    if (!isAuthorizationLoading) {
        return (
            <>
                {isAuthorized ? (
                    <GlobalLayout location={location} isVerifyAgeModalOverriden={true}>
                        <Wizard>
                            <Steps>
                                <Step id="termsConditionsConfirmation">
                                    <SeasonRegisterTermsConditionsStep setIsNextStepReady={setIsNextStepReady} />
                                </Step>
                                <Step id="paymentConfirmation">
                                    <SeasonRegisterPaymentStep setIsNextStepReady={setIsNextStepReady} />
                                </Step>
                                <Step id="confirmation">
                                    <SeasonRegisterConfirmationStep setIsNextStepReady={setIsNextStepReady} />
                                </Step>
                            </Steps>
                            <WizardNavigation isNextStepReady={isNextStepReady} />
                        </Wizard>
                    </GlobalLayout>
                ) : (
                    <UnauthorizedPage />
                )}
            </>
        )
    }
    return null
}
SeasonRegistrationPage.propTypes = {
    location: PropTypes.object,
}
export default SeasonRegistrationPage
