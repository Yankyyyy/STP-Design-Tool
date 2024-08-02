// src/components/DesignOutput.js
import React from 'react';
import { Typography, Button, Grid, Paper, Box } from '@mui/material';
import ExportPDF from '../utils/ExportPDF'

const DesignOutput = ({ outputs }) => {

  const handleClick = () => {
    ExportPDF('divToPrint')
  };
  

  return (
    <div>
      <div id="divToPrint">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" align="center" gutterBottom>
            <b>Design Outputs</b>
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
                  Average Flow (m³/min): <b>{outputs.averageFlowM3PerMin}</b>
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
                  Peak Flow (m³/min): <b>{outputs.peakFlowM3PerMin}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Volume of Wet Well (m³): <b>{outputs.volumeOfWetWellM3}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Minimum depth below invert of sewer (m³/day): <b>{outputs.minDepthBelowInvertM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Required Area of the well (m²): <b>{outputs.requiredAreaOfWetWellM2}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Computed well diameter (m): <b>{outputs.computedWellDiameterM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Diameter of invert pipe (mm): <b>{outputs.diameterOfInvertPipeM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Static head (m): <b>{outputs.staticHeadM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Minor losses (m): <b>{outputs.minorLossesM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Total manometric head (m): <b>{outputs.TotalManometricHeadM}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Efficiency (%): <b>{outputs.efficiency}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Computed Pump Capacity (KW): <b>{outputs.pumpCapacityKW}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                  Required Pump Capacity (KW): <b>{outputs.requiredpumpCapacityKW}</b>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body2">
                Required Standby Pump Capacity (KW): <b>{outputs.standbyPumpCapacity}</b>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Typography variant="h4" align="center" gutterBottom>
        <Button type="submit" variant="contained" color="primary" onClick={handleClick} sx={{ mt: 3 }}>
        Print
        </Button>
      </Typography>
    </div>
  );
};

export default DesignOutput;
