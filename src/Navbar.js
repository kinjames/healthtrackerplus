// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./Navbar.css";

const Navbar = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Health Tracker<span>+</span>
      </div>
      {/* Hamburger button for mobile view */}
      <div className="hamburger-btn" onClick={toggleHamburger}>
        &#9776;
      </div>
      {/* Links for desktop view */}
      <div className="navbar-links desktop-links">
        <Link to="/HomePage">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Exercise">Exercise</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Login">Log In</Link>
        <Link to="/Signup">Sign Up</Link>
      </div>
      {/* Hamburger menu for mobile view */}
      <HamburgerMenu isOpen={isHamburgerOpen} onClose={toggleHamburger} />
    </nav>
  );
};

export default Navbar;
