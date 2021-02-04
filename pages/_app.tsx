import React from 'react';
import App from 'next/app';
import '../css/antd.css';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api-desk.genoplan-dev.com/admin/graphql',
  }),
  cache: new InMemoryCache(),
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
    </ApolloProvider>
    )
  }
}

export default MyApp;