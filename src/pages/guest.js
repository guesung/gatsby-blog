import { graphql } from 'gatsby'
import React, { Suspense } from 'react'
import { Layout } from '../layout'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import GuestBook from '../components/guest-book'

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Replace with your Apollo Server URL
  cache: new InMemoryCache(),
})

export default function guest({ location, data }) {
  const { siteMetadata } = data.site

  return (
    <ApolloProvider client={client}>
      <Layout location={location} title={siteMetadata.title}>
        <Suspense fallback={<p>Loading...</p>}>
          <GuestBook />
        </Suspense>
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
