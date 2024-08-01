import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      {/* <CssBaseline />  */} {/* uncomment if you want to use material UI */}
      <NavBar />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
