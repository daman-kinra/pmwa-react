import axios from "axios";
import React, { useContext, useState } from "react";
import { userProvider } from "../../user/User";

function Register() {
  const { setToken, setUser } = useContext(userProvider);
  const [register, setRegister] = useState({
    name: "Daman kinra",
    username: "xcls00",
    email: "daman@gmail.com",
    profileImageUrl: "",
    password: "1234",
  });
  const handleRegister = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          ...register,
        }
      );
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
