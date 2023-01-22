import { PokemonContext } from "../App";
import { useContext } from "react";
function Card() {
  const results = useContext(PokemonContext);

  return (
    <div id="container_card">
      {results.map((pokemon) => {
        return (
          <div className="card_pokemon" key={pokemon.id}>
            <div className="card_picture">
              <div className="card_name_pokemon">
                <div className="card_data_pokemon" >
                  <h1 id="title_pokemon">{pokemon.name.toUpperCase()}</h1>
                  <sub>Type:{pokemon.types[0].type.name}</sub>

                  <ul className="stats_data">
                    <li>
                      Weight<span> {pokemon.weight} Kg</span>
                    </li>
                    <li>
                      Height <span> {pokemon.height} mt </span>
                    </li>
                    <li>
                      <h1>Habilities</h1>
                      {pokemon.abilities.map((hability,idx) => {
                        return (
                          <ul className="data_habilities" key={idx}>
                            <li>{hability.ability.name}</li>
                          </ul>
                        );
                      })}
                    </li>
                  </ul>
                </div>
                <div className="card_image">
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                  />
                </div>
              </div>
              <div className="card_stats_pokemon">
                <div className="stats_label">
                  <h1>Stats</h1>
                </div>
                <div className="stats_pokemon">
                  <h1>Power</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
