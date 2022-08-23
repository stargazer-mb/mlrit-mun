import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

import sponsor1 from '../../resources/images/Sponsor-1.png';
import sponsor2 from '../../resources/images/Sponsor-1.png';
import sponsor3 from '../../resources/images/Sponsor-1.png';
import sponsor4 from '../../resources/images/Sponsor-1.png';

const useStyles = makeStyles(() => ({
  centeredDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    width: '80%',
  },
}));

export default function OtherSponsors() {
  let classes = useStyles();
  return (
    <div className={classes.centeredDiv}>
      <Typography>Our Other Sponsors</Typography>
      <Grid container>
        <Grid item xs={3} className={classes.centeredDiv}>
          <img src={sponsor1} alt='sponsor' className={classes.img} />
        </Grid>
        <Grid item xs={3} className={classes.centeredDiv}>
          <img src={sponsor2} alt='sponsor' className={classes.img} />
        </Grid>
        <Grid item xs={3} className={classes.centeredDiv}>
          <img src={sponsor3} alt='sponsor' className={classes.img} />
        </Grid>
        <Grid item xs={3} className={classes.centeredDiv}>
          <img src={sponsor4} alt='sponsor' className={classes.img} />
        </Grid>
      </Grid>
      <Typography>[ Click to know more ]</Typography>
    </div>
  );
}
