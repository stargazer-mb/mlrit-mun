import React from 'react';
import { Typography, Grid, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Landing from './landing';
import WhatnWhy from './whatnwhy';
import CountUps from './countups';
import Gallery from './gallery';
import PrincipalSponsor from './principalSponsor';
import OtherSponsors from './otherSponsors';

import bg from '../../resources/images/homeBG.png';

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    marginTop: '-5rem',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function Home() {
  let classes = useStyles();
  return (
    <div className={classes.homeRoot}>
      <Landing />
      <WhatnWhy />
      <CountUps />
      <PrincipalSponsor />
      <OtherSponsors />
      <Gallery />
    </div>
  );
}
