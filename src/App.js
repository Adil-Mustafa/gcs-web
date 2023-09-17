// App.js
import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { daysData } from './data';
 
import DayIndex from './components/Day/DayIndex';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const [days, setDays] = useState(daysData);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const defaultTheme = createTheme();
  const addDay = (newDay) => {
    setDays([...days, newDay]);
  };

  const editDay = (day) => {
    setSelectedDay(day);
    setEditDialogOpen(true);
  };

  
  return (
    <ThemeProvider theme={defaultTheme}>

    <DayIndex/>
    </ThemeProvider>
    // <Container>
    //   <Grid container spacing={3}>
    //     <Grid item xs={6}>
    //       <Paper elevation={3}>
    //         <DayForm addDay={addDay} />
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Paper elevation={3}>
    //         <DayTable days={days} editDay={editDay} deleteDay={deleteDay} />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <EditDayDialog
    //     open={editDialogOpen}
    //     onClose={() => setEditDialogOpen(false)}
    //     onSave={saveEditedDay}
    //     day={selectedDay}
    //   />
    // </Container>
  );
}

export default App;
