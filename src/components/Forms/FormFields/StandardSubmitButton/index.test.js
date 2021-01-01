import React from 'react'
import renderer from 'react-test-renderer'

import StandardSubmitButton from './'

describe('StandardSubmitButton', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<StandardSubmitButton />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  display: none;
                }

                .emotion-6 {
                  color: #1e2427;
                  background-color: #FFF;
                  border: 1px solid #495358;
                  border-radius: 4px;
                  cursor: pointer;
                  font-size: 16px;
                  padding: 14px 28px;
                  text-align: center;
                  width: 100%;
                  -webkit-transition: background-color 0.5s,border 0.5s,color 0.5s;
                  transition: background-color 0.5s,border 0.5s,color 0.5s;
                }

                .dark .emotion-6 {
                  background-color: #263238;
                  border: 1px solid #FFF;
                  color: #FFF;
                }

                .emotion-4 {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-flex-direction: row;
                  -ms-flex-direction: row;
                  flex-direction: row;
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  -webkit-align-items: flex-start;
                  -webkit-box-align: flex-start;
                  -ms-flex-align: flex-start;
                  align-items: flex-start;
                }

                .emotion-2 {
                  text-align: center;
                }

                <label
                  htmlFor="Submit"
                >
                  <input
                    className="emotion-0 emotion-1"
                    type="submit"
                  />
                  <button
                    className="emotion-6 emotion-7"
                  >
                    <div
                      className="emotion-4 emotion-5"
                    >
                      <div
                        className="emotion-2 emotion-3"
                      />
                    </div>
                  </button>
                </label>
            `)
        })
    })
})
