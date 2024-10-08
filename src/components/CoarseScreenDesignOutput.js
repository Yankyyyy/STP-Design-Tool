import React from 'react';
import { Typography, Button, Grid, Paper, Box } from '@mui/material';
import ExportPDF from '../utils/ExportPDF'

const CoarseScreenDesignOutput = ({ outputs }) => {

  const handleClick = () => {
    ExportPDF('divToPrint')
  };
  
  const getColor = (condition) => {
    return condition ? 'green' : 'red';
  };

  const approachVelocityCondition = outputs.approachVelocityInTheChannelMPerSec > 0.3;
  const computedVelocityCondition = outputs.computedVelocityThroughTheScreenMPerSec >= 0.6 && outputs.computedVelocityThroughTheScreenMPerSec <= 1.2;
  const headLossNoCloggingCondition = outputs.headLossWithoutCloggingM < 0.15;
  const headLossWithCloggingCondition = outputs.headLossWithHalfCloggingM < 0.3;

  return (
    <div>
      <div id="divToPrint">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" align="center" gutterBottom>
            <b>Coarse Screen Design Outputs</b>
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
                  Peak Flow (m³/sec): <b>{outputs.peakFlowM3PerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Minimum Flow Factor: <b>{outputs.minFlowFactor}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Minimum Flow (m³/sec): <b>{outputs.minFlowM3PerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Coarse Screen Opening (mm): <b>{outputs.coarseScreenOpeningMM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Depth of water in screen (m): <b>{outputs.depthOfWaterInScreenM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Velocity through screen (m/sec): <b>{outputs.velocityThroughScreenMPerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Area of screen (m²): <b>{outputs.areaOfTheScreenM2}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Angle of inclination with the horizontal (deg): <b>{outputs.angleOfInclinationWithTheHorizontalDeg}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Vertical area of the screen (m²): <b>{outputs.verticalAreaOfTheScreenM2}</b>
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
                Length of screen (m): <b>{outputs.lengthOfTheScreenM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Vertical width of opening (m): <b>{outputs.verticalWidthOfOpeningM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Inclined width of opening (m): <b>{outputs.inclinedWidthOfTheOpeningM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                No. of openings: <b>{outputs.numberOfOpenings}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Number of bars: <b>{outputs.numberOfBars}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Width of each bar (mm): <b>{outputs.widthOfEachBarMM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total width of screen (mm): <b>{outputs.widthOfTheScreenMM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Width of each side wall (mm): <b>{outputs.widthOfEachSideWallMM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total width of channel (mm): <b>{outputs.totalWidthOfChannelMM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Size of Coarse Screen channel - Length (m): <b>{outputs.computedLengthOfTheScreenChannelM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Velocity when 50% clogging (m/sec): <b>{outputs.velocityForHalfCloggedScreenMPerSec}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Approach velocity in Channel u/s of Screen (m/sec): <b>{outputs.approachVelocityInTheChannelMPerSec}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: getColor(approachVelocityCondition) }}>
                  {approachVelocityCondition ? 'Approach velocity in the channel on the u/s side of the screen > 0.3 m/s. Hence OK.' : 'Approach velocity in the channel on the u/s side of the screen ≤ 0.3 m/s. Hence not OK.'}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Computed velocity through Screen (m/sec): <b>{outputs.computedVelocityThroughTheScreenMPerSec}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: getColor(computedVelocityCondition) }}>
                  {computedVelocityCondition ? 'The velocity through the screen lies between 0.6 to 1.2 m. Hence OK.' : 'The velocity through the screen does not lie between 0.6 to 1.2 m. Hence not OK.'}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Head Loss No Clogging (m): <b>{outputs.headLossWithoutCloggingM}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: getColor(headLossNoCloggingCondition) }}>
                  {headLossNoCloggingCondition ? 'The head loss No clogging < 0.15 m. Hence OK.' : 'The head loss No clogging ≥ 0.15 m. Hence not OK.'}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Head Loss when 50% clogging (m): <b>{outputs.headLossWithHalfCloggingM}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: getColor(headLossWithCloggingCondition) }}>
                  {headLossWithCloggingCondition ? 'The Head Loss when 50% clogging < 0.3 m. Hence OK.' : 'The Head Loss when 50% clogging ≥ 0.3 m. Hence not OK.'}
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

export default CoarseScreenDesignOutput;
