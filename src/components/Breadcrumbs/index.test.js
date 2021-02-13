import React from 'react'
import renderer from 'react-test-renderer'

import Breadcrumbs from './'

describe('Breadcrumbs', () => {
    describe('it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<Breadcrumbs location={location} />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-2 {
                  list-style-type: none;
                  margin: 0;
                  padding: 0;
                  overflow: hidden;
                }

                .emotion-4 {
                  float: left;
                  font-size: 0.75rem;
                  text-transform: uppercase;
                  text-align: center;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                }

                @media (min-width: 992px) {
                  .emotion-4 {
                    font-size: 0.875rem;
                  }
                }

                @media (min-width: 768px) {
                  .emotion-4 {
                    font-size: 0.875rem;
                  }
                }

                .emotion-6 {
                  padding-left: 10px;
                  padding-right: 10px;
                }

                <nav
                  aria-label="Breadcrumbs"
                  className="emotion-0 emotion-1"
                >
                  <ul
                    className="emotion-2 emotion-3"
                  >
                    <li
                      className="emotion-4 emotion-5"
                    >
                      <a
                        aria-label="Home"
                        className="emotion-6 emotion-7"
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
