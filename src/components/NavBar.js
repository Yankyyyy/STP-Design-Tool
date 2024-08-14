import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import WaterIcon from '@mui/icons-material/Opacity';
import BlurLinear from '@mui/icons-material/BlurLinear';
import GritIcon from '@mui/icons-material/Grain';
import PondIcon from '@mui/icons-material/LocalDrink';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', mb: 2 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit" onClick={handleMenuOpen} startIcon={<MenuIcon />}>
          Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          getContentAnchorEl={null}
          sx={{ mt: 1 }}
        >
          <MenuItem component={Link} to="/wetwell" onClick={handleMenuClose}>
            <ListItemIcon>
              <WaterIcon fontSize="small" />
            </ListItemIcon>
            Wet Well
          </MenuItem>
          <MenuItem component={Link} to="/coarsescreen" onClick={handleMenuClose}>
            <ListItemIcon>
              <BlurLinear fontSize="small" />
            </ListItemIcon>
            Coarse Screen
          </MenuItem>
          <MenuItem component={Link} to="/mediumscreen" onClick={handleMenuClose}>
            <ListItemIcon>
              <BlurLinear fontSize="small" />
            </ListItemIcon>
            Medium Screen
          </MenuItem>
          <MenuItem component={Link} to="/gritchamber" onClick={handleMenuClose}>
            <ListItemIcon>
              <GritIcon fontSize="small" />
            </ListItemIcon>
            Grit Chamber
          </MenuItem>
          <Divider sx={{ my: 1 }} />
          <MenuItem component={Link} to="/anaerobicpond" onClick={handleMenuClose}>
            <ListItemIcon>
              <PondIcon fontSize="small" />
            </ListItemIcon>
            Anaerobic Pond
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;