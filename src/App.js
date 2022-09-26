import { useEffect, useState } from 'react';
import './App.css';
import ContainerPokemons from './components/ContainerPokemons';
import Header from './components/Header';
import PostPokemon from './components/PostPokemon';
import { getPokemons } from './helpers/pokemonsAPI';

function App() {

  const [ pokemons, setPokemons ] = useState('');

  const obtainPokemons = async( ) => {
    const pokemons = await getPokemons()
    
    //Obtengo la parte que me importa del objeto
    const poke = pokemons.map( e => {
        const pokemon = {
          name:e.name,
          id:e.id,
          numberID: e.numberID,
          img:e.img 
        }

        return pokemon;
    })

    setPokemons(poke)
  }


  useEffect( () =>{
    obtainPokemons()
  },[])


  
  return (
    <div className="App">
      <Header name = "Wachinx"/>
      <ContainerPokemons  pokemons = { pokemons } />
      <PostPokemon setPokemons = { setPokemons } />
    </div>
  );
}

export default App;
