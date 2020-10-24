import React from 'react'
import renderer from 'react-test-renderer'

import HamburgerArrow from './'

describe('HamburgerArrow', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<HamburgerArrow />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-4 {
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
                  -webkit-transition-duration: 0.15s;
                  transition-duration: 0.15s;
                  -webkit-transition-property: opacity,filter;
                  transition-property: opacity,filter;
                  -webkit-transition-timing-function: linear;
                  transition-timing-function: linear;
                }

                .emotion-2 {
                  height: 24px;
                  position: relative;
                  width: 30px;
                }

                .emotion-0 {
                  background-color: #C4C8D8;
                  border-radius: 2px;
                  height: 2px;
                  position: absolute;
                  -webkit-transition-duration: 0.15s;
                  transition-duration: 0.15s;
                  -webkit-transition-property: -webkit-transform;
                  -webkit-transition-property: transform;
                  transition-property: transform;
                  -webkit-transition-timing-function: ease;
                  transition-timing-function: ease;
                  width: 20px;
                  display: block;
                  margin-top: -2px;
                  top: 50%;
                }

                .dark .emotion-0 {
                  background-color: #FFF;
                  -webkit-transition: background-color 0.5s;
                  transition: background-color 0.5s;
                }

                .emotion-0::before {
                  background-color: #C4C8D8;
                  border-radius: 2px;
                  height: 2px;
                  position: absolute;
                  -webkit-transition-duration: 0.15s;
                  transition-duration: 0.15s;
                  -webkit-transition-property: -webkit-transform;
                  -webkit-transition-property: transform;
                  transition-property: transform;
                  -webkit-transition-timing-function: ease;
                  transition-timing-function: ease;
                  width: 20px;
                  content: '';
                  display: block;
                  top: -5px;
                }

                .dark .emotion-0::before {
                  background-color: #FFF;
                  -webkit-transition: background-color 0.5s;
                  transition: background-color 0.5s;
                }

                .emotion-0::after {
                  background-color: #C4C8D8;
                  border-radius: 2px;
                  height: 2px;
                  position: absolute;
                  -webkit-transition-duration: 0.15s;
                  transition-duration: 0.15s;
                  -webkit-transition-property: -webkit-transform;
                  -webkit-transition-property: transform;
                  transition-property: transform;
                  -webkit-transition-timing-function: ease;
                  transition-timing-function: ease;
                  width: 20px;
                  content: '';
                  display: block;
                  bottom: -5px;
                }

                .dark .emotion-0::after {
                  background-color: #FFF;
                  -webkit-transition: background-color 0.5s;
                  transition: background-color 0.5s;
                }

                <div
                  className="emotion-4 emotion-5"
                >
                  <div
                    className="emotion-2 emotion-3"
                  >
                    <span
                      className="emotion-0 emotion-1"
                    />
                  </div>
                </div>
            `)
        })
    })
})
