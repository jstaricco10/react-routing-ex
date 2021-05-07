import React from "react";
import { Link, useHistory } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Button, InputLabel } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { fakeAuth } from "../helpers/FakeAuth";

export default function BottomNav() {
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
              <Button>
                <InputLabel>Signout</InputLabel>
              </Button>
            )}
            <Button>
              <InputLabel>
                <Link to="/">Home</Link>
              </InputLabel>
            </Button>
            <Button>
              <InputLabel>
                <Link to="/friends">Friends</Link>
              </InputLabel>
            </Button>
            <Button>
              <InputLabel>
                <Link to="/addresses">Addresses</Link>
              </InputLabel>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
}
