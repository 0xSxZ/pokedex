function NavBar({ pokemonIndex, setPokemonIndex, pokemonList, getPokemon }){
    /*
    return (
        <>
            { ( pokemonIndex <= 0 ) ? "" : <button onClick={() => { setPokemonIndex(pokemonIndex-=1) }}>Precedent</button>}
            { ( pokemonIndex < pokemonList.length - 1) ? <button onClick={() => { setPokemonIndex(pokemonIndex+=1)}}>Suivant</button> : ""}
        </>
    )
    */

    return ( 
        <>
            {
                pokemonList.map((pokemon) => (
                    <button onClick={(e) => {getPokemon(e, setPokemonIndex)}} id={pokemon.name}>{pokemon.name}</button>
                ))
            }
        </>
    )
}

export default NavBar