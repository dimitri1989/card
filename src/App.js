import { useState } from 'react';
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Items from './components/item/Items.jsx';
import Cart from './components/cart/Cart.jsx';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';
import Info from './components/cart/Info.jsx'
import './media.css';
import './App.css';

function App() {
  
//<Items  onClick={changeCount} />
 
  return (
    <>
    
     <div className='container'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
        <Route path="/:info"element={<Info />} />
        <Route path="cart" element={<Cart />} />
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
        
     </div>
     </>
  );
}

export default App;
