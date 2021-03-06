import React from 'react';
import ReactDom from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Context from './Context';

import { App } from './App';
const client = new ApolloClient({
    uri: 'https://petgram-psi-seven.vercel.app/graphql',
    request: operation => {
        const token = sessionStorage.getItem('token');
        const authorization = token ? `Bearer ${token}` : '';
        operation.setContext({
            headers: {
                authorization
            }
        });
    },
    onError: error => {
        const { networkError } = error;
        if(networkError && networkError.result.code === 'invalid_token'){
            window.sessionStorage.removeItem('token');
            window.location.href = '/';
        }
    }
});

ReactDom.render(
<Context.Provider>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
</Context.Provider>
,
document.getElementById('app'));