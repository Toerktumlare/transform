import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box
} from '@material-ui/core';

const createStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    }
}))

const StyledSelect = (props) => {
    const classes = createStyles();
    const { label, value, onChange, values} = props;
    return (
      <Box {...props}>
          <FormControl 
            variant="outlined"
            fullWidth
            size="small"
            className={classes.formControl}
            {...props}
          >
          <InputLabel id={label}>{label}</InputLabel>
          <Select
            labelId={label}
            id={label}
            value={value}
            onChange={onChange}
            label={label}
            {...props}
          >
          {values ? values.map((item, index) => {
              return (
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>                
              )
            }) : null}
          </Select>
        </FormControl>
      </Box>
    )
}

export default StyledSelect;