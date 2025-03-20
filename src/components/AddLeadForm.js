import React, { useState } from 'react';
import axios from 'axios';

function AddLeadForm() {
    const [client, setClient] = useState('');
    const [status, setStatus] = useState('New');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newLead = { client, status };
        await axios.post('http://localhost:5000/api/leads', newLead);
        alert('Lead added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Client Name" value={client} onChange={e => setClient(e.target.value)} required />
            <button type="submit">Add Lead</button>
        </form>
    );
}

export default AddLeadForm;
