import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Typography } from '@material-ui/core';

import Img from '../../resources/images/unhrcLogo.png';

let useStyles = makeStyles((theme) => ({
  committeeRoot: {
    width: '80vw',
    // border: 'solid black 3px',
    // boxShadow: '0 8px 8px -4px black', // shadow elevation
    // boxShadow: '0 0 5px 5px black ', // normal
    // boxShadow: '0.5rem 0.5rem 20px 0px black, -0.5rem -0.5rem 20px 0px red', // double
    boxShadow: '0.5rem 0.5rem 20px 0px aqua, -0.5rem -0.5rem 20px 0px red',
    textAlign: 'center',
    borderRadius: '0.5rem',
  },
}));

export default function Committee(props) {
  let classes = useStyles();
  return (
    <Button
      className={classes.committeeRoot}
      component={Link}
      to='/unhrc'
      disableRipple
      disableFocusRipple
      disableTouchRipple
      disableElevation
      style={{ background: 'transparent' }}
    >
      <img src={Img} alt='committee logo' style={{ width: '100vw' }} />
    </Button>
  );
}
