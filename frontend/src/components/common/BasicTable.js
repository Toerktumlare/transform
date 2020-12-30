import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({

});

const BasicTable = (props) => {
    const classes = useStyles();
    const { headers, items } = props;

    let loading = false;

    let defaultItems = []
    if(items === undefined) {
        loading = true;
        for (var i = 0; i < 3; i++) {
            defaultItems.push(<TableRow key={1}>
                {headers.map((item, i) => (
                    <TableCell key={i} align="left">
                        <Skeleton variant="box" />
                    </TableCell>
                ))}
            </TableRow>);
        }
    }
  
    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header, i) => (
                            <TableCell>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                {loading ? (
                    <TableBody>
                        {defaultItems}
                    </TableBody>
                ) : (
                    <TableBody>
                        {items.map((item, i) => (
                            <TableRow key={i}>
                                {Object.keys(item).map((key, value) => (
                                    <TableCell align="left">{item[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    )
                }
            </Table>
        </TableContainer>
    );
  }

  export default BasicTable;