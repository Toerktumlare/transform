import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AccountBox from '@material-ui/icons/AccountBox'
import Lock from '@material-ui/icons/Lock'
import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

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
    display: props => props.error ? "flex" : "none",
    marginBottom: 10
  }
}))

const Login = (props) => {
  console.log(props.error);
  const classes = useStyles(props)
  const { onClick } = props
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
      <Box display="flex" flexDirection="column" className={classes.form}>
        <Alert className={classes.error} severity="error">There was an error while logging in</Alert>
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
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          size="large"
          onClick={onClick}
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default Login
