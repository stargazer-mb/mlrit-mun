import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/unscLogo.png';
import Agenda from '../../resources/images/unsc agenda.png';
import Chair from '../../resources/images/EB/10.png';
import ViceChair from '../../resources/images/EB/11.png';
import Rapporteur from '../../resources/images/EB/12.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/images/unscbg.jpg';

const elements = {
  title: 'United Nations Security Council',
  colors: [
    'rgba(27,102,62,0.5)',
    'rgba(27,102,62,0.75)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,1)',
    'rgba(27,102,62,0.75)',
    'rgba(27,102,62,0.5)',
  ],
  about:
    '“With great power, comes great responsibility.”The Security Council of the UN has tremendous power at its disposal, yet, needs to be wise enough to utilize it for the betterment of mankind. With its primary role being fending off terrorism or any potential threat to international peace, it would not be an exaggeration to state that this 15 member body are the peacekeepers of the world.',
  logo: Logo,
  agenda: Agenda,
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink:
    'https://drive.google.com/file/d/1ikRLs_FxZLx8cN1JPw_k9U5I7LGLruvU/view?usp=sharing',
  allocationMatrixLink:
    'https://docs.google.com/spreadsheets/d/1WUNtgeS0eEfrPKebjPcR-u7uxFDd2ikwXK4PxFVwBFE/edit?usp=sharing',
};

export default function UNSC() {
  return <Committee elements={elements} />;
}
