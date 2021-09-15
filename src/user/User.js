import React, { createContext, useState } from "react";
export const userProvider = createContext();
function User(props) {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <userProvider.Provider value={{ user, setUser }}>
      {props.children}
    </userProvider.Provider>
  );
}

export default User;
