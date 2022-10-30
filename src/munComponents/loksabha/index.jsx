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
  colors: [
    'rgba(180,0,0,0.5)',
    'rgba(180,0,0,0.75)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,1)',
    'rgba(180,0,0,0.75)',
    'rgba(180,0,0,0.5)',
  ],
  about:
    'Beaming with politics, this is the lower house of the Indian parliament. A governing body of 543 members (MP), who pass bills regarding various subjects included in the Union and concurrent list. Represent a constituency, act as the delegate to a leader, question the work of the opposition, raise slogans; for this is the greatest place to learn “How to run a country 101”',
  logo: Logo,
  agenda: Agenda,
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink:
    'https://drive.google.com/file/d/15CGpoyZ9x5fJ7MVUbK-ZPM7HWCTbW0a6/view?usp=sharing',
  allocationMatrixLink:
    'https://docs.google.com/spreadsheets/d/1WUNtgeS0eEfrPKebjPcR-u7uxFDd2ikwXK4PxFVwBFE/edit?usp=sharing',
};

export default function LokSabha() {
  return <Committee elements={elements} />;
}
