import React from 'react';
import './App.css';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { ConnectionContextProvider } from '../../client';
import { FishHouse } from '../FishHouse';

const theme = createTheme();

function App() {
  return (
    <ConnectionContextProvider>
      <MuiThemeProvider theme={theme}>
        <FishHouse />
      </MuiThemeProvider>
    </ConnectionContextProvider>
  );
}

export default App;
