import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'

import Breadcrumbs from './'

expect.addSnapshotSerializer(serializer)

describe('Breadcrumbs', () => {
    describe('it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<Breadcrumbs location={location} />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-4 {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                  overflow: hidden;
                }

                .emotion-2 {
                  float: left;
                  font-size: 0.75rem;
                  text-transform: uppercase;
                  text-align: center;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                }

                @media (min-width:992px) {
                  .emotion-2 {
                    font-size: 0.875rem;
                  }
                }

                @media (min-width:768px) {
                  .emotion-2 {
                    font-size: 0.875rem;
                  }
                }

                .emotion-0 {
                  padding-left: 10px;
                  padding-right: 10px;
                }

                <nav
                  aria-label="Breadcrumbs"
                  className="emotion-6 emotion-7"
                >
                  <ul
                    className="emotion-4 emotion-5"
                  >
                    <li
                      className="emotion-2 emotion-3"
                    >
                      <a
                        aria-label="Home"
                        className="emotion-0 emotion-1"
                        href="/"
                      >
                        Home
                      </a>
                      /
                    </li>
                  </ul>
                </nav>
            `)
        })
    })
})
