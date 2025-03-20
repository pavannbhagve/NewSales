import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Quotations from "./pages/Quotations";
import Payments from "./pages/Payments";
import Leads from "./pages/Leads";
import SpareParts from "./pages/SpareParts";
import AMC from "./pages/AMC";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quotations" element={<Quotations />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/spareparts" element={<SpareParts />} />
            <Route path="/amc" element={<AMC />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
