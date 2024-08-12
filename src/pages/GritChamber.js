import React, { useState } from 'react';
import GritChamberForm from '../components/GritChamberForm';
import GritChamberDesignOutput from '../components/GritChamberDesignOutput';
import { calculateGritChamberDesign } from '../utils/GritChamberCalculateDesign';
import { Container, CssBaseline, Typography, Paper, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

const GritChamber = () => {
  const [outputs, setOutputs] = useState(null);

  const handleCalculate = (inputs) => {
    const calculatedOutputs = calculateGritChamberDesign(inputs);
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
            <b>Grit Chamber Design Calculator</b>
          </Typography>
          <GritChamberForm onCalculate={handleCalculate} />
          {outputs && <GritChamberDesignOutput outputs={outputs} />}
        </Paper>
      </Box>
    </Container>
  );
};

export default GritChamber;