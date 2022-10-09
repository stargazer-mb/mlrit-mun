import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/lsLogo.png';
import Agenda from '../../resources/images/loksabha agenda.png';
import Chair from '../../resources/images/EB/1.png';
import ViceChair from '../../resources/images/EB/2.png';
import Rapporteur from '../../resources/images/EB/3.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/images/loksabhabg.jpg';

const elements = {
  title: 'Lok Sabha',
  colors: ['#ABFF78', '#213ABA'],
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

export default function LokSabha() {
  return <Committee elements={elements} />;
}
