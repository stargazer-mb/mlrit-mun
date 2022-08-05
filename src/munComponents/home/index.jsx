import React from 'react';
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Landing from './landing';

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    marginTop: '-5rem',
  },
}));

export default function Home() {
  let classes = useStyles();
  return (
    <div className={classes.homeRoot}>
      <Landing />
    </div>
  );
}
