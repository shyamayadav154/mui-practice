import React from 'react';
import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
