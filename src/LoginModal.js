// LoginModal.js
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import SignupModal from "./SignupModal";

const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    // Perform login logic and close the modal
    login();
    onClose();
  };

  return (
    <div className="login-modal">
      <h2>Login</h2>
      <label>
        Username or Email:
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
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{" "}
        <span onClick={() => onClose(<SignupModal onClose={onClose} />)}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginModal;
