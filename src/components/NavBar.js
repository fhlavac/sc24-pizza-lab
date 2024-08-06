import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModeSwitch from './ModeSwitch';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#9AD7A7' }}>
      <Toolbar>
        <IconButton size="large" edge="start" component={RouterLink} to="/" aria-label="logo">
          <LocalPizzaIcon htmlColor="#000" />
        </IconButton>
        <Typography variant="h6" component={'h1'} sx={{ flexGrow: 1, color: '#242424' }} aria-label="brand name">
          Pizza Lab
        </Typography>
        <Stack direction="row" sx={{ flexGrow: 1 }} spacing={2}>
          <Button variant="text" sx={{ color: '#242424' }} aria-label="menu" onClick={handleMenuOpen}>
            Our Offerings <ArrowDropDownTwoToneIcon htmlColor="#000" />
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem component={RouterLink} to="/food-menu" onClick={handleMenuClose}>
              Food Menu
            </MenuItem>
            <MenuItem component={RouterLink} to="/drink-menu" onClick={handleMenuClose}>
              Drink Menu
            </MenuItem>
          </Menu>
          <Button
            sx={{
              color: '#242424',
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            component={RouterLink}
            to="about"
          >
            About Us
          </Button>
          <Button
            sx={{
              color: '#242424',
              '&:hover': {
                color: 'white',
              },
            }}
            variant="text"
            component={RouterLink}
            to="contact"
          >
            Contact
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <ModeSwitch />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
