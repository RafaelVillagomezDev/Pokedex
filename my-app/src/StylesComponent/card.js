import styled from "styled-components";
import { devices } from "../StylesComponent/mixin";

const color={
   fire:'redd',
   water:'blue'

}
export const Styled = {
  CardPokemon: styled.div`
    min-width: 200px;
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    background-color:${props=>props.color==='fire'?'pink':'red'}
    
  `,
  CardPicture: styled.div`
    display: flex;
    flex-direction:column ;
    margin-bottom: 1rem;
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
    
  `
};
