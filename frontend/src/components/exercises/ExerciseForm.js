import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { GET_EXERCISES } from './ExerciseQueries'

const CREATE_EXERCISE = gql`
  mutation doCreateExercise($input: ExerciseInput!) {
    createExercise(input: $input) {
      id
      name
    }
  }
`

const ExerciseForm = (props) => {
  const [createExercise, { data }] = useMutation(CREATE_EXERCISE)
  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    createExercise({ 
      variables: { input: { name } },
      refetchQueries: [{ query: GET_EXERCISES }]
    }).then(() => {
      setName('')
    })
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <Box flexDirection="column" flexGrow={2} mx={2}>
      <form name="form" onSubmit={handleSubmit}>
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
            onChange={handleNameChange}
            value={name}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            size="large"
            fullWidth
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ExerciseForm
