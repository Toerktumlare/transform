import React from 'react'
import './App.css'
import LoginView from './components/login/LoginView'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import StatusView from './components/status/StatusView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginView} />
        <PrivateRoute path="/">
          <StatusView />
        </PrivateRoute> 
      </Switch>
    </BrowserRouter>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App
