import React from 'react'
import renderer from 'react-test-renderer'

import Hero from './'

describe('Hero', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<Hero />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-6 {
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  background-color: #c60028;
                  background-image: url(/images/front-door-bg.jpg);
                  background-repeat: no-repeat;
                  background-size: cover;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  padding: 50px 15px;
                  position: relative;
                  text-align: center;
                  min-height: 450px;
                }

                @media (min-width:992px) {
                  .emotion-6 {
                    padding: 50px 30px;
                  }
                }

                .emotion-4 {
                  color: #fff;
                  margin-bottom: 20px;
                }

                .emotion-0 {
                  border: none;
                  font-size: 5rem;
                  margin-top: 0px;
                }

                .emotion-2 {
                  border: none;
                  font-size: 3rem;
                  margin-top: 0px;
                }

                <div
                  className="emotion-6 emotion-7"
                >
                  <div
                    className="emotion-4 emotion-5"
                  >
                    <h1
                      className="emotion-0 emotion-1"
                    >
                      Welcome
                    </h1>
                    <h3
                      className="emotion-2 emotion-3"
                    >
                      We're going to change the world!
                    </h3>
                  </div>
                </div>
            `)
        })
    })
})
