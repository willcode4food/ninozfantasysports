import React from 'react'
import renderer from 'react-test-renderer'

import NavDrawer from './'

describe('NavDrawer', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<NavDrawer />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  background-color: white;
                  box-sizing: border-box;
                  color: #fff;
                  height: calc(100vh - 70px);
                  margin-top: 70px;
                  overflow-x: hidden;
                  overflow-y: auto;
                  padding: 0px;
                  position: fixed;
                  -webkit-transition: left 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
                  transition: left 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
                  top: 0;
                  left: -105%;
                  width: 100%;
                  z-index: 2;
                }

                @media (min-width: 992px) {
                  .emotion-0 {
                    box-shadow: 4px 1px 10px -5px rgba(0, 0, 0, 0.75);
                    left: -33%;
                    width: 30%;
                  }
                }

                <div
                  className="emotion-0 emotion-1"
                />
            `)
        })
    })
})
