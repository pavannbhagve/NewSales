import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SpareParts() {
    const [spareParts, setSpareParts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/spareparts')
            .then(response => setSpareParts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Spare Parts</h2>
            <ul>
                {spareParts.map(sp => (
                    <li key={sp._id}>{sp.name} - {sp.quantity} available</li>
                ))}
            </ul>
        </div>
    );
}

export default SpareParts;
