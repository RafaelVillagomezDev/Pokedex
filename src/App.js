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
  let [url,setUrl]=useState(REACT_APP_BASE_URL);
  let [paginaNext, setPaginaNext] = useState("");
  let [paginapPrev, setPaginaPrev] = useState("");
  let [pokemonBuscar,setPokemonBuscar]=useState('')


  
  const HandleNext = () => {
    
    console.log("efeccto2 ")
     setUrl(paginaNext)
  };

  const HandlePrev = () => {
    console.log("efeccto3 ")
    setUrl(paginapPrev)
  };

  const HandleRefresh=()=>{
    window.location.reload(false);
  }

  const getData=(data)=>{
       let datos=data.toLocaleLowerCase()
       setPokemonBuscar(datos)
      

      
  }

 

  useEffect(()=>{
    
    let urlBuscar=`${REACT_APP_BASE_URL}${pokemonBuscar}`;
    const pokemones=[]
    console.log(pokemonBuscar)
    axios.get(urlBuscar).then((response)=>{
      
       if(response.data.name.toLocaleLowerCase()===pokemonBuscar){
        
          pokemones.push(response.data)  
          setPokemon(pokemones)
       }
    }
      ).catch(function (error) {
        // handle error
        console.log(error);
      });

  },[pokemonBuscar])
 

  useEffect(() => {
    


    const pokemones = [];
    axios
      .get(url)
      .then((response) => {
        const resultado = response.data.results;
        if(typeof response.data.next!='undefined' ?setPaginaNext(response.data.next):setPaginaNext(REACT_APP_BASE_URL));
        
        if(typeof response.data.previos!='undefined' ?setPaginaPrev(response.data.previous):setPaginaPrev(REACT_APP_BASE_URL));

         let promisesArray =resultado.map(result=>{
          
           return axios.get(result.url).then(responseData=>
            
              
              pokemones.push(responseData.data)
            

           )
         })
        
         return Promise.all(promisesArray)
      }).then(()=>
        {
          pokemones.sort(((a, b) => a.id - b.id));
          
          setPokemon(pokemones)
          
        }
        
        
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [url]);

 

  
  return (
    <div id="app" className="App">

        <Header />
         
        <PokemonContext.Provider value={pokemon}>
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
                    <button className="btn_refresh" onClick={HandleRefresh}>Refresh</button>
                    <button className="btn_siguiente" onClick={HandleNext}>Next</button> 
                    
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
