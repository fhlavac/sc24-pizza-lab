import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DrinkMenu = () => {
  return (
    <Box sx={{ py: 4, background: '#F2F0EA' }}>
      <Container maxWidth="lg" sx={{ height: '735px' }}>
        <Typography variant="h3" gutterBottom>
          Our drink Menu
        </Typography>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>{' '}
    </Box>
  );
};

export default DrinkMenu;
