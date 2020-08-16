import React from 'react'
import { Box, Card, CardActionArea, CardContent } from '@material-ui/core'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '200px',
  },
}))

const WorkoutsOverview = () => {
  const classes = useStyles()
  return (
    <Box pt={3} display="flex">
      <Card className={classes.root}>
          <CardActionArea className={classes.root}>
            <CardContent>
              <ControlPointIcon size="large" />
            </CardContent>
          </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <ControlPointIcon size="large" />
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <ControlPointIcon size="large" />
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <ControlPointIcon size="large" />
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <ControlPointIcon size="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default WorkoutsOverview
