import React from 'react'
import { StaticQuery } from 'gatsby'
import { render, waitFor } from '@testing-library/react'
import SEO from './'

const gatsbyConfig = require('../../../gatsby-config.js')

const { siteMetadata } = gatsbyConfig
beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata,
            },
        })
    )
})

describe('SEO', () => {
    describe('when it is added', () => {
        it('renders', async () => {
            const tree = render(<SEO description="description" image="image.png" pathname="/pathname" title="title" />)
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
})
