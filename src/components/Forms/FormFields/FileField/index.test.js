import React from 'react'
import renderer from 'react-test-renderer'

import FileField from './'

describe('FileField', () => {
    describe('added', () => {
        it('renders', () => {
            const tree = renderer.create(<FileField />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  margin-top: 20px;
                  margin-bottom: 20px;
                }

                .emotion-2 {
                  width: 0.1px;
                  height: 0.1px;
                  opacity: 0;
                  overflow: hidden;
                  position: absolute;
                  z-index: -1;
                }

                .emotion-2+label {
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

                @media (min-width: 992px) {
                  .emotion-2+label {
                    width: 50%;
                  }
                }

                @media (min-width: 768px) {
                  .emotion-2+label {
                    width: 50%;
                  }
                }

                .emotion-2+label * {
                  pointer-events: none;
                }

                .emotion-2:focus+label {
                  outline: 1px dotted #000;
                  outline: -webkit-focus-ring-color auto 5px;
                }

                .emotion-4 {
                  background: #1e2427;
                  -webkit-transition: background 0.5s,border-color 0.5s,color 0.5s;
                  transition: background 0.5s,border-color 0.5s,color 0.5s;
                }

                .dark .emotion-4 {
                  background: #263238;
                  border-color: #FFF;
                  color: #FFF;
                }

                <div
                  className="emotion-0 emotion-1"
                >
                  <input
                    className="emotion-2 emotion-3"
                    id="file"
                    name="file"
                    type="file"
                  />
                  <label
                    className="emotion-4 emotion-5"
                    htmlFor="file"
                  >
                    Change Profile Photo
                  </label>
                </div>
            `)
        })
    })
})
