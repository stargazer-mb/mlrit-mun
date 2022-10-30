import React from 'react';
import Feature from './feature';

import conferencingBg from '../../resources/images/features/conferencing.jpg';
import networkingBg from '../../resources/images/features/networking.jpg';
import DJnightBG from '../../resources/backgrounds/bg3.jpg';
import SportsBG from '../../resources/images/features/sports.jpg';
import liveMusicBG from '../../resources/images/features/live music.jpg';
import bonfireBG from '../../resources/images/features/campfire.jpg';
import PrizeBG from '../../resources/images/features/prize.jpg';

export default function Activities() {
  return (
    <div>
      <Feature bg={conferencingBg} txt='Conferencing' />
      <Feature bg={networkingBg} txt='Networking' />
      <Feature bg={DJnightBG} txt='DJ Night' />
      <Feature bg={SportsBG} txt='Sportzathon' />
      <Feature bg={bonfireBG} txt='Campfire Night' />
      <Feature bg={PrizeBG} txt='Large Prize Pool' />
    </div>
  );
}
