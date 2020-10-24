import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

function BreadcrumbSchemaOrg({ location }) {
    const { pathname, origin } = location
    const crumbs = pathname.split('/').filter((path) => path !== '')
    const itemListElement = [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@id': `${origin}/`,
                name: 'home',
            },
        },
    ]
    const schemaOrg = crumbs.reduce((crumbacc, crumb, crumbIndex) => {
        const crumbUrl = `/${crumbs.slice(0, crumbIndex + 1).join('/')}`
        itemListElement.push({
            '@type': 'ListItem',
            position: crumbIndex + 2,
            item: {
                '@id': `${origin}/${crumbUrl}`,
                name: crumb,
            },
        })
        if (crumbIndex === crumbs.length - 1) {
            return [
                ...crumbacc,
                {
                    '@context': 'http://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement,
                },
            ]
        }
    }, [])
    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        </Helmet>
    )
}

BreadcrumbSchemaOrg.propTypes = {
    location: PropTypes.object,
}

export default BreadcrumbSchemaOrg
