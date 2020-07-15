import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import EventNoteIcon from '@material-ui/icons/EventNote'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import BarChartIcon from '@material-ui/icons/BarChart'
import SettingsIcon from '@material-ui/icons/Settings'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import ProfileView from './ProfileView'
import SettingsView from './SettingsView'
import CalenderView from './CalendarView';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExerciseView from './ExerciseView';

const drawerWidth = 60

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    paddingBottom: 10,
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Menu = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { children } = props
  const match = useRouteMatch()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    {
      text: 'Calender',
      icon: <EventNoteIcon />,
      link: '/calender',
    },
    {
      text: 'Workouts',
      icon: <FitnessCenterIcon />,
      link: '/workouts',
    },
    {
      text: 'Charts',
      icon: <BarChartIcon />,
      link: '/graphs',
    },
    {
      text: 'Exercises',
      icon: <ListAltIcon />,
      link: '/exercises'
    }
  ]

  const footerItems = [
    {
      text: 'Profile',
      icon: <AccountCircleIcon />,
      link: '/profile',
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
      link: '/settings',
    },
  ]

  const drawer = (
    <Box width={1}>
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((item, index) => {
          const { text, icon, link } = item
          return (
            <ListItem alignItems="center" button key={text}>
              {icon && (
                <Link to={`${match.url}${link}`}>
                  <ListItemIcon>{icon}</ListItemIcon>
                </Link>
              )}
            </ListItem>
          )
        })}
      </List>
      <div className={classes.footer}>
        <List>
          {footerItems.map((item) => {
            const { text, icon, link } = item
            return (
              <ListItem alignItems="center" button key={text}>
                {icon && (
                  <Link to={`${match.url}${link}`}>
                    <ListItemIcon>{icon}</ListItemIcon>
                  </Link>
                )}
              </ListItem>
            )
          })}
        </List>
      </div>
    </Box>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            transform yourself
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.toolbar} />
      <Route exact path={match.url}>
        <Container>
          <Typography variant="h1" component="h2" gutterBottom>
            default view
          </Typography>
        </Container>
      </Route>
      <Route exact path={`${match.url}/calender`}>
        <CalenderView />
      </Route>
      <Route exact path={`${match.url}/workouts`}>
        <Container>
          <Typography variant="h1" component="h2" gutterBottom>
            Workout view
          </Typography>
        </Container>
      </Route>
      <Route exact path={`${match.url}/graphs`}>
        <Container>
          <Typography variant="h1" component="h2" gutterBottom>
            Graph view
          </Typography>
        </Container>
      </Route>
      <Route exact path={`${match.url}/exercises`}>
        <ExerciseView />
      </Route>
      <Route exact path={`${match.url}/profile`}>
        <ProfileView />
      </Route>
      <Route exact path={`${match.url}/settings`}>
        <SettingsView />
      </Route>
    </div>
  )
}

export default Menu
