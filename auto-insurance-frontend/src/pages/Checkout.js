import React from 'react';
import { Container, Typography, Button } from '@mui/material';

export default function Checkout() {
  const handleCheckout = () => {
    alert('Checkout initiated');
  };

  return (
    <Container maxWidth="sm" className="mt-10">
      <Typography variant="h4" gutterBottom>
        Checkout Page
      </Typography>
      <Button variant="contained" onClick={handleCheckout}>
        Proceed to Payment
      </Button>
    </Container>
  );
}
