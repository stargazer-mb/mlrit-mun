import React from 'react';
import { makeStyles } from '@material-ui/core';

import Committee from './committeeRedirect';

import ungaImg from '../../resources/images/agenda.png';
import unscImg from '../../resources/images/agenda.png';
import unhrcImg from '../../resources/images/agenda.png';
import lsImg from '../../resources/images/agenda.png';
import ipImg from '../../resources/images/agenda.png';

const useStyles = makeStyles((theme) => ({
  committeesRoot: {
    // marginInline: theme.spacing(2),
    // marginTop: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default function Committees() {
  let classes = useStyles();
  return (
    <div className={classes.committeesRoot}>
      <Committee img={ungaImg} redirectTo='/unga' />
      <Committee img={unscImg} redirectTo='/unsc' />
      <Committee img={unhrcImg} redirectTo='/unhrc' />
      <Committee img={lsImg} redirectTo='/loksabha' />
      <Committee img={ipImg} redirectTo='/ip' />
    </div>
  );
}
