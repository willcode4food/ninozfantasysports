import React from 'react'
import { BeatLoader } from 'react-spinners'
import { LoaderOverlay, LoaderWrapper, LoaderBox } from './styles'
import { COLORS } from 'utils/styleHelpers'

const Loader = () => (
    <LoaderOverlay>
        <LoaderWrapper>
            <LoaderBox>
                <BeatLoader color={COLORS.SECONDARY} margin="10px" size={24} />
            </LoaderBox>
        </LoaderWrapper>
    </LoaderOverlay>
)

export default Loader
