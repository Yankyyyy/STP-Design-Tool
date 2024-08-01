// App.js

import React, { useState } from 'react';
import WetWellForm from './components/WetWellForm';
import DesignOutput from './components/DesignOutput';
import { calculateDesign } from './utils/CalculateDesign';
import { Container, CssBaseline, Typography, Paper, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

const App = () => {
  const [outputs, setOutputs] = useState(null);

  const handleCalculate = (inputs) => {
    const calculatedOutputs = calculateDesign(inputs);
    setOutputs(calculatedOutputs);
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          my: 4,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
            width: '100%',
            maxWidth: 600,
            backgroundColor: blue[50], // Light blue background for the Paper
            border: `1px solid ${blue[300]}`, // Light blue border
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            <b>Wet Well Design Calculator</b>
          </Typography>
          <WetWellForm onCalculate={handleCalculate} />
          {outputs && <DesignOutput outputs={outputs} />}
        </Paper>
      </Box>
    </Container>
  );
};


export default App;
