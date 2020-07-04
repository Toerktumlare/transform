import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AccountBox from '@material-ui/icons/AccountBox'
import Lock from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { authActions } from '../../data/actions/auth.actions'

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '40px',
  },
  header: {
    marginTop: '40px',
    marginLeft: '100px',
    marginRight: '100px',
  },
  textField: {
    marginBottom: '20px',
  },
  error: {
    marginBottom: 10,
  },
  progress: {
    marginLeft: 10,
    marginTop: 10,
    visibility: (props) => (props.loggingIn ? 'visible' : 'hidden'),
  },
}))

const Login = (props) => {
  const classes = useStyles(props)

  const { loginFailed, login } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('logging in...')
    login(username, password)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Box display="flex" flexDirection="column" className={classes.box}>
      <Typography
        variant="h5"
        align="center"
        className={classes.header}
        gutterBottom
      >
        Login to your account
      </Typography>
      <form name="form" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" className={classes.form}>
          {loginFailed && (
            <Alert className={classes.error} severity="error">
              There was a problem with your login.
            </Alert>
          )}
          <TextField
            id="standard-basic"
            label="Username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            }}
            className={classes.textField}
            size="small"
            margin="normal"
            fullWidth
            onChange={handleUsernameChange}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            className={classes.textField}
            size="small"
            margin="normal"
            fullWidth
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            size="large"
            fullWidth
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  )
}

function mapState(state) {
  const { loggingIn, loginFailed } = state.authentication
  return { loggingIn, loginFailed }
}

const actionCreators = {
  login: authActions.login,
}

export default connect(mapState, actionCreators)(Login)
