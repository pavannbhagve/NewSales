import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AMC() {
    const [amcs, setAMCs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/amc')
            .then(response => setAMCs(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Annual Maintenance Contracts</h2>
            <ul>
                {amcs.map(amc => (
                    <li key={amc._id}>{amc.client} - {amc.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default AMC;
