import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PeakFactor from '../cpheeo/PeakFactor';

const MediumScreenForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    clearOpeningBetweenAdjacentBarsMM: '',
    barsThicknessOfScreenMM: '',
    depthOfWaterInScreenM: '',
    velocityThroughScreenMPerSec: '',
    angleOfInclinationWithTheHorizontalDeg: '',
    freeBoardM: '',
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
    if (!inputs.clearOpeningBetweenAdjacentBarsMM || inputs.clearOpeningBetweenAdjacentBarsMM <= 0) {
      errors.learOpeningBetweenAdjacentBarsMM = 'Clear opening between adjacent bars of screen must be greater than 0';
    }
    if (!inputs.barsThicknessOfScreenMM || inputs.barsThicknessOfScreenMM <= 0) {
      errors.barsThicknessOfScreenMM = 'Bar thickness of screen must be greater than 0';
    }
    if (!inputs.depthOfWaterInScreenM || inputs.depthOfWaterInScreenM <= 0) {
      errors.depthOfWaterInScreenM = 'Depth of water in the screen must be greater than 0';
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
    if (!inputs.lengthOfMediumScreenChamberM || inputs.lengthOfMediumScreenChamberM <= 0) {
      errors.lengthOfMediumScreenChamberM = 'Length of medium screen chamber must be greater than 0';
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
            label="Clear opening between adjacent bars of screen (mm)"
            name="clearOpeningBetweenAdjacentBarsMM"
            type="number"
            value={inputs.clearOpeningBetweenAdjacentBarsMM}
            onChange={handleChange}
            error={!!errors.clearOpeningBetweenAdjacentBarsMM}
            helperText={errors.clearOpeningBetweenAdjacentBarsMM}
            sx={{
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Bar thickness of screen (mm)"
            name="barsThicknessOfScreenMM"
            type="number"
            value={inputs.barsThicknessOfScreenMM}
            onChange={handleChange}
            error={!!errors.barsThicknessOfScreenMM}
            helperText={errors.barsThicknessOfScreenMM}
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
            label="Depth of water in the screen (m)"
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
        <Grid item xs={12} sm={12}>
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

export default MediumScreenForm;