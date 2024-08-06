import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Design of STPs for Small and Medium Towns
      </Typography>
      <Typography paragraph>
      Welcome to the Design of Sewage Treatment Plants (STPs) for Small and Medium Towns. This web application platform provides comprehensive guidance and design calculations on the implementation and optimization of wastewater treatment technologies tailored for small to medium-sized urban areas.
      </Typography>

      <Box my={4} sx={{ textAlign: 'justify' }}>
        <Typography variant="h5" gutterBottom align="center">
          Technologies considered for Small and Medium Towns
        </Typography>
        <Typography paragraph>
          Considering the urgency of preventing pollution of inland water bodies and preserving their ecological balance, treatment of Used Water prior to its disposal or reuse, needs to be accorded a very high priority. There are several technologies of Used Water treatment and a judicious choice of the technology needs to be made by taking into consideration the required level of treatment and the life cycle cost.
        </Typography>
        <Typography paragraph>
          Aerobic treatment schemes based on the established sequence of screening, grit removal, activated-sludge-process and its variants, anaerobic sludge digester and sludge drying beds, chlorination is quite suitable for large cities where either land is not easily available or it is too expensive.
        </Typography>
        <Typography paragraph>
          It is also to be noted that anaerobic schemes like Upflow Anaerobic Sludge Blanket (UASB) reactor, Anaerobic Baffled Reactor (ABR) followed by waste stabilization ponds and constructed wetlands entail lower O & M costs and are likely to be a better choice in Medium and Small Towns based on techno-economic analysis. Trickling Filter is also considered a low cost aerobic process.
        </Typography>
      </Box>

      <Box my={4} sx={{ textAlign: 'justify' }}>
        <Typography variant="h5" gutterBottom align="center">
          Used Water (Influent) Parameters
        </Typography>
        <Typography paragraph>
          The design of unit processes in a Used Water treatment plant requires inputs in the form of influent characteristics, site location, temperature, altitude etc. The design is carried out for a city in central India with a population of less than 20000 as per census 2011. Table below presents the design data used.
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Design input parameter</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Latitude (City in central India)</TableCell>
                <TableCell>21.14°N</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Elevation</TableCell>
                <TableCell>310 m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Lowest average December / January temperature</TableCell>
                <TableCell>14.5°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Highest average May / June temperature</TableCell>
                <TableCell>29.5°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>Per capita water supply</TableCell>
                <TableCell>135 lpcd</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>Peak factor</TableCell>
                <TableCell>3.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>7</TableCell>
                <TableCell>Influent BOD</TableCell>
                <TableCell>250 mg/l</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8</TableCell>
                <TableCell>Influent COD</TableCell>
                <TableCell>425 mg/l</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9</TableCell>
                <TableCell>Influent TKN</TableCell>
                <TableCell>50 mg/l</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10</TableCell>
                <TableCell>Influent TSS</TableCell>
                <TableCell>250 mg/l</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Home;
