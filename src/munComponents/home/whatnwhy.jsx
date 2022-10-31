import React from 'react';
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Hidden,
} from '@material-ui/core';

import bg from '../../resources/backgrounds/tex11.jpg';
import whatMUN from '../../resources/images/whatMUN.png';
import whyMUN from '../../resources/images/whyMUN.png';

let useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: '#010038',
    // color: 'white',
    // backgroundColor: '#121212',
    // color: 'grey',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
  },
  divCentercntnt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cmpnt: {
    marginBlock: '1rem',
  },
  '@keyframes slideLeft': {
    from: {
      transform: 'translateX(50%)',
    },
    to: {
      transform: 'translateX(0%)',
    },
  },
  '@keyframes slideRight': {
    from: {
      transform: 'translateX(-50%)',
    },
    to: {
      transform: 'translateX(0%)',
    },
  },
  underline: {
    height: '0.3em',
    width: '5em',
    backgroundImage: 'linear-gradient(to left, #151D3B,#D82148)',
    marginBlock: '1rem',
  },
}));

export default function WhatnWhy() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.cmpnt}>
        <Hidden smDown>
          <Grid item md={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={4} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <img
              src={whatMUN}
              alt='What is MUN?'
              style={{ maxWidth: '90%', marginBlock: '1rem' }}
            ></img>
          </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.divCentercntnt}>
          <div className={classes.divCentercntnt}>
            <img
              src={whyMUN}
              alt='Why MLRIT-MUN?'
              style={{ maxWidth: '90%', marginBlock: '1rem' }}
            ></img>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={2}></Grid>
        </Hidden>
      </Grid>

      <Grid container className={classes.cmpnt}>
        <Hidden smDown>
          <Grid item md={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
          <div className={classes.divCentercntnt}>
            <div
              style={{ width: '80%', marginBlock: '1rem' }}
              className={classes.divCentercntnt}
            >
              <Typography
                style={{ fontSize: '1.2rem', fontFamily: 'Poppins,sans-serif' }}
              >
                A Letter from the Secretary General
              </Typography>
              <div className={classes.underline}></div>
              <Typography
                style={{
                  fontSize: '1.2rem',
                  textAlign: 'justify',
                  fontFamily: 'Cookie,cursive',
                }}
              >
                Honourable chairs, <br />
                Distinguished delegates,
                <br />
                Esteemed guests and sponsors,
                <br />
                First of all, I want to thank you on behalf of the MLRIT Model
                United Nations and the entire secretariat, it is with great
                excitement that I welcome you to the fifth edition of the MLRIT
                MUN, and for trusting us and our organization.
                <br />
                The MLRIT MUN Secretariat is completely committed to meeting and
                exceeding every one of your expectations to the best of our
                ability. We can't wait to meet you all on Grounds this fall. I
                am aware of the difficulties surrounding the planning and
                coordination of events, so the secretariat is prepared to be as
                flexible as possible to allow you to participate in the
                conference. If I can be of any assistance to you throughout the
                registration process or answer any questions, please do not
                hesitate to be in touch with me at mlritmun@mlrit.ac.in
                <br />
                We expect you, delegates, to have a great time. To enjoy the
                debate and prepare for it as best as you can defend your
                delegation's position to the best of your ability, and fully
                enjoy the experience, whether inside or outside the committee.
                <br />
                There is no way that this conference could happen without your
                support for MLRIT MUN. I would like to thank you on behalf of
                our Secretariat and the entire MLRIT MUN community, till then
                wishing you all safety, health, and all the very best.
                <br />
                I look forward to meeting you all at MLRIT MUN in November!
                <br />
                Warm Regards,
                <br />
                Repaka Pranay Kumar
                <br />
                Secretary-General,
                <br />
                MLRIT MUN 2022.
              </Typography>
              <div className={classes.underline}></div>
            </div>
          </div>
        </Grid>
        <Hidden smDown>
          <Grid item md={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
