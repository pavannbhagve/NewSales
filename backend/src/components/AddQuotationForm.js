import React, { useState } from 'react';
import axios from 'axios';

function AddQuotationForm() {
    const [client, setClient] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQuotation = { client, amount, status };
        await axios.post('http://localhost:5000/api/quotations', newQuotation);
        alert('Quotation added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Client Name" value={client} onChange={e => setClient(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
            <button type="submit">Add Quotation</button>
        </form>
    );
}

export default AddQuotationForm;
