import { Box, Typography } from '@material-ui/core';
import React from 'react';
import StyledInput from '../../common/StyledInput';
import { makeStyles } from "@material-ui/core/styles"

const createStyles = makeStyles((theme) => ({
    margin: {
       marginLeft: theme.spacing(1),
    },
    text: {
        paddingTop: "0.5%"
    }
}))

const ForMinutesInput = (props) => {
    const classes = createStyles();
    return (
        <Box display="flex" justifyContent="flex-start" flexGrow={1}>
            <Typography variant="overline" className={`${classes.margin} ${classes.text}`}>for</Typography>
            <StyledInput label="number" className={classes.margin}/>
            <Typography variant="overline" className={`${classes.margin} ${classes.text}`}>of rounds</Typography>
        </Box>
    )
}

export default ForMinutesInput;