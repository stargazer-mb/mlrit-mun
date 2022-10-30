import React from 'react';
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import FloatingSquares from '../../components/Reusable Components/Floating Squares/index';
import AnimatedText from '../../components/Reusable Components/animatedText.jsx';

import TitleSponsor from '../../resources/images/Title Sponsor.png';
import PowerSponsor from '../../resources/images/TIC logo.png';
import munLogo from '../../resources/images/title logo.png';
import bg from '../../resources/images/homeBG.png';

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
    maxHeight: '30vh',
    maxWidth: '30vh',
  },
  psLogo: {
    maxHeight: '20vh',
    maxWidth: '20vh',
  },
  applybtn: {
    background: 'linear-gradient(to left, #151D3B,#D82148)',
    textTransform: 'none',
    marginInline: '0.5rem',
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

export default function Landing() {
  let classes = useStyles();

  let component = (
    <Grid container style={{ height: '100vh' }}>
      <Hidden smDown>
        <Grid item md={1}></Grid>
      </Hidden>
      <Grid item xs={12} md={5} className={classes.divCentercntnt}>
        <div className={classes.divCentercntnt}>
          <img src={TitleSponsor} alt='Stuzee' className={classes.tsLogo}></img>
          <Typography style={{ fontSize: '1.2rem', marginBlock: '0.5rem' }}>
            Presents
          </Typography>
          <Typography
            style={{
              fontSize: '1.6rem',
              marginTop: '0.5rem',
              marginBottom: '-0.5rem',
            }}
          >
            The Fifth Edition of
          </Typography>
          <AnimatedText
            txt='MLRIT-MUN'
            variant='h1'
            colors={[
              '#FFCDDD',
              '#ee9ca7',
              '#FF008E',
              '#D22779',
              '#612897',
              '#0C1E7F',
            ]}
          />
          <Typography style={{ marginBlock: '0.5rem' }}>Powered by</Typography>
          <img
            src={PowerSponsor}
            alt='The Indian Conclave'
            className={classes.psLogo}
          ></img>
          {/* <Button
            className={classes.applybtn}
            component={Link}
            to='/registration'
          >
            <Typography style={{ color: 'white' }}>Register Now</Typography>
          </Button> */}
        </div>
        <Hidden smUp>
          <Typography style={{ marginTop: '1rem' }}>
            11th - 13th November, 2022
          </Typography>
        </Hidden>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={5} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <img
              src={munLogo}
              alt='MLRIT MUN Main Logo'
              style={{ maxWidth: '80%' }}
            ></img>
          </div>
          <Typography>11th - 13th November, 2022</Typography>
        </Grid>
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
