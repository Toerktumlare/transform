import React from 'react'
import './App.css'
import LoginView from './components/login/LoginView'
import { Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components/common/PrivateRoute'
import { history } from './components/helpers/history'
import Menu from './components/menu/Menu'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <PrivateRoute path="/">
          <Menu />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
