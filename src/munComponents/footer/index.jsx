import React from 'react';
import { Typography, makeStyles, Grid, Hidden } from '@material-ui/core';

import ContactUs from './contactUs';
import MLRIT from './mlrit';
import Developer from './developer';
import UsefulLinks from './usefulLinks';

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    // marginTop: '1rem',
    // backgroundColor: 'inherit',
  },
  seperator: {
    height: '0.4rem',
    backgroundColor: 'purple',
  },
  main: {
    backgroundColor: '#010038',
    color: 'white',
  },
  item: {
    marginBlock: '1rem',
  },
}));

export default function Footer() {
  let classes = useStyles();
  return (
    <div className={classes.footerRoot}>
      <div className={classes.seperator} />
      <Grid container className={classes.main}>
        <Grid item xs={1}></Grid>
        <Grid item xs={9} md={3} className={classes.item}>
          <Typography
            style={{
              // fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Location
          </Typography>
          <MLRIT />
        </Grid>
        <Grid item xs={6} md={2} className={classes.item}>
          <Typography
            style={{
              // fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Contact Us
          </Typography>
          <ContactUs />
        </Grid>
        <Grid item xs={6} md={2} className={classes.item}>
          <Typography
            style={{
              // fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Useful Links
          </Typography>
          <UsefulLinks />
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={3} className={classes.item}>
            <Typography
              style={{
                // fontSize: '1.4rem',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              Developer
            </Typography>
            <Developer />
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={12}
          className={classes.item}
          style={{
            backgroundImage:
              'linear-gradient(to right, #010038, #d82148,#010038)',
          }}
        >
          <Typography style={{ textAlign: 'center', fontSize: '0.8rem' }}>
            &#169; 2022 Club Literati. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
