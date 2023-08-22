import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Medicines from './components/Medicine/Medicines';
import CartProvider from './store/CartProvider';

import './App.css';

function App() {
  const [isOpen, setISOpen] = useState(false);

  const openCart = () => {
    setISOpen(true);
  }

  const closeCart = () => {
    setISOpen(false);
  }
  return (
    <CartProvider>
      {isOpen && <Cart onClose={closeCart} />}
      <Header onOpen={openCart}/>
      <main>
        <Medicines />
      </main>
      </CartProvider>
  );
}

export default App;