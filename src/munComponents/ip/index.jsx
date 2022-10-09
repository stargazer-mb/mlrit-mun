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
  colors: ['#91722A', '#816BCD'],
  about:
    'About the committee lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  logo: Logo,
  agenda: '',
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink: '',
  allocationMatrixLink: 'https://yolo.com',
};

export default function IP() {
  return <Committee elements={elements} />;
}
