// App.js
import React from 'react';

 
import DayIndex from './components/Day/DayIndex';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const defaultTheme = createTheme();
  
  
  return (
    <ThemeProvider theme={defaultTheme}>
    <DayIndex/>
    </ThemeProvider>
 
  );
}

export default App;
