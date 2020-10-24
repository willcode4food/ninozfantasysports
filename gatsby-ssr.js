/* eslint-disable no-undef */
/* eslint-disable react/display-name */
const React = require('react')
const PropTypes = require('prop-types')
const { BREAKPOINTS_VALUES } = require('utils/styleHelpers')
const { setDefaultBreakpoints } = require('react-socks')
const { BreakpointProvider } = require('react-socks')

setDefaultBreakpoints(Object.keys(BREAKPOINTS_VALUES).map((value) => ({ [value]: BREAKPOINTS_VALUES[value] })))

const wrapRootElement = ({ element }) => {
	return <BreakpointProvider>{element}</BreakpointProvider>
}

wrapRootElement.propTypes = {
	element: PropTypes.object,
}

exports = wrapRootElement
