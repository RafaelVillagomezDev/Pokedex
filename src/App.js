import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/home";
import { useState, useEffect, createContext } from "react";
import Error from "./pages/error/error";
import axios from "axios";
import Search from "./components/search";

const { REACT_APP_BASE_URL } = process.env;

export const PokemonContext = createContext();

function App() {
  let [pokemon, setPokemon] = useState([]);

  // var [pagina, setPagina] = useState(0);

  // let [pokemonBuscar,setPokemonBuscar]=useState('')


  
  // const HandleNext = () => {
  //   console.log(pagina);
  //   setPagina((pagina) => pagina + 20);
    
  // };

  // const HandlePrev = () => {
  //   setPagina((pagina) => (pagina - 20));
  // };

  // const HandleRefresh=()=>{
  //   window.location.reload(false);
  // }

  // const getData=(data)=>{
  //      let datos=data.toLocaleLowerCase()
  //     setPokemonBuscar(datos)
      
  // }

 

  useEffect(() => {
    

    // let url=`${REACT_APP_BASE_URL}?offset=${pagina}&limit=20`
    const pokemones = [];
    axios
      .get(REACT_APP_BASE_URL)
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
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  
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
                  <Search />
                </div>
               
                <Home />
                <div className="pagination">
                <div className="btns">
{/*                
                    <button  className="btn_anterior" onClick={HandlePrev}>Before</button>
                    <button className="btn_refresh" onClick={HandleRefresh}>Refresh</button>
                    <button className="btn_siguiente" onClick={HandleNext}>Next</button> */}
                    
                </div>
                
                </div>
                <div className="footer">
                  <h1>Con Amor Yandry</h1>
                </div>
              </div>
          
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
