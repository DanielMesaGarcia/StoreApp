// Header.jsx
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
const Header = () => {
    return (
        <header className="header">
            <Link to="/home">
                <h1>Welcome to Your App</h1>
            </Link>
        </header>
    );
};

export default Header;
