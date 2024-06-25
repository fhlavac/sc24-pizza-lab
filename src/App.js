import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FoodMenu from './views/FoodMenu';
import DrinkMenu from './views/DrinkMenu';

const App = () => {
  return (
    <BrowserRouter>
      {/* <CssBaseline />  */} {/* uncomment if you want to use material UI */}
      <NavBar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/food-menu" element={<FoodMenu />} />
          <Route path="/drink-menu" element={<DrinkMenu />} />
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
