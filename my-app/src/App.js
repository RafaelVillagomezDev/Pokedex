import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/home";
import { useState, useEffect, createContext } from "react";
import About from "./pages/about/about";
import Error from "./pages/error/error";
import axios from "axios";
import Search from "./components/search";

const { REACT_APP_BASE_URL } = process.env;

export const PokemonContext = createContext();

function App() {
  let [pokemon, setPokemon] = useState([]);

  var [pagina, setPagina] = useState(0);

  let [pokemonBuscar,setPokemonBuscar]=useState('')


  
  const HandleNext = () => {
    setPagina((pagina) => pagina + 20);
    console.log(pagina);
  };

  const HandlePrev = () => {
    setPagina((pagina) => (pagina >= 20 ? pagina - 20 : 0));
  };

  const getData=(data)=>{
      
      setPokemonBuscar(data)
      
  }

 

  useEffect(() => {
    const pokemones = [];

    let url=`${REACT_APP_BASE_URL}?offset=${pagina}&limit=20`
   
  
    axios
      .get(url)
      .then((response) => {
        const resultado = response.data.results;
       
          resultado.forEach((elemento) => {
            axios
            .get(elemento.url)
            .then((response2) => {
              pokemones.push(response2.data);
            })
            .then(() => setPokemon(pokemones))
            .catch((err) => {
              console.log(err);
            });
          
        });
        }
        
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [pagina]);

  useEffect(()=>{
    let url2=`${REACT_APP_BASE_URL}${pokemonBuscar}`;
    const pokemones = [];

    axios
      .get(url2)
      .then((response) => {
        pokemones.push(response.data)
        setPokemon(pokemones)
          
        }
        
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      });

  },[pokemonBuscar])
  
  return (
    <div id="app" className="App">
      <PokemonContext.Provider value={pokemon}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="container_home_header">
                  <Search onSubmit={getData}/>
                </div>
               
                <Home />
                <div className="pagination">
                <div className="btns">
               
                    <button  className="btn_anterior" onClick={HandlePrev}>Before</button>
                  
                    <button className="btn_siguiente" onClick={HandleNext}>Next</button>
                
                </div>
                
                </div>
              </div>
            }
          />

          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
