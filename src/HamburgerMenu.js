// HamburgerMenu.js
import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    // Close the hamburger menu when a link is clicked
    onClose();
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="close-btn" onClick={onClose}>
        &times;
      </div>
      <Link to="/HomePage" onClick={handleLinkClick}>
        Home
      </Link>
      <Link to="/About" onClick={handleLinkClick}>
        About Us
      </Link>
      <Link to="/Exercise" onClick={handleLinkClick}>
        Exercise
      </Link>
      <Link to="/Dashboard" onClick={handleLinkClick}>
        Dashboard
      </Link>
      <Link to="/Contact" onClick={handleLinkClick}>
        Contact Us
      </Link>
      <Link to="/Login" onClick={handleLinkClick}>
        Log In
      </Link>
      <Link to="/Signup" onClick={handleLinkClick}>
        Sign Up
      </Link>
    </div>
  );
};

export default HamburgerMenu;
