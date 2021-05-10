import React from 'react';
import ReactCountryFlag from 'react-country-flag';

import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Address from '../sharedComponents/Address';

import ls from 'local-storage';
import { generateQuery } from '../helpers/GenerateData';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const useQuery = () => new URLSearchParams(useLocation().search);

const addresses = ls.get('addresses');

export default function Addresses() {
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
          {addresses.map((address) => (
            <Link key={address.id} to={generateQuery(address, match.url)}>
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
                  id={`list-secondary-label-${address.id}`}
                  primary={` ${address.country} - ${address.city} - ${address.streetName}`}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      )}
    </>
  );
}
