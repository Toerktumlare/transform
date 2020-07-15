import React from 'react'
import Box from '@material-ui/core/Box'
import BigCalendar from '../common/BigCalendar'
import { Container } from '@material-ui/core'

const CalendarView = () => {
  return (
    <Container>
      <Box mt={3}>
        <BigCalendar />
      </Box>
    </Container>
  )
}

export default CalendarView
