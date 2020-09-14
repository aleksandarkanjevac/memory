import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

function Home() {
  return (
    <div className="home-page--wrapper page-wrapper">
      <div className="box">
        <button>
          <Link to="/log">ENTER GAME</Link>
        </button>
        <button>
          <Link to="/list">LIST</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
