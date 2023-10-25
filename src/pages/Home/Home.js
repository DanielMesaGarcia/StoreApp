import React from 'react';
import './Home.css';
import Header from '../../components/header';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <div className='nameSearch'>
        <Input/>
      </div>

      <div className='selector'>
        <div className='topTwo'>
          <div className='left'>
            <Link to="/library">
              <img src='img\CounterStrike.webp' alt='counter' className='tops'></img>
            </Link>
          </div>
          <div className='right'>
            <Link to="/store">
              <img src='img\CounterStrike.webp' alt='counter' className='tops'></img>
            </Link>
          </div>
        </div>
        <div className='bottomOne'>
          <Link to="/game">
            <img src='img\CounterStrike.webp' alt='counter' id="bot"></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
