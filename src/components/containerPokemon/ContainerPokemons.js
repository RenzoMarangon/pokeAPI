import React from 'react'
import PokemonCard from '../pokemonCard/PokemonCard';

const ContainerPokemons = ( {pokemons} ) => {
  return (
    <ul className="pokemons-container">
        {
                pokemons.map( pokemon => {
                    return <PokemonCard className='pokemon-card' key={pokemon.id} {...pokemon} />
                })
        }
    </ul>
  )
}

export default ContainerPokemons