import React from 'react';
import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material';
import pizzaCover from '../assets/images/pizza-cover.jpg';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${pizzaCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2} direction="column">
          <Box
            sx={{
              padding: 2,
              backgroundColor: 'rgba(255, 255, 255)',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#000',
                padding: '8px 16px',
              }}
            >
              Taste the best pizza of Your life!
            </Typography>
          </Box>
          <ButtonGroup
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button variant="contained" color="error" size="large">
              Call now!
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{
                background: 'rgba(255,255,255, 0.85);',
                '&:hover': {
                  backgroundColor: '#ffffff',
                  strokeWidth: '2',
                  stroke: '#fff',
                },
              }}
              size="large"
            >
              Explore menu
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
