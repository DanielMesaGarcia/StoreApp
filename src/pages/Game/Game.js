import React from 'react';
import './Game.css';
import Header from '../../components/header';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
const Game = () => {
    return (
        <div className='Game'>
            <Header />
            <div className='nameSearch'>
                <Input />
            </div>
            <b>GAME</b>
        </div>
    );
};

export default Game;
