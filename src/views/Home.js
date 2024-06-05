import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, ButtonGroup } from '@mui/material';
// import SouthIcon from '@mui/icons-material/South';
import CallIcon from '@mui/icons-material/Call';
import Header from '../components/Header';

const Home = () => {
  return (
    <Stack>
      <Header />
      <Stack spacing={2} direction="row">
        <h1>Home page</h1>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Link to="about">Go to about page</Link>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" size="large">
          Contained
        </Button>
        <Button disableElevation variant="contained" startIcon={<CallIcon />} disableRipple disableFocusRipple disableTouchRipple size="large">
          Download
        </Button>
      </Stack>
      <br />
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="text" orientation="vertical">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Home;
