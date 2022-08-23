import React from 'react';
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Hidden,
} from '@material-ui/core';

import whatMUN from '../../resources/images/whatMUN.png';

let useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#121212',
    color: 'grey',
    display: 'flex',
    flexDirection: 'column',
  },
  divCentercntnt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cmpnt: {
    marginBlock: '1rem',
  },
  txtcmpnt: {},
  imgcmpnt: {},
  heading: {
    // animation: '$slideLeft 2s ease-in',
    // animationIterationCount: 'infinite',
  },
  '@keyframes slideLeft': {
    from: {
      transform: 'translateX(50%)',
    },
    to: {
      transform: 'translateX(0%)',
    },
  },
  '@keyframes slideRight': {
    from: {
      transform: 'translateX(-50%)',
    },
    to: {
      transform: 'translateX(0%)',
    },
  },
}));

export default function WhatnWhy() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.cmpnt}>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
        <Grid item xs={12} md={5} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <img src={whatMUN} alt='What is MUN?'></img>
          </div>
        </Grid>
        <Grid item xs={12} md={5} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <Typography variant='h5' className={classes.heading}>
              What is MUN?
            </Typography>
            <Typography className={classes.content}>
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet{' '}
            </Typography>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
      </Grid>

      <Grid container className={classes.cmpnt}>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
        <Grid item xs={12} md={5} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <Typography variant='h5' className={classes.heading}>
              MLRIT-MUN?
            </Typography>
            <Typography className={classes.content}>
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet{' '}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={5} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <img src={whatMUN} alt='MLRIT-MUN?'></img>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
      </Grid>

      <div className={classes.divCentercntnt}>
        <div style={{ width: '60%' }}>
          <Typography variant='h5' className={classes.heading}>
            Why should you participate?
          </Typography>
          <Typography className={classes.content}>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet{' '}
          </Typography>
        </div>
      </div>
    </div>
  );
}
