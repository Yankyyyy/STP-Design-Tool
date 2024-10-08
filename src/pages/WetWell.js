import React, { useState } from 'react';
import WetWellForm from '../components/WetWellForm';
import WetWellDesignOutput from '../components/WetWellDesignOutput';
import { calculateWetWellDesign } from '../utils/WetWellCalculateDesign';
import { Container, CssBaseline, Typography, Paper, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

const WetWell = () => {
  const [outputs, setOutputs] = useState(null);

  const handleCalculate = (inputs) => {
    const calculatedOutputs = calculateWetWellDesign(inputs);
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
            maxWidth: 800,
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
          {outputs && <WetWellDesignOutput outputs={outputs} />}
        </Paper>
      </Box>
    </Container>
  );
};

export default WetWell;