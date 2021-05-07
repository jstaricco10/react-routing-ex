import React, { useState } from "react";

import { Link } from "react-router-dom";

import faker from "faker";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function generateFriends() {
  let friends = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let avatar = faker.internet.avatar();

    friends.push({
      id,
      firstName,
      lastName,
      email,
      avatar,
    });
  }

  return { data: friends };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "30px",
  },
  media: {
    height: 140,
  },
});

export default function Friends() {
  const [friends, setFriends] = useState(generateFriends().data);
  const classes = useStyles();

  return (
    <div style={{ flexGrow: 1, width: "100%" }}>
      <Grid container className={classes.root} spacing={3}>
        <Grid
          item
          xs={12}
          container
          justify="center"
          direction="row"
          alignItems="flex-start"
          spacing={6}
        >
          {friends.map((friend) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={friend.avatar}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {friend.firstName} {friend.lastName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {friend.email}
                  </Typography>
                  <Button size="small" color="primary">
                    <Link to="/friends">Perfil</Link>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
