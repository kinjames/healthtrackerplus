import React, { useState } from "react";
import "./HomePage.css";
import LoginModal from "./LoginModal";
import Layout from "./Layout";

const HomePage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <Layout>
      <div className="home-page">
        <div className="content">
          <h1>
            Welcome to <span>Health Tracker+</span>
          </h1>
          <p>
            Optimize your health journey with Your Health Tracker! Set goals,
            track progress, and stay motivated effortlessly. Click 'Get Started'
            and transform your well-being today!
          </p>
          <button onClick={toggleLoginModal}>Get Started</button>
          {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
