import React from 'react';
import Feature from './feature';

import conferencingBg from '../../resources/images/sportzathon.jpg';
import networkingBg from '../../resources/images/networking.jpg';
import DJnightBG from '../../resources/backgrounds/bg3.jpg';
import SportsBG from '../../resources/images/sportzathon.jpg';
import liveMusicBG from '../../resources/images/live music.jpg';
import bonfireBG from '../../resources/images/campfire.jpg';

export default function Activities() {
  return (
    <div>
      <Feature bg={conferencingBg} txt='Conferencing' />
      <Feature bg={networkingBg} txt='Networking' />
      <Feature bg={DJnightBG} txt='DJ Night' />
      <Feature bg={SportsBG} txt='Sportzathon' />
      <Feature bg={liveMusicBG} txt='Live Music' />
      <Feature bg={bonfireBG} txt='Campfire Night' />
      <Feature bg={DJnightBG} txt='Large Prize Pool' />
    </div>
  );
}
