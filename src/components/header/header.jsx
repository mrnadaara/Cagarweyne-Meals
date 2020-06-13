import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import Logo from '../../assets/images/logo.png';

const Header = () => (
  <header>
    <Link to="/">
      <img src={Logo} alt="cagarweynemeals" />
    </Link>
  </header>
);

export default Header;
