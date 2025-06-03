import React, { useState, useContext } from 'react';
import axios from '../api/axiosConfig';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      setAuth({ user: res.data.user, accessToken: res.data.accessToken });
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input className="form-control mb-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
