import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    Box,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import EventNoteIcon from '@material-ui/icons/EventNote'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import BarChartIcon from '@material-ui/icons/BarChart'
import ListAltIcon from '@material-ui/icons/ListAlt'

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
        link: '/exercises',
    },
]

const DrawerMenu = (props) => {
    return (
      <Box>
        <List>
            {menuItems.map((item, index) => {
                const { text, icon, link } = item
                return (
                    <ListItem alignItems="center" button key={text}>
                    {icon && (
                        <Link to={location => ({...location, pathname: `${link}`})}>
                            <ListItemIcon>{icon}</ListItemIcon>
                        </Link>
                    )}
                    </ListItem>
                )
            })}
        </List>
      </Box>
    )
}

export default DrawerMenu;