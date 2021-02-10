import React from 'react';
import undrawLandingPage from '../assets/undrawLandingPage.svg';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <img
        src={undrawLandingPage}
        alt='SVG of a man looking at a graph on a computer monitor'
      />
      <div className='LandingPageContent'>
        <p>
          This is an Alpaca trading client built using React. Allows users to
          view their account, positions, place trades, and more. You will need
          an Alpaca paper trading API key to login.
        </p>
        <button>Login with API key</button>
        <a href='https://alpaca.markets/' target='_blank'>
          Get Alpaca API key
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
