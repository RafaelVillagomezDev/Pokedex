import { useState} from "react";
function Search(props) {

  let [pokemonBuscar, setPokemonBuscar] = useState('');
 
  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(pokemonBuscar)
  }
  return (
    <div className="Search" id="search_pokedex">
      <div id="buscame">
        <h1>Búscame..</h1>
      </div>
    
      <div id="search">
        <form action="" className="search-bar" onSubmit={handleSubmit} >
          <input type="search" name="search" onChange={e => setPokemonBuscar(e.target.value)} value={pokemonBuscar} pattern=".*\S.*"  required />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
