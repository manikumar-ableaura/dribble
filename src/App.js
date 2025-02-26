import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Shopping from './components/API/Api';
import Quote from './components/Quotes/Quote'; 
import ScrollToTop from './components/Scrolltotop/Scrolltotop';
import Discuss from './components/Discuss/Discuss';
import Card from './components/Card/Card';
import Product from './components/Products/Product';

function App() {
  return (
    <Router basename="/dribble">
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/quotes" element={<Quote />} />
        <Route path="/Discuss" element={<Discuss />} />
        <Route path="/card" element={<Card />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
