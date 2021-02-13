import React from 'react'
import renderer from 'react-test-renderer'

import SliderField from './'

describe('SliderField', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<SliderField />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  -webkit-appearance: none;
                  margin: 8px 0;
                  width: 100%;
                }

                .emotion-0:focus {
                  outline: none;
                }

                .emotion-0::-webkit-slider-runnable-track {
                  width: 100%;
                  height: 5px;
                  cursor: pointer;
                  animate: 0.2s;
                  background: #ededed;
                  border-radius: 2px;
                  border: 1px solid #ededed;
                }

                .emotion-0::-webkit-slider-thumb {
                  height: 25px;
                  width: 25px;
                  border: 1px solid #c60028;
                  border-radius: 20px;
                  background: #c60028;
                  cursor: pointer;
                  -webkit-appearance: none;
                  margin-top: -12px;
                }

                .emotion-0:focus::-webkit-slider-runnable-track {
                  background: #367ebd;
                }

                .emotion-0::-moz-range-track {
                  width: 100%;
                  height: 4px;
                  cursor: pointer;
                  animate: 0.2s;
                  border-radius: 1.3px;
                  border: 1px solid;
                }

                .emotion-0::-moz-range-thumb {
                  height: 36px;
                  width: 16px;
                  border: 1px solid;
                  border-radius: 5px;
                  cursor: pointer;
                  -webkit-appearance: none;
                  margin-top: -14px;
                }

                .emotion-0::-ms-track {
                  width: 100%;
                  height: 4px;
                  cursor: pointer;
                  animate: 0.2s;
                  border-radius: 1.3px;
                  border: 1px solid;
                }

                .emotion-0::-ms-fill-lower {
                  background: #2a6495;
                  border: 0.2px solid #010101;
                  border-radius: 2.6px;
                  box-shadow: 1px 1px 1px #000000,0px 0px 1px #0d0d0d;
                }

                .emotion-0::-ms-fill-upper {
                  background: #3071a9;
                  border: 0.2px solid #010101;
                  border-radius: 2.6px;
                  box-shadow: 1px 1px 1px #000000,0px 0px 1px #0d0d0d;
                }

                .emotion-0::-ms-thumb {
                  box-shadow: 1px 1px 1px #000000,0px 0px 1px #0d0d0d;
                  border: 1px solid #000000;
                  height: 36px;
                  width: 16px;
                  border-radius: 3px;
                  background: #ffffff;
                  cursor: pointer;
                }

                .emotion-0:focus::-ms-fill-lower {
                  background: #3071a9;
                }

                .emotion-0:focus::-ms-fill-upper {
                  background: #367ebd;
                }

                <input
                  className="emotion-0 emotion-1"
                />
            `)
        })
    })
})
