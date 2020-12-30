import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Route, useRouteMatch } from 'react-router-dom'
import ProfileView from '../profile/ProfileView'
import SettingsView from '../status/SettingsView'
import CalenderView from '../status/CalendarView'
import ExerciseView from '../exercises/ExerciseView'
import WorkoutsView from '../workouts/WorkoutsView'
import DrawerMain from './DrawerMain'
import TopMenu from './TopMenu'

const drawerWidth = 60

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: theme.spacing(3)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0, 3, 0, 3),
  },
}))

const Menu = (props) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const match = useRouteMatch()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopMenu pl={drawerWidth}/>
      <DrawerMain onClose={handleDrawerToggle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Route exact path={match.url}>
            <Typography variant="h1" component="h2" gutterBottom>
              default view
            </Typography>
          </Route>
          <Route exact path='/calender'>
            <CalenderView />
          </Route>
          <Route exact path='/workouts'>
            <WorkoutsView />
          </Route>
          <Route exact path='/graphs'>
            Graph
          </Route>
          <Route exact path='/exercises'>
            <ExerciseView />
          </Route>
          <Route exact path='/profile'>
            <ProfileView />
          </Route>
          <Route exact path='/settings'>
            <SettingsView />
          </Route>
      </main>
    </div>
  )
}

export default Menu
