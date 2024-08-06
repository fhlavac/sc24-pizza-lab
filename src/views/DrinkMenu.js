import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  ToggleButtonGroup,
  Checkbox,
  IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder, Add, Remove } from '@mui/icons-material';
import pizzaVegetarian from '../assets/images/beer.webp';
import pizzaFourCheese from '../assets/images/wine.png';
import water from '/home/brnosummercamp/work/pizza/sc24-pizza-lab/src/assets/images/bottle.jpg';
import pizzaBbqChicken from '../assets/images/applejuice.png';
import juice from '../assets/images/juice.jpg';
import cola from '../assets/images/cola.png';
const pizzas = [
  {
    name: 'Water',
    image: water,
    price: '20CZK',
    litre: '0.5l',
  },
  {
    name: 'Cola-Loca',
    image: cola,
    price: '35CZK',
    litre: '0.5l',
  },
  {
    name: 'Orange juice',
    image: juice,
    price: '35CZK',
    litre: '0.5l',
  },
  {
    name: 'Apple juice',
    image: pizzaBbqChicken,
    price: '35CZK',
    litre: '0.5l',
  },
  {
    name: 'Beer',
    image: pizzaVegetarian,
    price: '35CZK',
    litre: '0.3l',
  },
  {
    name: 'Wine',
    image: pizzaFourCheese,
    price: '35CZK',
    litre: '0.2l',
  },
];

const DrinkMenu = () => {
  const [selectedCrust, setSelectedCrust] = useState({});
  const [favorites, setFavorites] = useState({});
  const [quantity, setQuantity] = useState({});

  const handleCrustChange = (event, newCrust, index) => {
    setSelectedCrust((prevState) => ({ ...prevState, [index]: newCrust }));
  };

  const handleFavoriteChange = (index) => {
    setFavorites((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  const handleIncreaseQuantity = (index) => {
    setQuantity((prevState) => ({ ...prevState, [index]: (prevState[index] || 1) + 1 }));
  };

  const handleDecreaseQuantity = (index) => {
    if (quantity[index] > 1) {
      setQuantity((prevState) => ({ ...prevState, [index]: prevState[index] - 1 }));
    }
  };

  return (
    <Box sx={{ py: 4, background: '#F4B266' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Our Drink Menu
        </Typography>
        <Grid container spacing={4}>
          {pizzas.map((pizza, index) => (
            <Grid item xs={12} sm={6} key={pizza.name}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <CardMedia component="img" height="200" image={pizza.image} alt={pizza.name} />
                <IconButton sx={{ position: 'absolute', left: 0, top: 10 }} onClick={() => handleFavoriteChange(index)}>
                  <Checkbox
                    icon={<FavoriteBorder style={{ color: '#fff' }} />}
                    checkedIcon={<Favorite color="error" />}
                    checked={favorites[index] || false}
                    inputProps={{ 'aria-label': 'favorite checkbox' }}
                  />
                </IconButton>
                <ToggleButtonGroup
                  value={selectedCrust[index] || ''}
                  exclusive
                  onChange={(event, newCrust) => handleCrustChange(event, newCrust, index)}
                  aria-label="crust selection"
                  orientation="vertical"
                  sx={{ position: 'absolute', right: 0, top: 10 }}
                ></ToggleButtonGroup>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    {pizza.name}
                  </Typography>
                  <Typography variant="h6">{pizza.litre}</Typography>
                </CardContent>
                <CardActions sx={{ padding: '16px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                    <Typography variant="h6">{pizza.price}</Typography>

                    <IconButton onClick={() => handleDecreaseQuantity(index)}>
                      <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{ margin: '0 12px' }}>
                      {quantity[index] || 1}
                    </Typography>
                    <IconButton onClick={() => handleIncreaseQuantity(index)}>
                      <Add />
                    </IconButton>
                  </Box>
                  <Button variant="contained" color="primary" size="large">
                    Add to my Order
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DrinkMenu;
