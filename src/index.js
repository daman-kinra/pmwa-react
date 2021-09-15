import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import User from "./user/User";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
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
