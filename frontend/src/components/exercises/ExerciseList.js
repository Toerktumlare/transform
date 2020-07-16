import React from 'react'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Skeleton from '@material-ui/lab/Skeleton'

const GET_EXERCISES = gql`
  query exercises {
    exercises {
      id
      name
    }
  }
`

const ExerciseList = ({ border, borderRadius, flexGrow }) => {
  const { loading, error, data } = useQuery(GET_EXERCISES)
  return (
    <Box border={border} borderRadius={borderRadius} flexGrow={flexGrow}>
      {loading ? (
        <Skeleton variant="rect" />
      ) : (
        <List dense>
          {data.exercises.map((item, index) => {
            return (
              <>
                <ListItem button key={item.id}>
                  <ListItemText primary={item.name} />
                </ListItem>
                <Divider />
              </>
            )
          })}
        </List>
      )}
    </Box>
  )
}

export default ExerciseList
