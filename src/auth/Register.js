import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', formData);
      alert('Registration successful');
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" placeholder="Name" required
               onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input className="form-control mb-2" type="email" placeholder="Email" required
               onChange={e => setFormData({ ...formData, email: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" required
               onChange={e => setFormData({ ...formData, password: e.target.value })} />
        <button className="btn btn-success" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
