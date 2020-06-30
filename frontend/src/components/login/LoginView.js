import React from 'react'
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core'
import Login from './Login'
import Logo from '../common/Logo'
import { connect } from 'react-redux';
import { login } from '../../data/actions/loginActions';

const LoginView = (props) => {

  const { login, error } = props

  const handleLogin = (event) => {
    event.preventDefault();
    login();
  }

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
        <Login onClick={handleLogin} error={error}/>
      </Box>
    </Box>
  )
}

LoginView.propTypes = {
  error: PropTypes.bool,
};

LoginView.defaultProps = {
  error: false
};

function mapStateToProps(state) {
  const error = state.login.state !== 'failed' ? false : true
  return {
    error: error
  };
}

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);