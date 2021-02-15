import React from 'react'
import renderer from 'react-test-renderer'

import TextAreaField from './'

jest.mock('utils/styleHelpers', () => {
    return {
        COLORS: {
            PRIMARY: '#FFF',
            PRIMARY_DARK: '#1e2427',
        },
    }
})

describe('TextAreaField', () => {
    describe('when it is added', () => {
        it('renders', () => {
            const tree = renderer.create(<TextAreaField />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  font-size: inherit;
                  line-height: inherit;
                  width: 100%;
                  box-shadow: rgb(238, 238, 238) 0px 0px 0px 1px inset;
                  padding-left: 4px;
                  padding-right: 4px;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  color: inherit;
                  background: #FFF;
                  font-family: inherit;
                  display: inline-block;
                  vertical-align: middle;
                  -webkit-appearance: none;
                  border-radius: 4px;
                  margin: 0px;
                  border-width: 0px;
                  border-style: initial;
                  border-color: initial;
                  border-image: initial;
                  -webkit-transition: background 0.5s,color 0.5s;
                  transition: background 0.5s,color 0.5s;
                }

                .dark .emotion-0 {
                  background: #1e2427;
                }

                <textarea
                  className="emotion-0 emotion-1"
                  cols={32}
                  rows={5}
                />
            `)
        })
    })
})
