import React from 'react';
import './Store.css';
import Header from '../../components/header';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
const Store = () => {
  return (
    <div className='StoreNew'>
      <Header />
      <div className='nameSearchNew'>
        <Input/>
      </div>

      <div className='selectorNew'>
        <div className='topTwoNew'>
          <div className='leftNew'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='topsNew'></img>
            </Link>
          </div>
          <div className='rightNew'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='topsNew'></img>
            </Link>
          </div>
        </div>
        <div className='bottomTwoNew'>
          <div className='leftNew'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='bottomsNew'></img>
            </Link>
          </div>
          <div className='rightNew'>
            <Link to="/game">
              <img src='img\CounterStrike.webp' alt='counter' className='bottomsNew'></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
