import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import gql from 'graphql-tag'
import { useHistory } from 'react-router-dom'
import { 
  useApolloClient, 
  useMutation, 
} from "@apollo/client";
import Box from '@material-ui/core/Box'

const LOGOUT_MUTATION = gql`
  mutation doLogout {
    post(input: {}) @rest(path: "/logout", type: "Post", method: "POST") {
      NoResponse
    }
  }
`

function SettingsView() {
  const history = useHistory()
  const client = useApolloClient();

  const [doLogout, { loading, error }] = useMutation(LOGOUT_MUTATION, {
    onCompleted: (data) => {
      client
        .clearStore()
        .then(localStorage.removeItem('user'))
      history.push('/')
    },
    onError(error) {
      // Is needed because of
      // https://github.com/apollographql/apollo-client/issues/6070
      console.error('error :>>', error.message)
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("I was clicked");
    doLogout();
  }

  return (
    <Container>
      <Box mt={3}>
        <form name="form" onSubmit={handleSubmit}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            size="large"
          >
            Logout
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default SettingsView
