import React from 'react';

import logo from './assets/logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo"/>
        <a href="/" className="perfil">Meu Perfil</a>
      </header>

      <div className="card">
        <div className="user">  
          <img className="ownerAvatar" src="https://avatars2.githubusercontent.com/u/25153766?s=460&v=4" alt="avatar"/>
          <p className="info">
            <strong>José Carlos Ferreira</strong>
            <span>04 Jun 2019</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
