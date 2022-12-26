import { PokemonContext } from '../App'
import { useContext } from 'react'

function Card() {
  const data = useContext(PokemonContext)
  return data.results.map((data2) => {
    return (
      <div id="container_card">
        <div className="card_pokemon">
          <div className="card_picture">
            <div className="card_name_pokemon">
              <div>
                <h1>{}</h1>
                <sub>Hierba</sub>

                <ul>
                  <li>
                    Peso<span> 82kg </span>
                  </li>
                  <li>
                    Altura <span> 2M </span>
                  </li>
                  <li>
                    Habilidades <span> Cañon</span>
                  </li>
                </ul>
              </div>
              <div>
                <h1>imagen</h1>
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
      </div>
    )
  })
}

export default Card
