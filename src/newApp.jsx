import React from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import { Hidden, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Footer from './munComponents/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginInline: -theme.spacing(2),
    marginTop: -theme.spacing(1),
    elevation: 0,
  },
  appbar: {
    backgroundColor: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='sticky' className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            MLRIT-MUN LOGO
          </Typography>

          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>

          <Button color='inherit' component={Link} to='/committees'>
            Committees
          </Button>

          <Button color='inherit' component={Link} to='/team'>
            Our Team
          </Button>

          <Button color='inherit' component={Link} to='/clubliterati'>
            Club Literati
          </Button>
        </Toolbar>
      </AppBar>
      <Routes />
      <Footer />
    </div>
  );
}
