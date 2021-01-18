import React from 'react'
import { act, cleanup, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import SessionContext from 'context/SessionContext'
import AccountProfileForm from './'
import { UPDATE_USER, GET_USER } from 'queries'

const id = 'AUsewNSXhRJuoKZoqiqdgIDWHp2'
const uid = id
const email = 'hsimpson@springfieldpower.com'

// const mockUser = {
//     id: id,
//     email,
//     firstName: 'Homer',
//     lastName: 'Simpson',
//     profileImageName: `${id}.png`,
//     username: 'hsimpson',
//     city: 'Springfield',
//     state: 'MO',
//     zip: '63017',
//     __typename: 'UserUpdateInput',
// }
const graphQlMocks = [
    {
        request: {
            query: UPDATE_USER,
            variables: {
                data: {
                    id,
                    username: 'hsimpson',
                    email,
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    city: 'Springfield',
                    state: 'MO',
                    zip: '63017',
                    profileImageName: '',
                },
            },
        },
        result: {
            data: {
                updateUser: {
                    id,
                    email,
                    username: 'hsimpson',
                    firstName: 'Homer',
                    lastName: 'Simpson',
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
                id,
            },
        },
        result: {
            data: {
                returnSingleUser: {
                    dateCreated: '2021-01-12T17:29:47.774Z',
                    defaultAvatarThemeIndex: 0,
                    email,
                    firstName: 'Homer',
                    lastName: 'Simpson',
                    loginProvider: 'email',
                    id,
                    profileImageName: `${id}.png`,
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
                <SessionContext.Provider value={{ authUser: { uid } }}>
                    <AccountProfileForm />
                </SessionContext.Provider>
            </MockedProvider>
        )
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    it('should render the basic fields', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid } }}>
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

    it('should render a link to change email and password', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid } }}>
                <MockedProvider mocks={graphQlMocks} addTypename={false}>
                    <AccountProfileForm />
                </MockedProvider>
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))

            expect(screen.getByText('Update Email and Password')).toBeInTheDocument()
        })
    })

    it('should validate form fields', async () => {
        const mockSave = jest.fn()
        render(
            <SessionContext.Provider value={{ authUser: { uid, email } }}>
                <MockedProvider mocks={graphQlMocks} addTypename={false}>
                    <AccountProfileForm saveData={mockSave} />
                </MockedProvider>
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            const usernameInput = screen.getByRole('textbox', { name: /username/i })
            fireEvent.clear(usernameInput)
            fireEvent.click(screen.getByRole('button'))

            expect(await screen.findAllByRole('alert')).toHaveLength(1)
            expect(mockSave).not.toBeCalled()
        })
    })
})
