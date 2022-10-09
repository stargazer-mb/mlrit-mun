import React from 'react';
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import FloatingSquares from '../../components/Reusable Components/Floating Squares/index';
import AnimatedText from '../../components/Reusable Components/animatedText.jsx';

const useStyles = makeStyles((theme) => ({
  landingRoot: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  divCentercntnt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tsLogo: {
    height: '25vh',
  },
  applybtn: {
    background: 'linear-gradient(to left, #151D3B,#D82148)',
    textTransform: 'none',
    marginBlock: '1rem',
    borderRadius: '0.2rem',
    padding: '0.5rem',
    paddingInline: '1rem',
    transition: 'transform 0.1s ease',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
      transform: 'scale(105%,105%)',
    },
  },
}));

export default function CommitteeLanding(props) {
  let classes = useStyles();

  let component = (
    <Grid container style={{ height: '100vh' }}>
      <Hidden smDown>
        <Grid item md={1}></Grid>
      </Hidden>
      <Grid item xs={12} md={6} className={classes.divCentercntnt}>
        <div className={classes.divCentercntnt}>
          <AnimatedText
            txt={props.elements.title}
            variant='h2'
            colors={props.elements.colors}
          />
          <Typography
            style={{
              maxWidth: '80%',
              textAlign: 'justify',
              fontSize: '0.8rem',
            }}
          >
            {props.elements.about}
          </Typography>
          <Button
            className={classes.applybtn}
            component={Link}
            to='/registration'
          >
            <Typography style={{ color: 'white' }}>Register Now</Typography>
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={4} className={classes.divCentercntnt}>
        <div className={classes.divCentercntnt}>
          <img
            src={props.elements.logo}
            alt='Committee Logo'
            style={{ maxWidth: '80%' }}
          ></img>
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item md={1}></Grid>
      </Hidden>
    </Grid>
  );

  return (
    <div className={classes.landingRoot}>
      <Hidden mdUp>{component}</Hidden>
      <Hidden smDown>
        <FloatingSquares component={component} />
      </Hidden>
    </div>
  );
}
