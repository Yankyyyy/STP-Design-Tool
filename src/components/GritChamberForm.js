import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PeakFactor from '../cpheeo/PeakFactor';

const GritChamberForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    desiredEfficiency: '',
    settlingVelocityMPerSec: '',
    basinPerformanceIndex: '',
    noOfGritChambersProposed: '',
    widthOfTheTankM: '',
    depthOfTheTankM: '',
    particleSizeForCriticalDisplacementVelocityMM: '',
    freeBoardM: '',
    provisionOfSpaceForGritM: ''
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
    if (inputs.averageFlowMLD && inputs.averageFlowMLD <= 0) {
      errors.averageFlowMLD = 'Average Flow must be greater than 0';
    }
    if (inputs.desiredEfficiency && inputs.desiredEfficiency <= 0) {
      errors.desiredEfficiency = 'Desired efficiency of removal of grit particle must be greater than 0';
    }
    if (inputs.settlingVelocityMPerSec && inputs.settlingVelocityMPerSec <= 0) {
      errors.settlingVelocityMPerSec = 'Settling velocity of of grit particle must be greater than 0';
    }
    if (inputs.basinPerformanceIndex && inputs.basinPerformanceIndex <= 0) {
      errors.basinPerformanceIndex = 'Basin performance Index must be greater than 0';
    }
    if (inputs.noOfGritChambersProposed && inputs.noOfGritChambersProposed <= 0) {
      errors.noOfGritChambersProposed = 'No. of girt chambers proposed must be greater than 0';
    }
    if (inputs.widthOfTheTankM && inputs.widthOfTheTankM <= 0) {
        errors.widthOfTheTankM = 'Width of the tank must be greater than 0';
    }
    if (inputs.depthOfTheTankM && inputs.depthOfTheTankM <= 0) {
        errors.depthOfTheTankM = 'Depth of the tank must be greater than 0';
    }
    if (inputs.particleSizeForCriticalDisplacementVelocityMM && inputs.particleSizeForCriticalDisplacementVelocityMM <= 0) {
        errors.particleSizeForCriticalDisplacementVelocityMM = 'Particle size for critical displacement velocity must be greater than 0';
    }
    if (inputs.freeBoardM && inputs.freeBoardM <= 0) {
      errors.freeBoardM = 'Free Board must be greater than 0';
    }
    if (inputs.provisionOfSpaceForGritM && inputs.provisionOfSpaceForGritM <= 0) {
      errors.provisionOfSpaceForGritM = 'Provision of space for grit must be greater than 0';
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
                textAlign: 'center'
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
            fullWidth
            label="Desired efficiency of removal of grit particle (%)"
            name="desiredEfficiency"
            type="number"
            value={inputs.desiredEfficiency}
            onChange={handleChange}
            error={!!errors.desiredEfficiency}
            helperText={errors.desiredEfficiency}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Settling velocity of of grit particle (m/sec)"
            name="settlingVelocityMPerSec"
            type="number"
            value={inputs.settlingVelocityMPerSec}
            onChange={handleChange}
            error={!!errors.settlingVelocityMPerSec}
            helperText={errors.settlingVelocityMPerSec}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Basin performance Index"
            name="basinPerformanceIndex"
            type="number"
            value={inputs.basinPerformanceIndex}
            onChange={handleChange}
            error={!!errors.basinPerformanceIndex}
            helperText={errors.basinPerformanceIndex}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="No. of girt chambers proposed"
            name="noOfGritChambersProposed"
            type="number"
            value={inputs.noOfGritChambersProposed}
            onChange={handleChange}
            error={!!errors.noOfGritChambersProposed}
            helperText={errors.noOfGritChambersProposed}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Width of the tank (M)"
            name="widthOfTheTankM"
            type="number"
            value={inputs.widthOfTheTankM}
            onChange={handleChange}
            error={!!errors.widthOfTheTankM}
            helperText={errors.widthOfTheTankM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Depth of the tank (M)"
            name="depthOfTheTankM"
            type="number"
            value={inputs.depthOfTheTankM}
            onChange={handleChange}
            error={!!errors.depthOfTheTankM}
            helperText={errors.depthOfTheTankM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Particle size for critical displacement velocity (MM)"
            name="particleSizeForCriticalDisplacementVelocityMM"
            type="number"
            value={inputs.particleSizeForCriticalDisplacementVelocityMM}
            onChange={handleChange}
            error={!!errors.particleSizeForCriticalDisplacementVelocityMM}
            helperText={errors.particleSizeForCriticalDisplacementVelocityMM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Free Board (m)"
            name="freeBoardM"
            type="number"
            value={inputs.freeBoardM}
            onChange={handleChange}
            error={!!errors.freeBoardM}
            helperText={errors.freeBoardM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
            InputProps={{ inputProps: { step: 0.01 } }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Provision of space for grit (m)"
            name="provisionOfSpaceForGritM"
            type="number"
            value={inputs.provisionOfSpaceForGritM}
            onChange={handleChange}
            error={!!errors.provisionOfSpaceForGritM}
            helperText={errors.provisionOfSpaceForGritM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
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

export default GritChamberForm;