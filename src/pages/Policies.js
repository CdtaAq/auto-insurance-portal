import React, { useEffect, useState } from 'react';
import axios from '../api/axiosConfig';

function Policies() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await axios.get('/insurance/policies');
        setPolicies(res.data);
      } catch (err) {
        console.error('Error loading policies', err);
      }
    };
    fetchPolicies();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Your Insurance Policies</h3>
      <ul className="list-group">
        {policies.map(policy => (
          <li className="list-group-item" key={policy.id}>
            <strong>Policy ID:</strong> {policy.id} |
            <strong> Vehicle:</strong> {policy.vehicleModel} |
            <strong> Amount:</strong> ${policy.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Policies;
