import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../component/input/Input";
import { userProvider } from "../../user/User";
import { registerUser } from "../../utils/functions";
function Register() {
  const { setToken, setUser } = useContext(userProvider);
  const [register, setRegister] = useState({
    name: "",
    username: "",
    email: "",
    profileImageUrl: "",
    password: "",
    projects: [],
    requests: [],
  });
  const handleRegister = async (e) => {
    if (e) e.preventDefault();
    try {
      const res = await registerUser(register);
      setToken(res.token);
      setUser(res.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <Input
          value={register.name}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setRegister((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <Input
          value={register.username}
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setRegister((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
        <Input
          value={register.email}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setRegister((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <Input
          value={register.password}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setRegister((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <button onClick={handleRegister}>Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default Register;
