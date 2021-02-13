import React from 'react'
import renderer from 'react-test-renderer'

import BreadcrumbComponentList from './'

const location = {
    pathname: '/login',
}

describe('BreadcrumbComponentList', () => {
    describe('when added', () => {
        it('renders', () => {
            const tree = renderer.create(<BreadcrumbComponentList location={location} />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  float: left;
                  font-size: 0.75rem;
                  text-transform: uppercase;
                  text-align: center;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                }

                @media (min-width: 992px) {
                  .emotion-0 {
                    font-size: 0.875rem;
                  }
                }

                @media (min-width: 768px) {
                  .emotion-0 {
                    font-size: 0.875rem;
                  }
                }

                .emotion-2 {
                  padding-left: 10px;
                  padding-right: 10px;
                }

                <li
                  className="emotion-0 emotion-1"
                >
                  <span
                    className="emotion-2 emotion-3"
                  >
                    login
                  </span>
                </li>
            `)
        })
    })
})
