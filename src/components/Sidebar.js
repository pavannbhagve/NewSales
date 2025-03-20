import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{ width: "200px", padding: "20px", background: "#f4f4f4" }}>
      <h3>Menu</h3>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/quotations">Quotations</Link></li>
        <li><Link to="/payments">Payments</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/spareparts">Spare Parts</Link></li>
        <li><Link to="/amc">AMC</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
