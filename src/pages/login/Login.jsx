import React, { useContext } from "react";
import { userProvider } from "../../user/User";

function Login() {
  const { setUser } = useContext(userProvider);
  return (
    <div>
      Login
      <button
        onClick={(e) => {
          e.preventDefault();
          localStorage.setItem("user", "Daman");
          setUser("Daman");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
