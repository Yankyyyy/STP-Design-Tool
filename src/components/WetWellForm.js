import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Efficiency from '../cpheeo/PumpEfficiency';
import PeakFactor from '../cpheeo/PeakFactor';

const WetWellForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    efficiency: '',
    timeForOnePumpCycle: '',
    minDepthBelowInvertM: '',
    diameterOfInvertPipeMM: '',
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
    if (!inputs.timeForOnePumpCycle || inputs.timeForOnePumpCycle <= 0) {
      errors.timeForOnePumpCycle = 'Time for one pump cycle must be greater than 0';
    }
    if (!inputs.minDepthBelowInvertM || inputs.minDepthBelowInvertM <= 0) {
      errors.minDepthBelowInvertM = 'Minimum Depth Below Invert must be greater than 0';
    }
    if (!inputs.diameterOfInvertPipeMM || inputs.diameterOfInvertPipeMM <= 0) {
      errors.diameterOfInvertPipeMM = 'Diameter of Invert Pipe must be greater than 0';
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
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center' // Aligns text within the input
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Peak Factor</InputLabel>
            <Select
              label="Peak Factor"
              name="peakFactor"
              value={inputs.peakFactor}
              onChange={handleChange}
            >
              {PeakFactor.map((factor) => (
                <MenuItem key={factor.id} value={factor.value}>
                  {factor.population} : {factor.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center' // Aligns text within the input
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel>Efficiency</InputLabel>
            <Select
              label="Efficiency"
              name="efficiency"
              value={inputs.efficiency}
              onChange={handleChange}
            >
              {Efficiency.map((eff) => (
                <MenuItem key={eff.id} value={eff.value}>
                  {eff.pump} : {eff.value}%
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center' // Aligns text within the input
              }
            }}
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
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center' // Aligns text within the input
              }
            }}
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
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center' // Aligns text within the input
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Diameter of Invert Pipe (mm)"
            name="diameterOfInvertPipeMM"
            type="number"
            value={inputs.diameterOfInvertPipeMM}
            onChange={handleChange}
            error={!!errors.diameterOfInvertPipeMM}
            helperText={errors.diameterOfInvertPipeMM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center' // Aligns text within the input
              }
            }}
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