import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WaterIcon from '@mui/icons-material/Opacity';
import BlurLinear from '@mui/icons-material/BlurLinear';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', mb: 2 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit" component={Link} to="/wetwell" startIcon={<WaterIcon />}>
          Wet Well
        </Button>
        <Button color="inherit" component={Link} to="/coarsescreen" startIcon={<BlurLinear />}>
          Coarse Screen
        </Button>
        <Button color="inherit" component={Link} to="/mediumscreen" startIcon={<BlurLinear />}>
          Medium Screen
        </Button>
        <Button color="inherit" component={Link} to="/gritchamber" startIcon={<BlurLinear />}>
          Grit Chamber
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;