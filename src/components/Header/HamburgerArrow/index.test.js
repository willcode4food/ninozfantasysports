import React from 'react'
import renderer from 'react-test-renderer'

import HamburgerArrow from './'

describe('HamburgerArrow', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<HamburgerArrow />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  background-color: transparent;
                  border: 0;
                  color: inherit;
                  cursor: pointer;
                  display: inline-block;
                  font: inherit;
                  margin: 0;
                  overflow: visible;
                  padding: 1px;
                  text-transform: none;
                  transition-duration: 0.15s;
                  transition-property: opacity,filter;
                  transition-timing-function: linear;
                }

                .emotion-2 {
                  height: 24px;
                  position: relative;
                  width: 30px;
                }

                .emotion-4 {
                  background-color: #C4C8D8;
                  border-radius: 2px;
                  height: 2px;
                  position: absolute;
                  transition-duration: 0.15s;
                  transition-property: transform;
                  transition-timing-function: ease;
                  width: 20px;
                  display: block;
                  margin-top: -2px;
                  top: 50%;
                }

                .dark .emotion-4 {
                  background-color: #FFF;
                  -webkit-transition: background-color 0.5s;
                  transition: background-color 0.5s;
                }

                .emotion-4::before {
                  background-color: #C4C8D8;
                  border-radius: 2px;
                  height: 2px;
                  position: absolute;
                  transition-duration: 0.15s;
                  transition-property: transform;
                  transition-timing-function: ease;
                  width: 20px;
                  content: '';
                  display: block;
                  top: -5px;
                }

                .dark .emotion-4::before {
                  background-color: #FFF;
                  -webkit-transition: background-color 0.5s;
                  transition: background-color 0.5s;
                }

                .emotion-4::after {
                  background-color: #C4C8D8;
                  border-radius: 2px;
                  height: 2px;
                  position: absolute;
                  transition-duration: 0.15s;
                  transition-property: transform;
                  transition-timing-function: ease;
                  width: 20px;
                  content: '';
                  display: block;
                  bottom: -5px;
                }

                .dark .emotion-4::after {
                  background-color: #FFF;
                  -webkit-transition: background-color 0.5s;
                  transition: background-color 0.5s;
                }

                <div
                  className="emotion-0 emotion-1"
                >
                  <div
                    className="emotion-2 emotion-3"
                  >
                    <span
                      className="emotion-4 emotion-5"
                    />
                  </div>
                </div>
            `)
        })
    })
})
