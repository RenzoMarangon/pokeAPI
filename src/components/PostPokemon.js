import React, {useState} from 'react'

const PostPokemon = ( {setPokemons} ) => {

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = ( e ) => {
    setinputValue( e.target.value )
  }


  const handleFormSubmit = ( e ) => {
    e.preventDefault();

    if( inputValue.trim().length > 1 ){
      setPokemons( pokemons => [inputValue, ...pokemons] )
      setinputValue('')
    }

    //setPokemons tiene que ser un hook, donde le puedo agregar momentaneamente otro valor desde un input

  }

  return (
    <form onSubmit={ handleFormSubmit }>
      <input 
        value={ inputValue } 
        onChange={ handleInputChange } 
      />

      <input type='submit' />
    </form>
  )
}

export default PostPokemon