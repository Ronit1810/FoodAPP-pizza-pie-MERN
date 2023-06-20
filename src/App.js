import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './component/Footer/Footer';
import Header from '../src/component/Header/Header';
import Home from './screen/Home/Home';
import SingleDish from './screen/Dish/SingleDish/SingleDish';
import Newsletter from './screen/Newsletter/Newsletter';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Dish' element={<SingleDish />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
