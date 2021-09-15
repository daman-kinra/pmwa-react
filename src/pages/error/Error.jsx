import React from "react";
import { Redirect } from "react-router-dom";

function Error(props) {
  if (props.user) {
    return <Redirect to="/" />;
  } else {
    return <Redirect to="/" />;
  }
}

export default Error;
