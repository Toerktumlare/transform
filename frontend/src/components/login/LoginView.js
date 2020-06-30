import React from 'react'
import { Box } from '@material-ui/core'
import Login from './Login'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../common/Logo'

const LoginView = () => {
  return (
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
  )
}

export default LoginView
