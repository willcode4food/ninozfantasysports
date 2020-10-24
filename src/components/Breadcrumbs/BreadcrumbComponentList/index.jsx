import React from 'react'
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbItemPadding } from '../styles'

export function BreadcrumbComponentList({ location }) {
    const { pathname } = location
    const crumbs = pathname.split('/').filter((path) => path !== '')

    return crumbs.map((crumb, crumbIndex) => {
        const crumbUrl = `/${crumbs.slice(0, crumbIndex + 1).join('/')}`
        // eslint-disable-next-line no-restricted-globals
        return crumbIndex !== crumbs.length - 1 && isNaN(crumbs[crumbIndex + 1]) ? (
            // eslint-disable-next-line react/no-array-index-key
            <BreadcrumbItem key={`${crumbUrl}_${crumbIndex}`}>
                <BreadcrumbLink aria-label={`${crumb.replace(/-/g, ' ')}`} to={crumbUrl}>
                    {crumb.replace(/-/g, ' ')}
                </BreadcrumbLink>
                {/* handles pagination number suffix that we do not want to display as a breadcrumb */}
                {/* eslint-disable-next-line no-restricted-globals  */}
                {isNaN(crumbs[crumbIndex + 1]) && `/`}
            </BreadcrumbItem>
        ) : (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`${crumbUrl}_${crumbIndex}`}>
                {/* handles pagination number suffix that we do not want to display as a breadcrumb */}
                {/* eslint-disable-next-line no-restricted-globals  */}
                {isNaN(crumb) && (
                    // eslint-disable-next-line react/no-array-index-key
                    <BreadcrumbItem>
                        <BreadcrumbItemPadding>{crumb.replace(/-/g, ' ')}</BreadcrumbItemPadding>
                    </BreadcrumbItem>
                )}
            </React.Fragment>
        )
    })
}

export default BreadcrumbComponentList
