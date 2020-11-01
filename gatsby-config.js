const { BREAKPOINTS_VALUES } = require('./src/utils/styleHelpers')
const breakpoints = Object.keys(BREAKPOINTS_VALUES).map((value) => ({ [value]: BREAKPOINTS_VALUES[value] }))
const breakpointPluginObject = breakpoints.reduce((acc, value) => {
    const key = Object.keys(value).pop()
    return {
        ...acc,
        [key]: `(max-width: ${value[key]}px)`,
    }
}, {})

const mediaQueries = {
    ...breakpointPluginObject,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
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
