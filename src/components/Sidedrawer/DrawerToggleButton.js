import React from 'react';
import './DrawerToggleButton.css';
const drawerToggleButton = props => (
    <button className='toggle-btn' onClick={props.click}>
        <div className='toggle-btn-line'></div>
        <div className='toggle-btn-line'></div>
        <div className='toggle-btn-line'></div>
    </button>
)

export default drawerToggleButton;