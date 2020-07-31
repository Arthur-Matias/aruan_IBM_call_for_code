import React, { useState } from 'react';
import './App.css';
import Routes from './routes';
import logo from './assets/logo.svg'
import BackgroundPage from './pages/BackgroundPage'

function App() {

  const [show, setShow] = useState(false);

  function handleClick(){
    setShow(!show);
  }
  return (
    <>
      <div className='app-container'>
        <BackgroundPage />
        <div style={{ visibility: (show ? 'visible' : 'hidden') }} className="main-content">
            <Routes />
        </div>
        <div className="buttonWrapper" onClick={handleClick}>
          <img src={ logo } alt="logo"/>
        </div>        
      </div>

    </>
  );
}

export default App;
