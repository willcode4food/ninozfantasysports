const admin = require('firebase-admin')
const firebase = require('firebase')
const fs = require('fs')
const { buildSchema } = require('graphql')
const { getMediaQueryForBreakpointPlugin } = require('./src/utils/styleHelpers')
const { FIREBASE } = require('./src/utils/constants')
const serviceAccount = require('./secrets/firebase-key.json')
const serviceUID = '9C4NFaxzRwhUxZh4maBngiSGndo2'
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const mediaQueries = {
    ...getMediaQueryForBreakpointPlugin(),
    portrait: `(orientation: portrait)`,
}

firebase.initializeApp(FIREBASE.CONFIG)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

async function getAuth() {
    return await admin.auth().createCustomToken(serviceUID)
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
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'NINOZFANTASYSPORTS',
                fieldName: 'ninozFantasySports',
                url: process.env.GATSBY_API_URL,
                // HTTP headers
                headers: async () => {
                    const token = await getAuth()
                    return {
                        // Learn about environment variables: https://gatsby.dev/env-vars
                        Authorization: `Bearer ${token}`,
                    }
                },
                createSchema: async () => {
                    const gql = fs.readFileSync(`${__dirname}/schema.gql`).toString()
                    return buildSchema(gql)
                },
                refetchInterval: 20,
            },
        },
    ],
}
