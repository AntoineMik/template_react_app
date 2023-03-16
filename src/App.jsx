import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from "framer-motion";
import { theme } from "./utils/muiTheme";
import './App.css';
import Routers from './router/Routers';

const helmetContext = {};

function App() {

  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <ThemeProvider theme={theme} >
          <AnimatePresence mode='wait'>
            <Routers />
          </AnimatePresence>
        </ThemeProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
