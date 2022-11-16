import React, { createContext, useEffect, useState } from "react";
import { userControl } from "../auth/firebase";

export const MainContext = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userControl(setCurrentUser);
  }, []);

  return (
    <MainContext.Provider value={{ currentUser }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
