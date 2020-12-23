import React from 'react'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Skeleton from '@material-ui/lab/Skeleton'


const ExerciseList = ({ 
  border = 1, 
  flexGrow = 1, 
  data = [],
  loading = true,
  error = false
}) => {
  
  return (
    <Box border={border} borderRadius={5} flexGrow={flexGrow}>
      {loading || error ? (
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
