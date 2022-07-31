import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  teamRoot: {
    marginInline: theme.spacing(2),
  },
}));

export default function Team() {
  let classes = useStyles();
  return (
    <div className={classes.teamRoot}>
      <h1>Team Route</h1>
    </div>
  );
}
