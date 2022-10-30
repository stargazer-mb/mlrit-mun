import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import CountUp from 'react-countup';

import CountCard from '../../components/Reusable Components/countCard';

let editionCount = <CountUp end={5} suffix={'th'} duration={4} />;
let delegatesCount = <CountUp end={200} suffix={'+'} duration={5} />;
let prizeMCount = <CountUp end={50} suffix={'K'} duration={5} />;
let ocCount = <CountUp end={40} duration={5} />;

export default function CountUps() {
  return (
    <Grid container style={{ backgroundColor: 'white' }}>
      <Hidden smDown>
        <Grid item md={2}></Grid>
      </Hidden>
      <CountCard xs={6} md={2} count={editionCount} name='Edition' />
      <CountCard xs={6} md={2} count={delegatesCount} name='Delegates' />
      <CountCard xs={6} md={2} count={prizeMCount} name='Prize Money' />
      <CountCard xs={6} md={2} count={ocCount} name='Organizing Committee' />
      <Hidden smDown>
        <Grid item md={2}></Grid>
      </Hidden>
    </Grid>
  );
}
