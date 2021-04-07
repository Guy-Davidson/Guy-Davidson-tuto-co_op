import React from 'react'
import './NavBar.scss'

const MODE_HOME = 0;
const MODE_FAVORITES = 1;

const NavBar = (props) => {    
    return (
        <div className='nav-bar'>            
            <span className='nav-button'
            onClick={() => props.renderByMode(MODE_HOME)}
            id="homeTab">
                Home 
            </span>
            <span className='nav-button'
            onClick={() => props.renderByMode(MODE_FAVORITES)}>
                Favorites
            </span>
        </div>
    )

}

export default NavBar;