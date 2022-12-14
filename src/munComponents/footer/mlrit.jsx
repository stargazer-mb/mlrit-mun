import React from 'react';
import { Button, Grid, makeStyles, Typography, Link } from '@material-ui/core';

import location from '../../resources/images/location-sm.png';

const useStyles = makeStyles(() => ({
  root: {},
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export default function MLRIT() {
  let classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={8} className={classes.centeredDiv}>
        <div className={classes.centeredDiv}>
          <Typography style={{ textOverflow: 'line-wrap' }}>
            MLR Institute of Technology
          </Typography>
          <br />
          <Typography style={{ fontSize: '0.6rem', marginTop: '-1rem' }}>
            Dundigal, Hyderabad
          </Typography>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Link href='https://mlrit.ac.in/'>
              <Button
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'none',
                  background: 'none',
                  marginTop: '-2rem',
                  color: 'white',
                }}
              >
                Website
              </Button>
            </Link>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} className={classes.centeredDiv}>
        <a href='https://goo.gl/maps/kKxYrTPiHkzdxJqKA'>
          <img src={location} alt='location' style={{ maxWidth: '80%' }} />
        </a>
      </Grid>
    </Grid>
  );
}
