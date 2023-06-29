import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './component/Footer/Footer';
import Header from '../src/component/Header/Header';
import Home from './screen/Home/Home';
// import SingleDishItem from './screen/Dish/SingleDish/SingleDishItem';
import SingleDish from './screen/Dish/SingleDish/SingleDish';
import Newsletter from './screen/Newsletter/Newsletter';
import Login from './screen/Login/Login';
import Register from './screen/Login/registeration/Register';

import { Toaster } from 'react-hot-toast';
import CartItem from './screen/Cart/CartItem';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartItem />} />
        <Route path='/Dish/:id' element={<SingleDish />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <Newsletter />
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
