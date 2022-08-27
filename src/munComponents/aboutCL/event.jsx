import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'yellow',
    borderRadius: '1rem',
    height: '60vh',
    width: '75vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '1rem',
  },
}));

export default function Event() {
  let classes = useStyles();
  return (
    <div style={{ display: 'inline' }}>
      <div className={classes.root}>
        <Typography variant='h4'>Logo</Typography>
        <Typography>
          {' '}
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
          content content content content content content content content
        </Typography>
        <Typography variant='h4'>Gallery</Typography>
      </div>
    </div>
  );
}
