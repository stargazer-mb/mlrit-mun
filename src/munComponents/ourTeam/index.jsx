import React from 'react';
import {
  Grid,
  Hidden,
  Paper,
  Typography,
  Link,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import img from '../../resources/images/person.png';
import { Instagram, LinkedIn } from '@material-ui/icons';

const members = [
  {
    name: 'Abcde Fghijk',
    image: img,
    designation: 'Head of Blah Blah',
    linkedin: 'https://jolo.com',
    instagram: 'https://yolo.com',
  },
  {
    name: 'Lmnop Qrtsu',
    image: img,
    designation: 'Head of Halb Halb',
    linkedin: '',
    instagram: 'https://jolo.com',
  },
  {
    name: 'Abcde Fghijk',
    image: img,
    designation: 'Head of Blah Blah',
    linkedin: 'https://jolo.com',
    instagram: 'https://jolo.com',
  },
  {
    name: 'Lmnop Qrtsu',
    image: img,
    designation: 'Head of Halb Halb',
    linkedin: 'https://jolo.com',
    instagram: 'https://jolo.com',
  },
  {
    name: 'Abcde Fghijk',
    image: img,
    designation: 'Head of Blah Blah',
    linkedin: 'https://jolo.com',
    instagram: '',
  },
  {
    name: 'Lmnop Qrtsu',
    image: img,
    designation: 'Head of Halb Halb',
    linkedin: 'https://jolo.com',
    instagram: 'https://jolo.com',
  },
  {
    name: 'Abcde Fghijk',
    image: img,
    designation: 'Head of Blah Blah',
    linkedin: '',
    instagram: '',
  },
  {
    name: 'Lmnop Qrtsu',
    image: img,
    designation: 'Head of Halb Halb',
    linkedin: 'https://jolo.com',
    instagram: 'https://jolo.com',
  },
  {
    name: 'Abcde Fghijk',
    image: img,
    designation: 'Head of Blah Blah',
    linkedin: '',
    instagram: 'https://jolo.com',
  },
  {
    name: 'Lmnop Qrtsu',
    image: img,
    designation: 'Head of Halb Halb',
    linkedin: '',
    instagram: 'https://jolo.com',
  },
];

const useStyles = makeStyles((theme) => ({
  teamRoot: {
    marginInline: theme.spacing(2),
  },
  columnFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '1rem',
    // width: '80%',
  },
  icon: {
    transition: 'transform 0.1s ease-in-out',
    // transitionTimingFunction: 'ease-in-out',
    '&:hover': {
      transform: 'scale(110%,110%)',
    },
  },
}));

export default function Team() {
  let classes = useStyles();
  return (
    <div className={classes.teamRoot}>
      <Grid container>
        <Hidden smDown>
          <Grid item xs={2}>
            <div style={{ position: 'relative', height: '100%' }}>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '10%',
                  // opacity: '0.75',
                  // zIndex: '2',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '20%',
                  zIndex: '2',
                  opacity: '0.75',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '30%',
                  opacity: '0.5',
                  zIndex: '3',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '40%',
                  zIndex: '4',
                  opacity: '0.25',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#d82148',
                  transform: 'rotate(45deg)',
                  left: '-47%',
                  top: '50%',
                  zIndex: '5',
                  opacity: '0.125',
                }}
              ></div>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
          <Grid container>
            {members.map((member, key) => {
              return (
                <Grid item xs={6} md={4} key={key}>
                  <Paper className={classes.columnFlex} elevation={5}>
                    <img
                      src={member.image}
                      alt=''
                      style={{ maxWidth: '80%' }}
                    />
                    <Typography>{member.name}</Typography>
                    <Typography>{member.designation}</Typography>
                    <div style={{ display: 'inline' }}>
                      {member.linkedin.length !== 0 ? (
                        <IconButton
                          component={Link}
                          href={member.linkedin}
                          disableRipple
                        >
                          <LinkedIn
                            style={{ color: 'black' }}
                            className={classes.icon}
                          />
                        </IconButton>
                      ) : (
                        ''
                      )}
                      {member.instagram.length !== 0 ? (
                        <IconButton component={Link} href={member.instagram}>
                          <Instagram
                            style={{ color: 'black' }}
                            className={classes.icon}
                          />
                        </IconButton>
                      ) : (
                        ''
                      )}
                    </div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={2}>
            <div
              style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '80%',
                  top: '40%',
                  // zIndex: '2',
                  opacity: '0.125',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '80%',
                  top: '50%',
                  // zIndex: '2',
                  opacity: '0.25',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '80%',
                  top: '60%',
                  // zIndex: '2',
                  opacity: '0.5',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '80%',
                  top: '70%',
                  // zIndex: '2',
                  opacity: '0.75',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#151d38',
                  transform: 'rotate(45deg)',
                  left: '80%',
                  top: '80%',
                  // zIndex: '2',
                  // opacity: '0.75',
                }}
              ></div>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
