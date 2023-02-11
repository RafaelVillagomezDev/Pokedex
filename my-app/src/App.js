import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home/home'
import { useState, useEffect, createContext } from 'react'
import About from './pages/about/about'
import Error from './pages/error/error'
import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env

export const PokemonContext = createContext()

function App() {
  
  let [pokemon, setPokemon] = useState([])
  // getPokemon().then((data) => setPokemon(data))
  
  useEffect(() => {
    const pokemones=[]
       axios
        .get(REACT_APP_BASE_URL)
        .then(response =>{
          const resultado=response.data.results
          resultado.forEach((elemento)=>{
            axios.get(elemento.url).then(response2=>{
                pokemones.push(response2.data)
              
            }).then(()=>setPokemon(pokemones)).catch(err=>{
              console.log(err)
            })
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
      
     
    
  }, [])
  return (
    <div id="app" className="App">
      <PokemonContext.Provider value={pokemon}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </PokemonContext.Provider>
    </div>
  )
}

export default App
