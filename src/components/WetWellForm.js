// src/components/WetWellForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const WetWellForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    efficiency: '',
    minDepthBelowInvertM: '',
    diameterOfInvertPipeM: '',
    staticHeadM: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(inputs);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" align="center" gutterBottom>
        <b>Input Variables</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Average Flow (MLD)"
            name="averageFlowMLD"
            type="number"
            value={inputs.averageFlowMLD}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Peak Factor"
            name="peakFactor"
            type="number"
            value={inputs.peakFactor}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Minimum Depth Below Invert (m)"
            name="minDepthBelowInvertM"
            type="number"
            step="0.01"
            value={inputs.minDepthBelowInvertM}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Efficiency (%)"
            name="efficiency"
            type="number"
            step="0.01"
            value={inputs.efficiency}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Static Head (m)"
            name="staticHeadM"
            type="number"
            step="0.01"
            value={inputs.staticHeadM}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Diameter of Invert Pipe (mm)"
            name="diameterOfInvertPipeM"
            type="number"
            step="0.01"
            value={inputs.diameterOfInvertPipeM}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Typography variant="h4" align="center" gutterBottom>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Calculate
        </Button>
      </Typography>
    </Box>
  );
};

export default WetWellForm;
