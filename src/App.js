import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import CartPage from './components/CartPage';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
return (
  <Fragment>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>



    </ThemeProvider>
  </Fragment>
);
};

export default App;
