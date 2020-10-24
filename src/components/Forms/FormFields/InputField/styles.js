import styled from '@emotion/styled'
import { COLORS } from 'utils/styleHelpers'

export const InputFieldStyle = styled.input`
	color: ${COLORS.DARK_GRAY};
	font-size: inherit;
	line-height: inherit;
	width: 100%;
	box-shadow: ${COLORS.TOGGLE} 0px 0px 0px 1px inset;
	padding-left: 10px;
	padding-right: 4px;
	padding-top: 13px;
	padding-bottom: 13px;
	background: ${COLORS.PRIMARY};
	box-sizing:border-box;
	overflow-wrap:break-word;
	overflow-x:visible;
	overflow-y:visible;
	text-size-adjust:100%;
	font-family: inherit;
	display: inline-block;
	vertical-align: middle;
	-webkit-appearance: none;
	border-radius: 4px;
	margin: 0px;
	border-width: 0px;
	border-style: initial;
	border-color: initial;
	border-image: initial;
	transition: background 0.5s, color 0.5s;
	.dark & {
		background: ${COLORS.SECONDARY_DARK};
		color ${COLORS.PRIMARY};
	}
`
