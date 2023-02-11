import styled from "styled-components";
export const Styled = {
  CardPokemon: styled.div`
    min-width: 200px;
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
    background-color: red;
  `,
  CardPicture: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 1rem;
  `,
  CardNamePokemon:styled.div`
    display: flex;
    flex-direction: row; 
    border-top-left-radius: 12px;
    border-top-right-radius:12px ;
  `,
  CardPokemonStats:styled.div`
    width: 70%;
  `
,
  CardPokemonImage:styled.div`
    max-width:300px;
    width: auto;
    height: 300px;
  `,
  CardImage:styled.img`
    height: 100%;
    width: 100%;
    
  `
};
