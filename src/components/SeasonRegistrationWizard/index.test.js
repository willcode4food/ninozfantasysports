import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useStaticQuery } from 'gatsby'
import SeasonRegistrationWizard from '.'

describe('SeasonRegistrationWizard', () => {
    beforeAll(() => {
        useStaticQuery.mockReturnValue({
            allMarkdownRemark: {
                edges: [
                    {
                        node: {
                            html:
                                '<p>TERMS OF USE</p>\n<p>Last updated February 18, 2021</p>\n<p>AGREEMENT TO TERMS</p>',
                        },
                    },
                ],
            },
        })
    })
    afterEach(() => {
        cleanup
    })
    it('should render', () => {
        render(<SeasonRegistrationWizard />)
        expect(screen.getByText('Read through Terms and Conditions')).toBeInTheDocument()
    })
    it('should set Next button to enabled when agreeing to terms and conditions', () => {
        render(<SeasonRegistrationWizard />)
        const checkBox = screen.getByRole('checkbox')
        const nextButton = screen.getByText('Next')
        expect(checkBox.checked).toEqual(false)
        expect(nextButton.disabled).toEqual(true)
        fireEvent.click(checkBox)
        expect(nextButton.disabled).toEqual(false)
    })
})
