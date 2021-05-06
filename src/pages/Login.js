import React, { useState } from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";

import { fakeAuth } from "../helpers/PrivateRoute";

export default function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { state } = useLocation();
  const history = useHistory();

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div>
      <button onClick={login}>Log in</button>
      <button onClick={() => history.push("/forgotPassword")}>
        Forgot my password
      </button>
    </div>
  );
}
