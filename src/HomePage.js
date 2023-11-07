import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal";

const HomePage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        <h1>Welcome to Health Tracker</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tristique maximus erat, eu posuere arcu pellentesque sed.
        </p>
        <button onClick={toggleLoginModal}>Get Started</button>
        {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
      </div>
    </div>
  );
};

export default HomePage;
