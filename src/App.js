import React from 'react';
import './App.scss';
import AppRouter from './router/AppRouter';
import Brand from './shared/assets/images/memory-logo.svg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={Brand} alt="Memory Logo" />
        </Link>
        <h2>Memory game</h2>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
