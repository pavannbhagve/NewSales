import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Leads() {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/leads')
            .then(response => setLeads(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Leads</h2>
            <ul>
                {leads.map(lead => (
                    <li key={lead._id}>{lead.client} - {lead.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default Leads;
