import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  committeesRoot: {
    marginInline: theme.spacing(2),
  },
}));

export default function Committees() {
  let classes = useStyles();
  return (
    <div className={classes.committeesRoot}>
      <h1>Committees Route</h1>
      <Link to='/unhrc'>
        <h4>UNHRC</h4>
      </Link>
      <Link to='/unga'>
        <h4>UNGA</h4>
      </Link>
      <Link to='/unsc'>
        <h4>UNSC</h4>
      </Link>
      <Link to='/aippm'>
        <h4>AIPPM</h4>
      </Link>
      <Link to='/ip'>
        <h4>IP</h4>
      </Link>
    </div>
  );
}
