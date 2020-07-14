import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore from './data/store'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './components/common/ApolloClient'

const store = configureStore()
window.store = store

ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
