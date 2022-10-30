import React from 'react';

import Committee from '../committee';

import Logo from '../../resources/images/unhrcLogo.png';
import Agenda from '../../resources/images/unhrc agenda.png';
import Chair from '../../resources/images/EB/7.png';
import ViceChair from '../../resources/images/EB/8.png';
import Rapporteur from '../../resources/images/EB/9.png';
import LandingBG from '../../resources/images/homeBG.png';
import AgendaBG from '../../resources/images/unhrcbg.jpg';

const elements = {
  title: 'United Nations Human Rights Council',
  colors: [
    'rgba(0,0,139,0.5)',
    'rgba(0,0,139,0.75)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,1)',
    'rgba(0,0,139,0.75)',
    'rgba(0,0,139,0.5)',
  ],
  about:
    'The objective of this 47 membered council is to investigate allegations of human rights abuse in member states of the United Nations and ensure that the following human rights issues are addressed and upheld to the maximum extent. Freedom of assembly, Freedom of expression and free speech, Freedom of religion, Protection of the rights of women, LGBTQ community, racial and ethnic minorities. MLRIT-MUN opens its doors to people who believe in the rights of every individual. Join the UNHRC and uphold these rights.',
  logo: Logo,
  agenda: Agenda,
  chair: Chair,
  vicechair: ViceChair,
  rapporteur: Rapporteur,
  landingBG: LandingBG,
  agendaBG: AgendaBG,
  bgGuideLink:
    'https://drive.google.com/file/d/1d7f7L9kX3xAQb1kmkJQ20H-KrlQlEcsd/view?usp=sharing',
  allocationMatrixLink:
    'https://docs.google.com/spreadsheets/d/1WUNtgeS0eEfrPKebjPcR-u7uxFDd2ikwXK4PxFVwBFE/edit?usp=sharing',
};

export default function UNHRC() {
  return <Committee elements={elements} />;
}
