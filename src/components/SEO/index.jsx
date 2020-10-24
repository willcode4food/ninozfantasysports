/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: siteUrl
                defaultImage: image
                twitterUsername
            }
        }
    }
`

const SEO = ({ description, image, pathname, title }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: { defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername },
            },
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                image: `${siteUrl}${image || defaultImage}`,
                url: `${siteUrl}${pathname || '/'}`,
            }

            return (
                <>
                    <Helmet title={seo.title}>
                        <meta content={seo.description} name="description" />
                        <meta content={seo.image} name="image" />
                        {seo.url && <meta content={seo.url} property="og:url" />}
                        {seo.title && <meta content={seo.title} property="og:title" />}
                        {seo.description && <meta content={seo.description} property="og:description" />}
                        {seo.image && <meta content={seo.image} property="og:image" />}
                        <meta content="summary_large_image" name="twitter:card" />
                        {twitterUsername && <meta content={twitterUsername} name="twitter:creator" />}
                        <meta content={title} name="twitter:title" />
                        <meta content={description} name="twitter:description" />
                        <meta content={image} name="twitter:image" />
                        {seo.title && <meta content={seo.title} name="twitter:title" />}
                        {seo.description && <meta content={seo.description} name="twitter:description" />}
                        {seo.image && <meta content={seo.image} name="twitter:image" />}
                    </Helmet>
                </>
            )
        }}
    />
)

export default SEO

SEO.propTypes = {
    // article: PropTypes.bool,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    title: PropTypes.string,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    // article: false,
}
