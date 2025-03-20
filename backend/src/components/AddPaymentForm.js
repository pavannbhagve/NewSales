import React, { useState } from 'react';
import axios from 'axios';

function AddPaymentForm() {
    const [client, setClient] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPayment = { client, amount, status };
        await axios.post('http://localhost:5000/api/payments', newPayment);
        alert('Payment added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Client Name" value={client} onChange={e => setClient(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
            <button type="submit">Add Payment</button>
        </form>
    );
}

export default AddPaymentForm;
