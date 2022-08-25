import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './munComponents/home/index';
import Committees from './munComponents/committees';
import ClubLiterati from './munComponents/aboutCL';
import Team from './munComponents/ourTeam';
import UNHRC from './munComponents/unhrc';
import UNGA from './munComponents/unga';
import UNSC from './munComponents/unsc';
import LokSabha from './munComponents/loksabha';
import IP from './munComponents/ip';

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}

export default function AllRoutes() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' name='Home Route' element={<Home />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/unhrc' element={<UNHRC />}></Route>
        <Route path='/unga' element={<UNGA />}></Route>
        <Route path='/unsc' element={<UNSC />}></Route>
        <Route path='/loksabha' element={<LokSabha />}></Route>
        <Route path='/ip' element={<IP />}></Route>
        <Route path='/clubliterati' element={<ClubLiterati />}></Route>
        <Route path='/team' name='Team Route' element={<Team />}></Route>
        <Route path='/registration' element={<h3>Registration Route</h3>} />
      </Routes>
    </ScrollToTop>
  );
}
