import React, { useState } from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { fakeAuth } from '../helpers/FakeAuth';
import CustomInput from '../sharedComponents/CustomInput';

export default function Login(props) {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleAuth, unvalidAdd } = props;

  const { state } = useLocation();
  const history = useHistory();

  const login = () => {
    email !== '' && password !== ''
      ? fakeAuth.authenticate(() => {
          setRedirectToReferrer(true);
          handleAuth();
        })
      : alert('Please enter email and password');
  };

  if (redirectToReferrer) {
    return <Redirect to={state?.from || '/'} />;
  }
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  if (unvalidAdd) return <Redirect to="/login" />;

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
          onClick={() => history.push('/forgotPassword')}
        >
          Forgot my password
        </Button>
      </form>
    </div>
  );
}
