import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const getApoolloClient = () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:4000',
    }),
    cache: new InMemoryCache(),
  })
  return client
}
