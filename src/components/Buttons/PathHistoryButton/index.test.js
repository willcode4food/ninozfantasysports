import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import PathHistoryButton from './'

expect.addSnapshotSerializer(serializer)

describe('PathHistoryButton', () => {
    const tree = renderer.create(<PathHistoryButton />).toJSON()
    it('renders', () => {
        expect(tree).toMatchInlineSnapshot(`
            .emotion-0 {
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

            .emotion-0:hover {
              background: #FF1647;
            }

            .dark .emotion-0 {
              color: #FFF;
              background: #FF1647;
              border: 1px solid #FF1647;
            }

            <a
              className="emotion-0 emotion-1"
              href="/login"
              onClick={[Function]}
            >
              Login
            </a>
        `)
    })
})
