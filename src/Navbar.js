import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Health Tracker</div>
      <div className="navbar-links">
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
