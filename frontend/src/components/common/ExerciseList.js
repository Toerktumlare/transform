import React from 'react'
import Box from '@material-ui/core/box'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ExerciseList = ({data, border, borderRadius, flexGrow}) => {
  console.log(data)
  return (
    <Box border={border} borderRadius={borderRadius} flexGrow={flexGrow}>
      <List dense>
        {data.map((item, index) => {
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
    </Box>
  )
}

export default ExerciseList
