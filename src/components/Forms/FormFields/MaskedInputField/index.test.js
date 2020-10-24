import React from 'react'
import { render } from '@testing-library/react'
import MaskedInputField from './'

describe('MaskedInputField', () => {
    describe('when added', () => {
        it('renders', () => {
            const tree = render(
                <MaskedInputField
                    mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    guide={true}
                />
            )
            expect(tree).toMatchInlineSnapshot(`
                Object {
                  "asFragment": [Function],
                  "baseElement": .emotion-0 {
                  font-size: inherit;
                  line-height: inherit;
                  width: 100%;
                  box-shadow: rgb(238,238,238) 0px 0px 0px 1px inset;
                  padding-left: 4px;
                  padding-right: 4px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  color: inherit;
                  background-color: transparent;
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
                }

                <body>
                    <div>
                      <input
                        class="emotion-0 emotion-1"
                        value=""
                      />
                    </div>
                  </body>,
                  "container": .emotion-0 {
                  font-size: inherit;
                  line-height: inherit;
                  width: 100%;
                  box-shadow: rgb(238,238,238) 0px 0px 0px 1px inset;
                  padding-left: 4px;
                  padding-right: 4px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  color: inherit;
                  background-color: transparent;
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
                }

                <div>
                    <input
                      class="emotion-0 emotion-1"
                      value=""
                    />
                  </div>,
                  "debug": [Function],
                  "findAllByAltText": [Function],
                  "findAllByDisplayValue": [Function],
                  "findAllByLabelText": [Function],
                  "findAllByPlaceholderText": [Function],
                  "findAllByRole": [Function],
                  "findAllByTestId": [Function],
                  "findAllByText": [Function],
                  "findAllByTitle": [Function],
                  "findByAltText": [Function],
                  "findByDisplayValue": [Function],
                  "findByLabelText": [Function],
                  "findByPlaceholderText": [Function],
                  "findByRole": [Function],
                  "findByTestId": [Function],
                  "findByText": [Function],
                  "findByTitle": [Function],
                  "getAllByAltText": [Function],
                  "getAllByDisplayValue": [Function],
                  "getAllByLabelText": [Function],
                  "getAllByPlaceholderText": [Function],
                  "getAllByRole": [Function],
                  "getAllByTestId": [Function],
                  "getAllByText": [Function],
                  "getAllByTitle": [Function],
                  "getByAltText": [Function],
                  "getByDisplayValue": [Function],
                  "getByLabelText": [Function],
                  "getByPlaceholderText": [Function],
                  "getByRole": [Function],
                  "getByTestId": [Function],
                  "getByText": [Function],
                  "getByTitle": [Function],
                  "queryAllByAltText": [Function],
                  "queryAllByDisplayValue": [Function],
                  "queryAllByLabelText": [Function],
                  "queryAllByPlaceholderText": [Function],
                  "queryAllByRole": [Function],
                  "queryAllByTestId": [Function],
                  "queryAllByText": [Function],
                  "queryAllByTitle": [Function],
                  "queryByAltText": [Function],
                  "queryByDisplayValue": [Function],
                  "queryByLabelText": [Function],
                  "queryByPlaceholderText": [Function],
                  "queryByRole": [Function],
                  "queryByTestId": [Function],
                  "queryByText": [Function],
                  "queryByTitle": [Function],
                  "rerender": [Function],
                  "unmount": [Function],
                }
            `)
        })
    })
})
