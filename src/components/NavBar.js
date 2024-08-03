// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WaterIcon from '@mui/icons-material/Opacity';

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
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;