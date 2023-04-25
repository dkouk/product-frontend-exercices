import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './hooks/Cart/CartProvider';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
