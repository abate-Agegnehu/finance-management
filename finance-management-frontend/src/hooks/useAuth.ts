import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const login = (userData: string, token: string) => {
    localStorage.setItem("user", userData);
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
