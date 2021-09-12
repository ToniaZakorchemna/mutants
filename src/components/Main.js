import React from 'react';
import {
  Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { alpha } from '@material-ui/core/styles/colorManipulator';
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
  squareButton: {
    width: '53px',
    height: '53px',
    backgroundColor: alpha('#FF00F5', 0.5),
    color: 'white',
    borderRadius: 0,
    position: 'fixed',
    bottom: -0,
    zIndex: 'tooltip',
  },
  centeredGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const Main = (props) => {

  const imgCount = 1;
  const starrtedImagesIds = Array(imgCount).fill(false);

  const classes = useStyles();

  // const onCardClick = (idx) = {
  //   starrtedImagesIds
  // onClick={onCardClick(idx)}
  // };

  const getMediaCard = (idx) => {

    return (
      <Card className={classes.card} elevation={0}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={logo} // TODO idx
          />
        </CardActionArea>
      </Card>
    );

  };

  const getGrid = () => {

    const result = [];

    for (let step = 0; step < 5; step += 1) {

      result.push(
        <Grid item xs={6} sm={3}>
          {getMediaCard()}
        </Grid>,
      );

    }

    return (
      <Grid container spacing={1}>
        {result}
      </Grid>
    );

  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <canvas id="tutorial" width="150" height="150">
          hey
        </canvas>
        {getGrid()}
        <Grid className={classes.centeredGrid}>
          <Button size="small" className={classes.squareButton}>
            <Typography variant="h5">4</Typography>
          </Button>
        </Grid>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
    </>
  );

};

export default Main;
