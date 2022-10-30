import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import bg from '../../resources/backgrounds/bg3.jpg';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(1.5px)',
    height: '50vh',
  },
  applybtn: {
    background: 'linear-gradient(to left, #151D3B,#D82148)',
    textTransform: 'none',
    marginInline: '0.5rem',
    borderRadius: '0.2rem',
    padding: '0.5rem',
    paddingInline: '1rem',
    marginTop: '1rem',
    transition: 'transform 0.1s ease',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
      transform: 'scale(105%,105%)',
    },
  },
  cnt: {
    width: '100%',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'centere',
    flexDirection: 'column',
  },
}));

export default function ApplicationRound() {
  let classes = useStyles();
  return (
    <div style={{ position: 'relative' }}>
      <div className={classes.root}></div>
      <div className={classes.cnt}>
        <Typography
          style={{
            color: 'white',
            maxWidth: '80%',
            textAlign: 'center',
            fontWeight: '600',
            backdropFilter: 'contrast(95%)',
          }}
        >
          Dynamic Round and Delegation Applications Open Now! Hurry Up!
        </Typography>
        <Button
          className={classes.applybtn}
          component={Link}
          to='/registration'
        >
          <Typography style={{ color: 'white' }}>Apply Now</Typography>
        </Button>
      </div>
    </div>
  );
}
