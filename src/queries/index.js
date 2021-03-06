import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
    mutation UpdateUser($data: UserUpdateInput!) {
        updateUser(data: $data) {
            id
            username
            email
            firstName
            lastName
            city
            state
            zip
            profileImageName
        }
    }
`

export const GET_USER = gql`
    query GetUser($id: String!) {
        returnSingleUser(id: $id) {
            dateCreated
            defaultAvatarThemeIndex
            email
            firstName
            lastName
            loginProvider
            id
            profileImageName
            username
            city
            state
            zip
        }
    }
`
