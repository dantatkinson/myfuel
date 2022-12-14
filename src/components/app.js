import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import FuelInput from './FuelInput';
import Home from './Home';
import Authentication from './buttons/Authentication';

import '../sass/main.scss';
import myfuel from '../assets/myfuel.png';

export default function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="wrapper">
      <header className="header">
        <img src={myfuel} className="logo" alt="MyFuel" />
      </header>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        {isAuthenticated && <Link to="fuel" className="nav-link">Fuel</Link>}
        <Authentication isAuthenticated={isAuthenticated} />
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} user={user} />}/>
        <Route path="fuel" element={<FuelInput />}/>
      </Routes>
    </div>
  );
}
