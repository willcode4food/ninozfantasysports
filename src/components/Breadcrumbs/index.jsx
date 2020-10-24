import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbNav } from './styles'
import BreadcrumbComponentList from './BreadcrumbComponentList'
import BreadcrumbSchemaOrg from './BreadcrumbSchemaOrg'
const Breadcrumbs = ({ location }) => {
    const navRef = useRef({ clientHeight: 0 })

    useEffect(() => {
        window.breadCrumbHeight = navRef.current.clientHeight || 0
    }, [navRef.current.clientHeight])

    return (
        <BreadcrumbNav ref={navRef} aria-label="Breadcrumbs">
            <BreadcrumbSchemaOrg location={location} />
            <BreadcrumbList location={location}>
                <BreadcrumbItem>
                    <BreadcrumbLink aria-label="Home" to="/">
                        Home
                    </BreadcrumbLink>
                    {`/`}
                </BreadcrumbItem>
                <>
                    <BreadcrumbComponentList location={location} />
                </>
            </BreadcrumbList>
        </BreadcrumbNav>
    )
}

Breadcrumbs.propTypes = {
    location: PropTypes.object,
}
Breadcrumbs.defaultProps = {
    location: {},
}

export default Breadcrumbs
