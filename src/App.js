import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import Payment from './pages/Payment';
import UploadDocuments from './pages/UploadDocuments';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/upload" element={<UploadDocuments />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
