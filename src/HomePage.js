import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./HomePage.css";
import LoginModal from "./LoginModal";
import Layout from "./Layout";

const HomePage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = React.useState(false);
  const { isLoggedIn /* , login */ } = useAuth(); // eslint-disable-next-line
  const navigate = useNavigate();

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      // User is logged in, navigate to Dashboard
      navigate("/Dashboard");
    } else {
      // User is not logged in, open the login modal
      setLoginModalOpen(true);
    }
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
          <button onClick={handleGetStarted}>Get Started</button>
          {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
