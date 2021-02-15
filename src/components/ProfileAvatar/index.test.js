import React from 'react'
import renderer from 'react-test-renderer'

import ProfileAvatar from './'

describe('ProfileAvatar', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<ProfileAvatar displayText="display text" />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  -webkit-justify-content: center;
                  justify-content: center;
                  margin: 0;
                  margin-top: 10px;
                  margin-bottom: 10px;
                }

                .emotion-4 {
                  background-color: #FFF;
                  border: 1px solid #c60028;
                  border-radius: 50%;
                  height: 9rem;
                  text-align: center;
                  width: 9rem;
                }

                .emotion-6 {
                  font-size: calc(9rem / 2);
                  color: #c60028;
                  top: calc(9rem / 4);
                  line-height: 1;
                  position: relative;
                }

                <div
                  className="emotion-0 emotion-1"
                >
                  <div
                    className="emotion-2 emotion-3"
                  >
                    <div
                      className="emotion-4 emotion-5"
                      width="9rem"
                    >
                      <div
                        className="emotion-6 emotion-7"
                        width="9rem"
                      >
                        
                      </div>
                    </div>
                  </div>
                </div>
            `)
        })
    })
})
