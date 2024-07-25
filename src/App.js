import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Teammatchs from './Components/Teammatchs'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/team-matches/:id" element={<Teammatchs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
