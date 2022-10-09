import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

let useStyles = makeStyles((props) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBlock: '2rem',
    // width: '100%',
    // height: '100%',
  },
  bgDiv: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    width: '80vw',
    height: '50vh',
  },
  contentDiv: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'centere',
    flexDirection: 'column',
    color: 'white',
  },
  embeddedDiv: {
    backgroundColor: 'none',
    // opacity: '0.5',
    backdropFilter: 'brightness(50%)',
    // filter: 'contrast(50%)',
    height: '40vh',
    width: '60vw',
    border: '3px solid white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export default function Feature(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div
        className={classes.bgDiv}
        style={{ backgroundImage: `url(${props.bg})` }}
      ></div>
      <div className={classes.contentDiv}>
        <div className={classes.embeddedDiv}>
          <Typography style={{ fontSize: '5vw' }}>{props.txt}</Typography>
        </div>
      </div>
    </div>
  );
}
