import React from 'react'
import renderer from 'react-test-renderer'

import UserMenu from './'

describe('UserMenu', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<UserMenu />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-2 {
                  display: none;
                }

                @media (min-width:992px) {
                  .emotion-2 {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-direction: row;
                    -ms-flex-direction: row;
                    flex-direction: row;
                    padding-left: 5px;
                  }
                }

                .emotion-0 {
                  -webkit-align-self: center;
                  -ms-flex-item-align: center;
                  align-self: center;
                }

                .emotion-0 a {
                  margin: 20px 0;
                }

                <div
                  className="emotion-2 emotion-3"
                >
                  <div
                    className="emotion-0 emotion-1"
                  >
                    <a
                      href="/login"
                      onClick={[Function]}
                    >
                      Login
                    </a>
                  </div>
                </div>
            `)
        })
    })
})
