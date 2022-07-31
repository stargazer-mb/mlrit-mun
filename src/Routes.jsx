import { Routes, Route, Link } from 'react-router-dom';
import Home from './munComponents/home/index';
import Committees from './munComponents/committees';
import ClubLiterati from './munComponents/aboutCL';
import Team from './munComponents/ourTeam';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' name='Home Route' element={<Home />} />
      <Route path='/committees' element={<Committees />} />
      <Route path='/unhrc' element={<h3>UNHRC</h3>}></Route>
      <Route path='/unga' element={<h3>UNGA</h3>}></Route>
      <Route path='/unsc' element={<h3>UNSC</h3>}></Route>
      <Route path='/aippm' element={<h3>AIPPM</h3>}></Route>
      <Route path='/ip' element={<h3>IP</h3>}></Route>
      <Route path='/clubliterati' element={<ClubLiterati />}></Route>
      <Route path='/team' name='Team Route' element={<Team />}></Route>
    </Routes>
  );
}
