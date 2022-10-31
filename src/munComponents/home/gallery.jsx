import React, { useState, useEffect } from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import img1 from '../../resources/images/gallery/1.jpg';
import img2 from '../../resources/images/gallery/2.jpg';
import img3 from '../../resources/images/gallery/3.jpg';
import img4 from '../../resources/images/gallery/4.jpg';
import img5 from '../../resources/images/gallery/5.jpg';
import img6 from '../../resources/images/gallery/6.jpg';
import img7 from '../../resources/images/gallery/7.jpg';
import img8 from '../../resources/images/gallery/8.jpg';
import img10 from '../../resources/images/gallery/10.JPG';
import img11 from '../../resources/images/gallery/11.jpg';
import img12 from '../../resources/images/gallery/12.jpg';
import img13 from '../../resources/images/gallery/13.jpg';
import img14 from '../../resources/images/gallery/14.jpg';
import img15 from '../../resources/images/gallery/15.jpg';
import img16 from '../../resources/images/gallery/16.jpg';
import img17 from '../../resources/images/gallery/17.jpg';
import img18 from '../../resources/images/gallery/18.jpg';
import img19 from '../../resources/images/gallery/19.jpg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBlock: '2rem',
  },
  underline: {
    height: '0.3em',
    width: '5em',
    backgroundImage: 'linear-gradient(to left, #151D3B,#D82148)',
    marginBlock: '1rem',
  },
}));

let images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

export default function Gallery() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.2rem' }}
      >
        GALLERY
      </Typography>
      <div className={classes.underline}></div>
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
