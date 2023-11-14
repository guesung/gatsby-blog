import React, { Suspense } from 'react'
import { Layout } from '../layout'
import { graphql } from 'gatsby'
import ChatList from '../components/chat-list'
import ChatForm from '../components/chat-form'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Replace with your Apollo Server URL
  cache: new InMemoryCache(),
})

export default function guest({ location, data }) {
  const { siteMetadata } = data.site

  return (
    <ApolloProvider client={client}>
      <Layout location={location} title={siteMetadata.title}>
        <h1>Guest Book</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <ChatList />
        </Suspense>
        <ChatForm />
      </Layout>
    </ApolloProvider>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
