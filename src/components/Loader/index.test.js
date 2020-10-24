import React from 'react'
import renderer from 'react-test-renderer'

import Loader from './'

describe('Loader', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<Loader />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                @keyframes animation-0 {
                  50% {
                    -webkit-transform: scale(0.75);
                    -ms-transform: scale(0.75);
                    transform: scale(0.75);
                    opacity: 0.2;
                  }

                  100% {
                    -webkit-transform: scale(1);
                    -ms-transform: scale(1);
                    transform: scale(1);
                    opacity: 1;
                  }
                }

                @keyframes animation-0 {
                  50% {
                    -webkit-transform: scale(0.75);
                    -ms-transform: scale(0.75);
                    transform: scale(0.75);
                    opacity: 0.2;
                  }

                  100% {
                    -webkit-transform: scale(1);
                    -ms-transform: scale(1);
                    transform: scale(1);
                    opacity: 1;
                  }
                }

                .emotion-8 {
                  height: calc(80vh - 70px);
                  z-index: 3;
                }

                .emotion-6 {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  height: 100%;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  -webkit-box-pack: center;
                  -webkit-justify-content: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                }

                .emotion-4 {
                  align: flex-start;
                }

                .emotion-0 {
                  display: inline-block;
                  background-color: #c60028;
                  width: 24px;
                  height: 24px;
                  margin: 10px;
                  border-radius: 100%;
                  -webkit-animation: animation-0 0.7s 0s infinite linear;
                  animation: animation-0 0.7s 0s infinite linear;
                  -webkit-animation-fill-mode: both;
                  animation-fill-mode: both;
                }

                .emotion-1 {
                  display: inline-block;
                  background-color: #c60028;
                  width: 24px;
                  height: 24px;
                  margin: 10px;
                  border-radius: 100%;
                  -webkit-animation: animation-0 0.7s 0.35s infinite linear;
                  animation: animation-0 0.7s 0.35s infinite linear;
                  -webkit-animation-fill-mode: both;
                  animation-fill-mode: both;
                }

                <div
                  className="emotion-8 emotion-9"
                >
                  <div
                    className="emotion-6 emotion-7"
                  >
                    <div
                      className="emotion-4 emotion-5"
                    >
                      <div
                        className="emotion-3"
                      >
                        <div
                          className="emotion-0"
                        />
                        <div
                          className="emotion-1"
                        />
                        <div
                          className="emotion-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
            `)
        })
    })
})
