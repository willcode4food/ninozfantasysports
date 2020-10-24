// taken from https://jonsuh.com/hamburgers/
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { COLORS } from 'utils/styleHelpers'

const HamburgerArrow = styled.div`
    background-color: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    margin: 0;
    overflow: visible;
    padding: 1px;
    text-transform: none;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    transition-timing-function: linear;
`

// /*
//    * Arrow
//    */
// .hamburger--arrow.is-active .hamburger-inner::before {
//   transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }

// .hamburger--arrow.is-active .hamburger-inner::after {
//   transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }

const HamburgerBox = styled.div`
    height: 24px;
    position: relative;
    width: 30px;
`

const hamburgerRow = css`
    background-color: ${COLORS.TOGGLE};
    border-radius: 2px;
    height: 2px;
    position: absolute;
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: ease;
    width: 20px;
    .dark & {
        background-color: ${COLORS.PRIMARY};
        transition: background-color 0.5s;
    }
`

const HamburgerInner = styled.span`
    ${hamburgerRow};
    display: block;
    margin-top: -2px;
    top: 50%;

    &::before {
        ${hamburgerRow};
        content: '';
        display: block;
        top: -5px;
    }

    &::after {
        ${hamburgerRow};
        content: '';
        display: block;
        bottom: -5px;
    }
`

const Hamburger = (props) => (
    <HamburgerArrow {...props}>
        <HamburgerBox>
            <HamburgerInner />
        </HamburgerBox>
    </HamburgerArrow>
)

export default Hamburger
