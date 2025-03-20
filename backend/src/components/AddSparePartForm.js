import React, { useState } from 'react';
import axios from 'axios';

function AddSparePartForm() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSparePart = { name, quantity };
        await axios.post('http://localhost:5000/api/spareparts', newSparePart);
        alert('Spare part added successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Spare Part Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
            <button type="submit">Add Spare Part</button>
        </form>
    );
}

export default AddSparePartForm;
