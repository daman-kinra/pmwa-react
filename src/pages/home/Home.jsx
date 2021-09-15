import React, { useContext } from "react";
import { userProvider } from "../../user/User";

function Home() {
  const { setUser } = useContext(userProvider);
  return (
    <div>
      Home
      <button
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem("user");
          setUser(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
