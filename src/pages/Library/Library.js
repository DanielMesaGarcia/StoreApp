import React from 'react';
import './Library.css';
import Header from '../../components/header';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
const Library = () => {
    return (
        <div class='Library'>
            <Header />
            <div class='leftSection'>
                <div class='nameSearch'>
                    <Input />
                </div>
                <ul class="gameList">
                    <li>Juego 1</li>
                    <li>Juego 2</li>
                    <li>Juego 3</li>
                </ul>
            </div>
            <div class='rightSection'>
                <img src='img\CounterStrike.webp' alt='counter' />
                <img src='img\CounterStrike.webp' alt='counter' />
                <img src='img\CounterStrike.webp' alt='counter' />
                <img src='img\CounterStrike.webp' alt='counter' />
            </div>
        </div>
    );
};

export default Library;
