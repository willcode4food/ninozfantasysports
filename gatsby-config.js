const { getMediaQueryForBreakpointPlugin } = require('./src/utils/styleHelpers')

const mediaQueries = {
    ...getMediaQueryForBreakpointPlugin(),
    portrait: `(orientation: portrait)`,
}

module.exports = {
    siteMetadata: {
        title: `Ninoz Fantasy Sports`,
        titleTemplate: '%s · The best place to jump on board the rocketship',
        description: `Use this starter to begin your next new project using Firebase.  Authentication, Firestore and Object Storage out of the box.`,
        siteUrl: 'https://www.ninozfantasysports.com', // No trailing slash allowed!
        image: '/images/placeholder.png', // Path to your image you placed in the 'static' folder
        twitterUsername: '@willcode4food',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    components: 'src/components',
                    context: 'src/context',
                    providers: 'src/providers',
                    utils: 'src/utils',
                    hooks: 'src/hooks',
                    firebaseActions: 'src/firebase',
                    templates: 'src/templates',
                    queries: 'src/queries',
                },
                extensions: ['js', 'jsx'],
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ninozfantasysports`,
                short_name: `fantasysports`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: mediaQueries,
            },
        },
    ],
}
