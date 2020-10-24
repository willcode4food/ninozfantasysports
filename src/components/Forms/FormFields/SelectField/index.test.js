import React from 'react'
import { render } from '@testing-library/react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import SelectField from './'

configure({ adapter: new Adapter() })

describe('SelectField', () => {
    describe('it is added', () => {
        it('renders', () => {
            const tree = render(<SelectField />)
            expect(tree).toMatchInlineSnapshot(`
                Object {
                  "asFragment": [Function],
                  "baseElement": .emotion-0 {
                  padding-left: 10px;
                  padding-right: 4px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  color: #1e2427;
                  background-color: transparent;
                  width: 100%;
                  box-shadow: #C4C8D8 0px 0px 0px 1px inset;
                  font-family: inherit;
                  font-size: inherit;
                  line-height: inherit;
                  -webkit-appearance: none;
                  margin: 0px;
                  border-radius: 4px;
                  border-width: 0px;
                  border-style: initial;
                  border-color: initial;
                  border-image: initial;
                  background-image: linear-gradient(45deg,transparent 50%,gray 50%),linear-gradient(135deg,gray 50%,transparent 50%),linear-gradient(to right,#ccc,#ccc);
                  padding-top: 13px;
                  padding-bottom: 13px;
                  background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) 0.5em;
                  background-size: 5px 5px,5px 5px,1px 1.5em;
                  background-repeat: no-repeat;
                }

                .dark .emotion-0 {
                  color: #FFF;
                }

                <body>
                    <div>
                      <select
                        class="emotion-0 emotion-1"
                      />
                    </div>
                  </body>,
                  "container": .emotion-0 {
                  padding-left: 10px;
                  padding-right: 4px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  color: #1e2427;
                  background-color: transparent;
                  width: 100%;
                  box-shadow: #C4C8D8 0px 0px 0px 1px inset;
                  font-family: inherit;
                  font-size: inherit;
                  line-height: inherit;
                  -webkit-appearance: none;
                  margin: 0px;
                  border-radius: 4px;
                  border-width: 0px;
                  border-style: initial;
                  border-color: initial;
                  border-image: initial;
                  background-image: linear-gradient(45deg,transparent 50%,gray 50%),linear-gradient(135deg,gray 50%,transparent 50%),linear-gradient(to right,#ccc,#ccc);
                  padding-top: 13px;
                  padding-bottom: 13px;
                  background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) 0.5em;
                  background-size: 5px 5px,5px 5px,1px 1.5em;
                  background-repeat: no-repeat;
                }

                .dark .emotion-0 {
                  color: #FFF;
                }

                <div>
                    <select
                      class="emotion-0 emotion-1"
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
