import React from 'react'
import { render } from '@testing-library/react'
import { Helmet } from 'react-helmet'
import Adapter from 'enzyme-adapter-react-16'
import { StaticQuery, graphql } from 'gatsby'
import { configure, mount } from 'enzyme'
import SEO from './'
const gatsbyConfig = require('../../../gatsby-config.js')

configure({ adapter: new Adapter() })

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
        it('renders', () => {
            const wrapper = mount(
                <SEO description="description" image="image.png" pathname="/pathname" title="title" />
            )
            const helmet = Helmet.peek()
            expect(helmet).toMatchInlineSnapshot(`
                Object {
                  "baseTag": Array [],
                  "bodyAttributes": Object {},
                  "defer": true,
                  "encode": true,
                  "htmlAttributes": Object {},
                  "linkTags": Array [],
                  "metaTags": Array [
                    Object {
                      "content": "description",
                      "name": "description",
                    },
                    Object {
                      "content": "https://www.pondstreetsoftware.comimage.png",
                      "name": "image",
                    },
                    Object {
                      "content": "https://www.pondstreetsoftware.com/pathname",
                      "property": "og:url",
                    },
                    Object {
                      "content": "title",
                      "property": "og:title",
                    },
                    Object {
                      "content": "description",
                      "property": "og:description",
                    },
                    Object {
                      "content": "https://www.pondstreetsoftware.comimage.png",
                      "property": "og:image",
                    },
                    Object {
                      "content": "summary_large_image",
                      "name": "twitter:card",
                    },
                    Object {
                      "content": "@pondstreetsoftware",
                      "name": "twitter:creator",
                    },
                    Object {
                      "content": "title",
                      "name": "twitter:title",
                    },
                    Object {
                      "content": "description",
                      "name": "twitter:description",
                    },
                    Object {
                      "content": "image.png",
                      "name": "twitter:image",
                    },
                    Object {
                      "content": "title",
                      "name": "twitter:title",
                    },
                    Object {
                      "content": "description",
                      "name": "twitter:description",
                    },
                    Object {
                      "content": "https://www.pondstreetsoftware.comimage.png",
                      "name": "twitter:image",
                    },
                  ],
                  "noscriptTags": Array [],
                  "onChangeClientState": [Function],
                  "scriptTags": Array [],
                  "styleTags": Array [],
                  "title": "title",
                  "titleAttributes": Object {},
                }
            `)
        })
    })
})
