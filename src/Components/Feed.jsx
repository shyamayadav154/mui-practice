import { Avatar, Box, Checkbox } from '@mui/material';
import React from 'react';
import Post from './Post';


function Feed() {
  return (
    <Box flex={4}>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </Box>
  );
}

export default Feed;
