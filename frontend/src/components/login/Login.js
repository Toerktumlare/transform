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
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

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
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -14,
    marginLeft: -14,
  },
}))

const LOGIN_QUERY = gql`
  mutation doLogin(
    $username: String!
    $password: String!
    $formSerializer: any
  ) {
    user(input: { username: $username, password: $password })
      @rest(
        path: "/login"
        type: "User"
        method: "POST"
        bodySerializer: $formSerializer
      ) {
      id
      givenName
      familyName
      middleName
      email
    }
  }
`
const formSerializer = (data, headers) => {
  const formData = new URLSearchParams()
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key])
    }
  }

  headers.set('Content-Type', 'application/x-www-form-urlencoded')

  return { body: formData, headers }
}

const Login = (props) => {
  const classes = useStyles(props)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const [doLogin, { loading, error }] = useMutation(LOGIN_QUERY, {
    onCompleted: (data) => {
      history.push('/')
    },
    onError(error) {
      // Is needed because of
      // https://github.com/apollographql/apollo-client/issues/6070
      console.error('error :>>', error.message)
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    doLogin({
      variables: { username, password, formSerializer },
    })
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
          {error && (
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
          <Box position="relative">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
              size="large"
              fullWidth
              disabled={loading}
            >
              Login
            </Button>
            {loading && (
              <CircularProgress size={26} className={classes.buttonProgress} />
            )}
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default Login;
