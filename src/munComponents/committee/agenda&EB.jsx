import React from 'react';
import {
  makeStyles,
  Grid,
  Hidden,
  Typography,
  Button,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    maxWidth: '80%',
    margin: '2rem',
    padding: '1rem',
  },
  button: {
    textAlign: 'center',
    color: '#151D3B',
    width: '80%',
    padding: '1rem',
    marginBlock: '1rem',
    textTransform: 'none',
    textDecoration: 'none !important',
    transition: 'transform 0.1s ease-in-out',
    '&:hover': {
      transform: 'scale(105%,105%)',
    },
  },
  btntxt: {
    fontFamily: 'Raleway, sans-serif',
  },
}));

export default function AgendaAndEB(props) {
  let classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${props.elements.agendaBG})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid container>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
        <Grid item xs={12} md={10} style={{ marginBottom: '1rem' }}>
          <Grid container>
            <Grid item xs={12} md={12} className={classes.centeredDiv}>
              <img
                src={props.elements.agenda}
                alt='committee agenda'
                style={{ width: '90%' }}
              />
            </Grid>
            <Grid item xs={12} className={classes.centeredDiv}>
              <Typography>Executive Board</Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.centeredDiv}>
              <img
                src={props.elements.chair}
                alt='Chair'
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.centeredDiv}>
              <img
                src={props.elements.vicechair}
                alt='Vice-hair'
                className={classes.img}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.centeredDiv}>
              <img
                src={props.elements.rapporteur}
                alt='Rapporteur'
                className={classes.img}
              />
            </Grid>
            {props.elements.bgGuideLink.length !== 0 ? (
              <Grid item xs={12} md={6} className={classes.centeredDiv}>
                <Button
                  component={Link}
                  href={'https://forms.gle/Zum8c8Ac151bEyhJ8'}
                  className={classes.button}
                  style={{
                    backgroundImage: `linear-gradient(to right,${props.elements.colors} )`,
                  }}
                >
                  <Typography className={classes.btntxt}>
                    Background Guide
                  </Typography>
                </Button>
              </Grid>
            ) : (
              ''
            )}
            {props.elements.allocationMatrixLink !== 0 ? (
              <Grid item xs={12} md={6} className={classes.centeredDiv}>
                <Button
                  component={Link}
                  href={'https://forms.gle/Zum8c8Ac151bEyhJ8'}
                  className={classes.button}
                  style={{
                    backgroundImage: `linear-gradient(to right,${props.elements.colors} )`,
                  }}
                >
                  <Typography className={classes.btntxt}>
                    Allocations
                  </Typography>
                </Button>
              </Grid>
            ) : (
              ' '
            )}
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
