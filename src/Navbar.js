import React from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Health Tracker<span>+</span>
      </div>
      <div className="navbar-links">
        <a href="google.com">About Us</a>
        <a href="google.com">Blog</a>
        <a href="google.com">Dashboard</a>
        <a href="google.com">Contact Us</a>
        <a href="google.com">Log In</a>
        <a href="google.com">Sign Up</a>
        {/* <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
