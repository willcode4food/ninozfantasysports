import React from 'react'
import { Helmet } from 'react-helmet'
import { render, waitFor } from '@testing-library/react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BreadcrumbSchemaOrg from './'

configure({ adapter: new Adapter() })

const location = {
    pathname: '/login',
}

describe('BreadcrumbSchemaOrg', () => {
    describe('when executed', () => {
        it('produces a valid schema in JSONLD', async () => {
            const tree = render(<BreadcrumbSchemaOrg location={location} />)
            await waitFor(() =>
                expect(tree).toMatchInlineSnapshot(`
                    Object {
                      "asFragment": [Function],
                      "baseElement": <body>
                        <div />
                      </body>,
                      "container": <div />,
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
            )
        })
    })
    describe('when added', () => {
        it('renders', () => {
            // eslint-disable-next-line no-unused-vars
            const wrapper = mount(<BreadcrumbSchemaOrg location={location} />)
            const helmet = Helmet.peek()

            expect(helmet).toMatchInlineSnapshot(`
                Object {
                  "baseTag": Array [],
                  "bodyAttributes": Object {},
                  "defer": true,
                  "encode": true,
                  "htmlAttributes": Object {},
                  "linkTags": Array [],
                  "metaTags": Array [],
                  "noscriptTags": Array [],
                  "onChangeClientState": [Function],
                  "scriptTags": Array [
                    Object {
                      "innerHTML": "[{\\"@context\\":\\"http://schema.org\\",\\"@type\\":\\"BreadcrumbList\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"item\\":{\\"@id\\":\\"undefined/\\",\\"name\\":\\"home\\"}},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"item\\":{\\"@id\\":\\"undefined//login\\",\\"name\\":\\"login\\"}}]}]",
                      "type": "application/ld+json",
                    },
                  ],
                  "styleTags": Array [],
                  "title": undefined,
                  "titleAttributes": Object {},
                }
            `)
        })
    })
})
