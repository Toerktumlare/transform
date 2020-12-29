import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField } from '@material-ui/core';

const createStyles = makeStyles((theme) => ({

}))

const StyledInput = (props) => {
    const { label, onChange, value } = props;
    return (
        <TextField
            id={label}
            label={label}
            variant="outlined"
            size="small"
            onChange={onChange}
            value={value}
            {...props}
      />
    )
}

export default StyledInput;
