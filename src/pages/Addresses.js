import React, { useState } from "react";
import faker from "faker";
import ReactCountryFlag from "react-country-flag";

import { Link, useRouteMatch, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

import Address from "../components/Address";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function generateAddresses() {
  let addresses = [];

  for (let id = 1; id <= 100; id++) {
    let city = faker.address.city();
    let streetName = faker.address.streetName();
    let country = faker.address.country();
    let countryCode = faker.address.countryCode();

    addresses.push({
      id,
      city,
      streetName,
      country,
      countryCode,
    });
  }

  return { data: addresses };
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Addresses() {
  const [addresses, setAddresses] = useState(generateAddresses().data);
  const classes = useStyles();
  let match = useRouteMatch();
  let query = useQuery();

  return (
    <>
      {query.get("city") !== null ? (
        <Address
          city={query.get("city")}
          streetName={query.get("street")}
          country={query.get("country")}
          countryCode={query.get("countryCode")}
        />
      ) : (
        <List dense className={classes.root}>
          {addresses.map((address) => {
            const labelId = `list-secondary-label-${address.id}`;
            return (
              <Link
                key={address.id}
                to={`${match.url}/${address.id}?city=${address.city}&street=${address.streetName}&country=${address.country}&countryCode=${address.countryCode}`}
              >
                <ListItem key={address.id}>
                  <ReactCountryFlag
                    countryCode={address.countryCode}
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
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
