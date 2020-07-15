import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core'
import ExerciseList from '../common/ExerciseList'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import Skeleton from "@material-ui/lab/Skeleton"

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
  console.log(data);


const exercises = [
  {
    id: 1,
    name: "Back Squats", 
  },
  {
    id: 2,
    name: "Snatch", 
  },
  {
    id: 3,
    name: "Pullups", 
  },
  {
    id: 4,
    name: "Chinups", 
  },
  {
    id: 5,
    name: "Situps", 
  },
  {
    id: 6,
    name: "Pushups", 
  },
  {
    id: 7,
    name: "Clean and Jerk", 
  },
  {
    id: 8,
    name: "Box Jumps", 
  },
  {
    id: 9,
    name: "Handstand pushups", 
  },
  {
    id: 10,
    name: "Goblet squat", 
  },
  {
    id: 11,
    name: "Toes to bar", 
  },
  {
    id: 12,
    name: "Mountain Climbers", 
  }
]

  return (
    <Container>
      <Box pt={3} display="flex" justifyContent="space-around">
        <Box flexDirection="column" flexGrow={2} mx={2}>
          <Typography variant="h6" gutterBottom>
            Exercises
          </Typography>
          <Box pb={3}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              size="large"
              fullWidth
            >
              Save
            </Button>
          </Box>
        </Box>
        {loading ? 
          <Skeleton variant="rect" width={210} height={118} />
          : <ExerciseList data={data.exercises} border={1} borderRadius={10} flexGrow={2} />
        }
      </Box>
    </Container>
  )
}

export default ExerciseView
