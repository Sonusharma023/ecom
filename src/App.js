import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes , Route } from 'react-router-dom';
import Footer from './components/Footer/index'
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Contact from './modules/contact/index';
function App() {
  return (
<>
  <Header />
  <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/products/:id' element={ <Product />} />
    <Route path='/categories/:name' element={ <CategoryProducts />} />
    <Route path='/products' element={ <Products/>} />
    <Route path='/cart' element={ <Cart/>} />
    <Route path='/contact' element={ <Contact/>} />
  </Routes>

  <Footer />
</>
  );
}

export default App;
