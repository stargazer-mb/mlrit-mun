import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    backgroundColor: 'red',
  },
}));

export default function Footer() {
  let classes = useStyles();
  return (
    <div className={classes.footerRoot}>
      <h1>Footer</h1>
    </div>
  );
}
