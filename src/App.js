import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Shopping from './components/API/Api';


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes> 

    </Router>
  );
}

export default App;
