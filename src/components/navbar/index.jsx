
import React, { useState } from "react";
import "./navbar.css";
import {NavLink } from "react-router-dom";


/*
export default function Navbar(){
  return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
    <h2 className="text-2xl font-semibold" >LOGO</h2>

    <ul className="flex gap-5">
      <li>
        <NavLink to={'/'} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
      </li>

      <li>
          <NavLink
            to={"/Input"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Input
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/ChartPage"}
            className="text-black hover:text-gray-700 duration-300"
          >
            ChartPage
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/QrCodePage"}
            className="text-black hover:text-gray-700 duration-300"
          >
            QrCodePage
          </NavLink>
        </li>
    </ul>



  </nav>
}

*/
export default function Navbar()  {
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
          <NavLink to="/ChartPage">ChartPage</NavLink>
        </li>
        <li>
          <NavLink to="/QrCodePage">QrCodePage</NavLink>
        </li>
      </ul>
    </nav>
  );
};

