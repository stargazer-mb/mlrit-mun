import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Instagram, MailOutlineOutlined, Phone } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    fontSize: '1rem',
    transform: 'translateY(15%)',
  },
}));

export default function ContactUs() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>
        <Instagram className={classes.icon} /> mlritmun <br />
        <MailOutlineOutlined
          className={classes.icon}
        /> mlritmun@mlrit.ac.in <br />
        <Phone className={classes.icon} /> +91 9876543210 <br />
        <Phone className={classes.icon} /> +91 9876543210 <br />
      </Typography>
    </div>
  );
}
