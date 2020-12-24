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
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: "coral",
    },
    smallsize: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    smallText: {
        fontSize: 12
    },
    mediumSize: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    mediumText: {
        fontSize: 25
    },
    largeSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    largeText: {
        fontSize: 50
    },
    xlargeSize: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    xlargeText: {
        fontSize: 100,
    }
}));

const ProfileImage = ({initials, size}) => {
    const classes = useStyles();

    let circleDimension;
    let circleText;
    switch(size) {
        case "small":
            circleDimension = classes.smallsize;    
            circleText = classes.smallText;
            break;
        case "large":
            circleDimension = classes.largeSize;    
            circleText = classes.largeText;
            break;
        case "xlarge":
            circleDimension = classes.xlargeSize;    
            circleText = classes.xlargeText;
            break;
        default:
            circleDimension = classes.mediumSize;
            circleText = classes.mediumText;
    }

    return (
        <Box display='flex' alignItems="center" justifyContent="center" flexGrow={1}>
          <Avatar alt="avatar" size="large" className={`${classes.orange} ${circleDimension}`}>
              <Typography className={circleText}>
                  {initials}
              </Typography>
          </Avatar>
        </Box>
    );
}

export default ProfileImage;