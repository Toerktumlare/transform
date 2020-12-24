import React from 'react'
import { Box } from '@material-ui/core'
import ProfileImage from './ProfileImage';
import ProfileBasicInfo from './ProfileBasicInfo'

function ProfileView() {
  return (
      <Box mt={5} display='flex' alignItems="center" justifyContent="space-around">
        <ProfileBasicInfo />
        <ProfileImage size="large" initials={"TA"} />
      </Box>
 )
}

export default ProfileView
