import './App.css';
import ContainerPokemons from './components/ContainerPokemons';
import Header from './components/Header';
import { login } from './helpers/pokemonsAPI';
import { useGetPokemons } from './hooks/pokemons';

function App() {

  const { loading, data:pokemons } = useGetPokemons();

  return (
    <div className="App">
      <Header name = "Wachinx"/>

      {
        loading 
                ? 'cargando...'
                : <ContainerPokemons  pokemons = { pokemons } />
      }

      <button onClick={login}>Click</button>
    </div>
  );
}

export default App;
