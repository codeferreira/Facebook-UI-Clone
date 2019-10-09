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
        <p className="post">Pessoal, alguém sabe se a Rocketseat está contratando?</p>
        <hr/>
        <div className="commentContainer">
          <div className="user">  
            <img className="ownerAvatar" src="https://avatars2.githubusercontent.com/u/25153766?s=460&v=4" alt="avatar"/>
          </div>
          <div className="comment">
            <p className="text">
              <strong>José Carlos Ferreira</strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis risus lectus, vel cursus sem egestas sit amet. Donec eu mi tristique, placerat lacus non, sollicitudin lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
