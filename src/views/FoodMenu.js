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
  ToggleButton,
  ToggleButtonGroup,
  Checkbox,
  IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder, Add, Remove } from '@mui/icons-material';
import GarlicIcon from '../components/GarlicIcon';
import HerbsIcon from '../components/HerbsIcon';
import pizzaVegetarian from '../assets/images/pizza-vegetarian.png';
import pizzaFourCheese from '../assets/images/pizza-four-cheese.png';
import pizzaMargherita from '../assets/images/pizza-margherita.png';
import pizzaBbqChicken from '../assets/images/pizza-bbq-chicken.png';
import pizzaMushroom from '../assets/images/pizza-mushroom.png';
import pizzaBuffalo from '../assets/images/pizza-buffalo.png';
import pizzaMeat from '../assets/images/pizza-meat.png';
import pizzaHawaiian from '../assets/images/pizza-hawaiian.png';
import pizzaPeperoni from '../assets/images/pizza-peperoni.png';
import pizzaSpinach from '../assets/images/pizza-spinach.png';

const pizzas = [
  {
    name: 'Margherita',
    image: pizzaMargherita,
    description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
    ingredients: 'Tomato sauce, mozzarella cheese, fresh basil',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Pepperoni',
    image: pizzaPeperoni,
    description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
    ingredients: 'Tomato sauce, mozzarella cheese, pepperoni',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Hawaiian',
    image: pizzaHawaiian,
    description: 'Ham, pineapple, mozzarella cheese, and tomato sauce.',
    ingredients: 'Tomato sauce, mozzarella cheese, ham, pineapple',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'BBQ Chicken',
    image: pizzaBbqChicken,
    description: 'Grilled chicken, BBQ sauce, red onions, and cilantro.',
    ingredients: 'BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Vegetarian',
    image: pizzaVegetarian,
    description: 'Bell peppers, olives, onions, mushrooms, and tomato sauce.',
    ingredients: 'Tomato sauce, mozzarella cheese, bell peppers, olives, onions, mushrooms',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Four Cheese',
    image: pizzaFourCheese,
    description: 'Mozzarella, cheddar, parmesan, and blue cheese.',
    ingredients: 'Tomato sauce, mozzarella, cheddar, parmesan, blue cheese',
    allergens: 'Dairy, Gluten',
  },
  {
    name: "Meat Lover's",
    image: pizzaMeat,
    description: 'Pepperoni, sausage, ham, bacon, and ground beef.',
    ingredients: 'Tomato sauce, mozzarella cheese, pepperoni, sausage, ham, bacon, ground beef',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Buffalo Chicken',
    image: pizzaBuffalo,
    description: 'Buffalo chicken, mozzarella cheese, and ranch dressing.',
    ingredients: 'Buffalo sauce, mozzarella cheese, grilled chicken, ranch dressing',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Mushroom',
    image: pizzaMushroom,
    description: 'Portobello mushrooms, mozzarella cheese, and truffle oil.',
    ingredients: 'Tomato sauce, mozzarella cheese, portobello mushrooms, truffle oil',
    allergens: 'Dairy, Gluten',
  },
  {
    name: 'Spinach & Feta',
    image: pizzaSpinach,
    description: 'Fresh spinach, feta cheese, mozzarella, and garlic.',
    ingredients: 'Tomato sauce, mozzarella cheese, fresh spinach, feta cheese, garlic',
    allergens: 'Dairy, Gluten',
  },
];

const FoodMenu = () => {
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
    <Box sx={{ py: 4, background: '#F2F0EA' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          Our Food Menu
        </Typography>
        <Grid container spacing={4}>
          {pizzas.map((pizza, index) => (
            <Grid item xs={6} sm={4} key={pizza.name}>
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
                >
                  <ToggleButton
                    value="herb"
                    sx={{
                      backgroundColor: '#fff',
                      '&.Mui-selected': {
                        backgroundColor: '#cddfd8',
                        stroke: '#fff',
                        '&:hover': {
                          backgroundColor: '#e6efeb',
                          strokeWidth: '2',
                          stroke: '#fff',
                        },
                      },
                      '&:hover': {
                        backgroundColor: '#e6efeb',
                      },
                      '&:focus': { outline: 'none' },
                    }}
                    aria-label="herb crust"
                  >
                    <HerbsIcon />
                  </ToggleButton>
                  <ToggleButton
                    value="garlic"
                    sx={{
                      backgroundColor: '#fff',
                      '&.Mui-selected': {
                        backgroundColor: '#cddfd8',
                        stroke: '#fff',
                        '&:hover': {
                          backgroundColor: '#e6efeb',
                          strokeWidth: '2',
                          stroke: '#fff',
                        },
                      },
                      '&:hover': {
                        backgroundColor: '#e6efeb',
                      },
                      '&:focus': { outline: 'none' },
                    }}
                    aria-label="garlic crust"
                  >
                    <GarlicIcon />
                  </ToggleButton>
                </ToggleButtonGroup>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    {pizza.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {pizza.description}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Ingredients:</strong> {pizza.ingredients}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Allergens:</strong> {pizza.allergens}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: '16px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
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

export default FoodMenu;
