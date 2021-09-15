import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import User from "./user/User";
ReactDOM.render(
  <React.StrictMode>
    <User>
      <Router>
        <App />
      </Router>
    </User>
  </React.StrictMode>,
  document.getElementById("root")
);
