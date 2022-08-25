import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

let useStyles = makeStyles((theme) => ({
  committeeRoot: {
    width: '80vw',
    marginBlock: '2rem',
    // border: 'solid black 3px',
    // boxShadow: '0 8px 8px -4px black', // shadow elevation
    // boxShadow: '0 0 5px 5px black ', // normal
    // boxShadow: '0.5rem 0.5rem 20px 0px black, -0.5rem -0.5rem 20px 0px red', // double
    // boxShadow: '0.5rem 0 20px 0px aqua, -0.5rem 0 20px 0px red',
    // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    // boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    boxShadow:
      'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
    textAlign: 'center',
    borderRadius: '0.5rem',
  },
}));

export default function Committee(props) {
  let classes = useStyles();
  return (
    <Link to={props.redirectTo}>
      <img src={props.img} className={classes.committeeRoot} alt='committee' />
    </Link>
  );
}
