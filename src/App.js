import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Shopping from './components/API/Api';
import Quote from './components/Quotes/Quote'; // Updated to Quote
import Dummy from './components/dummy/Dummy';
function App() {
  return (
    <Router basename="/dribble">
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/quotes" element={<Quote />} />
        <Route path="/test" element={<Dummy />} />
      </Routes>
    </Router>
  );
}

export default App;
