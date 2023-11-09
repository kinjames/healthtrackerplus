import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state, initially null means not logged in

  const login = (userData) => {
    // Logic to authenticate user, e.g., calling an API
    setUser(userData); // Set user data upon successful login
  };

  const logout = () => {
    // Logic to log out the user, e.g., clearing user data from local storage
    setUser(null); // Set user state to null upon logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
