import React from 'react';
import Navbar from '../src/Components/Navigation_Bar/Navbar';

import Footer from '../src/Components/Footer/Footer';

import CartPage from './Components/CartPage/CartPage';
const App = () => {
  return (
    <div>
      {/* <Navbar />

      <Footer /> */}
      <Navbar />
      <CartPage/>
      <Footer /> 
    </div>
  );
};

export default App;
