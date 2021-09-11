import React from 'react';
import {
  Grid, Card, CardActionArea, CardMedia, CardContent, Typography,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from '../img/shoe.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    boxShadow: 0,
  },
}));

export const Main = (props) => {

  const classes = useStyles();

  const getMediaCard = () => {

    return (
      <Card className={classes.card} elevation={0} border="4px">
        <CardActionArea border="4px">
          <CardMedia
            className={classes.media}
            image={logo}
            border="4px"
          />
        </CardActionArea>
      </Card>
    );

  };

  const getGrid = () => {

    return (
      <Grid container spacing={1}>
        <Grid item xs={6} sm={3}>
          {getMediaCard()}
        </Grid>
        <Grid item xs={6} sm={3}>
          {getMediaCard()}
        </Grid>
        <Grid item xs={6} sm={3}>
          {getMediaCard()}
        </Grid>
        <Grid item xs={6} sm={3}>
          {getMediaCard()}
        </Grid>
      </Grid>
    );

  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {getGrid()}
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    </>
  );

};

export default Main;
