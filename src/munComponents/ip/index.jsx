import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/ipLogo.png';
import Agenda from '../../resources/images/agenda.png';
import Chair from '../../resources/images/person.png';
import ViceChair from '../../resources/images/person.png';
import Rapporteur from '../../resources/images/person.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/backgrounds/try7.jpg';

const elements = {
  title: 'International Press',
  colors: ['#91722A', '#816BCD'],
  about:
    'About the committee lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  logo: Logo,
  agenda: Agenda,
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
};

export default function IP() {
  return <Committee elements={elements} />;
}
