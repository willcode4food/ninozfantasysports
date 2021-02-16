/* eslint-disable no-irregular-whitespace */
import React from 'react'
import renderer from 'react-test-renderer'

import VerifyAgeModal from './'

describe('VerifyAgeModal', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<VerifyAgeModal hasAgeVerified={false} />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  height: 100vh;
                  width: 100vw;
                  position: fixed;
                  top: 0;
                  z-index: 4;
                }

                .emotion-2 {
                  background: #FFF;
                  border-radius: 4px;
                  box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.25),0 0 32px rgba(0, 0, 0, 0.25);
                  left: 50%;
                  max-width: 100vw;
                  max-height: 100vh;
                  overflow: auto;
                  padding: 16px;
                  position: fixed;
                  top: 50%;
                  -webkit-transform: translate(-50%, -50%);
                  -moz-transform: translate(-50%, -50%);
                  -ms-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  height: calc(80vh - 70px);
                  width: 70vw;
                }

                .dark .emotion-2 {
                  background: #495358;
                }

                @media (min-width: 992px) {
                  .emotion-2 {
                    height: calc(70vh - 70px);
                    width: 40vw;
                  }
                }

                .emotion-4 {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  -webkit-box-pack: start;
                  -ms-flex-pack: start;
                  -webkit-justify-content: flex-start;
                  justify-content: flex-start;
                  height: 80%;
                }

                .emotion-6 {
                  text-align: left;
                  text-transform: uppercase;
                }

                .emotion-8 {
                  -webkit-box-flex: 4;
                  -webkit-flex-grow: 4;
                  -ms-flex-positive: 4;
                  flex-grow: 4;
                }

                .emotion-10 {
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  -webkit-box-pack: space-around;
                  -ms-flex-pack: space-around;
                  -webkit-justify-content: space-around;
                  justify-content: space-around;
                  height: 100%;
                }

                @media (min-width: 992px) {
                  .emotion-10 {
                    padding-left: 20px;
                    padding-right: 20px;
                  }
                }

                .emotion-12 {
                  -webkit-align-self: center;
                  -ms-flex-item-align: center;
                  align-self: center;
                }

                .emotion-14 {
                  font-size: 1.41421rem;
                }

                .emotion-24 {
                  border: 1px solid #FF1647;
                  border-radius: 4px;
                  background: #FF1647;
                  color: #FFF;
                  font-size: 1.12246rem;
                  font-family: Fjalla One;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  padding-right: 20px;
                  padding-left: 20px;
                  width: 100%;
                }

                .emotion-24:disabled {
                  background: #495358;
                  border-color: #495358;
                  color: #C4C8D8;
                }

                .emotion-24:hover {
                  background: #FF1647;
                }

                .dark .emotion-24 {
                  color: #FFF;
                  background: #FF1647;
                  border: 1px solid #FF1647;
                }

                .dark .emotion-24:disabled {
                  background: #495358;
                  color: #1e2427;
                  border-color: #495358;
                }

                <div
                  className="emotion-0 emotion-1"
                >
                  <div
                    className="emotion-2 emotion-3"
                    onClick={[Function]}
                  >
                    <div
                      className="emotion-4 emotion-5"
                    >
                      <div>
                        <h2
                          className="emotion-6 emotion-7"
                        >
                          Welcome!
                        </h2>
                      </div>
                      <div
                        className="emotion-8 emotion-9"
                      >
                        <div
                          className="emotion-10 emotion-11"
                        >
                          <div
                            className="emotion-12 emotion-13"
                          >
                            <input
                              onChange={[Function]}
                              type="checkbox"
                            />
                              
                            <span
                              className="emotion-14 emotion-15"
                            >
                              I am at least 21 years old and I agree to the  
                            </span>
                            <a
                              href="/privacy-policy"
                              target="_blank"
                            >
                              <span
                                className="emotion-14 emotion-15"
                              >
                                Privacy Policy
                              </span>
                            </a>
                            <span
                              className="emotion-14 emotion-15"
                            >
                               and 
                            </span>
                            <a
                              href="/terms-of-use"
                              target="_blank"
                            >
                              <span
                                className="emotion-14 emotion-15"
                              >
                                Terms of Use.
                              </span>
                            </a>
                          </div>
                          <div
                            className="emotion-12 emotion-13"
                          >
                            <button
                              className="emotion-24 emotion-25"
                              color="#FF1647"
                              onClick={[Function]}
                            >
                              I am of Age
                            </button>
                          </div>
                          <div
                            className="emotion-12 emotion-13"
                          >
                            <span
                              className="emotion-14 emotion-15"
                            >
                              We also use cookies to help us deliver a personalized experience and display relevant promotions. By using this website, you agree to our use of cookies. Please take a moment to review our
                               
                              <a
                                href="/cookie-policy"
                                target="_blank"
                              >
                                cookie policy
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            `)
        })
    })
})
