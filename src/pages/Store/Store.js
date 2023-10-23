import React from 'react';
import './Store.css';
import Header from '../../components/header';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
const Store = () => {
  return (
    <div className='Store'>
      <Header />
      <div className='nameSearch'>
        <Input/>
      </div>

      <div className='selector'>
        <div className='topTwo'>
          <div className='left'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='tops'></img>
            </Link>
          </div>
          <div className='right'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='tops'></img>
            </Link>
          </div>
        </div>
        <div className='bottomTwo'>
          <div className='left'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='bottoms'></img>
            </Link>
          </div>
          <div className='right'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='bottoms'></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
