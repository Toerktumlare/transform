import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { 
  useQuery, 
  gql 
} from "@apollo/client";
import { Box } from '@material-ui/core';
import ClipLoader from "react-spinners/ClipLoader"

export const  PrivateRoute = ({ children, ...rest }) => {

  const GET_USER = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `;

  const { loading, error, data } = useQuery(GET_USER);

  if(loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <ClipLoader
          size={75}
          color={"#123abc"}
          loading={loading}
        />
      </Box>
    );
  }



  return (
    <Route {...rest} render={({ location }) =>
        data.isLoggedIn ? ( 
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