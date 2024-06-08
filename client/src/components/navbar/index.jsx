import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [showDetails, setShowDetails] = useState(false);

  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;

  const handleSignOut = () => {
    console.log("singout");
    removeCookie("Email");
    removeCookie("AuthToken");
    window.location.reload();
  };

  const toggleDetails = () => {
    console.log("Toggling details");
    setShowDetails(!showDetails);
    console.log(showDetails);
  };

  return (
    <nav>
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

      
      <div className="circle" onClick={toggleDetails}>
        {showDetails ? (
          <div className="details">
            <p>Welcome, {cookies.Email}</p>
            <button className="signup-button"  onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <span></span>
        )}
      </div>

    </nav>
  );
}
