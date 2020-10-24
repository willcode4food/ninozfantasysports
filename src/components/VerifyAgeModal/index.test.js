import React from 'react'
import renderer from 'react-test-renderer'

import VerifyAgeModal from './'

describe('VerifyAgeModal', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<VerifyAgeModal />).toJSON()
            expect(tree).toMatchInlineSnapshot(`null`)
        })
    })
})
