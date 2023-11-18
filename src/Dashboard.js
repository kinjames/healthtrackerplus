import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login page if user is not logged in
    return <Navigate to="/login" />;
  }

  // Render dashboard content for logged-in user
  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard, {user.username}!</h2>
      {/* Display user's exercise data and workouts */}
    </div>
  );
};

export default Dashboard;
