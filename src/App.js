import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

const App = () => {

  return (
        <BrowserRouter>
          {/* <CssBaseline />  */} {/* uncomment if you want to use material UI */}
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route index path="/" element={<Home />} />
            </Routes>
          </main>
        </BrowserRouter>
  );
};

export default App;
