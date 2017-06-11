import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Adrian Melo</h1>
        <h2> Welcome to my web project</h2>

        <img src="http://reactnl.org/img/reactnl-logo.png" />
      </div>
    );
  }
}

export default Home;
