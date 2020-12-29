import React from 'react';
import { 
    Box,
    TableHead,
    TableCell,
    Checkbox,
    TableRow,
    TableContainer,
    TableBody,
    Paper,
    Table
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, id, category) {
  return { name, id, category };
}

const exercises = [
    createData("Squats", 1, "Legs"),
    createData("Wall balls", 2, "Legs" ),
    createData("Clean and Jerk", 3, "Full body"),
    createData("Squats", 4, "Legs"),
    createData("Handstand weight shift", 5, "Legs" ),
    createData("Skin the cat", 6, "Full body"),
    createData("Atlas ball bear hug squat", 1, "Legs"),
    createData("Echo bike", 7, "Legs"),
    createData("Plank", 8, "Legs"),
    createData("Overhead Squats", 9, "Legs"),
    createData("One arm dumbell hang muscle snatch", 10, "Legs"),
    createData("Deep dynamic side plank", 11, "Legs"),
    createData("Side V-ups", 12, "Legs"),
    createData("V-ups", 13, "Legs" ),
    createData("Situps",14, "Full body"),
    createData("Crunches", 15, "Legs" ),
    createData("Hollow hold", 16, "Full body"),
    createData("Barbell thrusters",17, "Legs" ),
    createData("Weight plate get up sit up", 18, "Full body"),
    createData("Russian leg lifts on bench", 19, "Legs" ),
    createData("Dips", 20, "Full body"),
    createData("Barbell Seal Row", 21, "Legs" ),
    createData("Lean back Dumbell curls", 22, "Full body"),
    createData("Knees to elbows", 23, "Legs" ),
    createData("Muscle up", 24, "Full body"),
    createData("Pull up", 25, "Legs" ),
    createData("Sled push", 26, "Full body"),
]

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'name' },
  { id: 'category', numeric: false, disablePadding: false, label: 'category' },
  { id: 'id', numeric: true, disablePadding: false, label: 'id' },
];

const TableHeader = (props) => {
    return (
      <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                inputProps={{ 'aria-label': 'select exercises' }}
              />
            </TableCell>
            {headCells.map((headcell) => {
                return (
                  <TableCell
                    key={headCells.id}
                    align={headcell.numeric ? 'right' : 'left'}
                  >
                    {headcell.label}
                  </TableCell>
                )
            })}
          </TableRow>
      </TableHead>
    )
}

const SelectableTable = (props) => {
  const classes = makeStyles();
    return (
      <Box display="flex" flexGrow="1">
        <TableContainer component={Paper}>
          <Table
            size="small"
          >          
            <TableHeader />
            <TableBody>
              {exercises.map((row, index) => {
                return (
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                      />
                    </TableCell>
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell>
                      {row.category}
                    </TableCell>
                    <TableCell align="right">
                      {row.id}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
}

export default SelectableTable;