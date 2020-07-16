import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import ExerciseList from './ExerciseList'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import Skeleton from "@material-ui/lab/Skeleton"
import ExerciseForm from './ExerciseForm'

const GET_EXERCISES = gql`
  query exercises {
    exercises {
      id
      name
    }
  }
`;

const ExerciseView = () => {

  const { loading, error, data } = useQuery(GET_EXERCISES);

  return (
    <Container>
      <Box pt={3} display="flex" justifyContent="space-around">
        <ExerciseForm />
        {loading ? 
          <Skeleton variant="rect" width={210} height={118} />
          : <ExerciseList data={data.exercises} border={1} borderRadius={10} flexGrow={2} />
        }
      </Box>
    </Container>
  )
}

export default ExerciseView
