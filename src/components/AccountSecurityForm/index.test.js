import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import AccountSecurityForm from './'
import { UPDATE_USER } from 'queries'

const mockUser = {
    id: 'AUsewNSXhRJuoKZoqiqdgIDWHp2',
    firstName: 'Homer',
    lastName: 'Simpson',
    username: 'hsimpson',
    email: 'hsimpson@springfieldpower.com',
}
const graphQlMocks = [
    {
        request: {
            query: UPDATE_USER,
            variables: {
                ...mockUser,
            },
            result: {
                data: {
                    id: 'AUsewNSXhRJuoKZoqiqdgIDWHp2',
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    username: 'hsimpson',
                    email: 'hsimpson@springfieldpower.com',
                },
            },
        },
    },
]
jest.mock('hooks/firebase/useFirebaseAuthentication', () => {
    return jest.fn(() => {
        return { onAuthIdentifierUpdate: () => {}, isAuthenticationLoading: false, authenticationError: null }
    })
})

describe('AccountSecurityForm', () => {
    it('should render the basic fields', () => {
        render(
            <MockedProvider mocks={graphQlMocks}>
                <AccountSecurityForm />
            </MockedProvider>
        )

        expect(screen.getByRole('heading', { name: 'Email and Password' })).toBeInTheDocument()
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
        expect(screen.getByLabelText('Existing Password', { name: /existingPassword/i })).toBeInTheDocument()
        expect(screen.getByLabelText('New Password', { name: /newPassword/i })).toBeInTheDocument()
        expect(screen.getByLabelText('Confirm Password', { name: /confirmPassword/i })).toBeInTheDocument()
    })
})
