import React from 'react'
import {
    Hidden,
    Drawer
} from '@material-ui/core'
import DrawerContent from './DrawerContent'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = '60px';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      display: "flex",
      zIndex: 0
    }
  },
  drawerPaper: {
    width: drawerWidth,
  }
}));

const DrawerMain = (props) => {
    const classes = useStyles();    
    const { onClose, mobileOpen } = props;
    return (
      <nav className={classes.drawer}>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={onClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContent />
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
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>

    )
}

export default DrawerMain;