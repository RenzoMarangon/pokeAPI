import React from 'react'

const PokemonCard = ({ name, id, img, numberID}) => {

  return (
    <div>
        <p>ID: { numberID }</p>
        <img 
            key={id} 
            src={img} 
            alt={name}
        />
        <p>Name: { name }</p> 
        
    </div>
  )
}

export default PokemonCard