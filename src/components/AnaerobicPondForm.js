import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PeakFactor from '../cpheeo/PeakFactor';

const AnaerobicPondForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    averageFlowMLD: '',
    peakFactor: '',
    noOfAnaerobicPond: '',
    InfluentBodMgPerL: '',
    volumetricBodLoadingGPerM3Day: '',
    meanTemperatureInColdestMonthC: '',
    depthOfTheTankM: '',
    sideSlopeOfThePondM: '',
    depthForSludgeM: '',
    freeBoardM: ''
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
    if (inputs.noOfAnaerobicPond && inputs.noOfAnaerobicPond <= 0) {
      errors.noOfAnaerobicPond = 'No. of anaerobic ponds must be greater than 0';
    }
    if (inputs.InfluentBodMgPerL && inputs.InfluentBodMgPerL <= 0) {
      errors.InfluentBodMgPerL = 'Influent BOD must be greater than 0';
    }
    if (inputs.volumetricBodLoadingGPerM3Day && inputs.volumetricBodLoadingGPerM3Day <= 0) {
      errors.volumetricBodLoadingGPerM3Day = 'Volumetric BOD loading must be greater than 0';
    }
    if (inputs.depthOfTheTankM && inputs.depthOfTheTankM <= 0) {
        errors.depthOfTheTankM = 'Depth of the tank must be greater than 0';
    }
    if (inputs.sideSlopeOfThePondM && inputs.sideSlopeOfThePondM <= 0) {
        errors.sideSlopeOfThePondM = 'Side slope of pond must be greater than 0';
    }
    if (inputs.freeBoardM && inputs.freeBoardM <= 0) {
      errors.freeBoardM = 'Free Board must be greater than 0';
    }
    if (inputs.depthForSludgeM && inputs.depthForSludgeM <= 0) {
      errors.depthForSludgeM = 'Depth for sludge accumulation in the tank must be greater than 0';
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
            label="No. of anaerobic ponds"
            name="noOfAnaerobicPond"
            type="number"
            value={inputs.noOfAnaerobicPond}
            onChange={handleChange}
            error={!!errors.noOfAnaerobicPond}
            helperText={errors.noOfAnaerobicPond}
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
            label="Influent BOD (mg/l)"
            name="InfluentBodMgPerL"
            type="number"
            value={inputs.InfluentBodMgPerL}
            onChange={handleChange}
            error={!!errors.InfluentBodMgPerL}
            helperText={errors.InfluentBodMgPerL}
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
            label="Volumetric BOD loading (g/m³.day)"
            name="volumetricBodLoadingGPerM3Day"
            type="number"
            value={inputs.volumetricBodLoadingGPerM3Day}
            onChange={handleChange}
            error={!!errors.volumetricBodLoadingGPerM3Day}
            helperText={errors.volumetricBodLoadingGPerM3Day}
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
            label="Mean temperature in coldest month (C)"
            name="meanTemperatureInColdestMonthC"
            type="number"
            value={inputs.meanTemperatureInColdestMonthC}
            onChange={handleChange}
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
            label="Side slope of pond (M)"
            name="sideSlopeOfThePondM"
            type="number"
            value={inputs.sideSlopeOfThePondM}
            onChange={handleChange}
            error={!!errors.sideSlopeOfThePondM}
            helperText={errors.sideSlopeOfThePondM}
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
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Depth for sludge accumulation in the tank (m)"
            name="depthForSludgeM"
            type="number"
            value={inputs.depthForSludgeM}
            onChange={handleChange}
            error={!!errors.depthForSludgeM}
            helperText={errors.depthForSludgeM}
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

export default AnaerobicPondForm;