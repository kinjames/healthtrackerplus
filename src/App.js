// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Layout from "./Layout";
import HomePage from "./HomePage";
import About from "./About";
import Exercise from "./Exercise";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Exercise" element={<Exercise />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
