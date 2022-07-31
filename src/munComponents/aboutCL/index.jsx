import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutCLRoot: {
    marginInline: theme.spacing(2),
  },
}));

export default function ClubLiterati() {
  let classes = useStyles();
  return (
    <div className={classes.aboutCLRoot}>
      <h1>About Club Literati Route</h1>
    </div>
  );
}
