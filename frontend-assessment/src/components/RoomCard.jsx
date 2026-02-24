function RoomCard({room}) {
    
    function onCardClicked() {
        alert("clicked")
    }

    return <div className="room-card">
        <div className="room-photo">
            <img src={room.url} alt={room.name}/>
            <div className="room-overlay">
                <button className="favorite-btn" onClick={onCardClicked}>
                    ★
                </button>
            </div>
        </div>
        <div className="room-info">
            <h3>{room.name}</h3>
            <p>{room.availability}</p>
        </div>
    </div>
}

export default RoomCard