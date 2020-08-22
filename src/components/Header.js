import React from 'react';
import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="BCH DevCon" /></span>
        <h1>September 4 - 6</h1>
    </header>
)

export default Header;
