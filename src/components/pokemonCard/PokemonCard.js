import React from 'react'

const PokemonCard = ({ name, id, img, numberID, type}) => {

  return (
    <div className='pokemonCard-container'>
    {console.log(type)}

        <img 
            key={id} 
            src={img} 
            alt={name}
        />
        <p className='numberID'>N°{ numberID }</p>
        <p className='name'> { name }</p> 
        <p className='type'>{ type.map( t => {return <p>{t} </p> } ) }</p>
        
        
    </div>
  )
}

export default PokemonCard