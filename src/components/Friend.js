import React from "react";
import { useParams } from "react-router-dom";

export default function Friend(props) {
  // const {firstName, lastName, email } = props;
  let { id } = useParams();

  return <h1>Friend {id}</h1>;
}
