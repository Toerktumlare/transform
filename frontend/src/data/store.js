import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger';
import loginReducer from './reducers/loginReducer';

export const rootReducer = combineReducers({
  login: loginReducer,
})

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger))
}
