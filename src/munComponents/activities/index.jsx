import React from 'react';
import Activity from './activity';

import conferencingBg from '../../resources/backgrounds/bg3.jpg';
import networkingBg from '../../resources/backgrounds/bg1.jpg';
import DJnightBG from '../../resources/backgrounds/bg2.jpg';
import SportsBG from '../../resources/backgrounds/bg3.jpg';
import liveMusicBG from '../../resources/backgrounds/bg4.jpg';
import bonfireBG from '../../resources/backgrounds/bg5.jpg';

export default function Activities() {
  return (
    <div>
      <Activity bg={conferencingBg} txt='Conferencing' />
      <Activity bg={networkingBg} txt='Networking' />
      <Activity bg={DJnightBG} txt='DJ Night' />
      <Activity bg={SportsBG} txt='Sportzathon' />
      <Activity bg={liveMusicBG} txt='Live Music' />
      <Activity bg={bonfireBG} txt='Bonfire' />
    </div>
  );
}
