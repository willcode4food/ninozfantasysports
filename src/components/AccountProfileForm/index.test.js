import React from 'react'
import { act, cleanup, render, screen } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { MockedProvider } from '@apollo/client/testing'
import SessionContext from 'context/SessionContext'
import { uid, email, graphQlMocksEmailUser, graphQlMocksSsoUser } from 'utils/testMocks'
import AccountProfileForm from './'

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
            <MockedProvider mocks={graphQlMocksEmailUser}>
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
                <MockedProvider mocks={graphQlMocksEmailUser} addTypename={false}>
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
                <MockedProvider mocks={graphQlMocksEmailUser} addTypename={false}>
                    <AccountProfileForm />
                </MockedProvider>
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))

            expect(screen.getByText('Update Email and Password')).toBeInTheDocument()
        })
    })

    it('should not submit without a username', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid, email } }}>
                <MockedProvider mocks={graphQlMocksEmailUser} addTypename={false}>
                    <AccountProfileForm />
                </MockedProvider>
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            fireEvent.clear(screen.getByRole('textbox', { name: /username/i }))
            fireEvent.clear(screen.getByRole('textbox', { name: /First Name/i }))
            fireEvent.clear(screen.getByRole('textbox', { name: /Last Name/i }))
            fireEvent.clear(screen.getByRole('textbox', { name: /City/i }))
            fireEvent.type(screen.getByRole('textbox', { name: /City/i }), 'A')
            fireEvent.clear(screen.getByRole('textbox', { name: /Zip/i }))
            fireEvent.selectOptions(screen.getByTestId('state'), screen.getByText('Select a State'))
            fireEvent.click(screen.getByRole('button'))

            expect(await screen.findAllByRole('alert')).toHaveLength(6)
        })
    })
    it('should not have link to update username and password', async () => {
        render(
            <SessionContext.Provider value={{ authUser: { uid, email } }}>
                <MockedProvider mocks={graphQlMocksSsoUser} addTypename={false}>
                    <AccountProfileForm />
                </MockedProvider>
            </SessionContext.Provider>
        )

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0))
            // screen.debug()
            expect(await screen.queryByText('Update Email and Password')).not.toBeInTheDocument()
        })
    })
    // TODO: need to fix this test
    // it('should submit the form data correctly', async () => {
    //     const mockSave = jest.fn()
    //     render(
    //         <SessionContext.Provider value={{ authUser: { uid, email } }}>
    //             <MockedProvider mocks={graphQlMocksSsoUser} addTypename={false}>
    //                 <AccountProfileForm saveData={mockSave} />
    //             </MockedProvider>
    //         </SessionContext.Provider>
    //     )
    //     await act(async () => {
    //         await new Promise((resolve) => setTimeout(resolve, 0))
    //         fireEvent.click(screen.getByRole('button'))

    //         await waitFor(() => {
    //             expect(mockSave).toHaveBeenCalledWith({
    //                 username: 'hsimpson',
    //                 firstName: 'Homer',
    //                 lastName: 'Simpson',
    //                 city: 'Springfield',
    //                 state: 'MO',
    //                 zip: '63017',
    //             })
    //         })
    //     })
    // })
})
