import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Card, CardContent, CardHeader } from '@mui/material';
import { styled } from '@mui/system';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
}));

// Custom styled components for animation and design
const AnimatedCard1 = styled(Card)(({ theme }) => ({
  my: 4,
  backgroundColor: '#b0d7ff',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    backgroundColor: '#d0ebff',
  },
}));

const AnimatedCard2 = styled(Card)(({ theme }) => ({
  my: 4,
  backgroundColor: '#e1bee7',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    backgroundColor: '#e2cce6',
  },
}));

const AnimatedCard3 = styled(Card)(({ theme }) => ({
  my: 4,
  backgroundColor: '#b3ffb5',
  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    backgroundColor: '#ccffcd',
  },
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #172aff 30%, #179eff 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
}));

const Home = () => {
  return (
    <Container sx={{ minHeight: '100vh', py: 2 }}>
      <Fade in={true} timeout={500}>
        <Box my={4} textAlign="center">
          <Zoom in={true} style={{ transitionDelay: '100ms' }}>
            <GradientTypography variant="h3" component="h1" gutterBottom>
              Design of STPs for Small and Medium Towns
            </GradientTypography>
          </Zoom>
        </Box>
      </Fade>

      <Fade in={true} timeout={1000}>
        <Box my={4} textAlign="justify">
          <AnimatedCard1>
            <CardContent>
              <Typography paragraph>
                Welcome to the Design of Sewage Treatment Plants (STPs) for Small and Medium Towns. This web application platform provides comprehensive guidance and design calculations on the implementation and optimization of wastewater treatment technologies tailored for small to medium-sized urban areas.
              </Typography>
            </CardContent>
          </AnimatedCard1>
        </Box>
      </Fade>

      <Fade in={true} timeout={1200}>
        <Box my={4} textAlign="justify">
          <AnimatedCard2>
            <CardHeader
              title={
                <Typography variant="h5" component="h2" align="center" sx={{ color: '#8e24aa' }}>
                  Technologies considered for Small and Medium Towns
                </Typography>
              }
            />
            <CardContent>
              <Typography paragraph>
                Considering the urgency of preventing pollution of inland water bodies and preserving their ecological balance, treatment of Used Water prior to its disposal or reuse, needs to be accorded a very high priority. There are several technologies of Used Water treatment and a judicious choice of the technology needs to be made by taking into consideration the required level of treatment and the life cycle cost.
              </Typography>
              <Typography paragraph>
                Aerobic treatment schemes based on the established sequence of screening, grit removal, activated-sludge-process and its variants, anaerobic sludge digester and sludge drying beds, chlorination is quite suitable for large cities where either land is not easily available or it is too expensive.
              </Typography>
              <Typography paragraph>
                It is also to be noted that anaerobic schemes like Upflow Anaerobic Sludge Blanket (UASB) reactor, Anaerobic Baffled Reactor (ABR) followed by waste stabilization ponds and constructed wetlands entail lower O & M costs and are likely to be a better choice in Medium and Small Towns based on techno-economic analysis. Trickling Filter is also considered a low cost aerobic process.
              </Typography>
            </CardContent>
          </AnimatedCard2>
        </Box>
      </Fade>

      <Fade in={true} timeout={1400}>
        <Box my={4} textAlign="justify">
          <AnimatedCard3>
            <CardHeader
              title={
                <Typography variant="h5" component="h2" align="center" sx={{ color: '#2d8030' }}>
                  Used Water (Influent) Parameters
                </Typography>
              }
            />
            <CardContent>
              <Typography paragraph>
                The design of unit processes in a Used Water treatment plant requires inputs in the form of influent characteristics, site location, temperature, altitude etc. For example, a city in central India with a population of less than 20000 as per census 2011, the table below presents the design data.
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>S. No.</StyledTableCell>
                      <StyledTableCell>Design input parameter</StyledTableCell>
                      <StyledTableCell>Value</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { no: 1, parameter: 'Latitude (City in central India)', value: '21.14°N' },
                      { no: 2, parameter: 'Elevation', value: '310 m' },
                      { no: 3, parameter: 'Lowest average December / January temperature', value: '14.5°C' },
                      { no: 4, parameter: 'Highest average May / June temperature', value: '29.5°C' },
                      { no: 5, parameter: 'Per capita water supply', value: '135 lpcd' },
                      { no: 6, parameter: 'Peak factor', value: '3.00' },
                      { no: 7, parameter: 'Influent BOD', value: '250 mg/l' },
                      { no: 8, parameter: 'Influent COD', value: '425 mg/l' },
                      { no: 9, parameter: 'Influent TKN', value: '50 mg/l' },
                      { no: 10, parameter: 'Influent TSS', value: '250 mg/l' },
                    ].map((row) => (
                      <TableRow key={row.no}>
                        <TableCell>{row.no}</TableCell>
                        <TableCell>{row.parameter}</TableCell>
                        <TableCell>{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </AnimatedCard3>
        </Box>
      </Fade>
    </Container>
  );
};

export default Home;
