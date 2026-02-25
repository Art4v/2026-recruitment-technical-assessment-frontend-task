import RoomCard from "../components/RoomCard"
import { useState } from "react"


function RoomPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // stores information for room cards
  const rooms = [
    {id: 1, name: "AGSM", availability: "5 rooms available"},
    {id: 2, name: "Ainsworth Building", availability: "2 rooms available"},
    {id: 3, name: "Anila B Lawrence Centre", availability: "26 rooms available"},
  ]
  
  // search function
  const handleSearch = () => {
    // stop searchbox from clearing after input submitted
    e.preventDefault() 
    
    alert(searchQuery)
  }

  return <div className="roompage">
    {/* form component: handles search*/}
    
    <form onSubmit={handleSearch} className="search-form">
      <input 
        type="text" 
        placeholder="Search for a building..."
        name="search-input" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
    
    {/* grid component: maps from const rooms onto page that match the search query*/}
    <div className="rooms-grid">
      {rooms.map((room) => (
        room.name.toLowerCase().startsWith(searchQuery) && <RoomCard room={room} key={room.id} />
      ))}
    </div>
  </div>
}

export default RoomPage