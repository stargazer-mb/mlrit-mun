import React from 'react';
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import FloatingSquares from '../../components/Reusable Components/Floating Squares/index';
import AnimatedText from '../../components/Reusable Components/animatedText.jsx';

import TitleSponsor from '../../resources/images/Title Sponsor.png';
import munLogo from '../../resources/images/MUN logo.png';
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
    height: '25vh',
  },
  applybtn: {
    background: 'linear-gradient(to right,purple,orange)',
    textTransform: 'none',
    borderRadius: '0.2rem',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
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
          <img
            src={TitleSponsor}
            alt='Title Sponsor'
            className={classes.tsLogo}
          ></img>
          <Typography>Presents</Typography>
          <Typography variant='h4'>The Fifth Edition of</Typography>
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
          <Button
            className={classes.applybtn}
            component={Link}
            to='/registration'
          >
            Apply Now
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={5} className={classes.divCentercntnt}>
        <div className={classes.divCentercntnt}>
          <img
            src={munLogo}
            alt='MLRIT MUN Main Logo'
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
