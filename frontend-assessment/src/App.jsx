import './App.css'
import RoomCard from './components/RoomCard'

function App() {
  return (
    <>
      <RoomCard room={{name: "AGSM", availability: "9 rooms available"}}/>
      <RoomCard room={{name: "Ainsworth Building", availability: "17 rooms available"}}/>
      <RoomCard room={{name: "Anita B Lawrence Centre", availability: "44 rooms available"}}/>
    </>
  )
}

export default App
