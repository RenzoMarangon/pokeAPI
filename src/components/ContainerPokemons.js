import React from 'react'
import PokemonCard from './PokemonCard';

const ContainerPokemons = ( {pokemons} ) => {
  return (
    <ul className="pokemons-container">
        {
             pokemons &&
                pokemons.map( pokemon => {
                    return <PokemonCard key={pokemon.id} {...pokemon} />
                })
        }
    </ul>
  )
}

export default ContainerPokemons