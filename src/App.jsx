import './App.css'
import {Routes, Route} from 'react-router-dom'
import ZebrePuzzle from './pages/ZebrePuzzle'
import AlPacinoMovies from './pages/AlPacinoMovies'
import NewPersonalComputer from './pages/NewPersonalComputer'
import Home from './pages/Home'
function App() {

  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/alPacinoMovies" element={<AlPacinoMovies/>}/>
      <Route path="/newPersonalComputer" element={<NewPersonalComputer/>}/>
      <Route path="/zebre" element={<ZebrePuzzle/>}/>
    </Routes>

    </div>  )
}

export default App
