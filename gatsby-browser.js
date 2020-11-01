import React from 'react'
import PropTypes from 'prop-types'
import WithSession from 'providers/WithSession'
import WithFirebaseAuthentication from 'providers/WithFirebaseAuthentication'
import 'typeface-fjalla-one'

export const wrapRootElement = ({ element }) => {
    return (
        <WithFirebaseAuthentication>
            <WithSession>{element}</WithSession>
        </WithFirebaseAuthentication>
    )
}

wrapRootElement.propTypes = {
    element: PropTypes.object,
}
