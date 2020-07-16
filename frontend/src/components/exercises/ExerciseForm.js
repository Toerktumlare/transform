import React from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'



const ExerciseForm = (props) => {
  return (
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
  )
}

export default ExerciseForm
