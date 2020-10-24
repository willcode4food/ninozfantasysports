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

                .emotion-10 {
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

                .dark .emotion-10 {
                  background-color: #263238;
                  border: 1px solid #FFF;
                  color: #FFF;
                }

                .emotion-8 {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-flex-direction: row;
                  -ms-flex-direction: row;
                  flex-direction: row;
                  -webkit-box-pack: space-around;
                  -webkit-justify-content: space-around;
                  -ms-flex-pack: space-around;
                  justify-content: space-around;
                }

                @media (min-width:992px) {
                  .emotion-8 {
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                  }
                }

                @media (min-width:768px) {
                  .emotion-8 {
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                  }
                }

                .emotion-4 {
                  -webkit-flex-basis: 25%;
                  -ms-flex-preferred-size: 25%;
                  flex-basis: 25%;
                }

                @media (min-width:992px) {
                  .emotion-4 {
                    -webkit-flex-basis: 10%;
                    -ms-flex-preferred-size: 10%;
                    flex-basis: 10%;
                  }
                }

                @media (min-width:768px) {
                  .emotion-4 {
                    -webkit-flex-basis: 10%;
                    -ms-flex-preferred-size: 10%;
                    flex-basis: 10%;
                  }
                }

                .emotion-6 {
                  -webkit-flex-basis: 75%;
                  -ms-flex-preferred-size: 75%;
                  flex-basis: 75%;
                  text-align: left;
                }

                @media (min-width:992px) {
                  .emotion-6 {
                    text-align: center;
                    -webkit-flex-basis: 25%;
                    -ms-flex-preferred-size: 25%;
                    flex-basis: 25%;
                  }
                }

                @media (min-width:768px) {
                  .emotion-6 {
                    text-align: center;
                    -webkit-flex-basis: 30%;
                    -ms-flex-preferred-size: 30%;
                    flex-basis: 30%;
                  }
                }

                <label
                  htmlFor="Submit"
                >
                  <input
                    className="emotion-0 emotion-1"
                    type="submit"
                  />
                  <button
                    className="emotion-10 emotion-11"
                  >
                    <div
                      className="emotion-8 emotion-9"
                    >
                      <div
                        className="emotion-4 emotion-5"
                      >
                        <svg
                          className="emotion-2 emotion-3"
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
                        className="emotion-6 emotion-7"
                      />
                    </div>
                  </button>
                </label>
            `)
        })
    })
})
