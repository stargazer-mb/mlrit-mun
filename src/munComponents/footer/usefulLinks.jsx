import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import HyperLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
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
  typo: {
    transition: 'transform 0.1s ease',
    '&:hover': {
      transform: 'scale(110%,110%)',
    },
  },
}));

export default function UsefulLinks() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography style={{ fontSize: '0.8rem' }}>
        <ChevronRight className={classes.icon} />
        <HyperLink href='https://drive.google.com/file/d/13UHn89AsYySdQPubvUOYnuzE7BHdO5B6/view?usp=sharing'>
          <Typography
            className={classes.typo}
            style={{
              textTransform: 'none',
              fontSize: '0.8rem',
              display: 'inline',
              color: 'white',
            }}
          >
            {' Brochure'}
          </Typography>
        </HyperLink>
        <br />
        <ChevronRight className={classes.icon} />{' '}
        <Typography
          component={Link}
          to='/registration'
          className={classes.typo}
          style={{
            textDecoration: 'none',
            color: 'white',
            background: 'none',
            fontSize: '0.8rem',
          }}
        >
          Registration
        </Typography>{' '}
        <br />
        <ChevronRight className={classes.icon} />
        <Typography
          component={Link}
          to='/committees'
          className={classes.typo}
          style={{
            textDecoration: 'none',
            color: 'white',
            background: 'none',
            fontSize: '0.8rem',
          }}
        >
          {' Committees'}
        </Typography>{' '}
        <br />
        <ChevronRight className={classes.icon} />
        <HyperLink href='https://drive.google.com/file/d/1x6VGynf1xR_cPgcV1Opn6CyTCTJUHAi4/view?usp=sharing'>
          <Typography
            className={classes.typo}
            style={{
              textTransform: 'none',
              fontSize: '0.8rem',
              display: 'inline',
              color: 'white',
            }}
          >
            {' Sponsor Us'}
          </Typography>
        </HyperLink>{' '}
        <br />
      </Typography>
    </div>
  );
}
