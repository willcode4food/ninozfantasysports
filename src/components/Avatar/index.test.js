import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from './index.jsx'

describe('Avatar', () => {
    describe('when it is on a page', () => {
        it('render', () => {
            const tree = renderer.create(<Avatar />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  vertical-align: middle;
                  width: 80px;
                  height: 80px;
                  margin-bottom: 0;
                  border-radius: 50%;
                }

                @media (min-width: 992px) {
                  .emotion-0 {
                    width: 200px;
                    height: 200px;
                  }
                }

                @media (min-width: 768px) {
                  .emotion-0 {
                    width: 175px;
                    height: 175px;
                  }
                }

                <img
                  className="emotion-0 emotion-1"
                />
            `)
        })
    })
})
