import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Register clicked with ' + JSON.stringify(formData));
  };

  return (
    <Container maxWidth="sm" className="mt-10">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Username"
          name="username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Register
        </Button>
      </Box>
    </Container>
  );
}
