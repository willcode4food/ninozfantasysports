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
        }
    }
`
