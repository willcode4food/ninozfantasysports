import React from 'react'
import PropTypes from 'prop-types'
import WithSession from 'providers/WithSession'
import WithFirebaseAuthentication from 'providers/WithFirebaseAuthentication'
import WithApollo from 'providers/WithApollo'
import 'typeface-fjalla-one'

export const wrapRootElement = ({ element }) => {
    return (
        <WithFirebaseAuthentication>
            <WithSession>
                <WithApollo>{element}</WithApollo>
            </WithSession>
        </WithFirebaseAuthentication>
    )
}

wrapRootElement.propTypes = {
    element: PropTypes.object,
}
