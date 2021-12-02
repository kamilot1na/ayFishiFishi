import React from 'react';
import { Button, ButtonProps, createTheme, MuiThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    }
  }
});

export const DeleteButton = (props: ButtonProps) => {

  return (
    <MuiThemeProvider theme={theme}>
      <Button {...props} color="primary"/>
    </MuiThemeProvider>
  );
}
