import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Address from '../sharedComponents/Address';

import ls from 'local-storage';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function generateAddressQuery(address, url) {
  const { id, ...addressNoId } = address;
  let query = `${url}/${id}?`;
  let keys = Object.keys(addressNoId);
  let values = Object.values(addressNoId);
  const len = keys.length;
  for (let i = 0; i < len - 1; i++) {
    query += `${keys[i]}=${values[i]}&`;
  }
  query += `${keys[len - 1]}=${values[len - 1]}`;
  console.log(query);
  return query;
}

export default function Addresses() {
  const [addresses, setAddresses] = useState(ls.get('addresses'));
  const classes = useStyles();
  let match = useRouteMatch();
  let query = useQuery();

  return (
    <>
      {query.get('city') !== null ? (
        <Address
          city={query.get('city')}
          streetName={query.get('streetName')}
          country={query.get('country')}
          countryCode={query.get('countryCode')}
        />
      ) : (
        <List dense className={classes.root}>
          {addresses.map((address) => {
            const labelId = `list-secondary-label-${address.id}`;
            return (
              <Link
                key={address.id}
                to={generateAddressQuery(address, match.url)}
              >
                <ListItem key={address.id}>
                  <ReactCountryFlag
                    countryCode={address.countryCode}
                    svg
                    style={{
                      width: '2em',
                      height: '2em',
                    }}
                  />
                  <ListItemText
                    id={labelId}
                    primary={` ${address.country} - ${address.city} - ${address.streetName}`}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      )}
    </>
  );
}
