import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(p => (
          <li key={p._id}>{p.client} - ${p.amount} - {p.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Payments;
