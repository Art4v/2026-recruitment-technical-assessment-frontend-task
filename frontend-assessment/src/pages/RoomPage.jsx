
// import components
import RoomCard from '../components/RoomCard';

// import styles
import '../css/RoomPage.css';

// import images
import filter_alt from '../assets/filter_alt.png';
import filter_list from '../assets/filter_list.png';

import agsm from '../assets/agsm.webp';

// import usestate
import { useState } from 'react';

// roompage
function RoomPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // rooms stored here
  const rooms = [
    {id: 1, name: 'AGSM', availability: '5 rooms available', url: agsm}
  ]
  
  // search function
  const handleSearch = () => {
    // stop searchbox from clearing after input submitted
    e.preventDefault() 
  }

  return <div className='roompage'>
    {/* form component: handles search*/}
    
    <form onSubmit={handleSearch} className='search-form'>
      <button type='submit'><img src={filter_alt} alt='filter alt' /> Filters </button>
      <button type='submit'><img src={filter_list} alt='filter list' /> Sort </button>
      <input 
        type='text' 
        placeholder='Search for a building...'
        name='search-input' 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='search-input'
      />
      <div className='date-time'>
        <input type='date'/>
        <input type='time' />
      </div>
    </form>
    
    {/* grid component: maps from const rooms onto page that match the search query*/}
    <div className='rooms-grid'>
      {rooms.map((room) => (
        room.name.toLowerCase().startsWith(searchQuery) && <RoomCard room={room} key={room.id} />
      ))}
    </div>
  </div>
}

export default RoomPage