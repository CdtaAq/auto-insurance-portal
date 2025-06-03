import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../auth/Login';
import { AuthProvider } from '../auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  it('renders login form correctly', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it('shows error when submitted without input', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
    fireEvent.click(screen.getByText(/login/i));
    expect(screen.getByText(/invalid/i)).toBeInTheDocument();
  });
});
