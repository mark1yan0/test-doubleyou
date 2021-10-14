import React from 'react';
//react router
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-links-container'>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>Chi siamo</NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>Contatti</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
