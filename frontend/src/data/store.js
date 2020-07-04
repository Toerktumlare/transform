import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { alert, authentication } from './reducers'

export const rootReducer = combineReducers({
  authentication,
  alert,
})

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger))
}
