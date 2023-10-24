// Header.jsx
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <Link to="/home">
                <div className='imgHeader'>
            <img className="immg" src='img\CounterStrike.webp' alt='counter' />
            </div>
            </Link>
        </header>
    );
};

export default Header;
