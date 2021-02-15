import React from 'react'
import renderer from 'react-test-renderer'

import EmailSubmitButton from './'

describe('EmailSubmitButton', () => {
    describe('when added', () => {
        it('renders', () => {
            const tree = renderer.create(<EmailSubmitButton />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  display: none;
                }

                .emotion-2 {
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

                .dark .emotion-2 {
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
                  -ms-flex-pack: center;
                  -webkit-justify-content: center;
                  justify-content: center;
                  -webkit-align-items: flex-start;
                  -webkit-box-align: flex-start;
                  -ms-flex-align: flex-start;
                  align-items: flex-start;
                }

                .emotion-6 {
                  line-height: 1px;
                  font-size: 1.68179rem;
                  padding-left: 20px;
                  padding-right: 20px;
                  padding-top: 5px;
                  padding-bottom: 5px;
                }

                .emotion-10 {
                  -webkit-align-self: center;
                  -ms-flex-item-align: center;
                  align-self: center;
                  font-size: 1.12246rem;
                }

                <label
                  htmlFor="Submit"
                >
                  <input
                    className="emotion-0 emotion-1"
                    type="submit"
                  />
                  <button
                    className="emotion-2 emotion-3"
                  >
                    <div
                      className="emotion-4 emotion-5"
                    >
                      <div
                        className="emotion-6 emotion-7"
                      >
                        <svg
                          className="emotion-8 emotion-9"
                          fill="none"
                          height="1em"
                          stroke="currentColor"
                          strokeWidth="0"
                          style={
                            Object {
                              "color": undefined,
                            }
                          }
                          viewBox="0 0 24 24"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div
                        className="emotion-10 emotion-11"
                      />
                    </div>
                  </button>
                </label>
            `)
        })
    })
})
