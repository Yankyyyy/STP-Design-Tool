import React from 'react';
import { Typography, Button, Grid, Paper, Box } from '@mui/material';
import ExportPDF from '../utils/ExportPDF'

const GritChamberDesignOutput = ({ outputs }) => {

  const handleClick = () => {
    ExportPDF('divToPrint')
  };
  
  const getColor = (condition) => {
    return condition ? 'green' : 'red';
  };

  const horizontalVelocityCondition = outputs.horizontalVelocityInTheChamberMPerSec < outputs.criticalDisplacementVelocityMPerSec;

  return (
    <div>
      <div id="divToPrint">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" align="center" gutterBottom>
            <b>Grit Chamber Design Outputs</b>
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
                Desired efficiency of removal of grit particle (%): <b>{outputs.desiredEfficiency}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Settling velocity of of grit particle (m/sec): <b>{outputs.settlingVelocityMPerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Basin performance Index: <b>{outputs.basinPerformanceIndex}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Surface over flow rate (m/sec): <b>{outputs.surfaceOverflowRateMPerDay}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                No. of girt chambers proposed: <b>{outputs.noOfGritChambersProposed}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Peak flow per chamber (m³/day): <b>{outputs.peakFlowPerChamberM3PerDay}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Peak flow per chamber (m³/day): <b>{outputs.peakFlowPerChamberM3PerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Area required for peak flow (m²): <b>{outputs.areaRequiredForPeakFlowM2}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Width of the tank (m): <b>{outputs.widthOfTheTankM}</b>
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
                Particle size for critical displacement velocity (mm): <b>{outputs.particleSizeForCriticalDisplacementVelocityMM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Critical displacement velocity (m/sec): <b>{outputs.criticalDisplacementVelocityMPerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Horizontal velocity in the chamber (m/sec): <b>{outputs.horizontalVelocityInTheChamberMPerSec}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: getColor(horizontalVelocityCondition) }}>
                  {horizontalVelocityCondition ? 'Horizontal velocity in the chamber ≤ Critical displacement velocity. Hence OK.' : 'Horizontal velocity in the chamber > Critical displacement velocity. Hence not OK.'}
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
                Provision of space for grit (m): <b>{outputs.provisionOfSpaceForGritM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Length of the tank (m): <b>{outputs.lengthOfTheTankM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Adopted length of the tank (m): <b>{outputs.adoptedLengthOfTheGritChamberM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total depth of the tank (m): <b>{outputs.totalDepthOfTheTankM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Detention time (sec): <b>{outputs.detentionTimeSec}</b>
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

export default GritChamberDesignOutput;
