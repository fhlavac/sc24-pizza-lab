import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { MyButton } from '../components/MyButton';
const DrinkMenu = () => {
  return (
    <>
      <Box sx={{ py: 4, background: '#F2F0EA' }}>
        <Container maxWidth="lg" sx={{ height: '735px' }}>
          <Typography variant="h3" gutterBottom>
            Our Drink Menu
          </Typography>
        </Container>
      </Box>
      <MyButton
        sx={{
          '&:hover': { color: 'blue' },
        }}
        variant="contained"
      >
        foo
      </MyButton>
    </>
  );
};

export default DrinkMenu;
