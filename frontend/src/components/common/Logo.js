import React from 'react';
import Transform from '@material-ui/icons/Transform';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: props => (props.size === "small" ? 50 : props.size === "medium" ? 100 : props.size === "large" ? 150 : 100),
  }
}))

const Logo = (props) => {
  const classes = useStyles(props);
  return (
      <Transform className={classes.logo} />
  )
}

export default Logo
