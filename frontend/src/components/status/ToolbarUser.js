import React from 'react';
import {
    Box, 
    ButtonBase, 
    Typography,
} from '@material-ui/core'
import {
    Skeleton
} from '@material-ui/lab'
import {
    gql,
    useQuery
} from '@apollo/client'
import { makeStyles } from '@material-ui/styles';
import ProfileImage from '../profile/ProfileImage';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '10%',
    }
}));

const GET_USERNAMES = gql`
    query getUserNames {
        user {
            givenName
            familyName
        }
    }
`

const ToolbarUser = (props) => {

    const classes = useStyles()
    const {data, loading, error } = useQuery(GET_USERNAMES);
    const history = useHistory();

    var initials = "";
    var username = "";
    if (data !== undefined) {
        const { givenName,  familyName } = data.user;
        initials = givenName.charAt(0) + familyName.charAt(0);
        username = givenName;
    }

    return (
        <ButtonBase onClick={(e) => { history.push('/profile') }}>
            <Box display="flex" justifyContent="flex-end" className={classes.root} >
                <Box display="flex" justifyContent="flex-end" flexGrow={1} mr={2}>
                    <Typography variant="h6" flexGrow={1} >
                        {loading ? <Skeleton width={100} /> : username}
                    </Typography>
                </Box>
                {loading ? (
                    <Skeleton variant="circle">
                        <ProfileImage size="small" />
                    </Skeleton>
                ) : (
                    <ProfileImage size="small" initials={initials}/>
                )}
            </Box>
        </ButtonBase>
    )
}

export default ToolbarUser;