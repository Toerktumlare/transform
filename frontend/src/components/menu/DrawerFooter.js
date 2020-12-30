import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'

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

const DrawerFooter = (props) => {
    return (
      <Box>
        <List>
          {footerItems.map((item) => {
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

export default DrawerFooter;