import React from 'react'
import renderer from 'react-test-renderer'

import SubmitButton from './'

describe('SubmitButton', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<SubmitButton />).toJSON()
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

                <label
                  htmlFor="Submit"
                >
                  <input
                    className="emotion-0 emotion-1"
                    type="submit"
                  />
                  <button
                    className="emotion-2 emotion-3"
                  />
                </label>
            `)
        })
    })
})
