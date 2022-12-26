import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home/home'
import About from './pages/about/about'
import Error from './pages/error/error'
import { getPokemon } from './api/api'

import { useState, useEffect, createContext } from 'react'
export const PokemonContext = createContext()
function App() {
  let [pokemon, setPokemon] = useState([])
  // getPokemon().then((data) => setPokemon(data))
  useEffect(() => {
    getPokemon().then((data) => setPokemon(data))
  }, [])
  return (
    <div id="app" className="App">
      <PokemonContext.Provider value={pokemon}>
        <Header />
        <Routes>
          <Route path="/" element={<Home pokemon={pokemon} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </PokemonContext.Provider>
    </div>
  )
}

export default App
