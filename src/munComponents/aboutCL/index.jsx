import React from 'react';
import { Grid, Hidden, Typography, Link, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Instagram, MailOutline, YouTube, Facebook } from '@material-ui/icons';

import Event from './event';

import CLlogo from '../../resources/images/clblit.png';

const useStyles = makeStyles((theme) => ({
  aboutCLRoot: {
    marginInline: theme.spacing(2),
  },
  coulmnFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  rowFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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

export default function ClubLiterati() {
  let classes = useStyles();

  function copyToClipboard() {
    navigator.clipboard.writeText('mlrlitmun@mlrit.ac.in');
    alert('Mail Address Copied ');
  }

  return (
    <div className={classes.aboutCLRoot}>
      <Grid container>
        <Hidden smDown>
          <Grid item xs={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
          <div className={classes.coulmnFlex}>
            <img
              src={CLlogo}
              alt='club literati'
              style={{ maxWidth: '80%', maxHeight: '30vh' }}
            />
            <Typography style={{ textAlign: 'justify' }}>
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
              sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
              dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
              amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet
            </Typography>
            <div className={classes.rowFlex} style={{ marginBlock: '1rem' }}>
              {/* <Typography
                variant='h6'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Follow Us
              </Typography> */}
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
          <div
            style={{
              // height: '80vh',
              backgroundColor: 'aqua',
              marginBottom: '2rem',
            }}
            className={classes.coulmnFlex}
          >
            <Typography>Our Events</Typography>
            <Grid container>
              <Grid item xs={6} className={classes.coulmnFlex}>
                <Typography>MLRIT-MUN Logo</Typography>
              </Grid>
              <Grid item xs={6} className={classes.coulmnFlex}>
                <Typography>TEDxMLRIT Logo</Typography>
              </Grid>
              <Grid item xs={6} className={classes.coulmnFlex}>
                <Typography>MLRIT Literary Festival Logo</Typography>
              </Grid>
              <Grid item xs={6} className={classes.coulmnFlex}>
                <Typography>Talkmasters MLRIT Logo</Typography>
              </Grid>
              <Grid item xs={6} className={classes.coulmnFlex}>
                <Typography>Murder Mystery Logo</Typography>
              </Grid>
              <Grid item xs={6} className={classes.coulmnFlex}>
                <Typography>VillainCon Logo</Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item xs={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
