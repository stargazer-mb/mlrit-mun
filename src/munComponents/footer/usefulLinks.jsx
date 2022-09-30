import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {
  Instagram,
  MailOutlineOutlined,
  Phone,
  ChevronRight,
} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    fontSize: '0.8rem',
    transform: 'translateY(15%)',
  },
}));

export default function UsefulLinks() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: '0.8rem' }}>
        <ChevronRight className={classes.icon} /> Brochure <br />
        <ChevronRight className={classes.icon} /> Registration <br />
        <ChevronRight className={classes.icon} /> Committees <br />
        <ChevronRight className={classes.icon} /> Sponsor Us <br />
      </Typography>
    </div>
  );
}
