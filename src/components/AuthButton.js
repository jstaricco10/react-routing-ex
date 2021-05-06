import React from "react";
import { useHistory, Redirect } from "react-router-dom";

import { fakeAuth } from "../helpers/PrivateRoute";

export default function AuthButton() {
  const history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}