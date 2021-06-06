/* eslint-disable no-irregular-whitespace */
import React from 'react'
import renderer from 'react-test-renderer'
import { SEASON_REGISTER_STEPS } from 'utils/constants'
import TermsAndConditions from '.'
import { useStaticQuery } from 'gatsby'

describe('TermsAndConditions', () => {
    beforeAll(() => {
        useStaticQuery.mockReturnValue({
            allMarkdownRemark: {
                edges: [
                    {
                        node: {
                            html:
                                '<p>TERMS OF USE</p>\n<p>Last updated February 18, 2021</p>\n<p>AGREEMENT TO TERMS</p>',
                        },
                    },
                ],
            },
        })
    })
    const mockValidations = {
        [SEASON_REGISTER_STEPS.TERMS_AND_CONDITIONS]: false,
        [SEASON_REGISTER_STEPS.PAYMENT]: false,
    }
    const setFieldValidation = jest.fn()

    it('renders', () => {
        const tree = renderer
            .create(<TermsAndConditions setFieldValidation={setFieldValidation} fieldValidation={mockValidations} />)
            .toJSON()
        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              margin: 20px;
            }

            .emotion-2 {
              padding-top: 0px;
            }

            .emotion-6 {
              height: 400px;
              overflow: scroll;
              border: 1px solid #ccc;
              margin: 5px 0;
              padding: 10px 20px;
            }

            @media (min-width: 992px) {
              .emotion-6 {
                width: 850px;
                height: 400px;
              }
            }

            .emotion-8 {
              color: #1e2427;
              -webkit-transition: color 0.5s;
              transition: color 0.5s;
            }

            .dark .emotion-8 {
              color: #FFF;
            }

            .emotion-10 {
              padding-top: 10px;
            }

            .emotion-12 {
              -webkit-appearence: button;
              -moz-appearence: button;
              -ms-appearence: button;
              appearence: button;
              border: 1px solid;
              border-radius: 1px;
              cursor: pointer;
              display: inline;
              margin-top: 5px;
              margin-bottom: 5px;
              margin-left: 9px;
              margin-right: 9px;
              padding-top: 3px;
              padding-bottom: 3px;
              padding-right: 3px;
              padding-left: 3px;
              width: 2px;
              height: 25px;
            }

            .emotion-12:after {
              content: &nbsp;
              font-size: 20px;
              color: #c60028;
            }

            .emotion-14 {
              position: absolute;
              left: -9999px;
            }

            .emotion-14:checked+label {
              color: red;
            }

            <div
              className="emotion-0 emotion-1"
            >
              <div
                className="emotion-2 emotion-3"
              >
                Read through Terms and Conditions
              </div>
              <div
                className="emotion-2 emotion-3"
              >
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-8 emotion-9"
                    dangerouslySetInnerHTML={
                      Object {
                        "__html": "<p>TERMS OF USE</p>
            <p>Last updated February 18, 2021</p>
            <p>AGREEMENT TO TERMS</p>",
                      }
                    }
                  />
                </div>
              </div>
              <div
                className="emotion-10 emotion-3"
              >
                I Agree to the Terms of Service
                <label
                  className="emotion-12 emotion-13"
                >
                  <input
                    className="emotion-14 emotion-15"
                    onClick={[Function]}
                    role="checkbox"
                    type="checkbox"
                  />
                </label>
              </div>
            </div>
        `)
    })
})
