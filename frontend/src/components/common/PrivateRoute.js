import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { 
  useApolloClient, 
  gql 
} from "@apollo/client";

export const  PrivateRoute = ({ children, ...rest }) => {
  const userString = localStorage.getItem('user');
  const client = useApolloClient();

  if(userString) {
    const user = JSON.parse(userString)
    client.writeQuery({
      query: gql`
      query saveUser {
        user
      }
    `, data: { 
        user: user 
      }
    });
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