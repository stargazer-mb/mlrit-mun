import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/ungaLogo.png';
import Agenda from '../../resources/images/agenda.png';
import Chair from '../../resources/images/person.png';
import ViceChair from '../../resources/images/person.png';
import Rapporteur from '../../resources/images/person.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/images/ungabg.jpg';

const elements = {
  title: 'United Nations General Assembly',
  colors: ['#EFF342', '#ABAE14'],
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

export default function UNGA() {
  return <Committee elements={elements} />;
}
