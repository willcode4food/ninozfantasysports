// const firebase = require('firebase/app')
// const admin = require('firebase-admin')

// require('firebase/auth')
// require('firebase/firestore')
// require('firebase/storage')

// const firebaseConfig = {
//     apiKey: process.env.GATSBY_APIKEY,
//     authDomain: process.env.GATSBY_AUTHDOMAIN,
//     databaseURL: process.env.GATSBY_DATABASEURL,
//     projectId: process.env.GATSBY_PROJECTID,
//     storageBucket: process.env.GATSBY_STORAGEBUCKET,
//     messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
// }

// firebase.initializeApp(firebaseConfig)

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// })

// exports.sourceNodes = async ({ actions }, { quiet = false, types, createNodeId }, done) => {
//     const { createNode } = actions
//     const start = Date.now()
//     const customToken = await admin.auth().createCustomToken(serviceUID)
//     await firebase.auth().signInWithCustomToken(customToken)
//     const currentUser = await firebase.auth().currentUser
//     const token = await currentUser.getIdToken(true)
// }
