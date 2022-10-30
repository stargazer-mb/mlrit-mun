import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/ungaLogo.png';
import Agenda from '../../resources/images/unga agenda.png';
import Chair from '../../resources/images/EB/4.png';
import ViceChair from '../../resources/images/EB/5.png';
import Rapporteur from '../../resources/images/EB/6.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/images/ungabg.jpg';

const elements = {
  title: 'United Nations General Assembly',
  colors: [
    'rgba(254,129,22,0.5)',
    'rgba(254,129,22,0.75)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,1)',
    'rgba(254,129,22,0.75)',
    'rgba(254,129,22,0.5)',
  ],
  about:
    'The UN General Assembly (UNGA) is the main policy-making organ of the Organization. Comprising all Member States, it provides a unique forum for multilateral discussion of the full spectrum of international issues covered by the Charter of the United Nations. Each of the 193 Member States of the United Nations has an equal vote. Be a part of this assembly and help provide better solutions to the matters of its jurisdiction.',
  logo: Logo,
  agenda: Agenda,
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink:
    'https://drive.google.com/file/d/1KYcSKpIdArRScGec478UsFs2akNJlp3i/view?usp=sharing',
  allocationMatrixLink:
    'https://docs.google.com/spreadsheets/d/1WUNtgeS0eEfrPKebjPcR-u7uxFDd2ikwXK4PxFVwBFE/edit?usp=sharing',
};

export default function UNGA() {
  return <Committee elements={elements} />;
}
