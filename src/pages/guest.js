import React from 'react'
import { Layout } from '../layout'
import { graphql } from 'gatsby'
export default function guest({ data, location }) {
  const { siteMetadata } = data.site
  const books = data.guest.books
  console.log(books)
  return (
    <Layout location={location} title={siteMetadata.title}>
      aa
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
    guest {
      books {
        title
        author
      }
    }
  }
`
