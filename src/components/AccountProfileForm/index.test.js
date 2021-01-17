import React from 'react'
import { act, cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import SessionContext from 'context/SessionContext'
import AccountProfileForm from './'
import { UPDATE_USER, GET_USER } from 'queries'

const uid = 'AUsewNSXhRJuoKZoqiqdgIDWHp2'

const mockUser = {
    id: uid,
    firstName: 'Homer',
    lastName: 'Simpson',
    username: 'hsimpson',
    email: 'hsimpson@springfieldpower.com',
    defaultAvatarThemeIndex: 1,
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
                    dateCreated: '2021-01-12T17:29:47.774Z',
                    defaultAvatarThemeIndex: 0,
                    email: 'hsimpson@springfieldpower.com',
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    loginProvider: 'email',
                    id: uid,
                    profileImageName: `${uid}.png`,
                    username: 'hsimpson',
                    city: 'Springfield',
                    state: 'MO',
                    zip: '63017',
                },
            },
        },
    },
    {
        request: {
            query: GET_USER,
            variables: {
                id: uid,
            },
        },
        result: {
            data: {
                returnSingleUser: {
                    dateCreated: '2021-01-12T17:29:47.774Z',
                    defaultAvatarThemeIndex: 0,
                    email: 'hsimpson@springfieldpower.com',
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    loginProvider: 'email',
                    id: uid,
                    profileImageName: `${uid}.png`,
                    username: 'hsimpson',
                    city: 'Springfield',
                    state: 'MO',
                    zip: '63017',
                },
            },
        },
    },
]
jest.mock('hooks/firebase/useFirebaseApp', () => {
    return jest.fn(() => {
        return { storage: () => {} }
    })
})

describe('AccountProfileForm', () => {
    afterEach(() => {
        cleanup
    })
    it('should render the loader', async () => {
        render(
            <MockedProvider mocks={graphQlMocks}>
                <SessionContext.Provider value={{ authUser: { uid: 'AUsewNSXhRJuoKZoqiqdgIDWHp2' } }}>
                    <AccountProfileForm />
                </SessionContext.Provider>
            </MockedProvider>
        )
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    it('should render the basic fields', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid: 'AUsewNSXhRJuoKZoqiqdgIDWHp2' } }}>
                <MockedProvider mocks={graphQlMocks} addTypename={false}>
                    <AccountProfileForm />
                </MockedProvider>
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            // screen.debug()
            expect(screen.getByRole('heading', { name: 'Account' })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: 'First Name' })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: 'Last Name' })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: /city/i })).toBeInTheDocument()
            expect(screen.getByRole('textbox', { name: /zip/i })).toBeInTheDocument()
            expect(screen.getByTestId('state')).toBeInTheDocument()
        })
    })
})
