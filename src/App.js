import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import About_us from './pages/About_us';
import Nav from './layout/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/about_us" element={<About_us/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
