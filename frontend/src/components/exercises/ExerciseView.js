import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import ExerciseList from './ExerciseList'
import ExerciseForm from './ExerciseForm'

const ExerciseView = () => {
  return (
    <Container>
      <Box pt={3} display="flex" justifyContent="space-around">
        <ExerciseForm />
        <ExerciseList border={1} borderRadius={10} flexGrow={2} />
      </Box>
    </Container>
  )
}

export default ExerciseView
