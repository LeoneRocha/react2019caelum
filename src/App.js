import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabecalho from './components/Cabecalho'
import Navegacao from './components/NavBar'

function App() {
  return (
    <Fragment>
      <Cabecalho>

        <Navegacao links={["Home", "Notifications", "Menssages"]}/>
 
      </Cabecalho>


      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
