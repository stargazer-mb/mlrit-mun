import React, { useState, useEffect } from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import img1 from '../../resources/images/unhrcLogo.png';
import img2 from '../../resources/images/ipLogo.png';
import img3 from '../../resources/images/Sponsor-1.png';
import img4 from '../../resources/images/person.png';
import img5 from '../../resources/images/agenda.png';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

let images = [img1, img2, img3, img4, img5];

export default function Gallery() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>GALLERY</Typography>
      <Carousel>
        {images.map((img, index) => (
          <Paper key={index}>
            <img src={img} alt='gallery' />
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}
