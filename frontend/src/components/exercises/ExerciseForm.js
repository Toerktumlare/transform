import React from 'react'
import { 
  Box, 
  Typography, 
  TextField, 
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

const ExerciseForm = ({ 
  onSubmit, 
  value, 
  onInputChange, 
  categories=[],
  selectedCategory=[],
  onCategoryChange
}) => {

  const classes = useStyles();

  return (
    <Box flexDirection="column" flexGrow={2} mx={2}>
      <form name="form" onSubmit={onSubmit}>
        <Typography variant="h6" gutterBottom>
          Edit Exercises
        </Typography>
        <Box pb={3}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
            onChange={onInputChange}
            value={value}
          />
        </Box>
        <FormControl 
          variant="outlined"
          fullWidth
          size="small"
          className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedCategory}
          onChange={onCategoryChange}
          label="Categories"
          multiple
        >
        {categories.map((item, index) => {
            return (
              <MenuItem value={item.id} key={item.id}>
                {item.name}
              </MenuItem>                
            )
          })}
        </Select>
      </FormControl>
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            size="large"
            fullWidth
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default ExerciseForm
