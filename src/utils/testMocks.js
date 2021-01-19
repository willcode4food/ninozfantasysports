import { UPDATE_USER, GET_USER } from 'queries'

export const id = 'AUsewNSXhRJuoKZoqiqdgIDWHp2'
export const uid = id
export const email = 'hsimpson@springfieldpower.com'

export const graphQlMocksEmailUser = [
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

export const graphQlMocksSsoUser = [
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
                    loginProvider: 'google',
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
