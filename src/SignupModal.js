// SignupModal.js
import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const SignupModal = ({ onClose, onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, storeUserDetails } = useAuth();

  const handleSignup = () => {
    // Perform signup logic
    // For simplicity, just log in the user after signup
    login();
    storeUserDetails({ username, password });
    onClose();
  };

  return (
    <div className="signup-modal">
      <h2>Sign Up</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <span onClick={onLoginClick}>Log in</span>
      </p>
    </div>
  );
};

export default SignupModal;
