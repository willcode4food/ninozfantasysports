/* eslint-disable no-irregular-whitespace */
/* eslint-disable jest/no-commented-out-tests */
import React from 'react'
import renderer from 'react-test-renderer'
import CheckBoxField from './'
import { render, fireEvent } from '@testing-library/react'

jest.mock('utils/styleHelpers', () => {
    return {
        COLORS: {
            SECONDARY: '#c60028',
        },
    }
})

describe('CheckBoxField', () => {
    describe('when checkbox is added', () => {
        it('renders', () => {
            const tree = renderer.create(<CheckBoxField backgroundColor="tomato" backgroundColorOff="blue" />).toJSON()
            expect(tree).toMatchInlineSnapshot(`
                .emotion-0 {
                  -webkit-appearence: button;
                  -moz-appearence: button;
                  -ms-appearence: button;
                  appearence: button;
                  border: 1px solid;
                  border-radius: 1px;
                  cursor: pointer;
                  display: inline;
                  margin-top: 5px;
                  margin-bottom: 5px;
                  margin-left: 9px;
                  margin-right: 9px;
                  padding-top: 3px;
                  padding-bottom: 3px;
                  padding-right: 3px;
                  padding-left: 3px;
                  width: 2px;
                  height: 25px;
                }

                .emotion-0:after {
                  content: &nbsp;
                  font-size: 20px;
                  color: #c60028;
                }

                .emotion-2 {
                  position: absolute;
                  left: -9999px;
                }

                .emotion-2:checked+label {
                  color: red;
                }

                <label
                  className="emotion-0 emotion-1"
                >
                  <input
                    className="emotion-2 emotion-3"
                    onClick={[Function]}
                    role="checkbox"
                    type="checkbox"
                  />
                </label>
            `)
        })
    })
    describe('when onChange is triggered', () => {
        it('sets the checkbox to checked', () => {
            const { getByRole } = render(<CheckBoxField />)
            const checkBox = getByRole('checkbox')
            fireEvent.click(checkBox)
            expect(checkBox.checked).toEqual(true)
        })
        // TODO: need to fix this test
        // it('executes useState when clicked', () => {
        //     const setIsChecked = jest.fn()
        //     const wrapper = mount(<CheckBoxField />)
        //     const useStateSpy = jest.spyOn(React, 'useContext')
        //     useStateSpy.mockImplementation((isChecked) => [isChecked, setIsChecked])
        //     wrapper.find(CheckBoxField).simulate('click')
        //     expect(setIsChecked).toBeTruthy()
        // })
    })
})
