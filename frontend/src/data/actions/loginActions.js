import create from '../../api/loginResource'
import { setUser } from './userActions'
import { FAILED } from '../reducers/loginReducer'

export const SET_STATE = 'SET_STATE'

export function login() {
  return (dispatch) => {
    console.log(dispatch);
    create()
      .then((json) => {
        dispatch(setUser(json))
      })
      .catch((error) => {
        console.log(error)
        dispatch(setState(FAILED))
      })
  }
}

export function setState(data) {
  return {
    type: SET_STATE,
    payload: data,
  }
}
