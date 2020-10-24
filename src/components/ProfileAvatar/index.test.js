import React from 'react'
import renderer from 'react-test-renderer'

import ProfileAvatar from './'

describe('ProfileAvatar', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<ProfileAvatar displayText="display text" />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-6 {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  margin: 0;
                  margin-top: 10px;
                  margin-bottom: 10px;
                }

                .emotion-2 {
                  background-color: #FFF;
                  border: 1px solid #c60028;
                  border-radius: 50%;
                  height: 9rem;
                  text-align: center;
                  width: 9rem;
                }

                .emotion-0 {
                  font-size: calc(9rem / 2);
                  color: #c60028;
                  top: calc(9rem / 4);
                  line-height: 1;
                  position: relative;
                }

                <div
                  className="emotion-6 emotion-7"
                >
                  <div
                    className="emotion-4 emotion-5"
                  >
                    <div
                      className="emotion-2 emotion-3"
                      width="9rem"
                    >
                      <div
                        className="emotion-0 emotion-1"
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
