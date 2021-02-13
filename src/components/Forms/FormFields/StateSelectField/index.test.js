import React from 'react'
import renderer from 'react-test-renderer'

import StateSelectField from './'

describe('StateSelectField', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<StateSelectField />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  padding-left: 10px;
                  padding-right: 4px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  color: #1e2427;
                  background-color: transparent;
                  width: 100%;
                  box-shadow: #C4C8D8 0px 0px 0px 1px inset;
                  font-family: inherit;
                  font-size: inherit;
                  line-height: inherit;
                  -webkit-appearance: none;
                  margin: 0px;
                  border-radius: 4px;
                  border-width: 0px;
                  border-style: initial;
                  border-color: initial;
                  border-image: initial;
                  background-image: linear-gradient(45deg, transparent 50%, gray 50%),linear-gradient(135deg, gray 50%, transparent 50%),linear-gradient(to right, #ccc, #ccc);
                  padding-top: 13px;
                  padding-bottom: 13px;
                  -webkit-background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) 0.5em;
                  background-position: calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) 0.5em;
                  -webkit-background-size: 5px 5px,5px 5px,1px 1.5em;
                  background-size: 5px 5px,5px 5px,1px 1.5em;
                  background-repeat: no-repeat;
                }

                .dark .emotion-0 {
                  color: #FFF;
                }

                <select
                  className="emotion-0 emotion-1"
                  tabIndex={-1}
                >
                  <option
                    value=""
                  >
                    Select a State
                  </option>
                  <option
                    value="AL"
                  >
                    Alabama
                  </option>
                  <option
                    value="AK"
                  >
                    Alaska
                  </option>
                  <option
                    value="AZ"
                  >
                    Arizona
                  </option>
                  <option
                    value="AR"
                  >
                    Arkansas
                  </option>
                  <option
                    value="CA"
                  >
                    California
                  </option>
                  <option
                    value="CO"
                  >
                    Colorado
                  </option>
                  <option
                    value="CT"
                  >
                    Connecticut
                  </option>
                  <option
                    value="DC"
                  >
                    District of Columbia
                  </option>
                  <option
                    value="DE"
                  >
                    Delaware
                  </option>
                  <option
                    value="FL"
                  >
                    Florida
                  </option>
                  <option
                    value="GA"
                  >
                    Georgia
                  </option>
                  <option
                    value="HI"
                  >
                    Hawaii
                  </option>
                  <option
                    value="ID"
                  >
                    Idaho
                  </option>
                  <option
                    value="IL"
                  >
                    Illinois
                  </option>
                  <option
                    value="IN"
                  >
                    Indiana
                  </option>
                  <option
                    value="IA"
                  >
                    Iowa
                  </option>
                  <option
                    value="KS"
                  >
                    Kansas
                  </option>
                  <option
                    value="KY"
                  >
                    Kentucky
                  </option>
                  <option
                    value="LA"
                  >
                    Louisiana
                  </option>
                  <option
                    value="ME"
                  >
                    Maine
                  </option>
                  <option
                    value="MD"
                  >
                    Maryland
                  </option>
                  <option
                    value="MA"
                  >
                    Massachusetts
                  </option>
                  <option
                    value="MI"
                  >
                    Michigan
                  </option>
                  <option
                    value="MN"
                  >
                    Minnesota
                  </option>
                  <option
                    value="MS"
                  >
                    Mississippi
                  </option>
                  <option
                    value="MO"
                  >
                    Missouri
                  </option>
                  <option
                    value="MT"
                  >
                    Montana
                  </option>
                  <option
                    value="NE"
                  >
                    Nebraska
                  </option>
                  <option
                    value="NV"
                  >
                    Nevada
                  </option>
                  <option
                    value="NH"
                  >
                    New Hampshire
                  </option>
                  <option
                    value="NJ"
                  >
                    New Jersey
                  </option>
                  <option
                    value="NM"
                  >
                    New Mexico
                  </option>
                  <option
                    value="NY"
                  >
                    New York
                  </option>
                  <option
                    value="NC"
                  >
                    North Carolina
                  </option>
                  <option
                    value="ND"
                  >
                    North Dakota
                  </option>
                  <option
                    value="OH"
                  >
                    Ohio
                  </option>
                  <option
                    value="OK"
                  >
                    Oklahoma
                  </option>
                  <option
                    value="OR"
                  >
                    Oregon
                  </option>
                  <option
                    value="PA"
                  >
                    Pennsylvania
                  </option>
                  <option
                    value="RI"
                  >
                    Rhode Island
                  </option>
                  <option
                    value="SC"
                  >
                    South Carolina
                  </option>
                  <option
                    value="SD"
                  >
                    South Dakota
                  </option>
                  <option
                    value="TN"
                  >
                    Tennessee
                  </option>
                  <option
                    value="TX"
                  >
                    Texas
                  </option>
                  <option
                    value="UT"
                  >
                    Utah
                  </option>
                  <option
                    value="VT"
                  >
                    Vermont
                  </option>
                  <option
                    value="VA"
                  >
                    Virginia
                  </option>
                  <option
                    value="WA"
                  >
                    Washington
                  </option>
                  <option
                    value="WV"
                  >
                    West Virginia
                  </option>
                  <option
                    value="WI"
                  >
                    Wisconsin
                  </option>
                  <option
                    value="WY"
                  >
                    Wyoming
                  </option>
                </select>
            `)
        })
    })
})
