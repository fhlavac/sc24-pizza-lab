import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import founders from '../assets/images/founders.png';
import restaurant from '../assets/images/restaurant.png';
import deliciousPizza from '../assets/images/delicious-pizza.png';

const About = () => {
  return (
    <Box sx={{ py: 4, background: '#F4B266' }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          FYPizza
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <img src={founders} alt="Founders" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" paragraph>
              ForYouPizza is restaurant for everybody. We have almost ten years long tradition and we have experience that our pizzeria is mostly
              visited by students from nearby schools. But we are not just for them, we are for everyone. You order will be prepared in half hour.
            </Typography>
            <Typography variant="body1" paragraph>
              We have a wide range of pizzas and drinks at great prices. All our pizzas are made from high quality ingredients. You are not so hungry
              for whole pizza? No problem just take and pay only for on, two or three pieces. Hurry up? Just choose from finished pieces. Do you want
              to sit and chill with a slice of our excellent pizza? You can sit at one of our tables on the second floor. Do you want to just pick up
              your fresh pizza and go. Now you can order in on web or in our app.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" paragraph>
              FYPizza is for everyone so do not delay and come and visit us too.
            </Typography>
            <Typography variant="body1" paragraph></Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={restaurant} alt="Pizza Lab Interior" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <img src={deliciousPizza} alt="Delicious Pizza" style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" paragraph></Typography>
            <Typography variant="body1" paragraph></Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
