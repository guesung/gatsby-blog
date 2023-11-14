import React, { Suspense } from 'react'
import { Layout } from '../layout'
import { graphql } from 'gatsby'
import ChatList from '../components/chat-list'
import ChatForm from '../components/chat-form'

export default function guest({ location, data }) {
  const { siteMetadata } = data.site

  return (
    <Layout location={location} title={siteMetadata.title}>
      <h1>Guest Book</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ChatList />
      </Suspense>
      <ChatForm />
    </Layout>
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
