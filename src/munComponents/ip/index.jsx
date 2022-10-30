import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/ipLogo.png';
import Chair from '../../resources/images/EB/13.png';
import ViceChair from '../../resources/images/EB/14.png';
import Rapporteur from '../../resources/images/EB/15.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/images/ipbg.jpg';

const elements = {
  title: 'International Press',
  colors: [
    'rgba(81,8,126,0.5)',
    'rgba(81,8,126,0.75)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,1)',
    'rgba(81,8,126,0.75)',
    'rgba(81,8,126,0.5)',
  ],
  about:
    'Media is considered the fourth pillar of democracy. Living up to that name, the International press’ delegation, report the happenings at the meetings of various bodies of the united nation, in the most Unbiased and unadulterated way possible. Be a part of the and a chance experience live media coverage, press conferences and question/interview the leaders of all the councils.',
  logo: Logo,
  agenda: '',
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink: '',
  allocationMatrixLink:
    'https://docs.google.com/spreadsheets/d/1WUNtgeS0eEfrPKebjPcR-u7uxFDd2ikwXK4PxFVwBFE/edit?usp=sharing',
};

export default function IP() {
  return <Committee elements={elements} />;
}
