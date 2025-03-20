import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quotations() {
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quotations')
      .then(response => setQuotations(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Quotations</h2>
      <ul>
        {quotations.map(q => (
          <li key={q._id}>{q.client} - ${q.amount} - {q.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quotations;
