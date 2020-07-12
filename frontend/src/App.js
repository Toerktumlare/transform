import React from 'react'
import './App.css'
import LoginView from './components/login/LoginView'
import { Router, Route, Switch } from 'react-router-dom';
import StatusView from './components/status/StatusView';
import { PrivateRoute } from './components/common/PrivateRoute';
import { history } from './components/helpers/history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/">
          <StatusView />
        </PrivateRoute>
        <Route path="/login">
          <LoginView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
