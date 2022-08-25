import React from 'react';
import { makeStyles, Grid, Hidden, Typography } from '@material-ui/core';

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
        <Grid item xs={12} md={10}>
          <Grid container>
            <Grid item xs={12} className={classes.centeredDiv}>
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
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
