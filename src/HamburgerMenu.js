import React from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="close-btn" onClick={onClose}>
        &times;
      </div>
      <Link to="/HomePage">Home</Link>
      <Link to="/About">About Us</Link>
      <Link to="/Exercise">Exercise</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Contact">Contact Us</Link>
      <Link to="/Login">Log In</Link>
      <Link to="/Signup">Sign Up</Link>
    </div>
  );
};

export default HamburgerMenu;
