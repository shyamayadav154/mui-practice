import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import './App.css';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Add from './Components/Add';


function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode,
      primary: { main: '#9c4143', light: '#F7F6CF' },
      secondary: { main: '#765655' },
      otherColor: { main: '#A57283' },
      background: { paper: '#F4DDDC' },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="#fcf5f5" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;










