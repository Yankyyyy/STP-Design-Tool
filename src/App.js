// App.js

import React, { useState } from 'react';
import WetWellForm from './components/WetWellForm';
import DesignOutput from './components/DesignOutput';
import { calculateDesign } from './utils/CalculateDesign';
import { Container, CssBaseline, Typography } from '@mui/material';

const App = () => {
  const [outputs, setOutputs] = useState(null);

  const handleCalculate = (inputs) => {
    const calculatedOutputs = calculateDesign(inputs);
    setOutputs(calculatedOutputs);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom>
        <b>Wet Well Design Calculator</b>
      </Typography>
      <WetWellForm onCalculate={handleCalculate} />
      {outputs && <DesignOutput outputs={outputs} />}
    </Container>
  );
};


export default App;
