import styled from "styled-components";
import { devices } from "../StylesComponent/mixin";


export const Styled = {
  CardPokemon: styled.div`
    min-width: 200px;
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    background-color:${props=>{
      let color=props.color
      switch(color){
        case 'fire':
          return color='#F22713'
          
          case 'water':
            return color='#428AE7'
      
          case 'electric':
            return color='yellow'
         
          case 'bug':
            return color='grey'
      
          case 'grass':
         return color='#8AD10D'
         
          case 'poison':
            return color='#207E0D'
       
          case 'fairy':
            return  color='pink'
         
          case 'normal':
            return  color='#C7CBC6';
          case 'ground':
            return color='#E0900D ';
          case 'psychic':
            return color='#FF7F50';
          case 'ghost':
            return color='#E6E6FA'
          case 'fighting':
            return color='Turquoise'
          case 'rock':
            return color='#CD853F';
          case 'icc':
            return color='#9370DB';
        default:
          return   color='white';
        

      }
    
    }}
    
  `,
  CardPicture: styled.div`
    display: flex;
    flex-direction:column ;
    margin-bottom: 1rem;
    color: #E1F24D;
     font-weight: bold;
    -webkit-text-stroke: 2px black;
    font-family: 'PokemonSolid' !important;
    h1{
      text-align: left;
      line-height: 2rem;
      font-size: 18px;
      text-align: center;
  
      @media ${devices.laptop} {
        font-size: 32px;
      
      }
      
     }
    
    @media ${devices.laptop} {
         
         flex-direction: row;
      }
    
  `,
  CardNamePokemon:styled.div`
    display: flex;
    flex-direction: row; 
    border-top-left-radius: 12px;
    border-top-right-radius:12px ;
  `,
  CardPokemonStats:styled.div`
    width: 100%;
    padding: 1rem;
    @media ${devices.laptop} {
      width: 70%;
      padding: 0.50rem;
    }
  `
,
  CardPokemonImage:styled.div`
    min-width:100px;
   display: flex;
   justify-content: center;
      @media ${devices.laptop} {
      width: 300px;
      height: 300px;
      }
    
  `,
  CardImage:styled.img`
      height: 100%;
      width: 30%;

    @media ${devices.laptop} {
      height: 100%;
      width: 100%;
      }
    
  `,
  CardStatsData:styled.ul`
       font-size: 18px;
       margin-left: 2rem;
        padding-top: 20px;
        line-height: 1rem;
        li{
            padding-top: 6px;
        }

        @media ${devices.laptop} {
          font-size: 20px;
      }

  `
};
