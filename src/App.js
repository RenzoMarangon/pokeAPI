import './css/app.css'
import ContainerPokemons from './components/containerPokemon/ContainerPokemons';
import Header from './components/header/Header';
import { login,deletePokemon,getPokemons, getPokemon} from './helpers/pokemonsAPI';
import { useGetPokemons } from './hooks/pokemons';
import UseCustomHooks from './components/UseCustomHooks';


function App() {

  
  let { loading, data:pokemons } = useGetPokemons();

  return (
    <div className="App">

      <Header />
      {
        loading 
                ? 'cargando...'
                : <ContainerPokemons  pokemons = { pokemons } />
      }

      <button onClick={login}>Click</button>


      <UseCustomHooks />
    </div>
  );
}

export default App;
