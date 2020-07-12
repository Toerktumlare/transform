import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useApolloClient } from "@apollo/react-hooks";

export const  PrivateRoute = ({ children, ...rest }) => {
  const userString = localStorage.getItem('user');
  const client = useApolloClient();

  if(userString) {
    const user = JSON.parse(userString)
    client.writeData({ data: { user }});
  }

  return (
    <Route {...rest} render={({ location }) =>
        userString ? ( 
          children
        ) : (
          <Redirect to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}