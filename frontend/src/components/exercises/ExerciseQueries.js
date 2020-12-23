import gql from 'graphql-tag'

export const GET_EXERCISES = gql`
  query exercises {
    exercises {
      id
      name
    }
  }
`

export const CREATE_EXERCISE = gql`
  mutation doCreateExercise($input: ExerciseInput!) {
    createExercise(input: $input) {
      id
      name
    }
  }
`