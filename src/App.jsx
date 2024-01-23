import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ZebrePuzzle from './pages/ZebrePuzzle'
function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/zebre" element={<ZebrePuzzle/>}/>

    </Routes>

    </div>  )
}

export default App
