import React from 'react';
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Hidden,
} from '@material-ui/core';
import CountUp from 'react-countup';

import CountCard from '../../components/Reusable Components/countCard';

let sponsorsCount = <CountUp end={7} duration={4} />;
let delegatesCount = <CountUp end={300} suffix={'+'} duration={5} />;
let prizeMCount = <CountUp end={30} suffix={'K'} duration={5} />;
let ocCount = <CountUp end={50} duration={5} />;

export default function CountUps() {
  return (
    <Grid container style={{ backgroundColor: 'white' }}>
      <CountCard xs={6} md={3} count={sponsorsCount} name='Sponsors' />
      <CountCard xs={6} md={3} count={delegatesCount} name='Delegates' />
      <CountCard xs={6} md={3} count={prizeMCount} name='Prize Money' />
      <CountCard xs={6} md={3} count={ocCount} name='Organizing Committee' />
    </Grid>
  );
}
