import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState({});
  return (
    <div>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <h1>MainApp</h1>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};
