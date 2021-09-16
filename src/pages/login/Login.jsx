import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../component/input/Input";
import Toggle from "../../component/toggle/Toggle";
import { userProvider } from "../../user/User";
import { loginUser } from "../../utils/functions";

function Login() {
  const { setToken, setUser } = useContext(userProvider);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [toggle, setToggle] = useState(true);
  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    try {
      const res = await loginUser(login);
      setToken(res.token);
      setUser(res.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Hello</h1>
      <form>
        <Input
          type="email"
          value={login.email}
          onChange={(e) => {
            setLogin((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <Input
          type="password"
          value={login.password}
          onChange={(e) => {
            setLogin((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <Toggle
          label="Test Toggle"
          value={toggle}
          onChange={(e) => {
            setToggle(e.target.checked);
          }}
        />
        <button onClick={handleLogin}>Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
