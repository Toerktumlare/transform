import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ToolbarUser from './ToolbarUser'

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: "100%",
            paddingLeft: props => props.pl
        },
    },
    menuButton: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        marginRight: theme.spacing(1)
    }
}))

const TopMenu = (props) => {
    const classes = useStyles(props);
    const { onClick } = props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" flexGrow="1" pr={3} >
            <IconButton
                    color="inherit"
                    edge="start"
                    onClick={onClick}
                    className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap style={{ 'flexGrow': '1' }}>
                transform yourself
            </Typography>
            <ToolbarUser />
          </Box>
        </Toolbar>
      </AppBar>
    )
}

export default TopMenu;