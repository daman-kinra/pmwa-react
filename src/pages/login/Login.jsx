import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userProvider } from "../../user/User";

function Login() {
  const { setToken, setUser } = useContext(userProvider);
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        ...login,
      });
      if (res.data.error) {
        console.log(res.data.error);
        return;
      }
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={login.email}
        onChange={(e) => {
          setLogin((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
      <input
        type="password"
        value={login.password}
        onChange={(e) => {
          setLogin((prev) => ({ ...prev, password: e.target.value }));
        }}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
