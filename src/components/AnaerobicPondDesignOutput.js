import React from 'react';
import { Typography, Button, Grid, Paper, Box } from '@mui/material';
import ExportPDF from '../utils/ExportPDF'

const AnaerobicPondDesignOutput = ({ outputs }) => {

  const handleClick = () => {
    ExportPDF('divToPrint')
  };
  
  return (
    <div>
      <div id="divToPrint">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" align="center" gutterBottom>
            <b>Anaerobic Pond Design Outputs</b>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Average Flow (MLD): <b>{outputs.averageFlowMLD}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Average Flow (m³/day): <b>{outputs.averageFlowM3PerDay}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Average Flow (m³/sec): <b>{outputs.averageFlowM3PerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Peak Factor: <b>{outputs.peakFactor}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Peak Flow (MLD): <b>{outputs.peakFlowMLD}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Peak Flow (m³/day): <b>{outputs.peakFlowM3PerDay}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Peak Flow (m³/sec): <b>{outputs.peakFlowM3PerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                No. of anaerobic ponds: <b>{outputs.noOfAnaerobicPond}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Flow through each of the anaerobic ponds (m³/sec): <b>{outputs.flowHandlingCapacityM3PerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Influent BOD (mg/l): <b>{outputs.InfluentBodMgPerL}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Mean Temperature In Coldest Month (C): <b>{outputs.meanTemperatureInColdestMonthC}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Volumetric BOD loading (g/m³.day): <b>{outputs.volumetricBodLoadingGPerM3Day}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Volume of the tank (g/m³.day): <b>{outputs.volumeOfTheTankGPerM3Day}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Detention time (day): <b>{outputs.detentionTimeDay}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Adopted detention time (day): <b>{outputs.adoptedDetentionTimeDay}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Adopted volume of the tank (m³): <b>{outputs.adoptedVolumeOfTheTankM3}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Resulting value of volumetric BOD loading (g/m³.day): <b>{outputs.resultingValueOfVolumetricBodLoadingGPerM3Day}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                BOD removal efficiency (%): <b>{outputs.bodRemovalEfficiency}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Depth of the tank (m): <b>{outputs.depthOfTheTankM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Area of the tank at mid-depth (m³): <b>{outputs.areaOfTheTankAtMidDepthM3}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Mid depth width (m): <b>{outputs.midDepthWidthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Mid depth Length (m): <b>{outputs.midDepthLengthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Side slope of pond (m): <b>{outputs.sideSlopeOfThePondM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Depth for sludge accumulation in the tank (m): <b>{outputs.depthForSludgeM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Bottom below mid depth (m): <b>{outputs.bottomBelowMidDepthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Free Board (m): <b>{outputs.freeBoardM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Top of embankment above mid-depth (m): <b>{outputs.topOfEmbankmentAboveMidDepthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total top length of the pond (m): <b>{outputs.totalTopLengthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total top width (m): <b>{outputs.totalTopWidthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Area of the pond at the top (m²): <b>{outputs.areaOfThePondAtTheTopM2}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total bottom length of the pond (m): <b>{outputs.totalBottomLengthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total bottom width (m): <b>{outputs.totalBottomWidthM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Area of the pond at the bottom (m²): <b>{outputs.areaOfThePondAtTheBottomM2}</b>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Typography variant="h4" align="center" gutterBottom>
        <Button type="submit" variant="contained" color="primary" onClick={handleClick} sx={{ mt: 3 }}>
        Download
        </Button>
      </Typography>
    </div>
  );
};

export default AnaerobicPondDesignOutput;
