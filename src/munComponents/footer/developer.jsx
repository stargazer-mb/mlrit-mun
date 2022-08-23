import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { LinkedIn, MailOutlineOutlined, Phone } from '@material-ui/icons';

import devLogo from '../../resources/images/mbwhite.png';
import { transform } from '@babel/core';

const useStyles = makeStyles(() => ({
  columnFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginInline: '1rem',
  },
  rowFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  icon: {
    transition: 'transform 0.1s, ease-in-out',
    marginBlock: '0.2rem',
    '&:hover': {
      transform: 'scale(110%,110%)',
    },
  },
}));

export default function Developer() {
  let classes = useStyles();
  return (
    <div className={classes.rowFlex}>
      <div>
        <img src={devLogo} alt='developer logo' style={{ height: '5rem' }} />
      </div>
      <div className={classes.columnFlex}>
        <LinkedIn className={classes.icon} />
        <MailOutlineOutlined className={classes.icon} />
        <Phone className={classes.icon} />
      </div>
    </div>
  );
}
