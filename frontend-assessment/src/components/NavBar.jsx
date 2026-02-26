// import link 
import { Link } from 'react-router-dom';

// import css
import '../css/NavBar.css';

// imports for images
import freeRoomsLogo from '../assets/freeRoomsLogo.png';
import freeRoomsDoorClosed from '../assets/freeroomsDoorClosed.png'

import search from '../assets/search.png';
import grid_view from '../assets/grid_view.png';
import free_room from '../assets/free_room.png';
import map from '../assets/map.png';
import dark_mode from '../assets/dark_mode.png';

// import usestate
import { useState } from 'react';

// navbar
function NavBar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return <nav className='navbar'>
    <div className='navbar-brand'>
      {/* handle click state change logic*/}
      <Link to='/'>
        <img 
          src={clicked ? freeRoomsDoorClosed: freeRoomsLogo} 
          alt='freeRoomsLogo'
          onClick={handleClick}
        />
      Freerooms
      </Link>
    </div>
    <div className='navbar-links'>
      <Link to='/' className='nav-link'><img src={search} alt='search' /></Link>
      <Link to='/' className='nav-link'><img src={grid_view} alt='search' /></Link>
      <Link to='/' className='nav-link'><img src={free_room} alt='search' /></Link>
      <Link to='/' className='nav-link'><img src={map} alt='search' /></Link>
      <Link to='/' className='nav-link'><img src={dark_mode} alt='search' /></Link> 
    </div>
  </nav>
}

export default NavBar