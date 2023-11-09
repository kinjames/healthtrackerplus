import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import HomePage from "./HomePage";
import About from "./About";
import Exercise from "./Exercise";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          {/* ... other routes */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
