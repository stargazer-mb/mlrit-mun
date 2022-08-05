import React from 'react';
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import TitleSponsor from '../../resources/images/Title Sponsor.png';
import munLogo from '../../resources/images/MUN logo.png';
import bg from '../../resources/images/homeBG.png';

const useStyles = makeStyles((theme) => ({
  landingRoot: {
    // marginInline: theme.spacing(2),
    // backgroundColor: 'aqua',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // filter: 'blur(8px)',
    // position: 'absolute',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  return (
    <div className={classes.landingRoot}>
      <Grid container>
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
            <Typography variant='p'>Presents</Typography>
            <Typography variant='h4'>
              The Fourth Edition of MLRIT-MUN
            </Typography>
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
            <img src={munLogo} alt='MLRIT MUN Main Logo'></img>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
