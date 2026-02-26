
// import components
import RoomCard from '../components/RoomCard';

// import styles
import '../css/RoomPage.css';

// import images
import filter_alt from '../assets/filter_alt.png';
import filter_list from '../assets/filter_list.png';

import agsm from '../assets/agsm.webp';
import ainsworth from '../assets/ainsworth.webp';
import anitab from '../assets/anitab.webp';
import biologicalScience from '../assets/biologicalScience.webp';
import biologicalScienceWest from '../assets/biologicalScienceWest.webp';
import blockhouse from '../assets/blockhouse.webp';
import businessSchool from '../assets/businessSchool.webp';
import civilBuilding from '../assets/civilBuilding.webp';
import colombo from '../assets/colombo.webp';
import cseBuilding from '../assets/cseBuilding.webp';

// import usestate
import { useState } from 'react';

// roompage
function RoomPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // rooms stored here
  const rooms = [
    {id: 1, name: 'AGSM', availability: '9 rooms available', url: agsm},
    {id: 2, name: 'Ainsworth Building', availability: '16 rooms available', url: ainsworth},
    {id: 3, name: 'Anita B Lawrence Centre', availability: '44 rooms available', url: anitab},
    {id: 4, name: 'Biological Sciences', availability: '6 rooms available', url: biologicalScience},
    {id: 5, name: 'Biological Science (West)', availability: '8 rooms available', url: biologicalScienceWest},
    {id: 6, name: 'Blockhouse', availability: '42 rooms available', url: blockhouse},
    {id: 7, name: 'Business School', availability: '18 rooms available', url: businessSchool},
    {id: 8, name: 'Civil Engineering Building', availability: '8 rooms available', url: civilBuilding},
    {id: 9, name: 'Colombo Building', availability: '5 rooms available', url: colombo},
    {id: 10, name: 'Computer Science & Eng (K17)', availability: '7 rooms available', url: cseBuilding}
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