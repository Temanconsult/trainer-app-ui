import React from 'react';
import logo from '../../assets/icons/logo.svg';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome To Trainer App UI</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>We are getting started soon!!!</p>
      </header>
    </div>
  );
};

export default LandingPage;
