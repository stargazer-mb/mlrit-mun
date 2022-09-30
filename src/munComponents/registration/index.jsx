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
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundImage: 'linear-gradient(to right, #123456,#efefef,#12edfe)',
    // backgroundImage:'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)',
    // backgroundImage: 'linear-gradient(to top, #92fe9d,#00c9ff )',
    height: '84vh',
    width: '98vw',
    position: 'relative',
    top: '-10%',
  },
  root: {
    height: '82vh',
    width: '96vw',
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
  button: {
    textAlign: 'center',
    color: '#151D3B',
    width: '80%',
    padding: '1rem',
    marginBlock: '1rem',
    textTransform: 'none',
    textDecoration: 'none !important',
    backgroundImage: 'linear-gradient(to right, white,white)',
    boxShadow: '0px 0px 5px 0.5px #D82148',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #151D3B,#D82148)',
      boxShadow: 'none',
      transform: 'scale(103%,103%)',
      color: 'white',
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
    backgroundImage: 'linear-gradient(to right, #151D3B,#D82148)',
    marginBlock: '0.5rem',
    animation: `$animate 3s ease`,
    position: 'relative',
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
    <div className={classes.bg}>
      <div className={classes.root}>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item xs={5} md={3} className={classes.centeredDiv}>
            <img src={CLlogo} style={{ maxWidth: '80%' }} alt='club literati' />
          </Grid>
          <Grid item xs={2} md={4}></Grid>
          <Grid item xs={5} md={3} className={classes.centeredDiv}>
            <img src={MLRITlogo} style={{ maxWidth: '80%' }} alt='MLRIT' />
          </Grid>
          <Grid item md={1}></Grid>
          <Hidden smUp>
            <Grid item xs={12} style={{ height: '1rem' }}></Grid>
          </Hidden>
        </Grid>
        <div style={{ marginBlock: '0.5rem' }}>
          <Typography className={classes.btntxt} style={{ fontSize: '1.4rem' }}>
            Priority Round Registration
          </Typography>
        </div>
        <div className={classes.underline}></div>
        <Grid container style={{ marginTop: '1.5rem' }}>
          <Hidden smDown>
            <Grid item md={2}></Grid>
          </Hidden>
          <Grid item xs={12} md={4} className={classes.centeredDiv}>
            <img src={QR} style={{ maxWidth: '75%' }} alt='UPI QR' />
          </Grid>
          <Hidden smUp>
            <Grid item xs={12} style={{ height: '2.5rem' }}></Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            md={4}
            style={{ marginBlock: '1rem' }}
            className={classes.centeredDiv}
          >
            <Button
              component={Link}
              href={'https://forms.gle/Zum8c8Ac151bEyhJ8'}
              className={classes.button}
            >
              <Typography className={classes.btntxt}>
                A Student of MLRIT
              </Typography>
            </Button>
            <Button
              component={Link}
              href={'https://forms.gle/xjLUGPEUfT7LwfTF6'}
              className={classes.button}
            >
              <Typography className={classes.btntxt}>
                Not a Student of MLRIT
              </Typography>
            </Button>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} style={{ height: '5rem' }}></Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
