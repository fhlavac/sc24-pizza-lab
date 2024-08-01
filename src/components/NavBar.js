import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" component={RouterLink} to="/" aria-label="logo">
          <LocalPizzaIcon htmlColor="#fff" />
        </IconButton>
        <Typography variant="h6" component={'h1'} sx={{ flexGrow: 1 }} aria-label="brand name">
          Pizza Lab
        </Typography>
        <Box>
          <Button sx={{ color: '#fff' }} component={RouterLink} to="/">
            Home
          </Button>
          <Button sx={{ color: '#fff' }} component={RouterLink} to="about">
            About Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
