import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  




function App() {

  // Defining prop types
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  }


  //States
  let [pokemonIndex, setPokemonIndex] = useState(0);


  // Rendering page
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      { ( pokemonIndex <= 0 ) ? "" : <button onClick={() => { setPokemonIndex(pokemonIndex-=1) }}>Precedent</button>}
      { ( pokemonIndex < pokemonList.length - 1) ? <button onClick={() => { setPokemonIndex(pokemonIndex+=1)}}>Suivant</button> : ""}
    </div>
  )
}

export default App
