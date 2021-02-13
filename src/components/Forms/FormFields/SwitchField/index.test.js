import React from 'react'
import renderer from 'react-test-renderer'

import SwitchField from './'

describe('SwitchField', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<SwitchField />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  position: relative;
                  display: inline-block;
                  width: 43px;
                  height: 24px;
                }

                .emotion-0input {
                  opacity: 0;
                  width: 0;
                  height: 0;
                }

                .emotion-2 {
                  opacity: 0;
                  width: 0;
                  height: 0;
                }

                .emotion-2:checked+span {
                  background: #c60028;
                }

                .dark .emotion-2:checked+span {
                  border: 1px solid #c60028;
                }

                .emotion-2:focus+span {
                  box-shadow: 0 0 1px #2196f3;
                }

                .emotion-2:checked+span:before {
                  -webkit-transform: translateX(19px);
                  -moz-transform: translateX(19px);
                  -ms-transform: translateX(19px);
                  transform: translateX(19px);
                }

                .emotion-4 {
                  position: absolute;
                  cursor: pointer;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: #ccc;
                  border-radius: 34px;
                  -webkit-transition: 0.4s;
                  -webkit-transition: 0.4s;
                  transition: 0.4s;
                }

                .dark .emotion-4 {
                  background: #1e2427;
                  border: solid 1px #FFF;
                }

                .emotion-4:before {
                  position: absolute;
                  content: '';
                  height: 16px;
                  width: 16px;
                  left: 4px;
                  bottom: 4px;
                  background: #FFF;
                  border-radius: 50%;
                  -webkit-transition: 0.4s;
                  -webkit-transition: 0.4s;
                  transition: 0.4s;
                }

                .dark .emotion-4:before {
                  bottom: 3px;
                }

                <label
                  className="emotion-0 emotion-1"
                >
                  <input
                    className="emotion-2 emotion-3"
                    type="checkbox"
                  />
                  <span
                    className="emotion-4 emotion-5"
                  />
                </label>
            `)
        })
    })
})
