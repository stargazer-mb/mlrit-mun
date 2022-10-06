import React from 'react';
import { useState, useEffect } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import {
  Hidden,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';

import MobileAppBar from './drawer';
import Footer from './munComponents/footer';
import Logo from './resources/images/mlrit-mun logo try2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  appbar: {
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'transparent',
  },
  applybtn: {
    background: 'linear-gradient(to left, #151D3B,#D82148)',
    textTransform: 'none',
    marginInline: '0.5rem',
    borderRadius: '0.2rem',
    padding: '0.5rem',
    paddingInline: '1rem',
    transition: 'transform 0.1s ease',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
      transform: 'scale(105%,105%)',
    },
  },
  btntypo: {
    color: 'black',
    transition: 'width 0.5s, height 0.5s, transform 0.1s',
    transitionTimingFunction: 'linear',
    '&:hover': {
      color: 'green',
      transform: 'scale(1.2,1.2)',
      // transform: 'rotate(180deg)',
    },
  },
}));

function DesktopAppBar() {
  const classes = useStyles();
  return (
    <AppBar position='sticky' className={classes.appbar} elevation={0}>
      <Toolbar>
        <Button
          color='inherit'
          component={Link}
          to='/'
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          style={{ background: 'transparent' }}
        >
          <img src={Logo} alt='mlrit-mun' style={{ height: '100px' }} />
        </Button>
        <Typography variant='p' className={classes.title}>
          |
        </Typography>

        <Button
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          style={{
            background: 'transparent',
            textTransform: 'none',
            marginInline: '0.5rem',
          }}
          component={Link}
          to='/'
        >
          <Typography className={classes.btntypo}>Home</Typography>
        </Button>

        <Button
          component={Link}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          style={{
            background: 'transparent',
            textTransform: 'none',
            marginInline: '0.5rem',
          }}
          to='/committees'
        >
          <Typography className={classes.btntypo}>Committees</Typography>
        </Button>

        <Button
          component={Link}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          style={{
            background: 'transparent',
            textTransform: 'none',
            marginInline: '0.5rem',
          }}
          to='/activities'
        >
          <Typography className={classes.btntypo}>Activities</Typography>
        </Button>

        <Button
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          style={{
            background: 'transparent',
            textTransform: 'none',
            marginInline: '0.5rem',
          }}
          component={Link}
          to='/team'
        >
          <Typography className={classes.btntypo}>Our Team</Typography>
        </Button>

        <Button
          disableRipple
          disableTouchRipple
          disableFocusRipple
          disableElevation
          style={{
            background: 'transparent',
            textTransform: 'none',
            marginInline: '0.5rem',
          }}
          component={Link}
          to='/clubliterati'
        >
          <Typography className={classes.btntypo}>CLub Literati</Typography>
        </Button>

        <Button
          className={classes.applybtn}
          component={Link}
          to='/registration'
        >
          <Typography style={{ color: 'white' }}>Register</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <img src={Logo} alt='logo'></img>
    </div>
  ) : (
    <div className={classes.root}>
      <Hidden mdUp>
        <Toolbar style={{ marginBottom: '2rem' }} />
        <MobileAppBar />
      </Hidden>
      <Hidden smDown>
        <DesktopAppBar />
        <div>
          <Routes />
          <Footer />
        </div>
      </Hidden>
    </div>
  );
}
