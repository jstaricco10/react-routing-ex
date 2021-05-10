import React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Button, InputLabel } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { fakeAuth } from '../helpers/FakeAuth';

const navAddresses = [
  { label: 'Home', route: '/' },
  { label: 'Friends', route: '/friends' },
  { label: 'Addresses', route: '/addresses' },
];

export default function TopNav(props) {
  const { handleAuth } = props;
  const logout = () => {
    fakeAuth.signout(() => {
      handleAuth();
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <ButtonGroup
            color="secondary"
            aria-label="outlined primary button group"
          >
            {!fakeAuth.isAuthenticated ? (
              <Button>
                <InputLabel>
                  <Link to="/login">Login</Link>
                </InputLabel>
              </Button>
            ) : (
              <Button onClick={logout}>
                <InputLabel>
                  <Link to="/login">Signout </Link>
                </InputLabel>
              </Button>
            )}
            {navAddresses.map((ad) => (
              <Button key={ad.label}>
                <InputLabel>
                  <Link to={ad.route}>{ad.label}</Link>
                </InputLabel>
              </Button>
            ))}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
}
