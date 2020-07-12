import React, { createContext, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [userType, setUserType] = useState("Public");
  const [token, setToken] = useState("");
  const [userId, setIdUser] = useState("");
  const value = {
    userType,
    changeType: (name) => {
      setUserType(name);
    },
    token,
    changeToken: (token) => {
      setToken(token);
    },
    userId,
    changeIdUser: (userId) => {
      setIdUser(userId);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
