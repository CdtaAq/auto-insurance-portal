import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import PolicyPage from './pages/PolicyPage';
import Upload from './pages/Upload';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
