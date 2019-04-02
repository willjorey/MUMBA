import React from 'react';
import './navbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';

const navbar = props => (
    <header className='navigation-container'>
        <nav className='navigation'>
            <div className='navigation-toggle-btn'> 
            <DrawerToggleButton click={props.drawerClickHander}/>
            </div>
            <div className='navigation-logo'>MUMBA</div>
            <div className='spacer'/>
            <div className='navigation-items'>
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
            </div>
        </nav>
    </header>
)

export default navbar;