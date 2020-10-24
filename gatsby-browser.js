import React from 'react'
import PropTypes from 'prop-types'
import { BREAKPOINTS_VALUES } from 'utils/styleHelpers'
import { setDefaultBreakpoints } from 'react-socks'
import { BreakpointProvider } from 'react-socks'
import WithSession from 'providers/WithSession'
import WithFirebaseAuthentication from 'providers/WithFirebaseAuthentication'
import 'typeface-fjalla-one'

setDefaultBreakpoints(Object.keys(BREAKPOINTS_VALUES).map((value) => ({ [value]: BREAKPOINTS_VALUES[value] })))

export const wrapRootElement = ({ element }) => {
	return (
		<WithFirebaseAuthentication>
			<WithSession>
				<BreakpointProvider>{element}</BreakpointProvider>
			</WithSession>
		</WithFirebaseAuthentication>
	)
}

wrapRootElement.propTypes = {
	element: PropTypes.object,
}
