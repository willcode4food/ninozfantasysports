/* eslint-disable no-irregular-whitespace */
import React from 'react'
import renderer from 'react-test-renderer'

import LeagueCard from './'

const league = {
    id: '02dClSWeEqFn1J4qCt3N',
    name: 'NBA Fall Season 2021',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    seasons: [
        {
            id: 'x4hZcqW7meIgPgNj5x4s',
            name: 'Season 1',
            startDate: '2021-03-22T16:18:46.630Z',
            endDate: '2021-04-22T16:18:46.630Z',
        },
    ],
    type: 'basketball',
    ownerId: '4ph8JUTp9WMOj3XXUFf2V33bWLn1',
    ownerName: 'willcode4food',
}

describe('LeagueCard', () => {
    it('renders', () => {
        const tree = renderer.create(<LeagueCard league={league} />).toJSON()
        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              border: 1px solid #c60028;
              padding: 20px;
              border-radius: 5px;
              margin: 20px;
            }

            .emotion-2 {
              margin-top: 0px;
              font-size: 1.68179rem;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .emotion-4 {
              font-size: 0.75rem;
              margin-bottom: 10px;
            }

            .emotion-8 {
              text-transform: uppercase;
            }

            .emotion-16 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              border: 1px solid #FFF;
              padding: 10px;
              margin: 10px;
              border-radius: 5px;
            }

            .emotion-18 {
              font-size: 1.12246rem;
              margin-top: 0px;
              margin-bottom: 20px;
            }

            .emotion-20 {
              display: block;
            }

            .emotion-22 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              justify-content: space-between;
              -webkit-align-items: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              width: 100%;
            }

            .emotion-24 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
            }

            .emotion-26 {
              margin: 5px;
              -webkit-align-self: center;
              -ms-flex-item-align: center;
              align-self: center;
            }

            .emotion-32 {
              border: 1px solid #FF1647;
              border-radius: 4px;
              background: #FF1647;
              color: #FFF;
              font-size: 1.12246rem;
              font-family: Fjalla One;
              padding-top: 10px;
              padding-bottom: 10px;
              padding-right: 20px;
              padding-left: 20px;
              width: 100%;
              width: 30px;
              text-align: center;
              font-size: 1.12246rem;
              margin-left: 10px;
              margin-right: 10px;
            }

            .emotion-32:hover {
              background: #FF1647;
            }

            .dark .emotion-32 {
              color: #FFF;
              background: #FF1647;
              border: 1px solid #FF1647;
            }

            <div
              className="emotion-0 emotion-1"
            >
              <h2
                className="emotion-2 emotion-3"
              >
                NBA Fall Season 2021
              </h2>
              <div
                className="emotion-4 emotion-5"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div
                className="emotion-4 emotion-5"
              >
                <span
                  className="emotion-8 emotion-9"
                >
                  League Owner:  willcode4food
                </span>
              </div>
              <div
                className="emotion-4 emotion-5"
              >
                <span
                  className="emotion-8 emotion-9"
                >
                  Sport:  basketball
                </span>
              </div>
              <div
                className="emotion-4 emotion-5"
              >
                <div
                  className="emotion-16 emotion-17"
                >
                  <h3
                    className="emotion-18 emotion-19"
                  >
                    Season 1
                  </h3>
                  <div
                    className="emotion-20 emotion-21"
                  >
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          March 22nd, 2021
                        </div>
                        <div
                          className="emotion-26 emotion-27"
                        >
                           - 
                        </div>
                        <div
                          className="emotion-26 emotion-27"
                        >
                          April 22nd, 2021
                        </div>
                      </div>
                      <a
                        className="emotion-32 emotion-33"
                        href="/season-register"
                        onClick={[Function]}
                      >
                        Join
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `)
    })
})
