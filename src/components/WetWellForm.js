// src/components/WetWellForm.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const WetWellForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    efficiency: '',
    timeForOnePumpCycle: '',
    minDepthBelowInvertM: '',
    diameterOfInvertPipeM: '',
    suctionHeadM: '',
    deliveryHeadM: ''
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
            value={inputs.minDepthBelowInvertM}
            onChange={handleChange}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Efficiency (%)"
            name="efficiency"
            type="number"
            value={inputs.efficiency}
            onChange={handleChange}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Time for one pump cycle (min)"
            name="timeForOnePumpCycle"
            type="number"
            value={inputs.timeForOnePumpCycle}
            onChange={handleChange}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Suction Head (m)"
            name="suctionHeadM"
            type="number"
            value={inputs.suctionHeadM}
            onChange={handleChange}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Delivery Head (m)"
            name="deliveryHeadM"
            type="number"
            value={inputs.deliveryHeadM}
            onChange={handleChange}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Diameter of Invert Pipe (mm)"
            name="diameterOfInvertPipeM"
            type="number"
            value={inputs.diameterOfInvertPipeM}
            onChange={handleChange}
            InputProps={{ inputProps: { step: 0.01 } }}
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
