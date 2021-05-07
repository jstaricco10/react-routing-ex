import React, { useState } from "react";
import faker from "faker";
import ReactCountryFlag from "react-country-flag";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

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

export default function Addresses() {
  const [addresses, setAddresses] = useState(generateAddresses().data);
  const classes = useStyles();

  return (
    <>
      <List dense className={classes.root}>
        {addresses.map((address) => {
          const labelId = `checkbox-list-secondary-label-${address.id}`;
          return (
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
          );
        })}
      </List>
    </>
  );
}
