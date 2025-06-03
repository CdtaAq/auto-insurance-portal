import React, { useState } from 'react';
import axios from '../api/axiosConfig';

function Payment() {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      const res = await axios.post('/payment/checkout', { amount });
      window.location.href = res.data.checkoutUrl;
    } catch (err) {
      alert('Payment initiation failed');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Make a Payment</h3>
      <input
        type="number"
        className="form-control mb-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button className="btn btn-primary" onClick={handlePayment}>Pay with Stripe</button>
    </div>
  );
}

export default Payment;
