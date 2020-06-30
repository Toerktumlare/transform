import { SET_STATE } from '../actions/loginActions'

export const SUCCESS = 'success'
export const FAILED = 'failed'
export const PROCESSING = 'processing'

const initialState = {
  state: '',
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE:
      return { ...state, state: action.payload }
    default:
      return state
  }
}
