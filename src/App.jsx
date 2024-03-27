import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard";
import PropTypes, { func } from "prop-types";
import NavBar from "./components/NavBar";


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



const getPokemon = (pokemon, setPokemonIndex) => {
  let ElementId = pokemon.target.id
  for(let i = 0; i<pokemonList.length; i++){
    if(pokemonList[i].name == ElementId){
      setPokemonIndex(i)
    }
  }
}

function App() {

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );

  // Defining prop types
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  }


  //States
  let [pokemonIndex, setPokemonIndex] = useState(0);


  // Miscellanous
  if(pokemonList[pokemonIndex].name == "pikachu"){
    alert("pika pikachu !!!")
  }



  // Rendering page
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} getPokemon={getPokemon}/>
    </div>
  )
}

export default App
