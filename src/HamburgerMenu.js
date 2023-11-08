import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="close-btn" onClick={onClose}>
        &times;
      </div>
      <Link to="/about">About Us</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default HamburgerMenu;
