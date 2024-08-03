import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PeakFactor from '../cpheeo/PeakFactor';

const CoarseScreenForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    minFlowFactor: '',
    coarseScreenOpeningMM: '',
    depthOfWaterInScreenM: '',
    velocityThroughScreenMPerSec: '',
    angleOfInclinationWithTheHorizontalDeg: '',
    freeBoardM: '',
    widthOfEachBarMM: '',
    widthOfEachSideWallMM: ''
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
    if (!inputs.minFlowFactor || inputs.minFlowFactor <= 0) {
      errors.minFlowFactor = 'Minimum Flow Factor must be greater than 0';
    }
    if (!inputs.coarseScreenOpeningMM || inputs.coarseScreenOpeningMM <= 0) {
      errors.coarseScreenOpeningMM = 'Coarse Screen Opening must be greater than 0';
    }
    if (!inputs.depthOfWaterInScreenM || inputs.depthOfWaterInScreenM <= 0) {
      errors.depthOfWaterInScreenM = 'Depth Of Water In Screen must be greater than 0';
    }
    if (!inputs.velocityThroughScreenMPerSec || inputs.velocityThroughScreenMPerSec <= 0) {
      errors.velocityThroughScreenMPerSec = 'Velocity Through Screen must be greater than 0';
    }
    if (!inputs.angleOfInclinationWithTheHorizontalDeg || inputs.angleOfInclinationWithTheHorizontalDeg <= 0) {
      errors.angleOfInclinationWithTheHorizontalDeg = 'Angle Of Inclination With The Horizontal must be greater than 0';
    }
    if (!inputs.freeBoardM || inputs.freeBoardM <= 0) {
      errors.freeBoardM = 'Free Board must be greater than 0';
    }
    if (!inputs.widthOfEachBarMM || inputs.widthOfEachBarMM <= 0) {
      errors.widthOfEachBarMM = 'Width Of Each Bar must be greater than 0';
    }
    if (!inputs.widthOfEachSideWallMM || inputs.widthOfEachSideWallMM <= 0) {
      errors.widthOfEachSideWallMM = 'Width Of Each Side Wall must be greater than 0';
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
            required
            fullWidth
            label="Minimum Flow Factor"
            name="minFlowFactor"
            type="number"
            value={inputs.minFlowFactor}
            onChange={handleChange}
            error={!!errors.minFlowFactor}
            helperText={errors.minFlowFactor}
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
            required
            fullWidth
            label="Coarse Screen Opening (mm)"
            name="coarseScreenOpeningMM"
            type="number"
            value={inputs.coarseScreenOpeningMM}
            onChange={handleChange}
            error={!!errors.coarseScreenOpeningMM}
            helperText={errors.coarseScreenOpeningMM}
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
            required
            fullWidth
            label="Depth Of Water In Screen (m)"
            name="depthOfWaterInScreenM"
            type="number"
            value={inputs.depthOfWaterInScreenM}
            onChange={handleChange}
            error={!!errors.depthOfWaterInScreenM}
            helperText={errors.depthOfWaterInScreenM}
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
            required
            fullWidth
            label="Velocity Through Screen (m/sec)"
            name="velocityThroughScreenMPerSec"
            type="number"
            value={inputs.velocityThroughScreenMPerSec}
            onChange={handleChange}
            error={!!errors.velocityThroughScreenMPerSec}
            helperText={errors.velocityThroughScreenMPerSec}
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
            required
            fullWidth
            label="Angle Of Inclination With The Horizontal (deg)"
            name="angleOfInclinationWithTheHorizontalDeg"
            type="number"
            value={inputs.angleOfInclinationWithTheHorizontalDeg}
            onChange={handleChange}
            error={!!errors.angleOfInclinationWithTheHorizontalDeg}
            helperText={errors.angleOfInclinationWithTheHorizontalDeg}
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
            required
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Width Of Each Bar (mm)"
            name="widthOfEachBarMM"
            type="number"
            value={inputs.widthOfEachBarMM}
            onChange={handleChange}
            error={!!errors.widthOfEachBarMM}
            helperText={errors.widthOfEachBarMM}
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
            required
            fullWidth
            label="Width Of Each Side Wall (mm)"
            name="widthOfEachSideWallMM"
            type="number"
            value={inputs.widthOfEachSideWallMM}
            onChange={handleChange}
            error={!!errors.widthOfEachSideWallMM}
            helperText={errors.widthOfEachSideWallMM}
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

export default CoarseScreenForm;