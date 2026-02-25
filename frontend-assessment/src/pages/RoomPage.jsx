import RoomCard from "../components/RoomCard"
import { useState } from "react"


function RoomPage() {
    const [searchQuery, setSearchQuery] = useState("")
    
    
    const rooms = [
        {id: 1, name: "AGSM", availability: "5 rooms available"},
        {id: 2, name: "Ainsworth Building", availability: "2 rooms available"},
        {id: 3, name: "Anila B Lawrence Centre", availability: "26 rooms available"},
    ]
    
    const handleSearch = () => {}

    return <div className="roompage">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a building..."name="search-input" />
            <button type="submit" className="search-button">Search</button>
        </form>
        
        
        
        <div className="rooms-grid">
            {rooms.map((room) => (
                <RoomCard room={room} key={room.id} />
            ))}
        </div>
    </div>
}

export default RoomPage