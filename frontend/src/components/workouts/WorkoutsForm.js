import React, { useState } from 'react'
import { Box, Typography, TextField, Button, MenuItem } from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'

const WorkoutsForm = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [workoutType, setWorkoutType] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleWorkoutTypeChange = (e) => {
    setWorkoutType(e.target.value)
  }

  return (
    <Box flexDirection="column" width={1}>
      <form name="form" onSubmit={handleSubmit}>
        <Box mx={1} mb={2}>
          <Typography variant="h6">
            Workouts
          </Typography>
        </Box>
        <Box display="flex" width={1} mb={2}>
          <Box mx={1} width={1}>
            <DateTimePicker
              variant="inline"
              inputVariant="outlined"
              label="Date picker inline"
              value={selectedDate}
              ampm={false}
              onChange={handleDateChange}
              onError={console.log}
              disablePast
              // format="yyyy-MM-DD hh:mm"
              format="yyyy-MM-DD HH:mm"
              fullWidth={true}
              size={'small'}
            />
          </Box>
          <Box mx={1} width={1}>
            <TextField
              id="outlined-select-currency"
              select
              label="WorkoutType"
              value={workoutType}
              onChange={handleWorkoutTypeChange}
              variant="outlined"
              fullWidth={true}
              size={'small'}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>AMRAP</MenuItem>
              <MenuItem value={20}>Every</MenuItem>
              <MenuItem value={30}>Within</MenuItem>
            </TextField>
          </Box>
          <Box mx={1} width={1}>
            <TextField
              type="number"
              label="Minutes"
              inputProps={{ min: '0', max: '10', step: '1' }}
              size="small"
              variant="outlined"
              fullWidth={true}
            />
          </Box>
          <Box mx={1} width={1}>
            <TextField
              type="number"
              label="Seconds"
              inputProps={{ min: '0', max: '10', step: '1' }}
              size="small"
              variant="outlined"
              fullWidth={true}
            />
          </Box>
          <Box mx={1} width={1}>
            <TextField
              type="number"
              label="Rounds"
              inputProps={{ min: '0', max: '10', step: '1' }}
              size="small"
              variant="outlined"
              fullWidth={true}
            />
          </Box>
        </Box>
        <Box mx={1}>
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

export default WorkoutsForm
