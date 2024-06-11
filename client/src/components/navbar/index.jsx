import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [showDetails, setShowDetails] = useState(false);

  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;
  const userRole = cookies.Role;

  const handleSignOut = () => {
    removeCookie("Email");
    removeCookie("AuthToken");
    window.location.reload();
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <nav>
      {userRole === "admin" ? (
        <>
          <NavLink to="/" className="title">
            Admin Intro
          </NavLink>

          <ul>
          <li><NavLink to="/QrCodeScan">QR Code Scan</NavLink></li>
          <li><NavLink to="/AdminPage">Fetch User Data</NavLink></li>
          </ul>
        </>
      ) : (
        <>
          <NavLink to="/" className="title">
            Home
          </NavLink>

          <ul>
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
        </>
      )}

      <div className="circle" onClick={toggleDetails}>
        {showDetails ? (
          <div className="details">
            <p>Welcome, {cookies.Email}</p>
            <button className="signup-button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </nav>
  );
}
