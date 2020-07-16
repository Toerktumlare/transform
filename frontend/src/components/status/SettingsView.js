import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { client } from '../common/ApolloClient'
import Box from '@material-ui/core/Box'

const LOGOUT_QUERY = gql`
  mutation doLogout($nothing: nothing) {
    user(input: "{}") @rest(path: "/logout", type: "Post", method: "POST") {
      NoResponse
    }
  }
`

function SettingsView() {
  const history = useHistory()

  const [doLogout, { loading, error }] = useMutation(LOGOUT_QUERY, {
    onCompleted: (data) => {
      client
        .clearStore()
        .then(localStorage.removeItem('user', JSON.stringify(data.user)))
      history.push('/')
    },
    onError(error) {
      // Is needed because of
      // https://github.com/apollographql/apollo-client/issues/6070
      console.error('error :>>', error.message)
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    doLogout('')
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
