import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <NavLink to="/" className="title">
        Home
      </NavLink>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Input">Input</NavLink>
        </li>
        <li>
          <NavLink to="/ChartPage">Charts</NavLink>
        </li>
        <li>
          <NavLink to="/QrCodePage">QrCode</NavLink>
        </li>
        <li>
          <NavLink to="/ReportsPage">Reports</NavLink>
        </li>
      </ul>
    </nav>
  );
}
