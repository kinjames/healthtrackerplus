import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user exists in local storage
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Check if the password is correct
      if (parsedUser.password === password) {
        // Authentication successful, redirect to the dashboard or another page
        navigate("/dashboard"); // Change "/dashboard" to your desired route
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }

    // Reset the form after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/Signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
