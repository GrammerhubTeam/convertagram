import React from 'react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import ConverterForm from './converterForm';
// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ConverterForm />
    </ThemeProvider>
  );
}

export default App;
