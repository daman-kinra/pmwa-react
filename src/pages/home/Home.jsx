import React, { useContext } from "react";
import { userProvider } from "../../user/User";

function Home() {
  const { setUser, setToken } = useContext(userProvider);
  return (
    <div>
      Home
      <button
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem("token");
          setUser(null);
          setToken(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
