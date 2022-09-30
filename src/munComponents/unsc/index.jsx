import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/unscLogo.png';
import Agenda from '../../resources/images/agenda.png';
import Chair from '../../resources/images/person.png';
import ViceChair from '../../resources/images/person.png';
import Rapporteur from '../../resources/images/person.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/backgrounds/try1.jpg';

const elements = {
  title: 'United Nations Security Council',
  colors: ['#3E4514', '#1223C2', '#12352F'],
  about:
    'About the committee lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  logo: Logo,
  agenda: Agenda,
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink: 'https://yolo.com',
  allocationMatrixLink: 'https://yolo.com',
};

export default function UNSC() {
  return <Committee elements={elements} />;
}
