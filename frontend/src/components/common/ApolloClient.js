import { 
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from '@apollo/client'
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RestLink } from 'apollo-link-rest';
import Cookies from 'js-cookie'

const cache = new InMemoryCache()

const httpLink = new createHttpLink({
  credentials: 'include',
  uri: process.env.REACT_APP_API_URL + '/graphql'
})

const restLink = new RestLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: 'include',
  fetchOptions: {
    mode: 'no-cors',
  }
})

const authLink = setContext((_, { headers }) => {
  const csrf_token = Cookies.get('XSRF-TOKEN');
  return {
    headers: {
      ...headers,
      'X-XSRF-TOKEN': csrf_token ? csrf_token : "",
    }
  }
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error] Message: ${message}, ${path}`)
    })
  }
  if (networkError) {
    console.log(
      `[Network error ${networkError}] Operation: ${operation.operationName}`
    )
  }
})

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, restLink, httpLink]),
  cache,
})
