import React from 'react';
import './App.css';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { SettingsContextProvider } from 'common';
import { ConnectionContextProvider } from '../../client';
import { FishHouse } from '../FishHouse';

const theme = createTheme();

function App() {
  return (
    <ConnectionContextProvider>
      <SettingsContextProvider>
        <MuiThemeProvider theme={theme}>
          <FishHouse />
        </MuiThemeProvider>
      </SettingsContextProvider>
    </ConnectionContextProvider>
  );
}

export default App;
