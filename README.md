<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com" target="_new">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
  
  <a href="https://firebase.google.com" target="_new">
    <img alt="Firebase" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"></a>
</p>
<h1 align="center">
  Gatsby + Firebase/Firestore Professional Starter
</h1>

Out of the box, with some basic configuration setup, you can easily connect this starter with a Firebase/Firestore back end. Included are a login page, registration page, and a user account page. This starter provides a robust user registration and security strategy for creating personalized web applicatons for many use cases.

## 🤼‍♂️ Features

-   Login and Registration using Email and Google OAuth
-   Account Profile
    -   Custom Profile Avatar Image stored in Google Storage
    -   Default Avatar customized per user
    -   Expandable account profile records stored in Firestore
-   Responsive design
-   Forgot Password for Email Logins
-   Supports connecting to multiple projects based on environments (dev, prod)
-   Dark Theme
-   Snapshot Tests (WIP)
-   Role Based Authorization

## 🚀 Quick start

1.  **<a href="https://firebase.google.com/" target="_new">Register</a> for Firebase and create a project**  
    Once the project is created. You need to set up the following components of Firebase

    1. Authentication - enable Email/Password and Google
    1. Cloud Firestore - Set proper permissions for writing to the database
    1. Storage  
       To view the profile pictures in Storage publically, you will need to modify your Rules to the following:

        ```javascript
        rules_version = '2';
        service firebase.storage {
        match /b/{bucket}/o {
                    match /{allPaths=**} {
                    allow read: if true;
                    allow write: if request.auth != null;
                }
            }
        }
        ```

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-fire-pro-starter https://github.com/willcode4food/gatsby-fire-pro-starter
    ```

1.  **Update Environment Configuration**
    open the `.env.development` and `.env.production`

    ```shell
            GATSBY_ENV=development
            GATSBY_PROJECTID=<Firebase Project ID>
            GATSBY_APIKEY=<Web API Key>
            GATSBY_AUTHDOMAIN=<Firebase Project ID>.firebaseapp.com
            GATSBY_DATABASEURL=https://<Firebase Project ID>.firebaseio.com
            GATSBY_STORAGEBUCKET=<Firebase Project ID>.appspot.com
            GATSBY_STORAGEBUCKET_URL=https://firebasestorage
                 .googleapiscom/v0/b/<Firebase Project ID>.appspot.com/o
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-fire-pro-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
