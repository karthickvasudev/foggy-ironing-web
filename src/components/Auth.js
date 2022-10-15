import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = sessionStorage.getItem("profile");

  const loggedIn = (user) => {
    sessionStorage.setItem("profile", JSON.stringify(user));
  };

  const loggedOut = () => {
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, loggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
