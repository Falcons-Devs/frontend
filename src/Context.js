import React, { createContext, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [userType, setUserType] = useState("Public");
  const value = {
    userType,
    changeType: (name) => {
      setUserType(name);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
