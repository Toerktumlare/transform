import React from 'react'
import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Avatar,
    Typography
} from '@material-ui/core'

/**
*   Stuff to fix:
*
*   - If no name is provided render default person image depending on gender
*   - Be able to provide src image
*   - Set priority order if everything is provided, image -> initials -> default image
*   - set custom font size
*   - set custom width and hight
*/
const useStyles = makeStyles((theme) => ({

}));

const ProfileBasicInfo = ({initials, size}) => {
    const classes = useStyles();
    return (
        <Box display='flex' flexDirection="column" flexGrow={1}>
            <Box mb={1} ml={7}>
                <Typography variant="h6" display="inline">
                    Name:  
                </Typography>
                <Typography variant="h6" display="inline" style={{ "padding-left": '20px' }}>
                    Thomas Andolf
                </Typography>
            </Box>
            <Box mb={1} ml={7}>
                <Typography variant="h6" display="inline">
                    Email:  
                </Typography>
                <Typography variant="h6" display="inline" style={{ "padding-left": '20px' }}>
                    thomas.andolf@gmail.com
                </Typography>
            </Box>
        </Box>
    );
}

export default ProfileBasicInfo;