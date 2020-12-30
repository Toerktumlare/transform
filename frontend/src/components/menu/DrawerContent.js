import React from 'react';
import {
    Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DrawerMenu from './DrawerMenu'
import DrawerFooter from './DrawerFooter'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    wrapper: {
        width: props => props.width,
    }
}))

const Drawer = (props) => {
    const classes = useStyles(props)
    
    return (
      <Box className={classes.wrapper} display="flex" flexDirection="column" justifyContent="flex-start" flexGrow="1">
        <Box className={classes.toolbar} />
        <Box display='flex' flexDirection="column" justifyContent="space-between" flexGrow="1">
            <DrawerMenu />
            <DrawerFooter />
        </Box>
      </Box>
    )
}

export default Drawer;