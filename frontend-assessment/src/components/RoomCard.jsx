import '../css/Roomcard.css';

function RoomCard({room}) {
  
  function onCardClicked() {
    alert('clicked')
  }

  return <div className="room-card">
    <div className="room-photo">
    	<p>{room.availability}</p>
      <img src={room.url} alt={room.name}/>
    </div>
    <div className="room-info">
      <h3 className="name">{room.name}</h3>
      <h3 className="rating">⭐</h3>
    </div>
  </div>
}

export default RoomCard