function Search() {
  return (
    <div className="Search" id="search_pokedex">
      <div id="buscame">
        <h1>Búscame..</h1>
      </div>

      <div id="search">
        <form action="" className="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
