import React from 'react';
import { makeStyles, Link, IconButton } from '@material-ui/core';
import { LinkedIn, MailOutlineOutlined, Phone } from '@material-ui/icons';

import devLogo from '../../resources/images/mbwhite.png';
import Alert from '../../components/Reusable Components/alert';

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
    fontSize: '1rem',
    transition: 'transform 0.1s, ease-in-out',
    marginInline: '0.2rem',
    color: 'white',
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
        <img src={devLogo} alt='developer logo' style={{ height: '3.5rem' }} />
      </div>
      <div className={classes.rowFlex}>
        <IconButton
          component={Link}
          href={'https://www.linkedin.com/in/mb2052/'}
          style={{ color: 'black', background: 'transparent' }}
        >
          <LinkedIn className={classes.icon} />
        </IconButton>
        <Alert
          title={<MailOutlineOutlined className={classes.icon} />}
          msg='Mail Address Copied'
          toCopy='maheshbora20052002@outlook.com'
        />
        <Alert
          title={<Phone className={classes.icon} />}
          msg='Phone Number Copied'
          toCopy='+91 9849829375'
        />
      </div>
    </div>
  );
}
