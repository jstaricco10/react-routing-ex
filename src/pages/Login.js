import React, { useState } from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

import { fakeAuth } from "../helpers/FakeAuth";
import CustomInput from "../components/CustomInput";

export default function Login(props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = props.handleAuth;

  const { state } = useLocation();
  const history = useHistory();

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
      handleAuth();
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={state?.from || "/"} />;
  }
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div>
      <form className="form">
        <CustomInput
          labelText="Email"
          formControlProps={{
            fullWidth: false,
          }}
          handleChange={handleChangeEmail}
          type="text"
        />
        <br />
        <CustomInput
          labelText="Password"
          formControlProps={{
            fullWidth: false,
          }}
          handleChange={handleChangePassword}
          type="password"
        />
        <br />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={login}>
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/forgotPassword")}
        >
          Forgot my password
        </Button>
      </form>
    </div>
  );
}
