import {
    InMemoryCache,
    makeVar
} from '@apollo/client'



export const isLoggedInVar = makeVar(!!localStorage.getItem('userId'));

export const cache = new InMemoryCache({
  typePolicies: {
    User: {
      keyFields: []
    },
    Query : {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar()
          }
        }
      }
    }
  }
});
