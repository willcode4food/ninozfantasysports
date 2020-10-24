import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { PrimaryButton } from 'components/Buttons'
import {
    StyledOverlay,
    OverlayTitle,
    Blocker,
    ModalContentWrapper,
    ModalContentWrapperBox,
    ModalMessageWrapper,
    ModalMessageText,
    ModalVerificationBox,
} from './styles'
import { COLORS } from 'utils/styleHelpers'

function VerifyAgeModal({ hasAgeVerified }) {
    const [hasVerified, setHasVerified] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setShowOverlay(!hasAgeVerified)
    }, [hasAgeVerified])

    const onVerifyCheck = (event) => {
        setHasVerified(event.target.checked)
        setError(null)
    }

    const onCancelClick = (event) => {
        event.stopPropagation()
    }

    const onVerifySubmit = () => {
        console.log('onVerifySubmit -> hasVerified', hasVerified)
        if (!hasVerified) {
            setError(`Please check the checkbox verifying you agree to the terms.`)
            console.log(error)
            return
        }

        setHasVerified(hasVerified)
        return
    }

    if (!showOverlay) {
        return null
    }

    return (
        <Blocker>
            <StyledOverlay onClick={onCancelClick}>
                <ModalContentWrapper>
                    <div>
                        <OverlayTitle>Welcome!</OverlayTitle>
                    </div>
                    <ModalContentWrapperBox>
                        <ModalMessageWrapper>
                            <ModalVerificationBox>
                                <input onChange={onVerifyCheck} type="checkbox" />
                                &nbsp;&nbsp;
                                <ModalMessageText>
                                    I am at least 21 years old and I agree to the &nbsp;
                                </ModalMessageText>
                                <a href="/privacy-policy" target="_blank">
                                    <ModalMessageText>Privacy Policy</ModalMessageText>
                                </a>
                                <ModalMessageText>&nbsp;and </ModalMessageText>
                                <a href="/terms-of-use" target="_blank">
                                    <ModalMessageText>Terms of Use.</ModalMessageText>
                                </a>
                            </ModalVerificationBox>
                            <ModalVerificationBox>
                                <PrimaryButton
                                    onClick={onVerifySubmit}
                                    color={COLORS.PRIMARY_BUTTON}
                                    textColor={COLORS.PRIMARY}
                                >
                                    I am of Age
                                </PrimaryButton>
                            </ModalVerificationBox>
                            <ModalVerificationBox>
                                <ModalMessageText>
                                    We also use cookies to help us deliver a personalized experience and display
                                    relevant promotions. By using this website, you agree to our use of cookies. Please
                                    take a moment to review our{' '}
                                    <a href="/cookie-policy" target="_blank">
                                        cookie policy
                                    </a>
                                </ModalMessageText>
                            </ModalVerificationBox>
                        </ModalMessageWrapper>
                    </ModalContentWrapperBox>
                </ModalContentWrapper>
            </StyledOverlay>
        </Blocker>
    )
}

VerifyAgeModal.propTypes = {
    hasAgeVerified: propTypes.bool,
}
export default VerifyAgeModal
