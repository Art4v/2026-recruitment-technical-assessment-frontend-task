import RoomPage from './pages/RoomPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className='main-content'> 
        <Routes>
          <Route path='/' element={<RoomPage />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
