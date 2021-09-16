import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const userProvider = createContext();
function User(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  useEffect(async () => {
    if (token) {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      if (res.data.error) {
        console.log(res.data.error);
        return;
      }
      setUser(res.data.user);
    }
  }, []);
  return (
    <userProvider.Provider value={{ user, token, setUser, setToken }}>
      {props.children}
    </userProvider.Provider>
  );
}

export default User;
