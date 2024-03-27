function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }){
    return (
        <>
            { ( pokemonIndex <= 0 ) ? "" : <button onClick={() => { setPokemonIndex(pokemonIndex-=1) }}>Precedent</button>}
            { ( pokemonIndex < pokemonList.length - 1) ? <button onClick={() => { setPokemonIndex(pokemonIndex+=1)}}>Suivant</button> : ""}
        </>
    )
}

export default NavBar