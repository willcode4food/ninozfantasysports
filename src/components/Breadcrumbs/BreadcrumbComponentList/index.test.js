import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'

import BreadcrumbComponentList from './'

expect.addSnapshotSerializer(serializer)

const location = {
    pathname: '/login',
}

describe('BreadcrumbComponentList', () => {
    describe('when added', () => {
        it('renders', () => {
            const tree = renderer.create(<BreadcrumbComponentList location={location} />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
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

                <li
                  className="emotion-2 emotion-3"
                >
                  <span
                    className="emotion-0 emotion-1"
                  >
                    login
                  </span>
                </li>
            `)
        })
    })
})
