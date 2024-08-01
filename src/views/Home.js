import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Header from '../components/Header';

const Home = () => {
  return (
    <Stack>
      <Header />
      <Box>
        <Typography>Home page content</Typography>
      </Box>
    </Stack>
  );
};

export default Home;
