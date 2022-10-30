import React from 'react';
import { makeStyles, Typography, Link, Button } from '@material-ui/core';
import { Instagram, MailOutlineOutlined, Phone } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: '2rem',
  },
  icon: {
    fontSize: '0.8rem',
    transform: 'translateY(15%)',
  },
}));

export default function ContactUs() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: '0.8rem' }}>
        <Instagram className={classes.icon} />
        <Link href='https://www.instagram.com/mlritmun/'>
          {' '}
          <Typography
            style={{
              textTransform: 'none',
              fontSize: '0.8rem',
              display: 'inline',
              color: 'white',
            }}
          >
            mlritmun
          </Typography>
        </Link>
        <br />
        <MailOutlineOutlined
          className={classes.icon}
        /> mlritmun@mlrit.ac.in <br />
        <Phone className={classes.icon} /> +91 9100907766 <br />
        <Phone className={classes.icon} /> +91 9652549782
        <br />
      </Typography>
    </div>
  );
}
