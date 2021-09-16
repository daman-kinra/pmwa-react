import React from "react";
import { Redirect } from "react-router-dom";

function Error(props) {
  if (props.token) {
    return <Redirect to="/app" />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default Error;
