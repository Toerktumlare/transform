import React from 'react'
import { Box, Container } from '@material-ui/core'
import Login from './Login'
import Logo from '../common/Logo'

const LoginView = (props) => {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mt={7} mb={7}>
          <Logo />
        </Box>
        <Box border={1} borderRadius={16} margin={1} borderColor="grey.400">
          <Login />
        </Box>
      </Box>
    </Container>
  )
}

export default LoginView
