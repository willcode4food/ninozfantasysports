import React from 'react'
import renderer from 'react-test-renderer'

import FileField from './'

describe('FileField', () => {
    describe('added', () => {
        it('renders', () => {
            const tree = renderer.create(<FileField />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-4 {
                  margin-top: 20px;
                  margin-bottom: 20px;
                }

                .emotion-0 {
                  width: 0.1px;
                  height: 0.1px;
                  opacity: 0;
                  overflow: hidden;
                  position: absolute;
                  z-index: -1;
                }

                .emotion-0 + label {
                  background-color: #FFF;
                  border: 1px solid #1e2427;
                  border-radius: 4px;
                  color: #1e2427;
                  cursor: pointer;
                  font-family: Arial;
                  font-size: 16px;
                  padding: 14px 28px;
                  text-align: center;
                  width: 100%;
                }

                @media (min-width:992px) {
                  .emotion-0 + label {
                    width: 50%;
                  }
                }

                @media (min-width:768px) {
                  .emotion-0 + label {
                    width: 50%;
                  }
                }

                .emotion-0 + label * {
                  pointer-events: none;
                }

                .emotion-0:focus + label {
                  outline: 1px dotted #000;
                  outline: -webkit-focus-ring-color auto 5px;
                }

                .emotion-2 {
                  background: #1e2427;
                  -webkit-transition: background 0.5s,border-color 0.5s,color 0.5s;
                  transition: background 0.5s,border-color 0.5s,color 0.5s;
                }

                .dark .emotion-2 {
                  background: #263238;
                  border-color: #FFF;
                  color: #FFF;
                }

                <div
                  className="emotion-4 emotion-5"
                >
                  <input
                    className="emotion-0 emotion-1"
                    id="file"
                    name="file"
                    type="file"
                  />
                  <label
                    className="emotion-2 emotion-3"
                    htmlFor="file"
                  >
                    Change Profile Photo
                  </label>
                </div>
            `)
        })
    })
})
