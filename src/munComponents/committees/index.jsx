import React from 'react';
import { Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import Committee from './committeeRedirect';

import ungaImg from '../../resources/images/unga committee.png';
import unscImg from '../../resources/images/unsc committee.png';
import unhrcImg from '../../resources/images/unhrc committee.png';
import lsImg from '../../resources/images/ls committee.png';
import ipImg from '../../resources/images/ip committee.png';

const useStyles = makeStyles((theme) => ({
  committeesRoot: {
    // marginInline: theme.spacing(2),
    // marginTop: '5rem',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  chevron: {
    transform: 'translateY(25%)',
  },
}));

export default function Committees() {
  let classes = useStyles();
  return (
    <Grid container className={classes.committeesRoot}>
      <Hidden smDown>
        <Grid item md={2}></Grid>
      </Hidden>
      <Grid item xs={12} md={8}>
        <Grid container>
          <Committee
            img={ungaImg}
            redirectTo='/unga'
            color='rgba(255, 165, 0,'
          />
          <Committee
            img={unscImg}
            redirectTo='/unsc'
            color='rgba(27, 102, 62,'
          />
          <Committee
            img={unhrcImg}
            redirectTo='/unhrc'
            color='rgba(0, 0, 139,'
          />
          <Committee
            img={lsImg}
            redirectTo='/loksabha'
            color='rgb(139, 0, 0,'
          />
          <Committee img={ipImg} redirectTo='/ip' color='rgb(81,8,126,' />
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBlock: '2rem',
            }}
          >
            <Typography style={{ fontSize: '1.2rem' }}>
              {' '}
              <ChevronLeft className={classes.chevron} />
              <ChevronLeft className={classes.chevron} /> Click to Know More{' '}
              <ChevronRight className={classes.chevron} />
              <ChevronRight className={classes.chevron} />{' '}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item md={2}></Grid>
      </Hidden>
    </Grid>
  );
}
