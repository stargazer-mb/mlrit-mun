import React from 'react';
import { Grid, Hidden, Typography, Link, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Instagram, MailOutline, YouTube, Facebook } from '@material-ui/icons';

import CLlogo from '../../resources/images/clblit.png';
import LitFestLogo from '../../resources/images/LitFest Logo.png';
import MUNLogo from '../../resources/images/mlrit-mun logo.png';
import TalkMastersLogo from '../../resources/images/talkmasters logo.png';
import TEDxMLRITLogo from '../../resources/images/tedlogo.png';
import MurderMystLogo from '../../resources/images/mmlogo.png';

const useStyles = makeStyles((theme) => ({
  aboutCLRoot: {
    marginInline: theme.spacing(2),
  },
  coulmnFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBlock: '1rem',
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
  underline: {
    height: '0.3em',
    width: '10em',
    backgroundImage: 'linear-gradient(to left, #151D3B,#D82148)',
    marginBlock: '1.5rem',
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
          <Grid item xs={2}>
            <div style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '-60%',
                  top: '10%',
                  // opacity: '0.75',
                  zIndex: '2',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-50%',
                  top: '10%',
                  // zIndex: '2',
                  // opacity: '0.5',
                }}
              ></div>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
          <div className={classes.coulmnFlex}>
            <img
              src={CLlogo}
              alt='club literati'
              style={{ maxWidth: '80%', maxHeight: '30vh' }}
            />
            <Typography
              style={{
                // fontSize: '1.1rem',
                // fontWeight: '600',
                // marginBottom: '1rem',
                fontFamily: 'Poppins,sans-serif',
              }}
            >
              Communicate | Compete | Conquer
            </Typography>
            <div className={classes.underline}></div>
            <Typography style={{ textAlign: 'justify' }}>
              The literary club of MLR institute of technology, Club literati,
              with the splendid motive of enlightening minds, stands against the
              hurdles which they are likely to face without the tool of
              communication. Club literati strives to bridge the gap between
              literature and sciences by organizing activities that highlight
              the importance addressing specific needs related to confidence
              building in communication skills and personality development.
            </Typography>
            <div className={classes.underline}></div>
            <div className={classes.rowFlex} style={{ marginBottom: '2rem' }}>
              <Typography
                variant='h6'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Follow us on
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
            <div
              style={{
                // height: '80vh',
                // backgroundColor: 'aqua',
                marginTop: '2rem',
              }}
              className={classes.coulmnFlex}
            >
              <Typography
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  // marginBottom: '2rem',
                }}
              >
                Our Events
              </Typography>
              <div className={classes.underline}></div>
              <Grid container>
                <Grid item xs={12} md={4} className={classes.coulmnFlex}>
                  <img
                    src={TEDxMLRITLogo}
                    alt='TEDxMLRIT Logo'
                    style={{ maxWidth: '80%', maxHeight: '30vh' }}
                  />
                </Grid>
                <Grid item xs={12} md={4} className={classes.coulmnFlex}>
                  <img
                    src={MUNLogo}
                    alt='MLRIT-MUN Logo'
                    style={{ maxWidth: '80%', maxHeight: '30vh' }}
                  />
                </Grid>
                <Grid item xs={12} md={4} className={classes.coulmnFlex}>
                  <img
                    src={LitFestLogo}
                    alt='MLRIT Literary Festival'
                    style={{ maxWidth: '40vw', maxHeight: '25vh' }}
                  />
                </Grid>
                <Grid item xs={12} md={4} className={classes.coulmnFlex}>
                  <img
                    src={TalkMastersLogo}
                    alt='MLRIT Talkmasters'
                    style={{ maxWidth: '50vw', maxHeight: '30vh' }}
                  />
                </Grid>
                <Grid item xs={12} md={4} className={classes.coulmnFlex}>
                  <img
                    src={MurderMystLogo}
                    alt='Murder Mystery'
                    style={{
                      maxWidth: '40vw',
                      maxHeight: '20vh',
                      // marginTop: '2rem',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} className={classes.coulmnFlex}>
                  <Typography style={{ textAlign: 'center' }}>
                    & many other events. <br /> P.S. Open for collaborations
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
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
                  left: '90%',
                  top: '65%',
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
                  left: '80%',
                  top: '65%',
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
