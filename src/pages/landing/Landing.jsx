import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userProvider } from "../../user/User";

function Landing() {
  const { token } = useContext(userProvider);
  return (
    <div>
      {token ? <Link to="/home">Home</Link> : <Link to="/login">Login</Link>}
    </div>
  );
}

export default Landing;
