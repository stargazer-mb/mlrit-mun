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
  },
  rowFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    marginBlock: '0.25rem',
  },
  icon: {
    transition: 'transform 0.1s, ease-in-out',
    marginInline: '0.2rem',
    '&:hover': {
      transform: 'scale(110%,110%)',
    },
  },
}));

export default function Developer() {
  let classes = useStyles();
  return (
    <div className={classes.columnFlex}>
      <div>
        <img src={devLogo} alt='developer logo' style={{ height: '4rem' }} />
      </div>
      <div className={classes.rowFlex}>
        <LinkedIn className={classes.icon} fontSize='small' />
        <MailOutlineOutlined className={classes.icon} fontSize='small' />
        <Phone className={classes.icon} fontSize='small' />
      </div>
    </div>
  );
}
