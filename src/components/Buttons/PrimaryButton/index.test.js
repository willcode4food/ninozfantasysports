import React from 'react'
import renderer from 'react-test-renderer'

import PrimaryButton from './'

describe('PrimaryButton', () => {
    it('renders', () => {
        const tree = renderer.create(<PrimaryButton />).toJSON()
        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
              border: 1px solid #FF1647;
              border-radius: 4px;
              background: #FF1647;
              color: #FFF;
              font-size: 1.12246rem;
              font-family: Fjalla One;
              padding-top: 10px;
              padding-bottom: 10px;
              padding-right: 20px;
              padding-left: 20px;
              width: 100%;
            }

            .emotion-0:disabled {
              background: #495358;
              border-color: #495358;
              color: #C4C8D8;
            }

            .emotion-0:hover {
              background: #FF1647;
            }

            .dark .emotion-0 {
              color: #FFF;
              background: #FF1647;
              border: 1px solid #FF1647;
            }

            .dark .emotion-0:disabled {
              background: #495358;
              color: #1e2427;
              border-color: #495358;
            }

            <button
              className="emotion-0 emotion-1"
            />
        `)
    })
})
