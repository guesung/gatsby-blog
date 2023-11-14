import React from 'react'
import { Layout } from '../layout'
import { graphql } from 'gatsby'
import { Header } from '../components/header'
import ChatList from '../components/chat-list'
import ChatForm from '../components/chat-form'

const DUMMY_CHAT_LIST = [
  {
    message: '안녕하세요',
    date: new Date(),
  },
  {
    message: '네~',
    date: new Date().setDate(new Date().getDate() - 10),
  },
  {
    message: '반갑습니다.',
    date: new Date(),
  },
]
export default function guest({ data, location }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const { siteMetadata } = data.site
  return (
    <Layout location={location} title={siteMetadata.title}>
      <h1>Guest Book</h1>
      <ChatList chatList={DUMMY_CHAT_LIST}></ChatList>
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


// guest {
    //   books {
    //     title
    //     author
    //   }
    // }