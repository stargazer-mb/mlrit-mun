import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import bg from '../../resources/backgrounds/try7.jpg';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'centere',
    flexDirection: 'column',
  },
  applybtn: {
    background: 'linear-gradient(to right,purple,orange)',
    textTransform: 'none',
    margin: '1rem',
    borderRadius: '0.2rem',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
    },
  },
}));

export default function ApplicationRound() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        style={{ color: 'white', maxWidth: '80%', textAlign: 'center' }}
      >
        Priority Round Applications Open Now! Hurry Up Delegates!
      </Typography>
      <Button className={classes.applybtn} component={Link} to='/registration'>
        Apply Now
      </Button>
    </div>
  );
}
