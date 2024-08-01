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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const validateInputs = (inputs) => {
    const errors = {};
    if (!inputs.averageFlowMLD || inputs.averageFlowMLD <= 0) {
      errors.averageFlowMLD = 'Average Flow must be greater than 0';
    }
    if (!inputs.peakFactor || inputs.peakFactor <= 0) {
      errors.peakFactor = 'Peak Factor must be greater than 0';
    }
    if (!inputs.efficiency || inputs.efficiency <= 0 || inputs.efficiency > 100) {
      errors.efficiency = 'Efficiency must be between 0 and 100';
    }
    if (!inputs.timeForOnePumpCycle || inputs.timeForOnePumpCycle <= 0) {
      errors.timeForOnePumpCycle = 'Time for one pump cycle must be greater than 0';
    }
    if (!inputs.minDepthBelowInvertM || inputs.minDepthBelowInvertM <= 0) {
      errors.minDepthBelowInvertM = 'Minimum Depth Below Invert must be greater than 0';
    }
    if (!inputs.diameterOfInvertPipeM || inputs.diameterOfInvertPipeM <= 0) {
      errors.diameterOfInvertPipeM = 'Diameter of Invert Pipe must be greater than 0';
    }
    if (!inputs.suctionHeadM || inputs.suctionHeadM <= 0) {
      errors.suctionHeadM = 'Suction Head must be greater than 0';
    }
    if (!inputs.deliveryHeadM || inputs.deliveryHeadM <= 0) {
      errors.deliveryHeadM = 'Delivery Head must be greater than 0';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs(inputs);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onCalculate(inputs);
    }
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
            error={!!errors.averageFlowMLD}
            helperText={errors.averageFlowMLD}
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
            error={!!errors.peakFactor}
            helperText={errors.peakFactor}
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
            error={!!errors.minDepthBelowInvertM}
            helperText={errors.minDepthBelowInvertM}
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
            error={!!errors.efficiency}
            helperText={errors.efficiency}
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
            error={!!errors.timeForOnePumpCycle}
            helperText={errors.timeForOnePumpCycle}
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
            error={!!errors.suctionHeadM}
            helperText={errors.suctionHeadM}
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
            error={!!errors.deliveryHeadM}
            helperText={errors.deliveryHeadM}
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
            error={!!errors.diameterOfInvertPipeM}
            helperText={errors.diameterOfInvertPipeM}
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