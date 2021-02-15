/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer'

import InputField from './'

describe('InputField', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<InputField name="firestName" placeholder="Last Name" type="text" aria-label="Last Name" />)
            .toJSON()

        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
              font-size: inherit;
              line-height: inherit;
              width: 100%;
              box-shadow: #C4C8D8 0px 0px 0px 1px inset;
              padding-left: 10px;
              padding-right: 4px;
              padding-top: 13px;
              padding-bottom: 13px;
              background: #FFF;
              box-sizing: border-box;
              overflow-wrap: break-word;
              overflow-x: visible;
              overflow-y: visible;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              text-size-adjust: 100%;
              font-family: inherit;
              display: inline-block;
              vertical-align: middle;
              -webkit-appearance: none;
              border-radius: 4px;
              margin: 0px;
              border-width: 0px;
              border-style: initial;
              border-color: initial;
              border-image: initial;
              -webkit-transition: background 0.5s,color 0.5s;
              transition: background 0.5s,color 0.5s;
            }

            .dark .emotion-0 {
              background: #263238;
            }

            .emotion-0:disabled {
              color: #495358;
            }

            <input
              aria-label="Last Name"
              className="emotion-0 emotion-1"
              name="firestName"
              placeholder="Last Name"
              type="text"
            />
        `)
    })
})
