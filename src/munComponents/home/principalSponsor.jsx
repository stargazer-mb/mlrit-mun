import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Link,
  IconButton,
  Hidden,
} from '@material-ui/core';
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  YouTube,
} from '@material-ui/icons';

import sponsor from '../../resources/images/Title Sponsor.png';

const useStyles = makeStyles(() => ({
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  img: {
    width: '80%',
  },
  InstaIcon: {
    transition: 'transform 0.1s',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      transform: 'translateY(-5%)',
      backgroundImage:
        'linear-gradient(to bottom left, #8a3ab9,#bc2a8d,#e95950,#fbad50)',
      borderRadius: '0.6rem',
      color: 'white',
    },
  },
  fbIcon: {
    transition: 'transform 0.1s',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      transform: 'translateY(-5%)',
      color: '#4267B2',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
  YTicon: {
    transition: 'transform 0.1s',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      transform: 'translateY(-5%)',
      color: '#FF0000',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
  MailIcon: {
    transition: 'transform 0.1s',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      transform: 'translateY(-5%)',
      color: '#FF0000',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
}));

export default function PrincipalSponsor() {
  let classes = useStyles();

  function copyToClipboard() {
    navigator.clipboard.writeText('mlrlitmun@mlrit.ac.in');
    alert('Mail Address Copied ');
  }

  return (
    <div className={classes.centeredDiv}>
      <Typography>About Our Principal Sponsor</Typography>
      <Grid container>
        <Hidden smDown>
          <Grid item xs={1}></Grid>
        </Hidden>
        <Grid item xs={12} md={5} className={classes.centeredDiv}>
          <img src={sponsor} alt='sponsor' style={{ maxWidth: '80%' }} />
        </Grid>
        <Grid item xs={12} md={5} className={classes.centeredDiv}>
          <div className={classes.img}>
            <Typography>
              {' '}
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet{' '}
            </Typography>
            <div>
              <Typography
                variant='h6'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                To know more
              </Typography>
              <Link
                href='https://instagram.com/mlrclubliterati?utm_medium=copy_link'
                target='_blank'
                rel='noopener'
                color='inherit'
              >
                <IconButton style={{ background: 'none' }}>
                  <Instagram fontSize='large' className={classes.InstaIcon} />
                </IconButton>
              </Link>
              <Link
                href='https://www.facebook.com/mlrclubliterati/'
                target='_blank'
                rel='noopener'
                color='inherit'
              >
                <IconButton style={{ background: 'none' }}>
                  <Facebook fontSize='large' className={classes.fbIcon} />
                </IconButton>
              </Link>
              <Link
                href='https://youtube.com/channel/UCQ_QmaXV0yAg18r6oIyiakw'
                target='_blank'
                rel='noopener'
                color='inherit'
              >
                <IconButton style={{ background: 'none' }}>
                  <YouTube fontSize='large' className={classes.YTicon} />
                </IconButton>
              </Link>
              <IconButton
                style={{ background: 'none' }}
                onClick={copyToClipboard}
              >
                <MailOutline fontSize='large' className={classes.MailIcon} />
              </IconButton>
            </div>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item xs={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
