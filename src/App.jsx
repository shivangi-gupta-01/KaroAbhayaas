import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Profile from './component/Profile';
import Cart from './component/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VideoTitle from './component/VideoTitle';
import Products from './component/Products';
import AboutUs from './component/AboutUs';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/video' element={<VideoTitle />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
