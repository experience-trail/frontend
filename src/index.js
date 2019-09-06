/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Commented out for now
// import {ApolloClient} from 'apollo-client';
// import {InMemoryCache} from 'apollo-cache-inmemory';
// import {HttpLink} from 'apollo-link-http';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {useQuery} from '@apollo/react-hooks';

import {gql} from 'apollo-boost';

import {Auth0Provider} from './react-auth0-spa';
import config from './auth_config.json';

import GetAlice from './test-query';

// Commented out for now
// const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: 'https://d3vr82ig632z51.cloudfront.net/graphql',
// });
// const client = new ApolloClient({
//     cache,
//     link,
// });

const client = new ApolloClient({
    uri: 'https://d3vr82ig632z51.cloudfront.net/graphql',
    // resolvers: {},
});

// client
//     .query({
//         query: gql`
//             query queryPerson {
//                 person(google_id: "115306037822201585694") {
//                     google_id
//                     email
//                     verified_email
//                     name
//                     given_name
//                     family_name
//                     picture
//                     locale
//                 }
//             }
//         `,
//     })
//     .then(result => console.log('Alice: ', result));

const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname,
    );
};

ReactDOM.render(
    <ApolloProvider client={client}>
        <GetAlice />
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <App />
        </Auth0Provider>
    </ApolloProvider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
