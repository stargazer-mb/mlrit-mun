import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import Routes from './Routes';
import Footer from './munComponents/footer';
import Logo from './resources/images/mlrit-mun logo try2.png';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'white',
  },
  title: {
    flexGrow: 1,
    color: 'inherit',
  },
  drawer: {
    width: '100vw',
    flexShrink: 0,
    height: 'auto',
  },
  drawerPaper: {
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    // marginTop: '4rem',
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
}));

export default function MobileDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar} elevation={0}>
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
          <Typography className={classes.title}>|</Typography>
          <IconButton
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            style={{
              color: 'black',
              marginRight: '0.5rem',
            }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <Routes />
        <Footer />
      </main>
      <Drawer
        className={classes.drawer}
        anchor='top'
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List>
          <ListItem component={Link} to='/' onClick={handleDrawerClose}>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to='/committees'
            onClick={handleDrawerClose}
          >
            <ListItemText>Committees</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to='/activities'
            onClick={handleDrawerClose}
          >
            <ListItemText>Activities</ListItemText>
          </ListItem>
          <Divider />
          <ListItem component={Link} to='/team' onClick={handleDrawerClose}>
            <ListItemText>Our Team</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to='/clubliterati'
            onClick={handleDrawerClose}
          >
            <ListItemText>Club Literati</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            to='/registration'
            onClick={handleDrawerClose}
          >
            <ListItemText>Register Now</ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </div>
  );
}
