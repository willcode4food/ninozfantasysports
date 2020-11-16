import React from 'react'
import PropTypes from 'prop-types'
import WithSession from 'providers/WithSession'
import WithFirebaseAuthentication from 'providers/WithFirebaseAuthentication'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'

import 'typeface-fjalla-one'

export const wrapRootElement = ({ element }) => {
    const link = createHttpLink({
        uri: process.env.GATSBY_API_URL,
        credentials: 'same-origin',
    })

    const client = new ApolloClient({
        uri: process.env.GATSBY_API_URL,
        cache: new InMemoryCache(),
        link,
    })
    return (
        <WithFirebaseAuthentication>
            <WithSession>
                <ApolloProvider client={client}>{element}</ApolloProvider>
            </WithSession>
        </WithFirebaseAuthentication>
    )
}

wrapRootElement.propTypes = {
    element: PropTypes.object,
}
