import React from 'react';
import './Sidedrawer.css';
const sideDrawer = props => (
    <nav className='side-drawer'>
        <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='/'>ABOUT</a></li>
            <li><a href='/'>CONTACT</a></li>
            <li><a href='/'>HOUSE LEAGUES</a></li>
            <li><a href='/'>MUMBA REP</a></li>
            <li><a href='/'>SUMMER PROGRAMS</a></li>
            <li><a href='/'>TOURNAMENTS</a></li>
            <li><a href='/'>MARCH BREAK CAMPS</a></li>
        </ul>
    </nav>
);

export default sideDrawer;