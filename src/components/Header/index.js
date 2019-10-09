import React from 'react';

import logo from '../../assets/logo.svg';

import './style.css'

function Header() {
  return(
    <header>
      <img src={logo} alt="logo"/>
      <a href="/" className="perfil">Meu Perfil</a>
    </header>
  )
}

export default Header;
