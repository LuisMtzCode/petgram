import React from 'react';
import ReactDom from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { App } from './App';
// const client = new ApolloClient({
//     uri: ''
// });

ReactDom.render(<App />, document.getElementById('app'));