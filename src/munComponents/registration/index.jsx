import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Hidden,
  Link,
  Button,
  IconButton,
} from '@material-ui/core';
import {
  Instagram,
  MailOutlineOutlined,
  Event,
  LocationOn,
} from '@material-ui/icons';

import Alert from '../../components/Reusable Components/alert';

import CLlogo from '../../resources/images/clblit.png';
import MUNlogo from '../../resources/images/mlrit-mun logo.png';
import MLRITlogo from '../../resources/images/MLRIT logo.png';
import QR from '../../resources/images/QR.png';
import bgImg from '../../resources/backgrounds/bg2.jpg';

import '../../App.css';

let useStyles = makeStyles(() => ({
  root: {
    height: '88vh',
    width: '98vw',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    // boxShadow: '#92fe9d 0px -20px 20px -5px, #00c9ff 0px 20px 20px -5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  rowFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  alert: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: '2rem',
    border: '1px solid black',
    backgroundColor: 'white',
    color: 'black',
    // animation: `$alertAnimate 5s infinite`,
  },
  '@keyframes alertAnimate': {
    from: {
      backgroundColor: 'black',
      color: 'white',
    },
    to: {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  button: {
    textAlign: 'center',
    color: 'white',
    width: '75%',
    padding: '1rem',
    marginBlock: '1rem',
    textTransform: 'none',
    textDecoration: 'none !important',
    background: 'linear-gradient(to left, #151D3B,#D82148)',
    transition: 'transform 0.1s ease',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
      transform: 'scale(105%,105%)',
    },
  },
  btntxt: {
    fontFamily: 'Raleway, sans-serif',
  },
  calendarIcon: {
    transform: 'translateY(25%)',
    marginRight: '0.5rem',
  },
  LocationIcon: {
    transition: 'transform 0.1s ease',
    color: 'black',
    '&:hover': {
      transform: 'scale(110%,110%) ',
      color: 'red',
    },
  },
  InstaIcon: {
    transition: 'transform 0.1s ease',
    color: 'black',
    '&:hover': {
      transform: 'scale(105%,105%)',
      backgroundImage:
        'linear-gradient(to bottom left, #8a3ab9,#bc2a8d,#e95950,#fbad50)',
      borderRadius: '0.4rem',
      color: 'white',
    },
  },
  MailIcon: {
    transition: 'transform 0.1s ease',
    '&:hover': {
      transform: 'scale(110%,110%)',
      color: '#FF0000',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
  underline: {
    height: '0.3em',
    width: '10em',
    backgroundImage: 'linear-gradient(to left, #151D3B,#D82148)',
    marginBlock: '1rem',
    // position: 'absolute',
    // animation: `$animate 3s ease`,
    // position: 'absolute',
    // top: '28%',
    // left: '28%',
    // transform: 'translate(-50%,-50%)',
  },
  '@keyframes animate': {
    '0%': {
      height: '50px',
      width: '50px',
      borderRadius: '50%',
      transform: 'translateY(-750%)',
    },
    '90%': {
      height: '50px',
      width: '50px',
      borderRadius: '50%',
    },
    '100%': {
      height: '0.3em',
      width: '10em',
      borderRadius: '0%',
    },
  },
}));

export default function Registration() {
  let classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(white,white)',
        color: 'black',
        colorScheme: 'only light',
      }}
    >
      <Grid container>
        <Hidden smDown>
          <Grid item xs={2}>
            <div style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '10%',
                  // opacity: '0.75',
                  // zIndex: '2',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '20%',
                  zIndex: '2',
                  // opacity: '0.5',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '30%',
                  opacity: '0.75',
                  zIndex: '3',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '40%',
                  zIndex: '4',
                  opacity: '0.75',
                }}
              ></div>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={8} className={classes.root}>
          {/* <div>
            <img
              src={MUNlogo}
              alt='logo'
              style={{ maxHeight: '30vh', maxWidth: '75vw', marginTop: '2rem' }}
            />
          </div> */}
          <div className={classes.alert}>
            <Typography
              style={{
                paddingInline: '1rem',
                paddingBlock: '0.5rem',
                fontWeight: '600',
              }}
            >
              First Round Allocations are out!
            </Typography>
          </div>
          <Grid container style={{ marginTop: '1rem' }}>
            {/* <img src={QR} style={{ maxWidth: '75%' }} alt='UPI QR' /> */}
            <Grid
              item
              xs={12}
              md={6}
              style={{
                marginBlock: '1rem',
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <div>
                <Typography
                  className={classes.btntxt}
                  style={{ fontSize: '1.4rem' }}
                >
                  Delegation Application
                </Typography>
              </div>
              <span className={classes.underline}></span>
              <Button
                component={Link}
                href={'https://forms.gle/8k67GXQrMAfqZjQT7'}
                className={classes.button}
              >
                <Typography className={classes.btntxt}>
                  Click to Apply
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ marginBlock: '1rem' }}
              className={classes.centeredDiv}
            >
              <div>
                <Typography
                  className={classes.btntxt}
                  style={{ fontSize: '1.4rem' }}
                >
                  Dynamic Round Application
                </Typography>
              </div>
              <span className={classes.underline}></span>
              <Button
                component={Link}
                href={'https://forms.gle/ALt86irT94i5vugi7'}
                className={classes.button}
              >
                <Typography className={classes.btntxt}>
                  A Student of MLRIT
                </Typography>
              </Button>
              <Button
                component={Link}
                href={'https://forms.gle/DmHb2A2EDV5Vg1yo7'}
                className={classes.button}
              >
                <Typography className={classes.btntxt}>
                  Not a Student of MLRIT
                </Typography>
              </Button>
            </Grid>
          </Grid>
          {/* <div style={{ marginTop: '1rem' }}>
            <Typography>
              For Queries <br /> Sudhansh [ +91 79958 31972 ] <br /> Raj Kumar [
              +91 89785 01781 ]
            </Typography>
          </div> */}
        </Grid>
        <Hidden smDown>
          <Grid item xs={2}>
            <div
              style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '85%',
                  top: '60%',
                  zIndex: '2',
                  // opacity: '0.75',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '85%',
                  top: '70%',
                  // zIndex: '2',
                  // opacity: '0.5',
                }}
              ></div>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
