import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ls from 'local-storage';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '30px',
  },
  media: {
    height: 230,
    width: 230,
  },
});

const friends = ls.get('friends');

export default function Friends() {
  const classes = useStyles();
  let match = useRouteMatch();

  return (
    <div style={{ flexGrow: 1, width: '100%' }}>
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
            <Link
              key={friend.id}
              to={{
                pathname: `${match.url}/${friend.id}`,
                props: {
                  id: friend.id,
                  firstName: friend.firstName,
                  lastName: friend.lastName,
                  email: friend.email,
                  avatar: friend.avatar,
                },
              }}
            >
              <Card key={friend.id} className={classes.root}>
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
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
