import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change based on your actual authentication state

  const login = () => {
    setIsLoggedIn(true);
    // You might also set some token or session information in localStorage or cookies
  };

  const logout = () => {
    setIsLoggedIn(false);
    // Clear token or session information from localStorage or cookies
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
