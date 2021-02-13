/* eslint-disable no-irregular-whitespace */
import React from 'react'
import renderer from 'react-test-renderer'

import { StaticQuery } from 'gatsby'
// import { leagueSeasonSorter } from 'utils/arrayHelpers'

import LeagueCardList from './'

const leagues = {
    ninozFantasySports: {
        returnAllLeagues: [
            {
                id: 'sEREsBNeOM16BtRaSbzv',
                name: "Nino's Fantasy Golf 2021",
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                seasons: [
                    {
                        id: '3GDH56HtbpGRyakYqyBb',
                        name: 'Season 1',
                        startDate: '2021-01-22T16:18:46.630Z',
                        endDate: '2021-02-22T16:18:46.630Z',
                    },
                    {
                        id: 'z8xtyJkFMTwEhEqYeCxx',
                        name: 'Season 2',
                        startDate: '2021-02-22T16:18:46.630Z',
                        endDate: '2021-03-22T16:18:46.630Z',
                    },
                    {
                        id: 'DDqVvYGHKX4ayl97qrfy',
                        name: 'Season 3',
                        startDate: '2021-11-22T16:18:46.000Z',
                        endDate: '2021-12-22T16:18:46.000Z',
                    },
                ],
                type: 'golf',
                ownerId: '4ph8JUTp9WMOj3XXUFf2V33bWLn1',
                ownerName: 'willcode4food',
            },
            {
                id: 'Z7go64JsgOXIdreyfBwH',
                name: 'MLB 2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                seasons: [
                    {
                        id: 'qQOMsQ0yIvRQjCpv0pbl',
                        name: 'Season 1',
                        startDate: '2021-02-09T16:18:46.000Z',
                        endDate: '2021-04-08T15:18:46.000Z',
                    },
                    {
                        id: 'E63voHTWnG8sfiJechc3',
                        name: 'Season 2',
                        startDate: '2021-02-22T16:18:46.630Z',
                        endDate: '2021-03-22T16:18:46.630Z',
                    },
                    {
                        id: 'xXHOVXbYvtlK0NDDW34Z',
                        name: 'Season 3',
                        startDate: '2021-03-22T16:18:46.630Z',
                        endDate: '2021-04-22T16:18:46.630Z',
                    },
                ],
                type: 'baseball',
                ownerId: '4ph8JUTp9WMOj3XXUFf2V33bWLn1',
                ownerName: 'willcode4food',
            },
            {
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
            },
        ],
    },
}
describe('PrimaryButton', () => {
    beforeEach(() => {
        StaticQuery.mockImplementationOnce(({ render }) => render(leagues))
    })
    it('renders', () => {
        const tree = renderer.create(<LeagueCardList leagues={leagues} />).toJSON()
        expect(tree).toMatchInlineSnapshot(`
            .emotion-2 {
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

            .emotion-4 {
              margin-top: 0px;
              font-size: 1.68179rem;
              -webkit-text-decoration: underline;
              text-decoration: underline;
            }

            .emotion-6 {
              font-size: 0.75rem;
              margin-bottom: 10px;
            }

            .emotion-10 {
              text-transform: uppercase;
            }

            .emotion-18 {
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

            .emotion-20 {
              font-size: 1.12246rem;
              margin-top: 0px;
              margin-bottom: 20px;
            }

            .emotion-22 {
              display: block;
            }

            .emotion-24 {
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

            .emotion-26 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
            }

            .emotion-28 {
              margin: 5px;
              -webkit-align-self: center;
              -ms-flex-item-align: center;
              align-self: center;
            }

            .emotion-34 {
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

            .emotion-34:hover {
              background: #FF1647;
            }

            .dark .emotion-34 {
              color: #FFF;
              background: #FF1647;
              border: 1px solid #FF1647;
            }

            <div
              className="emotion-0 emotion-1"
            >
              <div
                className="emotion-2 emotion-3"
              >
                <h2
                  className="emotion-4 emotion-5"
                >
                  Nino's Fantasy Golf 2021
                </h2>
                <div
                  className="emotion-6 emotion-7"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-10 emotion-11"
                  >
                    League Owner:  willcode4food
                  </span>
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-10 emotion-11"
                  >
                    Sport:  golf
                  </span>
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 1
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            January 22nd, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            February 22nd, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
                          href="/season-register"
                          onClick={[Function]}
                        >
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 2
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            February 22nd, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            March 22nd, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
                          href="/season-register"
                          onClick={[Function]}
                        >
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 3
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            November 22nd, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            December 22nd, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
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
              <div
                className="emotion-2 emotion-3"
              >
                <h2
                  className="emotion-4 emotion-5"
                >
                  MLB 2020
                </h2>
                <div
                  className="emotion-6 emotion-7"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-10 emotion-11"
                  >
                    League Owner:  willcode4food
                  </span>
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-10 emotion-11"
                  >
                    Sport:  baseball
                  </span>
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 1
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            February 9th, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            April 8th, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
                          href="/season-register"
                          onClick={[Function]}
                        >
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 2
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            February 22nd, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            March 22nd, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
                          href="/season-register"
                          onClick={[Function]}
                        >
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 3
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            March 22nd, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            April 22nd, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
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
              <div
                className="emotion-2 emotion-3"
              >
                <h2
                  className="emotion-4 emotion-5"
                >
                  NBA Fall Season 2021
                </h2>
                <div
                  className="emotion-6 emotion-7"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-10 emotion-11"
                  >
                    League Owner:  willcode4food
                  </span>
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <span
                    className="emotion-10 emotion-11"
                  >
                    Sport:  basketball
                  </span>
                </div>
                <div
                  className="emotion-6 emotion-7"
                >
                  <div
                    className="emotion-18 emotion-19"
                  >
                    <h3
                      className="emotion-20 emotion-21"
                    >
                      Season 1
                    </h3>
                    <div
                      className="emotion-22 emotion-23"
                    >
                      <div
                        className="emotion-24 emotion-25"
                      >
                        <div
                          className="emotion-26 emotion-27"
                        >
                          <div
                            className="emotion-28 emotion-29"
                          >
                            March 22nd, 2021
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                             - 
                          </div>
                          <div
                            className="emotion-28 emotion-29"
                          >
                            April 22nd, 2021
                          </div>
                        </div>
                        <a
                          className="emotion-34 emotion-35"
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
            </div>
        `)
    })
})
