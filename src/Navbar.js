import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Health Tracker<span>+</span>
      </div>
      <div className="navbar-links">
        <Link to="/HomePage">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Exercise">Exercise</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Login">Log In</Link>
        <Link to="/Signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
