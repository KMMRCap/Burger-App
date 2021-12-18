import React from 'react';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Header from './common/Header/Header';
import Sidebar from './common/Sidebar/Sidebar';
import { Route, Routes } from 'react-router';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<BurgerBuilder />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;