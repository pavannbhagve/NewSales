import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sales Management</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/quotations">Quotations</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
