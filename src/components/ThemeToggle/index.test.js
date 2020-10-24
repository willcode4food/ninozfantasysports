import React from 'react'
import renderer from 'react-test-renderer'

import ThemeToggle from './'

describe('ThemeToggle', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<ThemeToggle />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  padding: 0;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  background: transparent;
                  border-radius: 5px;
                  border: 0;
                  cursor: pointer;
                  display: -webkit-inline-box;
                  display: -webkit-inline-flex;
                  display: -ms-inline-flexbox;
                  display: inline-flex;
                  height: 30px;
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  margin-right: -11px;
                  opacity: 0.75;
                  overflow: hidden;
                  position: relative;
                  -webkit-transform: scale(0.75);
                  -ms-transform: scale(0.75);
                  transform: scale(0.75);
                  -webkit-transition: opacity 0.3s ease;
                  transition: opacity 0.3s ease;
                  width: 30px;
                  opacity: 1;
                }

                <button
                  aria-label="Activate dark mode"
                  className="emotion-0 emotion-1"
                  onClick={[Function]}
                  title="Activate dark mode"
                >
                  <div
                    style={
                      Object {
                        "height": "24px",
                      }
                    }
                  />
                </button>
            `)
        })
    })
})
