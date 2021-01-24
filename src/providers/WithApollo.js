import React, { useCallback, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import AuthContext from 'context/AuthContext'
import { setContext } from '@apollo/client/link/context'

function WithApollo({ children }) {
    const { bearerToken } = useContext(AuthContext)

    const authLink = useCallback(
        setContext((_, { headers }) => {
            return {
                headers: { ...headers, authorization: bearerToken ? `Bearer ${bearerToken}` : '' },
            }
        }),
        [bearerToken]
    )
    const link = useCallback(
        createHttpLink({
            uri: process.env.GATSBY_API_URL,
            credentials: 'same-origin',
        }),
        [process.env.GATSBY_API_URL]
    )

    const client = useMemo(() => {
        return new ApolloClient({
            uri: process.env.GATSBY_API_URL,
            cache: new InMemoryCache(),
            link: authLink.concat(link),
        })
    }, [authLink, link])

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

WithApollo.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export default WithApollo
