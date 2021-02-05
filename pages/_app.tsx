import '../css/antd.css'
import { RecoilRoot } from 'recoil'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api-desk.genoplan-dev.com/admin/graphql',
  }),
  cache: new InMemoryCache(),
})

export default function app(props: any) {
  const { Component, pageProps } = props

  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
  </ApolloProvider>
  )
}