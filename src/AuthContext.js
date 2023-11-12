// AuthContext.js
import React, { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    // login logic here
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    // logout logic here
    setIsLoggedIn(false);
  }, []);

  const storeUserDetails = useCallback((userDetails) => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, storeUserDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
