import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WaterIcon from '@mui/icons-material/Opacity';
import BlurLinear from '@mui/icons-material/BlurLinear';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          STP Design Calculator
        </Typography>
        <Button color="inherit" component={Link} to="/wetwell" startIcon={<WaterIcon />}>
          Wet Well
        </Button>
        <Button color="inherit" component={Link} to="/coarsescreen" startIcon={<BlurLinear />}>
          Coarse Screen
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;