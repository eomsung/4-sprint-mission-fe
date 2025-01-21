"use client";

import api, { codeitClient } from "@/api";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function initializeLogInStatus() {
      try {
        const prevRefreshToken = localStorage.getItem("refreshToken");
        if (!prevRefreshToken) return;

        await api.refreshToken(prevRefreshToken);
        setIsLoggedIn(true);
      } catch {
        localStorage.removeItem("refreshToken");
      }
    }
    initializeLogInStatus();
  }, []);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => {
    setIsLoggedIn(false);
    codeitClient.defaults.headers["Authorization"] = "";
    localStorage.removeItem("refreshToken");
  };

  const value = {
    logIn,
    logOut,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
