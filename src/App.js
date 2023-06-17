import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './component/Footer/Footer';
import Header from '../src/component/Header/Header';
import Banner from './screen/Banner/Banner';
import Newsletter from './screen/Newsletter/Newsletter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
