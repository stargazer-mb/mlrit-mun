import React from 'react';
import { Typography, makeStyles, Grid, Hidden } from '@material-ui/core';

import ContactUs from './contactUs';
import MLRIT from './mlrit';
import Developer from './developer';

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    // marginTop: '1rem',
    // backgroundColor: 'inherit',
  },
  seperator: {
    height: '0.4rem',
    backgroundColor: 'blue',
  },
  main: {
    backgroundColor: 'grey',
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
              fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Location
          </Typography>
          <MLRIT />
        </Grid>
        <Grid item xs={6} md={3} className={classes.item}>
          <Typography
            style={{
              fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Contact Us
          </Typography>
          <ContactUs />
        </Grid>
        <Grid item xs={6} md={3} className={classes.item}>
          <Typography
            style={{
              fontSize: '1.4rem',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Developer Info
          </Typography>
          <Developer />
        </Grid>
        <Hidden smDown>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={12}
          className={classes.item}
          style={{ backgroundColor: 'pink' }}
        >
          <Typography style={{ textAlign: 'center' }}>
            &#169; 2022 Club Literati. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
