import { authService } from '../../api'
import { userConstants } from '../constants/user.constants';
import { history } from '../../components/helpers';

export const authActions = {
  login
}

function login(username, password) {
  return (dispatch) => {
    console.log("action, logging in");
    dispatch(request({ username }));
    authService.login(username, password)
      .then(json => {
        localStorage.setItem('user', JSON.stringify(json));
        dispatch(success(json));
        history.push('/');
      },
      error => {
        dispatch(failure(error.toString()));
      })
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
