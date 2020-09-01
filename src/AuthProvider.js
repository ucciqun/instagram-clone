import React, { createContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { Divider } from "@material-ui/core";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <>loading....</>
      ) : (
        <AuthContext.Provider value={{ currentUser }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
}

export default AuthProvider;
