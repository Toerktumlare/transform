import gql from 'graphql-tag'

export const GET_EXERCISES = gql`
  query exercises {
    exercises {
      id
      name
    }
  }
`