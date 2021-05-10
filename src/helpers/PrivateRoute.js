import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import ls from 'local-storage';

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return ls.get('isAuthenticated') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
}
